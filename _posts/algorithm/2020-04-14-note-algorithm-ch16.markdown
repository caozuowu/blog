---
layout: post
author: zuowu
date:   2020-04-14 15:09:00 +0800
linkname: 'ch16 贪心算法'
title:  "贪心算法"
categories:
  - algorithm 
---

### 活动规划

|i    |1 |2 |3 |4 |5 |6 |7 |8 |9 |10|11|
|$s_i$|1 |3 |0 |5 |3 |5 |6 |8 |8 |2 |12|
|$f_i$|4 |5 |6 |7 |9 |9 |10|11|12|14|16|

 * 动态规划可能时间复杂度很高    
    $$ c[i,j] = \begin{cases} 0 \\ max(c[i,k] + c[k.j] + 1) \end{cases} $$

 * 所有活动已经按照开始时间排序好了,i活动编号, si活动开始时间,fi活动结束时间, [0,16]范围内最多不重叠活动
 * 贪心选择：选择最早结束的活动a1，然后选择之后最早开始的....
 * $O(n)$

{% highlight javascript %}
    {% include_relative src/ch16/greedy_selector.js %}
{% endhighlight %}

### 贪心算法原理
 * 设计规则
    * 做出一次选择后，只剩下一个子问题没有分情况讨论
    * 做出选择后原问题总是存在最优解，贪心选择总是安全的
