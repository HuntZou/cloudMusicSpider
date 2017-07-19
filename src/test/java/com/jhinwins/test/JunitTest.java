package com.jhinwins.test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

import org.apache.http.HttpHost;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.config.RequestConfig.Builder;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.junit.Test;

public class JunitTest {

	@Test
	public void T1() throws MalformedURLException, IOException {
//		// 设置代理IP
//		System.getProperties().setProperty("proxySet", "true");
//		System.getProperties().setProperty("http.proxyHost", "171.10.31.41");
//		System.getProperties().setProperty("http.proxyPort", "8080");
//
//		URLConnection connection = new URL("http://city.ip138.com/ip2city.asp").openConnection();
//		connection.setConnectTimeout(6000); // 6s
//		connection.setReadTimeout(6000);
//		connection.setUseCaches(false);
//
//		BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
//		String b = "";
//		while ((b = bufferedReader.readLine()) != null) {
//			System.out.println(b);
//		}

		CloseableHttpClient httpClient = HttpClients.createDefault();

		// 代理主机
		HttpHost proxyHost = new HttpHost("101.96.9.136", 80, "http");
		RequestConfig config = RequestConfig.custom().setProxy(proxyHost).build();
		// 请求主机
		HttpHost reqHost = new HttpHost("city.ip138.com", 80, "http");
		// 创建请求
		HttpPost httpPost = new HttpPost("http://city.ip138.com/ip2city.asp");
		httpPost.setConfig(config);

		CloseableHttpResponse response = httpClient.execute(reqHost, httpPost);

		String entity = EntityUtils.toString(response.getEntity());
		
		System.out.println(entity);

	}

}
