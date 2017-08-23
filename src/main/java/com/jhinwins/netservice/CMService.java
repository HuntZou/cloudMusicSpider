package com.jhinwins.netservice;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jhinwins.proxyip.IpProvider;
import com.jhinwins.utils.HttpClientUtils;
import com.jhinwins.utils.StringUtiles;
import org.apache.log4j.Logger;

import java.io.UnsupportedEncodingException;
import java.util.Iterator;

/**
 * Created by Jhinwins on 2017/8/23  12:24.
 * Desc:
 */
public class CMService {
    private Logger logger = Logger.getLogger(CMService.class);

    private String baseMethod(String url, String encSecKey, String params) {
        String musicInfo = null;
        for (int i = 0; i < 3; i++) {
            try {
                musicInfo = HttpClientUtils.sendPost2CMServers(url, encSecKey, params);
            } catch (UnsupportedEncodingException e) {
                logger.info("搜索音乐时发生不支持编码异常 " + e.getMessage());
                return null;
            }
            if (musicInfo != null) break;
        }
        return musicInfo;
    }

    public String searchMusicService(String encSecKey, String params) {
        String url = "http://music.163.com/weapi/search/suggest/web?csrf_token=";
        String musicInfo = baseMethod(url, encSecKey, params);
        return musicInfo;
    }

    public String getSongInfoService(String encSecKey, String params) {
        String url = "https://music.163.com/weapi/song/enhance/player/url?csrf_token=";
        String songInfo = baseMethod(url, encSecKey, params);
        return songInfo;
    }

    public String getCommentsService(String encSecKey, String params, String musicId, String userName, String matchContent) {
        String url = "http://music.163.com/weapi/v1/resource/comments/R_SO_4_" + musicId + "?csrf_token=";
        String entity = baseMethod(url, encSecKey, params);
        if (entity == null) {
            return "{\"topComments\":[],\"total\":-1,\"code\":200,\"comments\":[],\"more\":true,\"userId\":-1,\"moreHot\":true,\"isMusician\":false}";
        }

        if (!StringUtiles.isNull(matchContent) || !StringUtiles.isNull(userName)) {
            JSONObject entity_json = JSON.parseObject(entity);
            JSONArray comments_jsonArray = entity_json.getJSONArray("comments");

            Iterator<Object> iterator = comments_jsonArray.iterator();
            while (iterator.hasNext()) {
                JSONObject item = (JSONObject) iterator.next();

                if (!StringUtiles.isNull(userName)) {
                    String nickname = item.getJSONObject("user").getString("nickname");
                    if (!nickname.contains(userName)) {
                        iterator.remove();
                        continue;
                    }
                }
                if (!StringUtiles.isNull(matchContent)) {
                    String content = item.getString("content");
                    if (!content.contains(matchContent)) {
                        iterator.remove();
                    }
                }
            }
            entity_json.put("comments", comments_jsonArray);
            entity = entity_json.toJSONString();
        }
        System.out.println("返回的结果是：" + entity);
        return entity;
    }

}
