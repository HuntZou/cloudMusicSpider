package com.jhinwins.servlet;

import java.io.IOException;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpHost;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jhinwins.utils.StringUtiles;
import com.jhinwins.utils.URLUtils;

public class getCommentsServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");

		String params = req.getParameter("params");
		String encSecKey = req.getParameter("encSecKey");
		String musicId = req.getParameter("musicId");
		String userName = req.getParameter("userName");
		String matchContent = req.getParameter("content");

		// 如果字符串不合法就直接返回
		if (StringUtiles.isNull(params) || StringUtiles.isNull(encSecKey) || StringUtiles.isNull(musicId)) {
			return;
		}

		params = URLUtils.specharsEncode(params.replaceAll(" ", "+"));

		System.out.println("params:" + params);
		System.out.println("encSecKey:" + encSecKey);
		System.out.println("musicId:" + musicId);

		CloseableHttpClient httpClient = HttpClients.createDefault();

		try {

			// 代理主机
			HttpHost proxyHost = new HttpHost("101.96.9.136", 80, "http");
			RequestConfig requestConfig = RequestConfig.custom().setProxy(proxyHost).build();
			// 请求主机
			HttpHost reqHost = new HttpHost("music.163.com/weapi/v1/resource/comments/R_SO_4_" + musicId, 80, "http");
			// 创建请求
			HttpPost httpPost = new HttpPost("http://music.163.com/weapi/v1/resource/comments/R_SO_4_" + musicId + "?csrf_token=");
			httpPost.setConfig(requestConfig);

			StringEntity stringEntity = new StringEntity("encSecKey=" + encSecKey + "&params=" + params);
			stringEntity.setContentType("application/x-www-form-urlencoded");
			httpPost.setEntity(stringEntity);

			CloseableHttpResponse response = httpClient.execute(reqHost, httpPost);

			String entity = EntityUtils.toString(response.getEntity());

			if (!StringUtiles.isNull(matchContent) || !StringUtiles.isNull(userName)) {
				JSONObject entity_json = JSON.parseObject(entity);
				JSONArray comments_jsonArray = entity_json.getJSONArray("comments");

				Iterator<Object> iterator = comments_jsonArray.iterator();
				while (iterator.hasNext()) {
					JSONObject item = (JSONObject) iterator.next();

					if (!StringUtiles.isNull(userName)) {
						String nickname = item.getJSONObject("user").getString("nickname");
						if (!nickname.contains(userName)) {
							iterator.remove();
							continue;
						}
					}
					if (!StringUtiles.isNull(matchContent)) {
						String content = item.getString("content");
						if (!content.contains(matchContent)) {
							iterator.remove();
							continue;
						}
					}
				}
				entity_json.put("comments", comments_jsonArray);
				entity = entity_json.toJSONString();
			}

			resp.getWriter().write(entity);

		} finally {
			// 关闭httpClient
			httpClient.close();
		}

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doGet(req, resp);
	}
}
