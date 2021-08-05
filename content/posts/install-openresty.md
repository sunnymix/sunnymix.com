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

查看OpenResty命令位置：

```
which openresty
-> /usr/local/bin/openresty
```

查看OpenResty命令安装位置：

```
ll /usr/local/opt/openresty
-> /usr/local/opt/openresty -> ../Cellar/openresty/1.19.3.2_1
```



## 启动

Export OpenResty home path:

```
export OPENRESTY_HOME=/usr/local/opt/openresty
```

Export OpenResty embeded nginx server to environment path:

```
export PATH=$PATH:$OPENRESTY_HOME/nginx/sbin
```

Update nginx.conf at /usr/local/etc/openresty:

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

Start nginx server:

```
nginx -p /usr/local/etc/openresty -c nginx.conf
```

Test nginx server:

```
curl http://localhost
-> <p>nginx version: openresty/1.19.3.2</p>
```



## 常用命令

Export openresty home and nginx server path:

```
export OPENRESTY_HOME=/usr/local/opt/openresty
export PATH=$PATH:$OPENRESTY_HOME/nginx/sbin
```

Go to openresty home:

```
alias openresty.home="cd $OPENRESTY_HOME"
```

Start nginx server with working path and config file:

```
alias openresty.start="nginx -p /usr/local/etc/openresty -c nginx.conf"
```

Hot reload nginx server config:

```
alias openresty.reload="nginx -s reload"
```

Stop nginx server:

```
alias openresty.stop="nginx -s stop"
```



## 管理配置文件夹

Create config directory at working path (/usr/local/etc/openresty):

```
mkdir conf.d
```

Create localhost config file:

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

Include config files in nginx.conf:

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











