---
title: "Git Submodule"
author: "Sunny"
date: 2021-08-07T01:02:46+08:00
draft: true
tags: ["Git", "Submodule"]
---

## 添加子模块

## 删除子模块

1、删除.gitmodules文件中的子模块条目；

2、提交.gitdodules文件；

3、删除.git/config文件中的子模块条目；

4、删除缓存文件：

```
git rm --cached path_to_submodule
```

5、删除.git/modules中的子模块文件：

```
rm -rf .git/modules/path_to_submodule
```

6、提交所有修改：

```
git commit -m "Remove submodule."
```

7、删除物理文件：

```
rm -rf path_to_submodule
```

