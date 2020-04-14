
function BOTTOM_UP_CUT_ROD(p, n) {
    var r = new Array(n+1)
    r[0] = 0
    for (var j = 1; j <= n; j++) {
        var q = -Infinity;
        //第1次直接返回，第n次会用到前面n-1次算出的数据
        for (var i = 1; i <= j; i++) {
            //i 与 j-i 组成所有可能情况, j-i<j 已经在上几次迭代的时候算出来了保存在r中
            //r[j-i] 为另一部分的最优解,所以不必要去考虑可能的形式 当次循环的解=某个数的价格+另一部分数的最优解，而另一部分的最优解规模比较小已经在上面几次求出来了
            q = Math.max(q, p[i] + r[j-i])
        }
        //保存第n==j时候的数据
        r[j] = q
    }
    return r[n]
}

var p = [0,1,5,8,9,10,17,17,20,24,30]
var n = 4
var v = BOTTOM_UP_CUT_ROD(p, 4)
console.log(v)