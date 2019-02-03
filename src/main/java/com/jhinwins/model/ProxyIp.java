package com.jhinwins.model;

/**
 * Created by Simon on 2019/2/3 10:46 AM
 * Description:
 */
public class ProxyIp {
    /**
     * 代理匿名度：透明
     */
    public static String ANONLEVEL_PELLUCID = "pellucid";
    /**
     * 代理匿名度：普匿
     */
    public static String ANONLEVEL_GEN_ANON = "genAnon";
    /**
     * 代理匿名度：高匿
     */
    public static String ANONLEVEL_HIGH_ANON = "highAnon";
    /**
     * 代理ip类型：http
     */
    public static String TYPE_HTTP = "http";
    /**
     * 代理ip类型：https
     */
    public static String TYPE_HTTPS = "https";
    /**
     * 代理ip类型：http&https
     */
    public static String TYPE_ALL = "all";
    /**
     * 支持类型：get
     */
    public static String SUPTYPE_GET = "get";
    /**
     * 支持类型：post
     */
    public static String SUPTYPE_POST = "post";
    /**
     * 支持类型：get&post
     */
    public static String SUPTYPE_ALL = "all";

    /**
     * 代理ip地址
     */
    private String ip;

    /**
     * 端口号
     */
    private Integer port;

    /**
     * 匿名度
     */
    private String anonLevel = "none";

    /**
     * 类型
     */
    private String type = "none";

    /**
     * get/post支持类型
     */
    private String supType = "none";

    /**
     * ip所在位置
     */
    private String location;

    /**
     * 响应速度(毫秒)
     */
    private Long speed;

    /**
     * 已经存活时间(秒)
     */
    private Long age;

    /**
     * 上次验证到现在的时间(秒)
     */
    private Long lastverify;

    /**
     * 爬取时间
     */
    private Long acquireTime;

    public ProxyIp() {
    }

    public ProxyIp(String ip, Integer port) {
        this.ip = ip;
        this.port = port;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public Integer getPort() {
        return port;
    }

    public void setPort(Integer port) {
        this.port = port;
    }

    public String getAnonLevel() {
        return anonLevel;
    }

    public void setAnonLevel(String anonLevel) {
        this.anonLevel = anonLevel;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSupType() {
        return supType;
    }

    public void setSupType(String supType) {
        this.supType = supType;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Long getSpeed() {
        return speed;
    }

    public void setSpeed(Long speed) {
        this.speed = speed;
    }

    public Long getAge() {
        return age;
    }

    public void setAge(Long age) {
        this.age = age;
    }

    public Long getLastverify() {
        return lastverify;
    }

    public void setLastverify(Long lastverify) {
        this.lastverify = lastverify;
    }

    public Long getAcquireTime() {
        return acquireTime;
    }

    public void setAcquireTime(Long acquireTime) {
        this.acquireTime = acquireTime;
    }
}
