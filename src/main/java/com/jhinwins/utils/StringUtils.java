package com.jhinwins.utils;

/**
 * Created by Simon on 2019/2/3 10:56 AM
 * Description:
 */
public class StringUtils {

    /**
     * 判断字符串是否为空
     * @param str 判断目标字符串
     * @return
     */
    public static boolean isNull(String str) {
        return (str == null || str.trim() == null || str.length() == 0) ? true : false;
    }
}
