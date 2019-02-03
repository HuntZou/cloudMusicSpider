package com.jhinwins.cache;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.exceptions.JedisException;

import java.util.Set;

/**
 * Created by Jhinwins on 2017/8/18  14:19.
 * Desc:
 */
@Component
public class SortSetOpt {

    private Logger logger = Logger.getLogger(SortSetOpt.class);

    public Long zadd(String key, double score, String member) {
        if (member == null) return -1L;
        boolean broken = false;
        Jedis jedis = RedisPool.getJedis();
        if (jedis == null) {
            return -1L;
        }
        Long zadd = null;
        try {
            zadd = jedis.zadd(key, score, member);
        } catch (JedisException e) {
            logger.error("jedis zadd error:" + e.getMessage());
            broken = RedisPool.handleJedisException(e);
        } finally {
            RedisPool.closeResource(jedis, broken);
        }
        return zadd;

    }

    public Long zremrangeByRank(String key, long start, long end) {
        boolean broken = false;
        Jedis jedis = RedisPool.getJedis();
        if (jedis == null) {
            return -1L;
        }
        Long aLong = null;
        try {
            aLong = jedis.zremrangeByRank(key, start, end);
        } catch (JedisException e) {
            logger.error("jedis zremrangeByRank error:" + e.getMessage());
            broken = RedisPool.handleJedisException(e);
        } finally {
            RedisPool.closeResource(jedis, broken);
        }
        return aLong;

    }

    public Long zcard(String key) {
        boolean broken = false;
        Jedis jedis = RedisPool.getJedis();
        if (jedis == null) {
            return -1L;
        }
        Long zcard = null;
        try {
            zcard = jedis.zcard(key);
        } catch (JedisException e) {
            logger.error("jedis zcard error:" + e.getMessage());
            broken = RedisPool.handleJedisException(e);
        } finally {
            RedisPool.closeResource(jedis, broken);
        }
        return zcard;

    }

    public Long zrem(String key, String... members) {
        if (members == null || members.length == 0 || members[0] == null) return -1L;
        boolean broken = false;
        Jedis jedis = RedisPool.getJedis();
        if (jedis == null) {
            return -1L;
        }
        Long zrem = null;
        try {
            zrem = jedis.zrem(key, members);
        } catch (JedisException e) {
            logger.error("jedis zrem error:" + e.getMessage());
            broken = RedisPool.handleJedisException(e);
        } finally {
            RedisPool.closeResource(jedis, broken);
        }
        return zrem;
    }

    public Set<String> zrange(String key, long start, long end) {
        boolean broken = false;
        Jedis jedis = RedisPool.getJedis();
        if (jedis == null) {
            return null;
        }
        Set<String> zrange = null;
        try {
            zrange = jedis.zrange(key, start, end);
        } catch (JedisException e) {
            logger.error("jedis zrange error:" + e.getMessage());
            broken = RedisPool.handleJedisException(e);
        } finally {
            RedisPool.closeResource(jedis, broken);
        }
        return zrange;
    }

    /**
     * 移除并获取首个元素
     *
     * @return 如果没有值则返回空
     */
    public synchronized String zpop(String key) {
        String first = zgetFirst(key);
        zrem(key, first);
        return first;
    }

    public String zgetFirst(String key) {
        boolean broken = false;
        Jedis jedis = RedisPool.getJedis();
        if (jedis == null) {
            return null;
        }
        try {
            Set<String> zrange = jedis.zrange(key, 0, 0);
            if (zrange.size() > 0) {
                return zrange.iterator().next();
            }
        } catch (JedisException e) {
            logger.error("jedis zgetFirst error:" + e.getMessage());
            broken = RedisPool.handleJedisException(e);
        } finally {
            RedisPool.closeResource(jedis, broken);
        }
        return null;
    }

}
