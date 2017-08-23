package com.jhinwins.proxyip;

import jhinwins.Service.ProxyIpService;
import jhinwins.model.ProxyIp;

/**
 * Created by Jhinwins on 2017/8/23  12:46.
 * Desc:
 */
public class IpProvider {
    /**
     * 从缓冲池中获取一个代理ip
     *
     * @return
     */
    public static ProxyIp pull() {
        ProxyIp proxyIp = ProxyIpService.pull("CMProxyIpPool");
        return proxyIp;
    }

    public static ProxyIp remove(ProxyIp proxyIp) {
        return ProxyIpService.remove("CMProxyIpPool", proxyIp);
    }
}
