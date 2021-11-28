---
title: "MySQL 手册 *"
date: 2021-11-28T14:00:00+08:00
draft: false
author: "Sunny"
---

## 规范

### Column

#### 时间：Datetime, Timestamp

统一精确到毫秒。

```
`created` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
```

## 用法

### Table

#### Auto_Increment

```
alter table table_name auto_increment = 0
```

