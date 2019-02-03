package com.jhinwins.netservice;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jhinwins.utils.HttpClientUtils;
import com.jhinwins.utils.StringUtils;
import org.apache.log4j.Logger;

import java.io.UnsupportedEncodingException;
import java.util.Iterator;

/**
 * Created by Simon on 2019/2/3 12:26 PM
 * Description: 网络访问帮助方法
 */
public class CMService {
    private static Logger logger = Logger.getLogger(CMService.class);

    //搜索链接
    private static String SEARCH_URL = "http://music.163.com/weapi/search/suggest/web?csrf_token=";

    //歌曲信息链接
    private static String SONG_INFO_URL = "https://music.163.com/weapi/song/enhance/player/url?csrf_token=";

    //获取歌曲评论链接
    private static String SONG_COMMENT_URL = "http://music.163.com/weapi/v1/resource/comments/R_SO_4_";

    /**
     * 网络访问基础方法
     *
     * @param url
     * @param encSecKey
     * @param params
     * @return
     */
    private String baseMethod(String url, String encSecKey, String params) {
        try {
            return HttpClientUtils.sendPost2CMServer(url, encSecKey, params);
        } catch (UnsupportedEncodingException e) {
            logger.error("搜索音乐时异常" + e.getMessage());
            return null;
        }
    }

    /**
     * 搜索歌曲
     *
     * @param encSecKey
     * @param params
     * @return
     */
    public String searchMusicService(String encSecKey, String params) {
        return baseMethod(SEARCH_URL, encSecKey, params);
    }

    /**
     * 获取歌曲信息
     *
     * @param encSecKey
     * @param params
     * @return
     */
    public String getSongInfoService(String encSecKey, String params) {
        return baseMethod(SONG_INFO_URL, encSecKey, params);
    }


    public String getCommentsService(String encSecKey, String params, String musicId, String userName, String matchContent) {
        String entity = baseMethod(SONG_COMMENT_URL + musicId + "?csrf_token=", encSecKey, params);
        if (entity == null) {
            return "{\"topComments\":[],\"total\":-1,\"code\":200,\"comments\":[],\"more\":true,\"userId\":-1,\"moreHot\":true,\"isMusician\":false}";
        }

        //匹配条件为空
        if (StringUtils.isNull(matchContent) && StringUtils.isNull(userName)) return entity;

        JSONObject entity_json = JSON.parseObject(entity);
        JSONArray comments_jsonArray = entity_json.getJSONArray("comments");

        Iterator<Object> iterator = comments_jsonArray.iterator();
        while (iterator.hasNext()) {
            JSONObject item = (JSONObject) iterator.next();

            if (!StringUtils.isNull(userName)) {
                String nickname = item.getJSONObject("user").getString("nickname");
                if (!nickname.contains(userName)) {
                    iterator.remove();
                    continue;
                }
            }

            if (!StringUtils.isNull(matchContent)) {
                String content = item.getString("content");
                if (!content.contains(matchContent)) {
                    iterator.remove();
                }
            }
        }
        entity_json.put("comments", comments_jsonArray);
        entity = entity_json.toJSONString();

        return entity;
    }

}
