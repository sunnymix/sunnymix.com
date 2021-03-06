---
title: "MacPorts 手册"
date: 2021-10-31T22:46:00+08:00
draft: false
author: "Sunny"
---

MacPorts 原名 DarwinPorts，是 macOS 和 Darwin 操作系统的软件包管理系统，用于简化软件的安装和管理。

## 1 官方资料

- [MacPorts Guide](https://guide.macports.org/)
- [MacPorts Ports](https://ports.macports.org/)



## 2 常用命令

### 2.1 search 搜索

```
$ port search <package-name>
```

### 2.2 install 安装

```
$ sudo port install <package-name>
```



## 3 常用软件

### 3.1 pcre

Nginx 必备软件。

```
$ sudo port install pcre
```

### 3.2 openssl

Nginx 必备软件。

```
$ sudo port install openssl
```



## 4 常见问题

### 4.1 安装过程中断

原因：国内无法访问国外镜像。

解决：

1. 强制退出安装程序；
2. 关闭后台安装程序：ps aux | grep install ； kill -9 pid ；
3. 修改国内安装源：从 trac.macports.org/wiki/Mirrors 查找国内镜像；修改配置文件 /opt/local/etc/macports/sources.conf ： rsync://pek.cn.rsync.macports.org/macports/release/tarballs/ports.tar [default] ；
4. 重新运行安装程序。

