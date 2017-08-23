package com.jhinwins.controller;

import com.jhinwins.netservice.CMService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Jhinwins on 2017/7/27  14:16.
 * Desc: 网易云音乐爬虫的控制器(主要返回的是json数据)
 */

@RestController
public class CMSServiceController {
    private CMService cmService = new CMService();

    /**
     * 搜索歌曲
     */
    @RequestMapping(value = "/searchMusic", produces = "application/json;charset=UTF-8")
    public String searchMusic(@RequestParam(value = "params") String params, @RequestParam(value = "encSecKey") String encSecKey) {
        return cmService.searchMusicService(encSecKey, params);
    }

    /**
     * 获取歌曲的信息
     */
    @RequestMapping("/getSongInfo")
    public String getSongInfo(@RequestParam String params, @RequestParam String encSecKey, @RequestParam(required = false) String musicId) {
        return cmService.getSongInfoService(encSecKey, params);
    }


    /**
     * 获取歌曲评论
     *
     * @param userName     评论者
     * @param matchContent 评论内容
     */
    @RequestMapping(value = "/getComments", produces = "application/json;charset=UTF-8")
    public String getComments(@RequestParam(value = "params") String params, @RequestParam(value = "encSecKey") String encSecKey, @RequestParam(value = "musicId") String musicId, @RequestParam(value = "userName", required = false) String userName, @RequestParam(value = "content", required = false) String matchContent) {
        return cmService.getCommentsService(encSecKey, params, musicId, userName, matchContent);
    }

    /**
     * 测试代理ip
     */
    @RequestMapping(value = "testProxyip", produces = "application/json;charset=UTF-8")
    public String testProxyIp() {
        return "bingo";
    }
}
