---
title: "StandAlone"
date: 2021-08-16T13:09:00+08:00
lastmod: 2021-08-16T13:09:00+08:00
draft: true
weight: 1
author: "Sunny"
tags: ["flink", "deploy"]
---

## 前置条件

- Java 环境

## 部署步骤

### Flink

下载页面：https://flink.apache.org/downloads.html（关闭VPN，刷新页面，会推荐最佳下载地址）

下载地址：https://mirrors.bfsu.edu.cn/apache/flink/flink-1.13.2/flink-1.13.2-bin-scala_2.11.tgz

下载：

```
> wget https://mirrors.bfsu.edu.cn/apache/flink/flink-1.13.2/flink-1.13.2-bin-scala_2.11.tgz
```

解压：

```
> tar -xzvf flink-1.13.2-bin-scala_2.11.tgz
```

启动：

```
> cd bin & ./start-cluster.sh
```

