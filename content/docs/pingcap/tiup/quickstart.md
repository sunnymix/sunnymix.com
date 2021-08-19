---
title: "QuickStart"
date: 2021-08-15T22:12:50+08:00
lastmod: 2021-08-16T12:48:00+08:00
draft: true
weight: 1
author: "Sunny"
tags: ["tiup", "quickstart"]
---

## 安装

### TiUP

通过脚本安装：

```
> curl --proto '=https' --tlsv1.2 -sSf https://tiup-mirrors.pingcap.com/install.sh | sh

WARN: adding root certificate via internet: https://tiup-mirrors.pingcap.com/root.json
You can revoke this by remove /Users/sunny/.tiup/bin/7b8e153f2e2d0928.root.json
Successfully set mirror to https://tiup-mirrors.pingcap.com
Detected shell: zsh
Shell profile:  /Users/sunny/.zshrc
/Users/sunny/.zshrc has been modified to add tiup to PATH
open a new terminal or source /Users/sunny/.zshrc to use it
Installed path: /Users/sunny/.tiup/bin/tiup
===============================================
Have a try:     tiup playground
===============================================
```

查看TiUP版本：

```
> tiup -version

1.5.4 tiup
Go Version: go1.16.6
Git Ref: v1.5.4
GitHash: b629670276269cd1518eb28f362a5180135cc985
```

查看帮助文档：

```
> tiup -help

Usage:
  tiup [flags] <command> [args...]
  tiup [flags] <component> [args...]

Available Commands:
  install     Install a specific version of a component
  list        List the available TiDB components or versions
  uninstall   Uninstall components or versions of a component
  update      Update tiup components to the latest version
  status      List the status of instantiated components
  clean       Clean the data of instantiated components
  mirror      Manage a repository mirror for TiUP components
  telemetry   Controls things about telemetry
  completion  Output shell completion code for the specified shell (bash or zsh)
  env         Show the list of system environment variable that related to TiUP
  help        Help about any command or component
```

### MySQL Shell

```
> brew install homebrew/cask/mysql-shell

==> Downloading https://dev.mysql.com/get/Downloads/MySQL-Shell/mysql-shell-8.0.26-macos11-x86-64bit.dmg
==> Downloading from https://cdn.mysql.com//Downloads/MySQL-Shell/mysql-shell-8.0.26-macos11-x86-64bit.dmg
######################################################################## 100.0%
==> Installing Cask mysql-shell
==> Running installer for mysql-shell; your password may be necessary.
Package installers may write to any location; options such as `--appdir` are ignored.
Password:
installer: Package name is MySQL Shell 8.0.26
installer: Installing at base path /
installer: The install was successful.
🍺  mysql-shell was successfully installed!
```



## Playground

### Playground

安装Playground集群：

```
> tiup playground v5.0.0 --db 2 --pd 3 --kv 3 --monitor

The component `playground` version  is not installed; downloading from repository.
download https://tiup-mirrors.pingcap.com/playground-v1.5.4-darwin-amd64.tar.gz 7.28 MiB / 7.28 MiB 100.00% 1.29 MiB/s
Starting component `playground`: /Users/sunny/.tiup/components/playground/v1.5.4/tiup-playground v5.0.0 --db 2 --pd 3 --kv 3 --monitor
Using the version v5.0.0 for version constraint "v5.0.0".

If you'd like to use a TiDB version other than v5.0.0, cancel and retry with the following arguments:
    Specify version manually:   tiup playground <version>
    Specify version range:      tiup playground ^5
    The nightly version:        tiup playground nightly

Playground Bootstrapping...
The component `prometheus` version v5.0.0 is not installed; downloading from repository.
download https://tiup-mirrors.pingcap.com/prometheus-v5.0.0-darwin-amd64.tar.gz 39.78 MiB / 39.78 MiB 100.00% 1.78 MiB/s
download https://tiup-mirrors.pingcap.com/grafana-v5.0.0-darwin-amd64.tar.gz 43.91 MiB / 43.91 MiB 100.00% 1.17 MiB/s
Start pd instance
The component `pd` version v5.0.0 is not installed; downloading from repository.
download https://tiup-mirrors.pingcap.com/pd-v5.0.0-darwin-amd64.tar.gz 42.01 MiB / 42.01 MiB 100.00% 2.31 MiB/s
Start pd instance
Start pd instance
Start tikv instance
The component `tikv` version v5.0.0 is not installed; downloading from repository.
download https://tiup-mirrors.pingcap.com/tikv-v5.0.0-darwin-amd64.tar.gz 18.92 MiB / 18.92 MiB 100.00% 1.99 MiB/s
Start tikv instance
Start tikv instance
Start tidb instance
The component `tidb` version v5.0.0 is not installed; downloading from repository.
download https://tiup-mirrors.pingcap.com/tidb-v5.0.0-darwin-amd64.tar.gz 45.85 MiB / 45.85 MiB 100.00% 1.49 MiB/s
Start tidb instance
Waiting for tidb instances ready
127.0.0.1:4000 ... Done
127.0.0.1:4001 ... Done
Start tiflash instance
The component `tiflash` version v5.0.0 is not installed; downloading from repository.
download https://tiup-mirrors.pingcap.com/tiflash-v5.0.0-darwin-amd64.tar.gz 89.37 MiB / 89.37 MiB 100.00% 1.20 MiB/s
Waiting for tiflash instances ready
127.0.0.1:3930 ... Done
CLUSTER START SUCCESSFULLY, Enjoy it ^-^
To connect TiDB: mysql --host 127.0.0.1 --port 4001 -u root -p (no password) --comments
To connect TiDB: mysql --host 127.0.0.1 --port 4000 -u root -p (no password) --comments
To view the dashboard: http://127.0.0.1:2379/dashboard
PD client endpoints: [127.0.0.1:2379 127.0.0.1:2382 127.0.0.1:2384]
To view the Prometheus: http://127.0.0.1:9090
To view the Grafana: http://127.0.0.1:3000
```

### MySQL Shell

使用mysqlsh连接TiDB：

```
> mysqlsh --host 127.0.0.1 --port 4001 -u root -p

Please provide the password for 'root@127.0.0.1:4001':
Save password for 'root@127.0.0.1:4001'? [Y]es/[N]o/Ne[v]er (default No):
MySQL Shell 8.0.26

Copyright (c) 2016, 2021, Oracle and/or its affiliates.
Oracle is a registered trademark of Oracle Corporation and/or its affiliates.
Other names may be trademarks of their respective owners.

Type '\help' or '\?' for help; '\quit' to exit.
Creating a session to 'root@127.0.0.1:4001'
Fetching schema names for autocompletion... Press ^C to stop.
Your MySQL connection id is 9
Server version: 5.7.25-TiDB-v5.0.0 TiDB Server (Apache License 2.0) Community Edition, MySQL 5.7 compatible
No default schema selected; type \use <schema> to set one.
```

切换到SQL模式（MySQL Shell默认为JS模式）：

 ```
 > \sql
 
 Switching to SQL mode... Commands end with ;
 ```

切换数据库：

```
> use mysql;

Default schema set to `mysql`.
```

查询表：

```
> select user from user;

+------+
| user |
+------+
| root |
+------+
1 row in set (0.0009 sec)
```

