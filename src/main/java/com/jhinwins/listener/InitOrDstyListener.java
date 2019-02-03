package com.jhinwins.listener;

import org.apache.log4j.Logger;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Created by Jhinwins on 2017/8/14  15:15.
 * Desc:
 */
public class InitOrDstyListener implements ServletContextListener {
    private Logger logger = Logger.getLogger(InitOrDstyListener.class);

    @Override
    public void contextInitialized(ServletContextEvent sce) {

//
//        final SimpleProxyIpSpider simpleProxyIpSpider = new SimpleProxyIpSpider("http://www.xicidaili.com/nn/") {
//            @Override
//            public Elements parseIPHome(Document html) {
//                Elements elements = html.select("tr");
//                return elements;
//            }
//
//            @Override
//            public String parseIP(Element element) {
//                return element.child(1).text();
//            }
//
//            @Override
//            public Integer parsePort(Element element) {
//                return Integer.parseInt(element.child(2).text());
//            }
//
////            @Override
////            public String parseAnonLevel(Element element) {
////                return element.select("td[data-title='匿名度']").first().text();
////            }
//        };
//
//        final SimpleProxyIpSpider simpleProxyIpSpider2 = new SimpleProxyIpSpider("http://www.kuaidaili.com/free/inha/") {
//            @Override
//            public Elements parseIPHome(Document html) {
//                Elements elements = html.select("tr");
//                return elements;
//            }
//
//            @Override
//            public String parseIP(Element element) {
//                return element.child(0).text();
//            }
//
//            @Override
//            public Integer parsePort(Element element) {
//                return Integer.parseInt(element.child(1).text());
//            }
//
////            @Override
////            public String parseAnonLevel(Element element) {
////                return element.select("td[data-title='匿名度']").first().text();
////            }
//        };
//
//        final Action action = new Action();
//        new Thread(new Runnable() {
//            public void run() {
//                while (true) {
//                    action.loadOriginalSource(simpleProxyIpSpider);
//                    try {
//                        Thread.sleep((int) ((5 + Math.random()) * 60 * 1000));
//                    } catch (InterruptedException e) {
//                        e.printStackTrace();
//                    }
//                }
//            }
//        }).start();
//
//        new Thread(new Runnable() {
//            public void run() {
//                while (true) {
//                    try {
//                        Thread.sleep(30 * 1000);
//                    } catch (InterruptedException e) {
//                        e.printStackTrace();
//                    }
//                    action.detectionFirst(new CMNetFilter(), "CMProxyIpPool");
//                }
//            }
//        }).start();
//
//        for (int i = 0; i < 2; i++) {
//            new Thread(new Runnable() {
//                public void run() {
//                    while (true) {
//                        action.doNetFilter(new CMNetFilter(), "originalProxyIpPool", "CMProxyIpPool");
//                    }
//                }
//            }).start();
//        }
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {

    }
}
