
function CUT_ROD(p, n) {
    if (n == 0) {
        return 0
    }
    var q = -Infinity
    for (var i = 1; i <= n; i++) {
        q = Math.max(q, p[i] + CUT_ROD(p, n-i))
    }
    return q
}
  
var p = [0,1,5,8,9,10,17,17,20,24,30]
var n = 4
var v = CUT_ROD(p, 4)
console.log(v)