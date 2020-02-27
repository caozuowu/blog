---
layout: post
author: zuowu
date:   2020-02-13 20:15:00 +0800
linkname: 'ch4 分治策略'
title:  "分治法"
categories: 
  - algorithm 
---
## 4.1 最大子数问题
 * 查找一串数字中的一个子序列的和,这个子序列是连续的,他们的和是这串数字中所有子序列的和中最大的    
   查找股票买入卖出点    
   > 从中间找一个数字,如果最大子数组不横跨这个数字,那么一定在两边,然后递归两边再从中间找    
   > 把两边递归的结构和本次查找结果比较,得出最大

{% highlight javascript %}
  {% include_relative src/ch4/max_sub_arr.js %}
{% endhighlight %}




