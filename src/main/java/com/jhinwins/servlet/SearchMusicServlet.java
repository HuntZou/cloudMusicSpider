package com.jhinwins.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.binary.StringUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import com.jhinwins.utils.StringUtiles;
import com.jhinwins.utils.URLUtils;

public class SearchMusicServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");

		String params = req.getParameter("params");
		String encSecKey = req.getParameter("encSecKey");

		// 如果为空则直接返回
		if (StringUtiles.isNull(params) || StringUtiles.isNull(encSecKey)) {
			return;
		}

		params = URLUtils.specharsEncode(params.replaceAll(" ", "+"));

		CloseableHttpClient httpClient = HttpClients.createDefault();

		HttpPost httpPost = new HttpPost("http://music.163.com/weapi/search/suggest/web?csrf_token=");

		StringEntity stringEntity = new StringEntity("encSecKey=" + encSecKey + "&params=" + params);
		stringEntity.setContentType("application/x-www-form-urlencoded");
		httpPost.setEntity(stringEntity);

		CloseableHttpResponse response = httpClient.execute(httpPost);

		String entity = EntityUtils.toString(response.getEntity());

		resp.getWriter().write(entity);

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doGet(req, resp);
	}
}
