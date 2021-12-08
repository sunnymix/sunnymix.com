---
title: "Hugo 手册 *"
date: 2021-12-09T01:24:00+08:00
draft: false
author: "Sunny"
---

## 设置基础路径

修改 2 处配置即可（config.toml）：

1. baseURL 基础路径，所有链接会自动添加 baseURL，如，/base/
2. publishDir 编译内容的发布文件夹（可以是相对路径），如，public/base/

完成上述设置后，再配合 Nginx 的静态资源代理，就能够将 Hugo 应用部署在独立的子目录中，这样可以避免影响到现存的子目录，实现安全的集成。

Nginx 配置示例：

```
location /base {
    default_type text/html;
    root /path/to/hugo-app/public;
}
```

Hugo 页面访问地址：

```
https://current.domain.com/base/...
```
