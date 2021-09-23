---
title: "Self-Made Script Lang"
date: 2021-09-17T15:12:35+08:00
draft: false
author: Sunny
weight: 1
---

《两周自制脚本语言》千叶滋 2014-06



## 1.目录

### 1.1 基础 - 10天

#### [01 来，我们一起做些什么吧【Goal】](/wiki/reading/book/self-made-script-lang/01-goal/)

#### [02 设计程序语言【Lang】](/wiki/reading/book/self-made-script-lang/02-lang/)

#### [03 分隔单词【Lexer】](/wiki/reading/book/self-made-script-lang/03-lexer/)

#### [04 用于表示程序的对象【AST】](/wiki/reading/book/self-made-script-lang/04-ast/)

#### [05 设计语法分析器【Parser】](/wiki/reading/book/self-made-script-lang/05-parser)

#### [06 通过解释执行程序【Interpreter】](/wiki/reading/book/self-made-script-lang/06-interpreter)

#### [07 添加函数功能【Function】](/wiki/reading/book/self-made-script-lang/07-function)

#### [08 关联 Java 语言【Native】](/wiki/reading/book/self-made-script-lang/08-native)

#### [09 设计面向对象语言【OOP】](/wiki/reading/book/self-made-script-lang/09-oop)

#### [10 无法割舍的数组【Array】](/wiki/reading/book/self-made-script-lang/10-array)

### 1.2 性能优化 - 4天

#### [11 优化变量读写性能【Variable】](/wiki/reading/book/self-made-script-lang/11-variable)

#### [12 优化对象操作性能【OOP】](/wiki/reading/book/self-made-script-lang/12-oop)

#### [13 设计中间代码解释器【IR】](/wiki/reading/book/self-made-script-lang/13-ir)

#### [14 为 Stone 语言添加静态类型支持以优化性能【Type】](/wiki/reading/book/self-made-script-lang/14-type)

### 1.3 解说 - 5天

#### 15 手工设计词法分析器

#### 16 语法分析方式

#### 17 Parser 库的内部结构

#### 18 GluonJ 的使用方法

#### 19 抽象语法树与设计模式



## 2.章节

章节内容和产出：

| 章节和主题     | 内容概要     | 产出成果            |
| -------------- | ------------ | ------------------- |
| 01 Goal        | 全书的目标   |                     |
| 02 Lang        | 语言设计概述 |                     |
| 03 Lexer       | 词法分析     | 词法分析器：Lexer   |
| 04 AST         | 抽象语法树   | 节点类型：ast       |
| 05 Parser      | 语法分析     | 语法分析器：Parser  |
| 06 Interpreter | 解释运行     | 解释器：Interpreter |



## 3.统一语言

词汇表（采用简写风格）：

| 英文 | 中文       | 解释                    |
| ---- | ---------- | ----------------------- |
| id   | 标识符     | 指 identifier           |
| str  | 字符串     | 指 string               |
| pat  | 模式       | 指 pattern              |
| num  | 数字       | 指 int 类型的 number    |
| que  | 队列       | 指 queue                |
| idx  | 索引下标   | 指 index                |
| lex  | 词法分析器 | 指 lexer                |
| ast  | 抽象语法树 | 指 abstract syntax tree |
| expr | 表达式     | 指 express              |

