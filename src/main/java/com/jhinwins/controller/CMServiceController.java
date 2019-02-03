package com.jhinwins.controller;

import com.alibaba.fastjson.JSONObject;
import com.jhinwins.model.ProxyIp;
import com.jhinwins.netservice.CMService;
import com.jhinwins.proxyIp.IpProvider;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Simon on 2019/2/3 1:40 PM
 * Description:
 */
@RestController
@RequestMapping(value = "/music")
public class CMServiceController {

    private CMService cmService = new CMService();

    /**
     * 搜索歌曲路由
     *
     * @param encSecKey
     * @param params
     * @return
     */
    @RequestMapping(value = "/searchMusic", produces = "application/json;charset=UTF-8")
    public String searchMusic(@RequestParam(value = "encSecKey") String encSecKey, @RequestParam(value = "params") String params) {
        return cmService.searchMusicService(encSecKey, params);
    }

    @RequestMapping(value = "/getSongInfo", produces = "application/json;charset=UTF-8")
    public String getSongInfo(
            @RequestParam(value = "encSecKey") String encSecKey,
            @RequestParam(value = "params") String params,
            @RequestParam(value = "musicId") String musicId
    ) {
        return cmService.getSongInfoService(encSecKey, params);
    }

    @RequestMapping(value = "/getComments", produces = "application/json;charset=UTF-8")
    public String getComments(
            @RequestParam(value = "encSecKey") String encSecKey,
            @RequestParam(value = "params") String params,
            @RequestParam(value = "musicId") String musicId,
            @RequestParam(value = "userName", required = false) String userName,
            @RequestParam(value = "content", required = false) String content
    ) {
        return cmService.getCommentsService(encSecKey, params, musicId, userName, content);
    }

}
