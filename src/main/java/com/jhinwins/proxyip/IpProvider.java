package com.jhinwins.proxyip;

import com.jhinwins.cache.SortSetOpt;
import com.jhinwins.model.ProxyIp;
import com.jhinwins.utils.JsonUtils;

import java.util.Set;

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

    private static SortSetOpt sortSetOpt = new SortSetOpt();

    public static ProxyIp pull() {
        String targetPool = "CMProxyIpPool";
        Set<String> cmProxyIpPool = sortSetOpt.zrange(targetPool, 0, 0);
        return cmProxyIpPool != null && cmProxyIpPool.size() > 0 ? JsonUtils.getBasicProxyIp(cmProxyIpPool.iterator().next()) : null;
    }

    public static synchronized ProxyIp remove(ProxyIp proxyIp) {
        String targetPool = "CMProxyIpPool";
        String member = JsonUtils.getBasicProxyIp(proxyIp);
        Long rmCount = sortSetOpt.zrem(targetPool, member);
        if (rmCount > 0) {
            return proxyIp;
        }
        return null;
    }
}
