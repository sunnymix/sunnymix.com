---
title: "Flink Back Pressure"
date: 2021-08-09T19:31:50+08:00
draft: true
author: "Sunny"
tags: ["flink", "back-pressure"]
---

## Flink官方指导

### [Monitoring Back Pressure](https://ci.apache.org/projects/flink/flink-docs-master/docs/ops/monitoring/back_pressure/)

### [How to identify the source of backpressure?](https://flink.apache.org/2021/07/07/backpressure.html)

#### （1）背压是什么（下游瓶颈引发上游性能问题，上下游负载失衡）

#### （2）背压探源（发现和溯源系统瓶颈）

#### （3）背压如何处理（处理系统瓶颈）

两种宏观方法：

- 加资源：节点，CPU，内存，网卡，磁盘。
- 优化资源使用方式：代码，配置，数据倾斜。

分析背压的根因：

- 确认背压出现的场景。
- 定位引发背压的机器/任务。
- 深入挖掘引发问题的代码，以及是什么资源不足。

分析工具：

- Flink背压监控和指标可以帮助解决前两个问题点。
- 第3个问题需要借助代码采样（Profiling）工具，生产火焰图（Flame Graphs）帮助直观找到问题（Flink 1.13已集成到web UI）。

### [Monitoring, Metrics, and that Backpressure Thing](https://flink.apache.org/2019/07/23/flink-network-stack-2.html)

关键检查项，从简单到复杂：

#### （1）系统资源

其中的一些资源使用率过高：

1. 优化代码。
2. 调整资源配比。
3. 简单横向扩展，加资源。

#### （2）GC

性能问题常常是由GC停顿引发的，深入分析程序GC。

#### （3）CPU/线程瓶颈

热点线程抢占CPU资源。

#### （4）线程竞争（Thread Contention）

主要指锁引发的问题。

#### （5）负载倾斜（Load Imbalance）

主要指数据倾斜引发的问题。

## 理解背压

- 背压：
    - 环境：由多个任务构成的作业流水线中
    - 起因：下游任务瓶颈引发上游任务性能问题
    - 发现：系统能主动发现和反馈背压，提供主动处理背压的机制

## 背压处理策略

编辑中
