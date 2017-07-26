package com.jhinwins.test;

import java.io.IOException;
import java.net.MalformedURLException;

import com.jhinwins.utils.IpUtils;

import jhinwins.model.ProxyIp;

public class JunitTest {

	public void T1() throws MalformedURLException, IOException {
		for (int i = 0; i < 20; i++) {
			long timeMillis = System.currentTimeMillis();
			ProxyIp ip = IpUtils.pullProxyIp();
			System.out.println(ip);
			System.out.println(System.currentTimeMillis() - timeMillis);
		}
	}

}
