---
title: "Install Openresty"
date: 2021-08-01T22:13:59+08:00
draft: true
---

## 1. Install

Install the OpenResty with homebrew:

```
brew install openresty/brew/openresty
```

Check OpenResty version:

```
openresty -v
------>
nginx version: openresty/1.19.3.2
```

Check installed location:

```
which openresty
------>
/usr/local/bin/openresty
```

Check current installed files:

```
ll /usr/local/opt/openresty
```



## 2. First start

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
------>
<p>nginx version: openresty/1.19.3.2</p>
```



## 3. Useful commands

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



## 4. Manage config directory

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





















