---
title: "Java 手册 *"
date: 2021-12-03T16:08:00+08:00
draft: false
author: "Sunny"
---

## 获取包下的所有类

> Get all classes within a package

引入依赖：

```
org.reflections:reflections:0.9.12
```

例子，获取包下的所有枚举类：

```
@SuppressWarnings("unchecked")
public static Set<Class<? extends Enum>> getEnums(String packageName) {
    Reflections reflections = new Reflections(packageName, new SubTypesScanner(false));
    Set<Class<? extends Enum>> types = reflections.getSubTypesOf(Enum.class);
    return types;
}
```

参考：

- [Finding All Classes in a Java Package](https://www.baeldung.com/java-find-all-classes-in-package)
- [Get All Classes Within A Package](https://dzone.com/articles/get-all-classes-within-package)



## 主动忽略警告

```
@SuppressWarnings("unchecked")
```

