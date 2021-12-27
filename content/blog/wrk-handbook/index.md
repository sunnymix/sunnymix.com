---
title: "Wrk 手册 *"
date: 2021-12-26T21:05:00+08:00
draft: false
author: "Sunny"
---

## 安装

下载源码：

```
$ git clone wrk
```

编译安装：

```
$ cd wrk && make
```

链接到用户 bin：

```
$ sudo ln -s /path/to/install/wrk /usr/local/bin/wrk
$ sudo chmod 755 /usr/local/bin/wrk
```

检查安装版本：

```
$ wrk -v
```



## 入门

### 1. 基本用法

```
$ wrk -c1 -d1s -t1 https://www.baidu.com --latency
--------------------------------------------------
Running 1s test @ https://www.baidu.com
  1 threads and 1 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    17.84ms    4.08ms  35.42ms   90.57%
    Req/Sec    52.70     10.38    60.00     80.00%
  Latency Distribution
     50%   16.89ms
     75%   17.59ms
     90%   21.38ms
     99%   35.42ms
  53 requests in 1.01s, 543.25KB read
Requests/sec:     52.70
Transfer/sec:    540.16KB
```

### 2. 使用脚本

```
wrk -c1 -d1s -t1 --latency https://www.baidu.com -s api.lua
```



## 进阶

### 1. 随机测试样本

### 2. 高效随机样本



## 参考

- [压测工具之wrk](https://alexanderwangsgithub.github.io/blog/wrk.html)