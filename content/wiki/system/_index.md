---
title: "System"
draft: true
weight: 13
author: Sunny
---

## 集群与分布式

### 工作原理

- 集群的本质是复制。将一个系统复制出多个，然后通过上层的负载均衡，来提升整体的服务能力和稳定性。实例与实例是完全对等的，它们在功能上没有任何差异。一个实例能够完成全部的工作。
- 分布式的本质是分工。将一个系统分为多个部件，各个部件有不同的分工和统一的协作方式，一个任务会拆分给多个部件以最高效的方式并行完成。一个部件只能完成部分的工作。

### 解决问题

它们解决了3个不同维度的问题：

- 吞吐：集群可以提升系统的吞吐，让系统尽可能多的处理请求。
- 稳定：集群可以提升系统的稳定性，让系统尽可能不间断的处理请求。
- 延迟：分布式可以降低单个请求的处理时间，让系统尽可能快的处理完一个请求。

### 分布式集群

- 可以综合集群与分布式的优势，建造更快、更高效、更稳定的系统。

参考：

- [Difference between Distributed and Cluster? What is a cloud computing platform? Distributed application scenarios?](https://medium.com/@mena.meseha/difference-between-distributed-and-cluster-aca9d50c2c44)
- [What is a Distributed System?](https://blog.stackpath.com/distributed-system/)
- [What Are Distributed Systems?](https://www.splunk.com/en_us/data-insider/what-are-distributed-systems.html)

