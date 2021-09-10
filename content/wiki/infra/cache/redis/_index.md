---
title: "Redis"
date: 2021-09-10T16:52:07+08:00
draft: true
author: Sunny
---

## Redis-Cli 基本用法

### 连接

```
redis-cli -h host -p port -a password -n database
```

如果连接成功，会进入交互式命令行（其中，host 后面的数字是第几个数据库，默认为 0，不显示，这里是 1）：

```
host[1]>
```

注意：

- -n 参数如果不传，默认连接第 0 个数据库。

### 模糊查找

#### keys

```
keys name*
```

#### scan

```
scan 0 match name*
```

