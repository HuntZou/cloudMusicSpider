package com.jhinwins.factory;

import org.apache.http.client.HttpClient;
import org.apache.http.conn.HttpClientConnectionManager;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.BasicHttpClientConnectionManager;

/**
 * Created by Jhinwins on 2017/8/11  10:54.
 * Desc:
 */
public class HttpClientFactory {
    private static HttpClient httpClient;

    /**
     * 获取单例httpclient实例
     */
    public static synchronized HttpClient getHttpClient() {
        if (httpClient == null) {
            //创建多线程安全的httpclient
            HttpClientConnectionManager clientConnectionManager = new BasicHttpClientConnectionManager();
            httpClient = HttpClients.createMinimal(clientConnectionManager);
        }
        return httpClient;
    }
}
