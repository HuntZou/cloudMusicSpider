package com.jhinwins.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jhinwins.factory.HttpClientFactory;
import com.jhinwins.utils.HttpClientUtils;
import com.jhinwins.utils.IpUtils;
import com.jhinwins.utils.StringUtiles;
import com.jhinwins.utils.URLUtils;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Iterator;

/**
 * Created by Jhinwins on 2017/7/27  14:16.
 * Desc: 网易云音乐爬虫的控制器(主要返回的是json数据)
 */

@RestController
public class CMSServiceController {

    /**
     * 搜索歌曲
     */
    @RequestMapping(value = "/searchMusic", produces = "application/json;charset=UTF-8")
    public String SearchMusic(@RequestParam(value = "params") String params, @RequestParam(value = "encSecKey") String encSecKey) {
        String url = "http://music.163.com/weapi/search/suggest/web?csrf_token=";
        String musicInfo = HttpClientUtils.sendPost2CMServers(url, encSecKey, params);
        return musicInfo;
    }

    /**
     * 获取歌曲的信息
     */
    @RequestMapping("/getSongInfo")
    public String getSongInfo(@RequestParam String params, @RequestParam String encSecKey, @RequestParam(required = false) String musicId) {
        String url = "https://music.163.com/weapi/song/enhance/player/url?csrf_token=";
        String musicInfo = HttpClientUtils.sendPost2CMServers(url, encSecKey, params);
        return musicInfo;
    }


    /**
     * 获取歌曲评论
     * @param userName 评论者
     * @param matchContent 评论内容
     */
    @RequestMapping(value = "/getComments", produces = "application/json;charset=UTF-8")
    public String GetComments(@RequestParam(value = "params") String params, @RequestParam(value = "encSecKey") String encSecKey, @RequestParam(value = "musicId") String musicId, @RequestParam(value = "userName", required = false) String userName, @RequestParam(value = "content", required = false) String matchContent) {

        String url = "http://music.163.com/weapi/v1/resource/comments/R_SO_4_" + musicId + "?csrf_token=";
        String entity = HttpClientUtils.sendPost2CMServers(url, encSecKey, params);

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
                        continue;
                    }
                }
            }
            entity_json.put("comments", comments_jsonArray);
            entity = entity_json.toJSONString();
        }
        return entity;
    }

    /**
     * 测试代理ip
     * @return
     */
    @RequestMapping(value = "testProxyip", produces = "application/json;charset=UTF-8")
    public String testProxyIp() {
        return "bingo";
    }
}
