---
title: "Git Submodule"
author: "Sunny"
date: 2021-08-07T01:02:46+08:00
draft: true
tags: ["Git"]
---

## 添加子模块

## 删除子模块

1、

逆初始化模块：

```
git submodule deinit MODULE_NAME
```

清空缓存：

```
git rm --cached MODULE_NAME
```

提交：

```
git commit -am "Remove submodule MODULE_NAME."
```

