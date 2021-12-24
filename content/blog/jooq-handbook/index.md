---
title: "JOOQ 手册 *"
date: 2021-12-18T00:18:00+08:00
draft: false
author: "Sunny"
---

基于 Gradle 实现。

## 与 SpringBoot 快速集成

### 1. 依赖项

- spring-boot-starter-web
- mysql:mysql-connector-java
- org.springframework.boot:spring-boot-starter-jooq
- org.jooq:jooq-meta
- org.jooq:jooq-codegen

### 2. Gradle 插件

- org.springframework.boot
- io.spring.dependency-management
- java
- nu.studer.jooq

### 3. Jooq 插件

配置：

- dependencies
- generationTool

使用 Jooq Generate 插件：

- jooq / generateJooq

### 4. 使用 Jooq Sql

- getDsl().selectCount().from(Tables.MODEL).fetchOneInto(long.class) 
