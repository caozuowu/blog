---
layout: post
author: zuowu
date:   2020-03-09 15:58:00 +0800
linkname: 'ch7 快速排序'
title:  "快速排序"
categories:
  - algorithm 
---

### 描述

 * 将数组分为两部分，中间取一点p，使得左右两边一边全部比中间大另一边全部比中间小，然后用这种方法递归操作左右两边子数组。
 * PARTITION：把最后一个元素作为中间点并重新排列数组,复杂度 $Θ(n)$

{% highlight javascript %}
  {% include_relative src/ch7/quick-sort.js %}
{% endhighlight %}

#### 性能
 * 左右两边划分平衡接近归并排序，不平衡接近插入排序
 * 只要是常数划分都是 $n\log(n)$

### 随机版本
 * 先从 r 之前选出一个随机位置的数字与r交换，然后进行PARTITION
 * 期望运行时间 $n\log(n)$