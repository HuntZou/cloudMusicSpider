package com.jhinwins.proxyIp;

import com.jhinwins.cache.SortSetOpt;
import com.jhinwins.model.ProxyIp;
import com.jhinwins.utils.FinalValueUtils;
import com.jhinwins.utils.JsonUtils;

import java.util.Set;

/**
 * Created by Simon on 2019/2/3 11:08 AM
 * Description:
 */
public class IpProvider {

    private static SortSetOpt sortSetOpt = new SortSetOpt();

    private static FinalValueUtils finalValueUtils = new FinalValueUtils();

    /**
     * 取出一个可用ip
     *
     * @return
     */
    public static ProxyIp pull() {
        Set<String> ips = sortSetOpt.zrange(finalValueUtils.getTargetPool(), 0, 0);

        return (ips != null && ips.size() > 0) ? JsonUtils.getBasicProxyIp(ips.iterator().next()) : null;
    }

    /**
     * 删除一个无用的ip
     *
     * @param proxyIp
     * @return
     */
    public static synchronized ProxyIp remove(ProxyIp proxyIp) {
        String ip = JsonUtils.getBasicProxyIp(proxyIp);
        Long aLong = sortSetOpt.zrem(finalValueUtils.getTargetPool(), ip);
        return aLong > 0 ? proxyIp : null;
    }

}
