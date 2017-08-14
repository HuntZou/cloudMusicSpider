package com.jhinwins.factory;

import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.HttpClientConnectionManager;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;

/**
 * Created by Jhinwins on 2017/8/11  10:54.
 * Desc:
 */
public class HttpClientFactory {
    private static CloseableHttpClient httpClient;
    private static Object syLock = new Object();

    /**
     * 获取单例httpclient实例
     */
    public static synchronized CloseableHttpClient getHttpClient() {
        if (httpClient == null) {
            synchronized (syLock) {
                if (httpClient == null) {
                    //创建多线程安全的httpclient
                    Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create()
                            .register("http", PlainConnectionSocketFactory.getSocketFactory())
                            .register("https", SSLConnectionSocketFactory.getSocketFactory())
                            .build();
                    PoolingHttpClientConnectionManager httpClientConnectionManager = new PoolingHttpClientConnectionManager(socketFactoryRegistry);
                    httpClient = HttpClients.custom().setConnectionManager(httpClientConnectionManager).build();
                }
            }
        }
        return httpClient;
    }

}
