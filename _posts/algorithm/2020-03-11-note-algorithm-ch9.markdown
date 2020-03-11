---
layout: post
author: zuowu
date:   2020-03-11 19:04:00 +0800
linkname: 'ch9 中位数和顺序统计量'
title:  "中位数和顺序统计量"
categories:
  - algorithm 
---

### 期望为线性时间选择算法

 * 找出数组中第n小的元素    
   RANDOMIZED-SELECT最坏运行时间为$Θ(n^2)$，但是由于RANDOM_PARTITION随机可以使递归树平衡，而每次递归也只选择一边进行计算所以期望运行时间为 $Θ(n)$
{% highlight javascript %}
  {% include_relative src/ch9/randomized-select.js %}
{% endhighlight %}

### 最坏为线性时间选择算法
 * 完全看不懂。。。。