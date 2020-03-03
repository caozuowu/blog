---
layout: post
author: zuowu
date:   2020-03-03 13:58:00 +0800
linkname: 'ch6 堆排序'
title:  "堆排序"
categories:
  - algorithm 
---

### 堆
  * (二叉)堆是一个数组，可以看成一个完全二叉树，heap-size：堆大小, length：数据大小 0 <= heap-size <= length
  * __可以通过计算得到任意节点的左右子节点以及父节点，数组从0开始，书上是从1开始所以不一样__  PARENT: (i-1)/2，LEFT: 2i+1，RIGHT: 2i+2
  * __计算节点parent,left,right 可以通过位运算完成，写成宏或者内联函数提高效率.....__

#### 维护最大堆
 * $T(n) = O(\lg(n))$

#### 建堆
 * 从倒数第二层最后一个依次向上维护最大堆
 * $T(n) = O(n)$

#### 堆排序
 * 先构建最大堆，最大的总是0，然后弹出0然后再构建，依次得到排序好的数组


{% highlight javascript %}
  {% include_relative src/ch6/heap.js %}
{% endhighlight %}

### 优先队列
