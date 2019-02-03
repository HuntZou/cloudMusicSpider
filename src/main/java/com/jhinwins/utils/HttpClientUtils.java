package com.jhinwins.utils;

import com.jhinwins.factory.HttpClientFactory;
import com.jhinwins.model.ProxyIp;
import com.jhinwins.proxyIp.IpProvider;
import org.apache.http.HttpHost;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import org.apache.log4j.Logger;

import java.io.UnsupportedEncodingException;

/**
 * Created by Simon on 2019/2/3 11:04 AM
 * Description: 网络连接帮助客户端
 */
public class HttpClientUtils {
    private static int userAgentListIndex = 0;
    private static Logger logger = Logger.getLogger(HttpClientUtils.class);

    /**
     * 请求标识头数据
     */
    private static String[] userAgentList = new String[]{
            "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0) Gecko/20100101 Firefox/6.0",
            "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.163 Safari/535.1",
            "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50",
            "Opera/9.80 (Windows NT 6.1; U; zh-cn) Presto/2.9.168 Version/11.50",
            "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; Tablet PC 2.0; .NET4.0E)",
            "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; InfoPath.3)",
            "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E; SE 2.X MetaSr 1.0)",
            "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E)",
            "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E) QQBrowser/6.9.11079.201",
            "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)",
            "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1 QQBrowser/6.9.11079.201"
    };


    /**
     * 获取请求标识头
     *
     * @return
     */
    public static synchronized String getUserAgent() {
        if (!(++userAgentListIndex < userAgentList.length)) {
            userAgentListIndex = 0;
        }
        return userAgentList[userAgentListIndex];
    }

    public static String sendPost2CMServer(String url, String encSecKey, String params) throws UnsupportedEncodingException {
        params = UrlUtils.specharsEncode(params.replaceAll(" ", "+"));
        encSecKey = UrlUtils.specharsEncode(encSecKey.replaceAll(" ", "+"));
        ProxyIp[] ips = new ProxyIp[3];

        String entity = null;
        for (int i = 0; i < ips.length; i++) {
            if (i == 2 && ips[0].getIp().equals(ips[1].getIp())) IpProvider.remove(ips[1]);

            HttpPost httpPost = new HttpPost(url);

            //设置标识头
            httpPost.setHeader("User-Agent", HttpClientUtils.getUserAgent());

            ProxyIp ip = IpProvider.pull();
            ips[i] = ip;

            if (ip == null) break;

            HttpHost proxyConfig = new HttpHost(ip.getIp(), ip.getPort());
            RequestConfig requestConfig = RequestConfig.custom()
                    .setProxy(proxyConfig)
                    .setConnectTimeout(3000)
                    .setConnectionRequestTimeout(1000)
                    .setSocketTimeout(4000)
                    .build();

            httpPost.setConfig(requestConfig);

            StringEntity stringEntity = new StringEntity("encSecKey=" + encSecKey + "&params=" + params);
            stringEntity.setContentType("application/x-www-form-urlencoded");
            httpPost.setEntity(stringEntity);

            //发送HTTP请求
            entity = sendPost2Net(httpPost);

            if (entity != null) break;
        }

        return entity;
    }


    /**
     * 发送HTTP post 请求
     *
     * @param httpPost
     * @return
     */
    public static String sendPost2Net(HttpPost httpPost) {
        long sTime = System.currentTimeMillis();
        String entity;

        try {
            CloseableHttpClient httpClient = HttpClientFactory.getHttpClient();
            CloseableHttpResponse response = httpClient.execute(httpPost);
            entity = EntityUtils.toString(response.getEntity());
        } catch (Exception e) {
            logger.error("sendPost2Net post error:" + e.getMessage());
            return null;
        } finally {
            if (httpPost != null) httpPost.releaseConnection();
        }

        logger.info("处理请求完成，耗时: " + (System.currentTimeMillis() - sTime) + " ms" + ", 请求状态: " + ((entity == null) ? "F" : "S"));

        return entity;

    }

}
