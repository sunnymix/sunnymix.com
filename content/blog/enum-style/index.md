---
title: "Enum 风格的抉择 *"
date: 2021-11-10T23:00:00+08:00
draft: false
author: "Sunny"
---

大家可能都觉得 Enum 是小得不能再小的常识问题了，这还有什么好讨论的呢？

但我想说的是，Enum 风格是一个会改变项目命运的抉择。

先来看看，目前两种最常见的 Enum 风格，

一是数字风格：

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

二是字符串风格：

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

从表面上看，两者的区别在于 value 的表达方式上，一种使用数字，另一种使用文本字符串。

接下来，我们从多个维度分析分析这两种风格的优缺点。

