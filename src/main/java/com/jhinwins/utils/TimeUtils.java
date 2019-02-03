package com.jhinwins.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Simon on 2019/2/3 10:52 AM
 * Description:
 */
public class TimeUtils {
    /**
     * 时间格式化
     */
    private static SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    /**
     * 将时间戳转换成格式化的时间
     *
     * @param timeStamp 时间戳
     * @return
     */
    public static String TransfTime(long timeStamp) {
        return simpleDateFormat.format(new Date(timeStamp));
    }

    /**
     * 获取当前时间
     *
     * @return
     */
    public static String getTime() {
        return TransfTime(System.currentTimeMillis());
    }


}
