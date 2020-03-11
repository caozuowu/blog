---
layout: post
author: zuowu
date:   2020-03-09 20:00:00 +0800
linkname: 'ch8 线性时间排序'
title:  "线性时间排序"
categories:
  - algorithm 
---

### 线性时间排序

#### 排序算法下界

决策树:任何通过比较的排序可以用决策树模型表示，为一个完全二叉树，最下面一层为n个节点相当于n种比较过程，而树高log(n)，所以最坏情况下就是用尽了n种过程而每一次都是经过log(n)次计算，所以比较排序最欢情况都是$Θ(n\log(n))$

#### 计数排序
 * 复杂度 $Θ(n)$
{% highlight javascript %}
  {% include_relative src/ch8/counting-sort.js %}
{% endhighlight %}

#### 基数排序

#### 桶排序

 * 复杂度 $Θ(n)$

```
BUCKET-SORT(A)
  n = A.length
  let B[0...n-1] be a new array
  for i = 0 to n-1
    make B[i] an empty list
  for i = 1 to n
    insert A[i] into list B[nA[i]]
  for i = 0 to n-1
    sort list B[i] with insertion sort
  concatenate the list B[0] to B[n-1]
```