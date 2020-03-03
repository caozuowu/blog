---
layout: post
author: zuowu
date:   2020-03-01 20:19:00 +0800
linkname: 'ch5 概率分析和随机算法'
title:  "概率分析和随机算法"
categories: 
  - algorithm 

---

### 5.1 雇佣问题
  面试n个人，只要中间出现比前面好的就雇佣.....
  
```javascript
HIRE_ASSISTANT = function(n){
    var best = 0
    var candidate = Array(n)
    for i = 1 to n
        //interview candidate[i]
        if (candidate[i] > best) {
            best = i
            //hire candidate i
        }
}
```
 * 总费用 $O(c_in + c_km)$ $c_i$:面试费用,反正每次都花费, $c_h$:雇佣费用,见到合适的花费,__大头__，m次出现比前面强的人就要雇佣m次.....    
 最坏情况
 * 每次见到合适的就雇佣 $c_km$,最坏情况是每个人都比前面强......$O(C_kn)$
 * 第i个应聘者能够被应聘的概率为 $1/i$ (前i个人里面最好的), 总体面试完所有人需要花费的期望为    
   $$\sum_{i=1}^n 1/i = \ln(n) + O(1)$$
 * 平均只要花费$\ln(n)$个人的聘用费用就可以    


### 5.3 随机算法    
 * 一个随机排列中发生最小优先排列(排序好的)的概率 $1/n!$    
   排列种类$n!$个,排序好的$1/n!$

#### 5.4.2 礼券收集者问题
  * 要投中多少球才能在制定箱子里投中一个球。投中指定箱子概率 $1/b$，投中1个的期望 $1(1/b) = b$
  * 要投多少球每个箱子里至少有一个球。每次有i-1个箱子有球，b-i+1个箱子是空的，第i次投球得到一次命中的概率$(b-i+1)/b$，每个箱子至少要一个则期望 $ 1/(b-i+1)/b = \frac{b}{b-i+1}$
  * 总体期望:    
    $E[n] = \sum_{i=1}^b \frac{b}{b-i+1} = b\sum_{i=1}^b \frac{1}{i} = b\ln(b + O(1))$
  * 一个人如果想要收集b种不同礼券中的每一种大约至少需要$b\ln(b)$张随机礼券   

#### 5.4.3 特征序列
 * 假设透支一枚标准硬币n次，最长连续正面序列期望 $Θ(\lg(n))$
 * 最长特征序列长度至少为$r\ \lceil lg(n) \rceil$的概率至多是$n/n^r = 1/n^{r-1}$

#### 5.4.4 在线雇佣问题
  * 先面试k个人，得出最高，然后面试后面的，如果比这之前最高的高的雇佣，否则雇佣最后一个    

```
ON-LINE-MAXIMUM(k, n)
  bestscore = -∞
  for i = 1 to k
    if score(i) > bestscore
      bestscore = score(i)
  for i = k + 1 to n
    if score(i) > bestscore
      return i
  reutrn n
```
 * 如果用k=n/e，那么至少有1/e的概率成功雇佣....证明不写了
