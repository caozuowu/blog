---
layout: post
author: zuowu
date:   2020-03-23 12:19:00 +0800
linkname: 'ch12 二叉搜索树'
title:  "二叉搜索树"
categories:
  - algorithm 
---

#### 二叉搜索树
  * 任意右节点大于等于跟左节点或者根节点
  * WALK遍历二叉树需要 $Θ(n)$时间

#### 查询
  * SEARCH运行时间 $O(h)$,h为树高
  * MINIMUN 找最小 $O(h)$
  * MAXIMUN 找最大 $O(h)$
  * SUCCESSOR 找后继，大于x节点的最小关键字的节点，可能在x右子树中也可能在x父层中 $O(h)$

#### 插入和删除
 * INSERT：插入，从根节点开始判断大小来选择插入到左边还是右边，并确定是否代替子节点，不会断开已经存在的链，最后连接到深处的叶子上 $O(h)$
 * 删除：如果删除节点有两个孩子则需要查找后继节点，然后用后继节点代替，让原来的右子树部分为新右子树，左子树不变 $O(h)$

#### 随机构建二叉搜索树

{% highlight javascript %}
    {% include_relative src/ch12/inorder-tree.js %}
{% endhighlight %}