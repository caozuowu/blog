---
layout: post
author: zuowu
date:   2020-03-29 19:25:00 +0800
linkname: 'ch13 红黑树'
title:  "红黑树"
categories:
  - algorithm 
---

### 红黑树

 * 红黑树是一个二叉搜索树，满足以下条件
    * 每个节点有颜色红或黑
    * 根节点黑色
    * 叶子节点黑色
    * 如果一个节点是红的则它的两个子节点都是黑的
    * 每个黑色节点到这个节点所有后代叶子节点路径上的黑色节点相同
 * 通过颜色约束红黑树是平衡的，达到期望操作时间
 * 一颗有n个节点的红黑树高度最多为$2\lg(n+1)$

### 旋转

 * 红黑树插入和删除操作会破坏规则，为了维护性质，需要改变某些节点颜色以及指针结构
 * 指针结构通过旋转操作完成 $O(1)$
![img]({{ "/assets/img/algorithm/ch13_rotate.png" | relative_url }}){: width="400"}



### 插入

 * 二超搜索树普通方式插入，然后着色并旋转 $O(\lg(n))$
![img]({{ "/assets/img/algorithm/ch13_insert.png" | relative_url }}){: width="400"}

{% highlight javascript %}
    {% include_relative src/ch13_rb_tree.js %}
{% endhighlight %}