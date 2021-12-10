---
title: "Spring Web 手册 *"
date: 2021-12-05T18:22:00+08:00
draft: false
author: "Sunny"
---

## Controller

### @RequestParam

```
(@RequestParam(required = false, name = "param_name") String paramName)
```

## UriComponents

Uri 通用组件，提供了很多 URL 相关的辅助方法。

引入：

```
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;
```

用法：

```
UriComponents uri = UriComponentsBuilder.fromUriString("url").build()
```

