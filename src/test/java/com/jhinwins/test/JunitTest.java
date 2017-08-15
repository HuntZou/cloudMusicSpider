package com.jhinwins.test;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import com.jhinwins.utils.TimeUtils;
import org.apache.http.HttpRequest;
import org.apache.http.HttpRequestFactory;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.junit.Test;

import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;

public class JunitTest {

	@Test
	public void T1() throws MalformedURLException, IOException, RowsExceededException, WriteException, ClassNotFoundException, SQLException {
		long currentTimeMillis = System.currentTimeMillis();
		String transfTime = TimeUtils.TransfTime(currentTimeMillis);
		System.out.println(transfTime);
	}

}
