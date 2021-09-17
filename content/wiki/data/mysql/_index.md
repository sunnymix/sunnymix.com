---
title: "Mysql"
date: 2021-09-17T09:43:13+08:00
draft: true
author: Sunny
weight: 1
---

## 1. 速查手册

### 1.1 DDL

#### 1.1.1 Database

（1）Create Database

#### 1.1.2 Table

（1）Create Table

```mysql
create table `tb` (
    `id` bigint(20) unsigned not null auto_increment,
    `name` varchar(50) not null,
    `created` datetime not null default current_timestamp,
    `updated` datetime not null default current_timestamp on update current_timestamp,
    primary key (`id`)
)
```

#### 1.1.3 Column

（1）Add Column

```mysql
alter table `tb` add `col` varchar(50) default null after `col`
```

（2）Drop Column

```mysql
alter table `tb` drop `col`
```

（3）Change Coumn

```mysql
alter table `tb` change `col` `col02` varchar(50) default null after `col`
```

### 1.2 DML

### 1.3 Query

