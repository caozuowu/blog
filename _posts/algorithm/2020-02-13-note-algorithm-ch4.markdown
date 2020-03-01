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

### 4.3 用代入法求解递归式
 1. 猜测解的形式
 2. 用数学归纳法证明

<!-- $ J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha} \text {，行内公式示例} $ -->

$T(n) = 2T(\lfloor n/2 \rfloor) + n$ ,猜测为 $T(n) = O(n\lg(n)), 有 T(n)\leq cn \lg(n)$

$把猜测带入 取一个变量 m = \lfloor n/2 \rfloor$
$有T(\lfloor n/2 \rfloor) \leq c \lfloor n/2 \rfloor \lg(\lfloor n/2 \rfloor)$

<!-- $$
\begin{align}
T(n) &\leq 2(c (\lfloor n/2 \rfloor) \lg(n/2)+n \leq cn\lg(n/2) + n \\
& = cn\lg(n) - cnlg(2) + n \\
& = cn\lg(n) - cn \leq cn\lg(n) \\
\end{align}
$$ -->


### 4.4 用递归树求解递归式 
 * 画图, 看递归层数,一般都是logn次

### 4.5 用主方法求解递归式

  $T(n) = aT(n/b) + f(n) , a>=1, b>1,$    
  $f(n) = O(n^{\log_ba-ε)}), (ε>0),f(n) 有上界,则 T(n) = Θ(n^{\log_ba})$
  $f(n) = Θ(n^{\log_ba}), f(n)有准确界,则 T(n) = Θ(n^{\log_ba}\lg(n))$
  $f(n) = Ω(n^{\log_ba+ε}), (ε>0) 且对某个常数c<1 和所有足够大的n有$
  $ af(n/b) <= cf(n), 则T(n) = Θ(f(n))$

   * 主要根据 $aT(n/b) + f(n)$ 中的 $f(n)$ 的次数来判断









