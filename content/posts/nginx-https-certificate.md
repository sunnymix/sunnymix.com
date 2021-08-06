---
title: "Nginx配置Https证书"
author: "Sunny"
date: 2021-08-06T22:18:16+08:00
draft: true
---

## 步骤

1. 生成证书；
2. 配置证书；
3. 强转Https。

## 生成证书

### 自签证书

生成证书的bash脚本，certificate.sh：

```
#!/bin/sh

read -p "Input domain name [eg: example.com]: " DOMAIN
echo "Create key..."
openssl genrsa -des3 -out $DOMAIN.key 1024

echo "Create csr (certificate signing request)..."
SUBJ="/C=CN/ST=Shanghai/L=Shanghai/O=sunnymix/OU=sunnymix/CN=$DOMAIN"
openssl req -new -subj $SUBJ -key $DOMAIN.key -out $DOMAIN.csr

echo "Decrypt original key..."
mv $DOMAIN.key $DOMAIN.original.key
openssl rsa -in $DOMAIN.original.key -out $DOMAIN.key

echo "Create certificate..."
openssl x509 -req -days 3650 -in $DOMAIN.csr -signkey $DOMAIN.key -out $DOMAIN.crt

echo "Done:"
ls -1 $DOMAIN.*
```

使用certificate.sh生成证书：

```
> ./certificate.sh
```

完整生成过程：

```
Input domain name [eg: example.com]: 
> sunnymix.local
Create key...
Generating RSA private key, 1024 bit long modulus
........++++++
...............................................++++++
e is 65537 (0x10001)
Enter pass phrase for sunnymix.local.key:
> 输入密码
Verifying - Enter pass phrase for sunnymix.local.key:
> 确认密码
Create csr (certificate signing request)...
Enter pass phrase for sunnymix.local.key:
> 输入密码
Decrypt original key...
Enter pass phrase for sunnymix.local.original.key:
> 输入密码
writing RSA key
Create certificate...
Signature ok
subject=/C=CN/ST=Shanghai/L=Shanghai/O=sunnymix/OU=sunnymix/CN=$DOMAIN
Getting Private key
Done:
sunnymix.local.crt
sunnymix.local.csr
sunnymix.local.key
sunnymix.local.original.key
```



## 配置证书

### 导入和信任证书

Mac通过“钥匙串访问”工具导入证书，导入后打开证书信息，打开信任-始终信任。

### Nginx配置证书

将证书拷贝到Nginx配置文件夹：

```
cp sunnymix.local.crt /usr/local/etc/openresty/conf.d/ssl/
cp sunnymix.local.key /usr/local/etc/openresty/conf.d/ssl/
```

修改Nginx配置：

```
server {
    server_name  sunnymix.local;
    listen 80;
    listen 443 ssl;

    ssl_certificate /usr/local/etc/openresty/conf.d/ssl/sunnymix.local.crt;
    ssl_certificate_key /usr/local/etc/openresty/conf.d/ssl/sunnymix.local.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    ...
}
```



## 强转Https

Nginx配置：

```
server {
    server_name  sunnymix.local;
    listen 80;
    listen 443 ssl;

    ssl_certificate /usr/local/etc/openresty/conf.d/ssl/sunnymix.local.crt;
    ssl_certificate_key /usr/local/etc/openresty/conf.d/ssl/sunnymix.local.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    
    if ($server_port = 80) {
        rewrite ^(.*)$ https://$host$1 permanent;
    }
    ...
}
```

