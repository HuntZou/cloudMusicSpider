package com.jhinwins.cache;

import org.apache.log4j.Logger;
import org.springframework.util.StringUtils;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;
import redis.clients.jedis.exceptions.JedisConnectionException;
import redis.clients.jedis.exceptions.JedisDataException;
import redis.clients.jedis.exceptions.JedisException;


/**
 * Created by Jhinwins on 2017/8/17  15:11.
 * Desc:
 */
public class RedisPool {
    private static Logger logger = Logger.getLogger(RedisPool.class);

    private static JedisPool jedisPool = null;

    private static String REDIS_HOST = "127.0.0.1";
    private static int REDIS_PORT = 6379;
    private static String REDIS_PWD = "";
    private static int REDIS_DB = 1;


    public static synchronized Jedis getJedis() {
        if (StringUtils.isEmpty(REDIS_PWD)) REDIS_PWD = null;
        if (jedisPool == null) {
            JedisPoolConfig config = new JedisPoolConfig();
            config.setMaxTotal(512); // 可用连接实例的最大数目,如果赋值为-1,表示不限制.
            config.setMaxIdle(5); // 控制一个Pool最多有多少个状态为idle(空闲的)jedis实例,默认值也是8
            config.setMaxWaitMillis(1000 * 100); // 等待可用连接的最大时间,单位毫秒,默认值为-1,表示永不超时/如果超过等待时间,则直接抛出异常
            config.setTestOnBorrow(true); // 在borrow一个jedis实例时,是否提前进行validate操作,如果为true,则得到的jedis实例均是可用的
            jedisPool = new JedisPool(config, REDIS_HOST, REDIS_PORT, 5000, REDIS_PWD, REDIS_DB);
        }
        Jedis resource;
        try {
            resource = jedisPool.getResource();
        } catch (Exception e) {
            logger.error("获取jedis发生异常:" + e.getMessage());
            return null;
        }
        return resource;
    }

    private static void relaseJedis(Jedis jedis) {
        if (jedis != null && jedisPool != null) {
            jedisPool.returnResource(jedis);
        }
    }

    private static void returnJedis(Jedis jedis) {
        if (jedis != null && jedisPool != null) {
            jedisPool.returnBrokenResource(jedis);
        }
    }

    public static void closeResource(Jedis jedis, boolean occurException) {
        try {
            if (occurException) {
                returnJedis(jedis);
            } else {
                relaseJedis(jedis);
            }
        } catch (Exception e) {
            logger.error("释放jedis的时间发生错误:" + e.getMessage());
        }
    }

    public static boolean handleJedisException(JedisException jedisException) {
        if (jedisException instanceof JedisConnectionException) {
            logger.error("Redis connection lost.", jedisException);
        } else if (jedisException instanceof JedisDataException) {
            if ((jedisException.getMessage() != null) && (jedisException.getMessage().indexOf("READONLY") != -1)) {
                logger.error("Redis connection are read-only slave.", jedisException);
            } else {
                // dataException, isBroken=false
                return false;
            }
        } else {
            logger.error("Jedis exception happen.", jedisException);
        }
        return true;
    }
}
