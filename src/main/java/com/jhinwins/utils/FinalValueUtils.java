package com.jhinwins.utils;

/**
 * Created by Simon on 2019/2/3 2:06 PM
 * Description:
 */
public class FinalValueUtils {
    //redis 连接地址
    private static String REDIS_SERVER_HOST = "106.14.146.54";

    //redis 端口
    private static int REDIS_SERVER_PORT = 6379;

    //redis 连接数据库
    private static int REDIS_SERVER_DATABASE = 1;

    //redis 连接密码
    private static String REDIS_SERVER_PASSWORD = "sTQz9ebZ2CR";

    //redis 连接key
    private static String TARGET_POOL = "CMProxyIpPool";

    public static String getRedisServerHost() {
        return REDIS_SERVER_HOST;
    }

    public static int getRedisServerPort() {
        return REDIS_SERVER_PORT;
    }

    public static int getRedisServerDatabase() {
        return REDIS_SERVER_DATABASE;
    }

    public static String getRedisServerPassword() {
        return REDIS_SERVER_PASSWORD;
    }

    public static String getTargetPool() {
        return TARGET_POOL;
    }
}
