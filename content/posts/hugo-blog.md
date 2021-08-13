---
title: "Hugo创建Blog"
author: "Sunny"
date: 2021-08-01T22:06:16+08:00
draft: true
tags: ["hugo", "blog"]
---

## 内容管理

### 技巧

#### 使用RESTful API的思想，来组织文章体系

首先，每一篇文章都应该有且仅有一个核心主题，主题对应的就是REST中资源的概念。

其次，文章讨论的内容都是主题的延伸，而且这延伸是有主旨、范围和边界的，不能无限延伸。

这种组织形式可以应用到文章的名称和标题上，比如：

- hugo-blog.md：Hugo创建Blog
- hugo-theme.md：Hugo主题配置
- openresty-install.md：OpenResty安装和使用
- ...

通过统一的组织模式管理文章，可以让文章和内容更容易被找到和使用；而且就算文章有很多也没关系，因为有良好的秩序使文章在有序的空间中增长，文章不会因为时间而变得混乱。所以，应该从一开始就思考并建立稳定和良性的秩序。

## 静态资源管理

### 相对路径引用

步骤1：创建一个与文章同名的文件夹

步骤2：把文章放到同名文件夹中

步骤3：把文章重命名为index.md

步骤4：将静态资源放到文件夹中

步骤5：在index.md中通过相对路径引用静态资源

改造前后效果：

```
# 改造前：
content/posts/article-name.md

# 改造后：
content/posts/article-name/
- index.md
- image.png

## index.md中引用图片：
![image](image.png)
```

## 树形菜单

待补充
