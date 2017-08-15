package com.jhinwins.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Jhinwins on 2017/8/15  15:40.
 * Desc:
 */
public class TimeUtils {
    private static SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss");

    /**
     * 转换时间戳
     * @param msT
     * @return
     */
    public static String TransfTime(long msT) {
        String data_str = simpleDateFormat.format(new Date(msT));
        return data_str;
    }

    /**
     * 获取当前时间
     * @return
     */
    public static String getTime() {
        return TransfTime(System.currentTimeMillis());
    }
}
