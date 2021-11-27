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

因为字符串易读，所以更容易检查，也就更容易保证正确性。

### 易用性

## 性能

字符串存储需要跟多的空间。数据库的字符串字段索引需要更多空间，查询也需要更多的时间。

所以客观的说，字符串的读写性价比都没有数字高。

但这些性能和成本的损失，相对于它的优点，综合来说是可以忽略不计的。

## 最佳实践

### 定义枚举类

搭配使用 Lombok 定义一个字符串风格的枚举类，value 属性代表枚举值，也能直观表达该值的字面含义。

```
@Getter
@AllArgsConstructor
public enum Gender {

    MALE("MALE", "男"),
    FEMALE("FEMALE", "女"),
    UNKNOWN("UNKNOWN", "未知");
    
    private String value;
    private String name;

}
```

### 定义枚举接口

方便之后以接口的方式获取枚举的属性：

```
public interface IEnum {

    String getValue();

    String getName();

}
```

因为搭配使用 Lombok 的 Getter 注解，也就自动实现了 IEnum 接口：

```
@Getter
@AllArgsConstructor
public enum Gender implements IEnum {
}
```

### 枚举对象的辅助工具类

从字符串字面量构造枚举值：

```
public class Enums {

    public static <T extends Enum<T>> T of(Class<T> enumType, String value) {
        if (enumType != null && enumType.isEnum() &&
                value != null && value.length() > 0) {
            T[] items = enumType.getEnumConstants();
            if (items.length > 0) {
                if (!(items[0] instanceof IEnum)) {
                    return null;
                }
                for (T item : items) {
                    if (((IEnum) item).getValue().equalsIgnoreCase(value)) {
                        return item;
                    }
                }
            }
        }
        return null;
    }

}
```

构造时，允许设置默认值：

```
public class Enums {

    public static <T extends Enum<T>> T of(Class<T> enumType, String value, T defaultEnum) {
        T item = of(enumType, value);
        if (item != null) {
            return item;
        }
        return defaultEnum;
    }

}
```

构造 Optional 类型的枚举值：

```
public class Enums {

    public static <T extends Enum<T>> Optional<T> ofNullable(Class<T> enumType, String value) {
        return Optional.ofNullable(of(enumType, value));
    }

}
```

在枚举类中接入工具类：

```
@Getter
@AllArgsConstructor
public enum Gender implements IEnum {

    MALE("MALE", "男"),
    FEMALE("FEMALE", "女"),
    UNKNOWN("UNKNOWN", "未知");

    private String value;
    private String name;

    public static Gender of(String value) {
        return Enums.of(Gender.class, value);
    }

    public static Gender of(String value, Gender defaultEnum) {
        return Enums.of(Gender.class, value, defaultEnum);
    }

}
```

在工具类的帮助下，构造枚举对象变得十分简单。
