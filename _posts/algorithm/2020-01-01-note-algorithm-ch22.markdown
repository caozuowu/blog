---
layout: post
author: zuowu
date:   2020-04-22 14:02:00 +0800
linkname: 'ch22 基本图算法'
title:  "ch22 基本图算法"
categories: 
  - algorithm 

---

### 图的表示
 * 邻接表 G.Adj G.V ,顶点数组和顶点对应的边数组
 * 临街矩阵 a[ij]

### 广度优先搜索 
 * 通过队列从起始顶点一次按照和起始顶点距离一圈一圈搜索，需要把当前圈已经搜搜过的标记颜色
 * 复杂度：定点数+边数，$O(V+E)$
 * 广度优先搜索可以找到两个顶点之间的最短路径


{% highlight javascript %}
    {% include_relative src/ch22/graph.js %}
{% endhighlight %}
