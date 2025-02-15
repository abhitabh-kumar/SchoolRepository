//package com.example.cache.config;
//
//import org.ehcache.jsr107.EhcacheCachingProvider;
//import org.springframework.cache.annotation.EnableCaching;
//import org.springframework.cache.jcache.JCacheCacheManager;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import javax.cache.CacheManager;
//import javax.cache.Caching;
//import javax.cache.spi.CachingProvider;
//import java.net.URL;
//
//@Configuration
//@EnableCaching
//public class CacheConfig {
//
//    @Bean
//    public CacheManager cacheManager() {
//        try {
//            CachingProvider cachingProvider = Caching.getCachingProvider(EhcacheCachingProvider.class.getName());
//            URL ehcacheConfig = getClass().getResource("/ehcache.xml");
//            return cachingProvider.getCacheManager(ehcacheConfig.toURI(), getClass().getClassLoader());
//        } catch (Exception e) {
//            throw new RuntimeException("Failed to initialize CacheManager", e);
//        }
//    }
//}
