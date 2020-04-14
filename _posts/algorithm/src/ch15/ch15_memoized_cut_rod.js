
function MEMOIZED_CUT_ROD(p, n){
    var r = []
    for (var i = 0; i <= n; i++) {
        r.push(-Infinity)
    }

    return MEMOIZED_CUT_ROD_AUX(p, n, r)
}

function MEMOIZED_CUT_ROD_AUX(p, n, r) {

    //如果计算过则直接返回结果
    if (r[n] >= 0) return r[n]

    var q;
    if (n == 0) {
        q = 0
    }else {
        q = -Infinity
        for (var i = 1; i <= n; i++) {
            q = Math.max(q, p[i] + MEMOIZED_CUT_ROD_AUX(p, n-i, r))
        }
    }
    //保存结果
    r[n] = q
    return q
}

var p = [0,1,5,8,9,10,17,17,20,24,30]
var n = 4
var v = MEMOIZED_CUT_ROD(p, 4)
console.log(v)