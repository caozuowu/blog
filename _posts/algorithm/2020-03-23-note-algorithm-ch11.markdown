---
layout: post
author: zuowu
date:   2020-03-23 11:24:00 +0800
linkname: 'ch11 散列表'
title:  "散列表"
categories:
  - algorithm 
---

### 栈和队列
#### 直接寻址表
 * 用关键字直接作为地址搜寻表格
 * 关键字全域比较小 & 没有两个元素具有相同的关键字
 * 关键字域比较大浪费空间

#### 散列表
 * 通过散列函数把关键字映射成寻址依据
 * 通过链接发解决散列函数可能把多个关键字映射成一个地址的冲突
 * 全部操作都可以在$O(1)$时间内进行

```
CHAINED-HASH-INSERT(T,x)
  insert x at the head of list T(h(x.key))

CHAINED-HASH-SEARCH(T,k)
  search for an element with key in list T[h(k)]

CHAINED-HASH-INSERT(T,x)
  delete x from the list T[h(x.key)]
```

##### 除法散列
 * 通过通过k除以m的余数将关键字k映射到m个槽中$h(k)=k mod m$
 * m不应为2的幂

##### 乘法散列
 * 用关键字k乘常数$A(0<A<1)$，并地契kA的小数部分
 * 用m乘小数部分，再乡下取整
 * $h(k)=m(\lfloor kA\mod1 \rfloor)$
 * m无限制最好为2的幂