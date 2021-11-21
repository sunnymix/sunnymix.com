---
title: "Enum 风格的抉择 *"
date: 2021-11-10T23:00:00+08:00
draft: false
author: "Sunny"
---

大家可能都觉得 Enum 是小得不能再小的常识问题了，这还有什么好讨论的呢？

但我想说的是，Enum 风格是一个会改变项目命运的抉择。

先来看看，目前两种最常见的 Enum 风格，

一是字符串风格：

```
@AllArgsConstructor
@Getter
public enum UserType {
    PATIENT("PATIENT", "患者"),
    DOCTOR("DOCTOR", "医生"),
    STAFF("STAFF", "员工");
    
    private final String value;
    private final String name;
}
```

二是数字风格：

```
@AllArgsConstructor
@Getter
public enum UserType {
    PATIENT(1, "患者"),
    DOCTOR(2, "医生"),
    STAFF(3, "员工");
    
    private final Integer value;
    private final String name;
}
```

从表面上看，两者的区别在于 value 的表达方式上，一种使用数字，另一种使用文本字符串。

接下来，我们从多个维度分析分析这两种风格的优缺点。

## 可读性

### 代码可读性

```
字符串：UserType.PATIENT
vs
数字：UserType.PATIENT
```

在代码中使用枚举值，两种编码风格没有区别。

### 数据可读性

```
字符串："PATIENT"
vs
数字：1
```

在序列化或存储时使用字符串，只要命名得当，枚举值的含义一目了然。

但是，如果使用数字，除非有数据字典或元数据，读者无法知晓数字代表的含义。而且就算有数据字典或元数据，维护枚举的外部字典本身就是沉重的负担（考虑字典的及时性、正确性）。

## 实用性

### 正确性

### 易用性

## 性能

