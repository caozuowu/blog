---
layout: post
author: zuowu
date:   2020-04-07 10:46:00 +0800
linkname: 'ch15 动态规划'
title:  "动态规划"
categories:
  - algorithm 
---

### 钢条切割

|--|--|--|
|长度|1|2|3|4|5 |6 |7 |8 |9 |10|
|价格|1|5|8|9|10|17|17|20|24|30|    

 * 长度为n的钢条切割成i段收益最大
 * 递归实现，最大为前i个和后面搜索 (n-i)个最大解(从i开始在重复递归搜索)之和
{% highlight javascript %}
    {% include_relative src/ch15_cut_rod.js %}
{% endhighlight %}
 * 对于n 有 $2^n-1 种分割方法，T(cut) = T(2^n)$

#### 动态规划法求解
 * 钢条切割问题朴素算法重复太多次子问题递归，采用保存子问题解的方法，再次求解相同子问题则直接读取解
 * 带备忘自顶向下 保存每个子问题的解，重复的时候直接读取这个解 $O(n^2)$

{% highlight javascript %}
    {% include_relative src/ch15_memoized_cut_rod.js %}
{% endhighlight %}

 * 自底向上，子问题按规模排序，按照从小到大顺序求解，遇到比自己小的子问题时候直接读取已经算出的解 $O(n^2)$

{% highlight javascript %}
    {% include_relative src/ch15_bottomup_cut_rod.js %}
{% endhighlight %}

#### 保存最优解分割方法

{% highlight javascript %}
    {% include_relative src/ch15_print_cut_rod_solution.js %}
{% endhighlight %}

### 动态规划原理
 * 如果一个问题的最优解包含其子问题的最优解则此问题具有最有子结构性质
 * 子问题空间必须足够小

#### 最长公共子序列 LCS
 * 分析总结：如果两个序列Xm.Yn最后一位相等，则公共子序列Zk的前k-1序列是Xm-1和Yn-1的LCS，如果两个最后一位不相等,那公共Z是Xm-1和Y的一个LCS或者是X和Yn-1的LCS，Z最后一位和谁相等
 * $O(m+n)$

    $$c[i,j] = \begin{cases} 0 & {i = 0 或 j = 0} \\ c[i-1,j-1] + 1 & {i,j > 0 且 x_i = y_i} \\ max(c[i,j-1], c[i-1,j]) & {i,j > 0 且 x_i \neq y_i} \end{cases}$$

{% highlight javascript %}
    {% include_relative src/ch15_lcs.js %}
{% endhighlight %}

#### 练习
##### 15.4-5 设计一个$O(n^2)$时间的算法，求一个n个数的序列的最长单调递增子序列
 * 前n个序列的单调递增子序列加上n+1 位置的数字如果是递增则新的最长为这个，否则为前n个的
 * 一开始为n=0的序列 