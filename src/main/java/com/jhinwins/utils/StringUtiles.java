package com.jhinwins.utils;

public class StringUtiles {
	/**
	 * 判断字符串是否为空
	 */
	public static boolean isNull(String str) {
		if (str == null || str.length() == 0) {
			return true;
		}
		return false;
	}
}
