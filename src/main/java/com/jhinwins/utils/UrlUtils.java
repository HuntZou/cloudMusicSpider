package com.jhinwins.utils;

/**
 * Created by Simon on 2019/2/3 10:59 AM
 * Description:
 */
public class UrlUtils {

    /**
     * incode url
     *
     * @param url 目标rul
     * @return
     */
    public static String specharsEncode(String url) {
        url = url.replaceAll("%", "%25");
        url = url.replaceAll("\\+", "%2B");
        url = url.replaceAll("/", "%2F");
        url = url.replaceAll(" ", "%20");
        url = url.replaceAll("\"", "%22");
        url = url.replaceAll("#", "%23");
        url = url.replaceAll("\\&", "%26");
        url = url.replaceAll("\\(", "%28");
        url = url.replaceAll("\\)", "%29");
        url = url.replaceAll(",", "%2C");
        url = url.replaceAll(":", "%3A");
        url = url.replaceAll(";", "%3B");
        url = url.replaceAll("<", "%3C");
        url = url.replaceAll("=", "%3D");
        url = url.replaceAll(">", "%3E");
        url = url.replaceAll("\\?", "%3F");
        url = url.replaceAll("@", "%40");
        url = url.replaceAll("\\\\", "%5C");
        url = url.replaceAll("\\|", "%7C");
        return url;
    }
}
