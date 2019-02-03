package com.jhinwins.cache;

import com.jhinwins.utils.FinalValueUtils;
import com.jhinwins.utils.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;
import redis.clients.jedis.exceptions.JedisConnectionException;
import redis.clients.jedis.exceptions.JedisDataException;
import redis.clients.jedis.exceptions.JedisException;

/**
 * Created by Simon on 2019/2/3 11:09 AM
 * Description:
 */
public class RedisPool {

    private static Logger logger = Logger.getLogger(RedisPool.class);

    private static JedisPool jedisPool = null;

    private static FinalValueUtils finalValueUtils = new FinalValueUtils();


    /**
     * 获取redis客户端
     *
     * @return
     */
    public static synchronized Jedis getJedis() {
        String REDIS_SERVER_PASSWORD = finalValueUtils.getRedisServerPassword();

        if (StringUtils.isNull(REDIS_SERVER_PASSWORD)) REDIS_SERVER_PASSWORD = null;

        if (jedisPool == null) {
            JedisPoolConfig poolConfig = new JedisPoolConfig();
            poolConfig.setMaxTotal(512);
            poolConfig.setMaxIdle(5);
            poolConfig.setMaxWaitMillis(1000 * 10);
            poolConfig.setTestOnBorrow(true);
            jedisPool = new JedisPool(poolConfig, finalValueUtils.getRedisServerHost(), finalValueUtils.getRedisServerPort(), 5000, REDIS_SERVER_PASSWORD, finalValueUtils.getRedisServerDatabase());
        }

        Jedis resource;

        try {
            resource = jedisPool.getResource();
        } catch (Exception e) {
            logger.error("获取jedis客户端时异常:" + e.getMessage());
            return null;
        }
        return resource;
    }

    /**
     * 释放redis客户端
     *
     * @param jedis
     */
    private static void returnJedis(Jedis jedis) {
        if (jedis != null && jedisPool != null) {
            jedisPool.returnResource(jedis);
        }
    }

    /**
     * 释放损坏的redis客户端
     *
     * @param jedis
     */
    private static void returnBrokenJedis(Jedis jedis) {
        if (jedis != null && jedisPool != null) {
            jedisPool.returnBrokenResource(jedis);
        }
    }

    /**
     * 关闭客户端
     *
     * @param jedis
     * @param occurException
     */
    public static void closeResource(Jedis jedis, boolean occurException) {
        try {
            if (occurException) {
                returnBrokenJedis(jedis);
            } else {
                returnJedis(jedis);
            }
        } catch (Exception e) {
            logger.error("释放jedis的时间发生错误:" + e.getMessage());
        }
    }

    /**
     * redis 异常处理方法
     *
     * @param jedisException
     * @return
     */
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
