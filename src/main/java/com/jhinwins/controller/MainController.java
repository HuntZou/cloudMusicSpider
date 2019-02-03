package com.jhinwins.controller;

import com.alibaba.fastjson.JSONObject;
import com.jhinwins.model.ProxyIp;
import com.jhinwins.proxyIp.IpProvider;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Simon on 2019/2/3 2:41 PM
 * Description:
 */
@RestController
public class MainController {

    @RequestMapping(value = "/ping", produces = "application/json;charset=UTF-8")
    public String ping() {
        return "pong";
    }

    @RequestMapping(value = "/test", produces = "application/json;charset=UTF-8")
    public String testIps() {
        IpProvider ipProvider = new IpProvider();
        ProxyIp ip = ipProvider.pull();

        return JSONObject.toJSONString(ip);
    }
}
