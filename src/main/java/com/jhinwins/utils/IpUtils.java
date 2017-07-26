package com.jhinwins.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import jhinwins.core.impl.SimpleProxyIpSpider;
import jhinwins.model.ProxyIp;

public class IpUtils {
	private final static int IPPOOL_MIN_COUNT = 4;
	private static List<ProxyIp> proxyips = new ArrayList<>();

	private static boolean loadingIps = false;

	public static SimpleProxyIpSpider simpleProxyIpSpider = new SimpleProxyIpSpider("http://www.kuaidaili.com/free/inha/2/") {
		@Override
		public Elements parseIPHome(Document html) {
			Elements elements = html.select("tr");
			return elements;
		}

		@Override
		public String parseIP(Element element) {
			return element.child(0).text();
		}

		@Override
		public Integer parsePort(Element element) {
			return Integer.parseInt(element.child(1).text());
		}

	};

	/**
	 * 获取一个代理ip
	 * 
	 * @return 代理ip对象 如果没有则返回空
	 */
	public static ProxyIp pullProxyIp() {
		ProxyIp proxyip = null;
		if (proxyips.size() > 0) {
			proxyip = proxyips.get(0);
			proxyips.remove(0);
		}
		// 如果ip池中的ip数量较少则再添加
		if (proxyips.size() < IPPOOL_MIN_COUNT && !loadingIps) {
			loadingIps = true;
			new Thread(new Runnable() {
				@Override
				public void run() {
					addProxyIp();
					loadingIps = false;
				}
			}).start();
		}

		if (proxyip == null) {
			try {
				Thread.sleep(20);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			return pullProxyIp();
		}

		return proxyip;
	}

	private static void addProxyIp() {
		CloseableHttpClient httpClient = null;
		BufferedReader reader = null;
		try {
			httpClient = HttpClients.createDefault();
			HttpGet httpGet = new HttpGet("http://www.xdaili.cn/ipagent//freeip/getFreeIps");
			CloseableHttpResponse response = httpClient.execute(httpGet);
			reader = new BufferedReader(new InputStreamReader(response.getEntity().getContent(), "utf-8"));
			String res = "";
			String buff;
			while ((buff = reader.readLine()) != null) {
				res += buff;
			}

			JSONObject res_json = JSON.parseObject(res);
			JSONArray ips = res_json.getJSONArray("rows");
			Iterator<Object> iterator = ips.iterator();

			while (iterator.hasNext()) {
				JSONObject ipItem = (JSONObject) iterator.next();
				String ip = ipItem.getString("ip");
				String port_str = ipItem.getString("port");
				Integer port = Integer.parseInt(port_str);

				ProxyIp proxyIp = new ProxyIp();
				proxyIp.setIp(ip);
				proxyIp.setPort(port);
				if (!isContainIp(proxyIp))
					proxyips.add(proxyIp);
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
					e.printStackTrace();
					// do nothing.
				}
			}
			if (httpClient != null) {
				try {
					httpClient.close();
				} catch (IOException e) {
					e.printStackTrace();
					// do nothing.
				}
			}
		}
	}

	/**
	 * 是否已经包含了这个ip
	 * 
	 * @param ip
	 * @return
	 */
	private static boolean isContainIp(ProxyIp ip) {
		Iterator<ProxyIp> iterator = proxyips.iterator();
		while (iterator.hasNext()) {
			if (iterator.next().getIp().equals(ip.getIp())) {
				return true;
			}
		}
		return false;
	}

}
