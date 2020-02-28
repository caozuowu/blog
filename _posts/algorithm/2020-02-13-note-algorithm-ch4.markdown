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

 * 算法分析     
   T(n) = {Ø(1) (n=1) , 2TØ(n/2) + Ø(n) (n>1) }    
   复杂的 nlog(n): 每个递归层都是n次计算,一共递归log(n)次 (递归图法)  

### 练习  
#### 4.1-2 对最大子数问题编写暴力求解代码
{% highlight javascript %}
  {% include_relative src/ch4/p4.1-2.js %}
{% endhighlight %}

#### 4.1-5 设计一个非递归,线性时间最大子数问题算法,从左边界开始向右查找,记录最大子数组。若已知A[0, k] 的最大子数组,机遇如下性质奖解扩展为 A[0, k+1]的最大子数组：A[0, k+1]的最大子数组要么是A[0, k]的最大子数组，要么是A[i, k+1](0<=i<=k+!)。在已知A[0,k]的最大子数组的情况下,可以在线性时间内找出形如A[i, k+1]内的最大子数组。
S=现有已知最大,然后直接从A[k+1]往后查找比较？   

## 4.2 矩阵乘法的Strassen算法
{% highlight javascript %}
  {% include_relative src/ch4/matrix.js %}
{% endhighlight %}






