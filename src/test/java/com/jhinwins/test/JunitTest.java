package com.jhinwins.test;

import com.jhinwins.factory.HttpClientFactory;
import com.jhinwins.utils.HttpClientUtils;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;
import org.junit.Test;

import java.io.IOException;
import java.net.MalformedURLException;
import java.sql.SQLException;

public class JunitTest {
    private static long count = 0;

    @Test
    public void T1() throws MalformedURLException, IOException, RowsExceededException, WriteException, ClassNotFoundException, SQLException {
//        for (int i = 0; i < 5; i++) {
//            new Thread(new Runnable() {
//                @Override
//                public void run() {
//                    while (true) {
//                        HttpClientUtils.getUserAgent();
//                        System.out.println(++count);
//                    }
//                }
//            }).start();
//        }
//        while (true) {
//        }
    }

}
