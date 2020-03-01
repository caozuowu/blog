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