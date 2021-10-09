---
title: "04 Sum Diff Slide 前缀和 差分 滑动窗*"
date: 2021-10-08T17:17:00+08:00
draft: false
author: Sunny
---

## 前缀和、差分思想

两者一个是求和一个是求差，两者是互逆思想

两者都是用空间换时间、空间时间平衡的思想

### 前缀和模型

- 一维数组 A
- 前缀和数组 S：S[i] = S[i - 1] + A[i]
- 子段和：A 中第 l 个数到第 r 个数的和：sum(l, r) = S[r] - S[l - 1]

### 前缀和应用 - 统计优美子数组

问题分析：

- 奇数看作 1，偶数看作 0，求前缀和数组 S （范围：0 ~ n）
- 连续子数组 [l, r] 中奇数个数为 S[r] - S[l - 1] （= k）
- 枚举右端 i （r），找到 i （r）前面有多少个 j （l - 1）满足 S[i] - S[j] = k 

解题：

- 用一个计数数组或 hash map 维护 S 中每个值的个数
- 枚举右端 i ，找出等于 S[i] - k 的值有几个

代码：

```
public static int numberOfSubarrays(int[] nums, int k) {
    int res = 0;
    int n = nums.length;
    int[] s = new int[n + 1];
    s[0] = 0;
    for (int i = 1; i <= n; i++) s[i] = s[i - 1] + nums[i - 1] % 2;
    int[] count = new int[n + 1];
    count[s[0]]++;
    for (int i = 1; i <= n; i++) {
        if (s[i] - k >= 0) res += count[s[i] - k];
        count[s[i]]++;
    }
    return res;
}
```

### 二维前缀和

## 双指针扫描、滑动窗口

