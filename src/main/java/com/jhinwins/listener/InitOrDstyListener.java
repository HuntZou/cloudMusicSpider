package com.jhinwins.listener;

import jhinwins.core.Resource;
import jhinwins.core.impl.SimpleProxyIpSpider;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Created by Jhinwins on 2017/8/14  15:15.
 * Desc:
 */
public class InitOrDstyListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        //初始化代理ip池
        SimpleProxyIpSpider simpleProxyIpSpider = new SimpleProxyIpSpider("http://www.kuaidaili.com/free/inha/2/") {
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

//            @Override
//            public String parseAnonLevel(Element element) {
//                return element.select("td[data-title='匿名度']").first().text();
//            }
        };
        Resource.init(simpleProxyIpSpider);
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {

    }
}
