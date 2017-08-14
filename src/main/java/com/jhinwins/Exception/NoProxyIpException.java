package com.jhinwins.Exception;

/**
 * Created by Jhinwins on 2017/8/14  15:34.
 * Desc:
 */
public class NoProxyIpException extends Exception{
    public NoProxyIpException() {
        super("没能找到可用的代理ip");
    }
}
