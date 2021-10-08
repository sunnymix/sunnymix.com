---
title: "03 Hash Containers - 编写中"
date: 2021-10-08T15:58:00+08:00
draft: false
author: Sunny
---

## 内容

- Hash Table 哈希表
- Set 无序集合
- Map 映射

## Hash Table 哈希表 - 编写中

## Set 无序集合 - 编写中

## Map 映射 - 编写中

## LRU 实践 - 编写中

### 背景

应用场景：Cache 缓存

缓存的两个要素：大小，替换策略

常见替换算法：LRU，LFU

- LRU - least recently used，最近最少使用（淘汰最旧数据）
- LFU - least frequency used，最不频繁使用（淘汰频次最少数据）

### 设计

数据结构：

- 线形表（链表）：
    - 按时间顺序，重新到旧排列
    - 头部插入
    - 尾部删除
    - 从中间删除（旧数据再次被使用）
- 索引（map）：
    - 映射：元素所在位置（节点的引用）
    - 快速查找元素（去删除）

思路：根据功能需求选择合适的数据结构。

### 实现

```
public class LRUCache {
    private static class Node {
        int key;
        int value;
        Node pre;
        Node next;

        Node() {
        }
    }

    private final int capacity;
    private final Node head;
    private final Node tail;
    private final HashMap<Integer, Node> h;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        head = new Node();
        tail = new Node();
        head.next = tail;
        tail.pre = head;
        h = new HashMap<>();
    }

    public int get(int key) {
        Node node = h.get(key);
        if (node == null) return -1;
        _remove(node);
        _insert(head, node);
        return node.value;
    }

    public void put(int key, int value) {
        Node node = h.get(key);
        if (node == null) {
            node = new Node();
            node.key = key;
            node.value = value;
            h.put(key, node);
            _insert(head, node);
            if (h.size() > capacity) {
                // 注意：要先删索引
                h.remove(tail.pre.key);
                _remove(tail.pre);
            }
        } else {
            node.value = value;
            _remove(node);
            _insert(head, node);
        }
    }

    private void _remove(Node node) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
    }

    private void _insert(Node p, Node node) {
        p.next.pre = node;
        node.next = p.next;
        p.next = node;
        node.pre = p;
    }
}
```

