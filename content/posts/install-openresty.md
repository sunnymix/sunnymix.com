---
title: "安装OpenResty"
date: 2021-08-01T22:13:59+08:00
draft: true
tags:
  - "OpenResty"
---

## 安装

使用Homebrew安装OpenResty：

```
brew install openresty/brew/openresty
```

安装成功后查看OpenResty的版本：

```
openresty -v
-> nginx version: openresty/1.19.3.2
```

查看OpenResty位置：

```
which openresty
-> /usr/local/bin/openresty
ll /usr/local/bin/openresty
-> /usr/local/bin/openresty -> ../Cellar/openresty/1.19.3.2_1/bin/openresty
```

查看当前版本的OpenResty安装位置（该位置不会因为版本升级而改变，可以放心引用）：

```
ll /usr/local/opt/openresty
-> /usr/local/opt/openresty -> ../Cellar/openresty/1.19.3.2_1
```



## 启动

将当前版本的OpenResty安装配置配置为`OPENRESTY_HOME`：

```
export OPENRESTY_HOME=/usr/local/opt/openresty
```

将当前版本的OpenResty内置的Nginx添加到`PATH`环境变量：

```
export PATH=$PATH:$OPENRESTY_HOME/nginx/sbin
```

配置默认localhost站点，使用lua输出OpenResty的版本号：

```
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include            mime.types;
    default_type       text/html;
    sendfile           on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  localhost;

        location / {
            content_by_lua_block {
                ngx.say("<p>nginx version: openresty/1.19.3.2</p>")
            }
        }
    }
}
```

启动Nginx服务器，指定工作目录和配置文件：

```
nginx -p /usr/local/etc/openresty -c nginx.conf
```

测试默认localhost站点：

```
curl http://localhost
-> <p>nginx version: openresty/1.19.3.2</p>
```



## 常用命令

配置OpenResty的HOME目录，添加Nginx到PATH环境变量：

```
export OPENRESTY_HOME=/usr/local/opt/openresty
export PATH=$PATH:$OPENRESTY_HOME/nginx/sbin
```

切换到OpenResty的HOME目录：

```
alias openresty.home="cd $OPENRESTY_HOME"
```

启动Nginx服务器：

```
alias openresty.start="nginx -p /usr/local/etc/openresty -c nginx.conf"
```

热更新Nginx的配置文件：

```
alias openresty.reload="nginx -s reload"
```

停止Nginx服务器：

```
alias openresty.stop="nginx -s stop"
```



## 管理配置文件夹

创建统一文件夹管理配置文件，在`/usr/local/etc/openresty`：

```
mkdir conf.d
```

拆分独立的localhost站点配置文件：

```
server {
    listen       80;
    server_name  localhost;

    location / {
        content_by_lua_block {
            ngx.say("<p>nginx version: openresty/1.19.3.2</p>")
        }
    }
}
```

在Nginx主配置文件中导入配置文件夹中的所有配置文件：

```
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include            mime.types;
    default_type       text/html;
    sendfile           on;
    keepalive_timeout  65;
    include            conf.d/*.conf;
}
```











