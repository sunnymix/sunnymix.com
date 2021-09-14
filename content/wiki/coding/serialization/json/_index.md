---
title: "Json"
date: 2021-09-14T21:53:16+08:00
draft: true
author: Sunny
---

## Java

### [Jackson (FasterXML)](https://github.com/FasterXML/jackson)

### [Fastjson (alibaba)](https://github.com/alibaba/fastjson)

## [Spring Redis Json Serializer](https://docs.spring.io/spring-data/redis/docs/current/api/org/springframework/data/redis/serializer/GenericJackson2JsonRedisSerializer.html)

会在序列化的 Json 对象中添加类型标记（`@class`），以支持反序列化成原始类型。

```
{
	"@class": "package.ClassName",
	...
}
```

