---
layout: post
author: zuowu
date:   2020-02-07 18:34:00 +0800
linkname: 'ch2 算法基础'
title:  "算法基础"
categories: 
  - home
  - algorithm 
---

## 2.1 插入排序
  * 时间复杂度 n^2
{% highlight javascript %}
  {% include_relative src/ch2/insert_srot.js %}
{% endhighlight %}


## 2.3 分治法 归并排序
 * `MERGE`: 合并两个数组,选取两个数组顶部最小的,`MERGE_SORT`: 递归直到对一个元素进行排序 然后返回
 * 时间复杂度 log(n) 递归树分析
{% highlight javascript %}
  {% include_relative src/ch2/merge_sort.js %}
{% endhighlight %}


### 练习
#### 2.1-4 两个n位二进制整数,存储在n元数组A和B中,这两个二进制整数的和按照二进制形式存储在(n+1)元数组C中

{% highlight javascript %}
  {% include_relative src/ch2/p2.1-4.js %}
{% endhighlight %}

#### 2.2-2 选择排序

{% highlight javascript %}
  {% include_relative src/ch2/p2.2-2.js %}
{% endhighlight %}

#### 2.3-2 重写MERGE，不使用哨兵

{% highlight javascript %}
  {% include_relative src/ch2/p2.3-2.js %}
{% endhighlight %}

#### 2.3-4 插入排序 递归

{% highlight javascript %}
  {% include_relative src/ch2/p2.3-4.js %}
{% endhighlight %}

#### 2.3-5 二分查找

{% highlight javascript %}
  {% include_relative src/ch2/p2.3-5.js %}
{% endhighlight %}

### 思考题