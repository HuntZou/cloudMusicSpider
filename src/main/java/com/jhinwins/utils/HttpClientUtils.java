package com.jhinwins.utils;

import com.jhinwins.Exception.NoProxyIpException;
import com.jhinwins.factory.HttpClientFactory;
import jhinwins.core.Resource;
import jhinwins.model.ProxyIp;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import org.apache.log4j.Logger;

import java.util.LinkedList;

/**
 * Created by Jhinwins on 2017/8/11  11:23.
 * Desc:
 */
public class HttpClientUtils {
    private static Logger logger = Logger.getLogger(HttpClientUtils.class);
    private static LinkedList<String> userAgentList = new LinkedList<>();

    static {
        userAgentList.add("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0) Gecko/20100101 Firefox/6.0");
        userAgentList.add("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.163 Safari/535.1");
        userAgentList.add("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50");
        userAgentList.add("Opera/9.80 (Windows NT 6.1; U; zh-cn) Presto/2.9.168 Version/11.50");
        userAgentList.add("Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; Tablet PC 2.0; .NET4.0E)");
        userAgentList.add("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; InfoPath.3)");
        userAgentList.add("Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E; SE 2.X MetaSr 1.0)");
        userAgentList.add("Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E)");
        userAgentList.add("Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E) QQBrowser/6.9.11079.201");
        userAgentList.add("Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)");
        userAgentList.add("Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1 QQBrowser/6.9.11079.201");
    }

    public static synchronized String getUserAgent() {
        //获取栈底的useragent
        //将其remove并放在栈顶
        String userAgent = userAgentList.poll();
        userAgentList.add(userAgent);
        return userAgent;
    }

    /**
     * 获取网易云音乐服务器数据
     *
     * @param url
     * @param encSecKey
     * @param params
     * @return 返回的数据, 如果发生异常则将返回null
     */
    public String sendPost2CMServers(String url, String encSecKey, String params) {
        logger.info(" 开始处理请求url:" + url);
        long preT = System.currentTimeMillis();
        params = URLUtils.specharsEncode(params.replaceAll(" ", "+"));
        encSecKey = URLUtils.specharsEncode(encSecKey.replaceAll(" ", "+"));
        String entity;
        HttpPost httpPost = null;
        try {
            CloseableHttpClient httpClient = HttpClientFactory.getHttpClient();
            httpPost = new HttpPost(url);
            //模拟浏览器请求头
            httpPost.setHeader("User-Agent", HttpClientUtils.getUserAgent());

            //使用代理ip
            ProxyIp proxyIp = Resource.pull();
            //如果未能获取到代理ip则抛异常
            if (proxyIp == null) {
                throw new NoProxyIpException();
            }
            HttpHost proxyHost = new HttpHost(proxyIp.getIp(), proxyIp.getPort());
            RequestConfig requestConfig = RequestConfig.custom().setProxy(proxyHost).build();
            httpPost.setConfig(requestConfig);

            //设置所需要的加密参数
            StringEntity stringEntity = new StringEntity("encSecKey=" + encSecKey + "&params=" + params);
            stringEntity.setContentType("application/x-www-form-urlencoded");
            httpPost.setEntity(stringEntity);

            HttpResponse response = httpClient.execute(httpPost);

            entity = EntityUtils.toString(response.getEntity());
        } catch (Exception e) {
            logger.error(e.getMessage());
            return null;
        } finally {
            if (httpPost != null) {
                httpPost.releaseConnection();
            }
        }
        logger.info(" 请求处理完成，耗时：" + (System.currentTimeMillis() - preT) + " ms");
        return entity;
    }
}
