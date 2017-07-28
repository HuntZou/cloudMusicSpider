package com.jhinwins.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jhinwins.utils.IpUtils;
import com.jhinwins.utils.StringUtiles;
import com.jhinwins.utils.URLUtils;
import org.apache.http.HttpHost;
import org.apache.http.client.ClientProtocolException;
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

    @RequestMapping(value = "/searchMusic", produces = "application/json;charset=UTF-8")
    public String SearchMusic(@RequestParam(value = "params") String params, @RequestParam(value = "encSecKey") String encSecKey) {
        String musicInfo = getMusicInfo("http://music.163.com/weapi/search/suggest/web?csrf_token=", params, encSecKey);
        return musicInfo;
    }

    @RequestMapping(value = "/getComments", produces = "application/json;charset=UTF-8")
    public String GetComments(@RequestParam(value = "params") String params, @RequestParam(value = "encSecKey") String encSecKey, @RequestParam(value = "musicId") String musicId, @RequestParam(value = "userName", required = false) String userName, @RequestParam(value = "content", required = false) String matchContent) {

        params = URLUtils.specharsEncode(params.replaceAll(" ", "+"));

        CloseableHttpClient httpClient = HttpClients.createDefault();

        try {

            // 代理主机
            jhinwins.model.ProxyIp proxyIp = IpUtils.simpleProxyIpSpider.pull();
            System.out.println("当前使用ip：" + proxyIp.getIp() + ":" + proxyIp.getPort());
            HttpHost proxyHost = new HttpHost(proxyIp.getIp(), proxyIp.getPort(), "http");
            RequestConfig requestConfig = RequestConfig.custom().setProxy(proxyHost).build();
            // 请求主机
            HttpHost reqHost = new HttpHost("music.163.com/weapi/v1/resource/comments/R_SO_4_" + musicId, 80, "http");
            // 请求
            HttpPost httpPost = new HttpPost("http://music.163.com/weapi/v1/resource/comments/R_SO_4_" + musicId + "?csrf_token=");
            httpPost.setConfig(requestConfig);
            //模拟浏览器
            httpPost.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36");

            StringEntity stringEntity = new StringEntity("encSecKey=" + encSecKey + "&params=" + params);
            stringEntity.setContentType("application/x-www-form-urlencoded");
            httpPost.setEntity(stringEntity);

            CloseableHttpResponse response = httpClient.execute(reqHost, httpPost);

            String entity = EntityUtils.toString(response.getEntity());

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

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // 关闭httpClient
            try {
                httpClient.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return null;
    }

    /**
     * 获取歌曲的信息
     *
     * @return
     */
    @RequestMapping("/getSongInfo")
    public String getSongInfo(@RequestParam String params, @RequestParam String encSecKey, @RequestParam(required = false) String musicId) {

        System.out.println("params:" + params);
        System.out.println("encSecKey:" + encSecKey);

        String musicInfo = getMusicInfo("https://music.163.com/weapi/song/enhance/player/url?csrf_token=", params, encSecKey);
        System.out.println("musicInfo:" + musicInfo);
        return musicInfo;
    }

    @RequestMapping(value = "testProxyip", produces = "application/json;charset=UTF-8")
    public String testProxyIp() {
        return "bingo";
    }


    /**
     * 根据params和encSeckey从网易云获取需要的信息
     */
    private String getMusicInfo(String url, String params, String encSecKey) {
        params = URLUtils.specharsEncode(params.replaceAll(" ", "+"));


        CloseableHttpClient httpClient = HttpClients.createDefault();

        try {
            HttpPost httpPost = new HttpPost(url);

            StringEntity stringEntity = new StringEntity("encSecKey=" + encSecKey + "&params=" + params);
            stringEntity.setContentType("application/x-www-form-urlencoded");
            httpPost.setEntity(stringEntity);

            CloseableHttpResponse response = httpClient.execute(httpPost);

            String entity = EntityUtils.toString(response.getEntity());
            return entity;
        } catch (Exception e) {
            try {
                httpClient.close();
            } catch (IOException e1) {
                e1.printStackTrace();
            }
        }
        return null;
    }
}
