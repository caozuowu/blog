
function EXTENDED_BOTTOM_UP_CUT_ROD(p, n) {
    var s = []
    var r = []
    r[0] = 0
    for (var j = 1; j <= n ; j++) {
        var q = -Infinity;
        for (var i = 1; i <= j; i++) {
            if (q < p[i] + r[j-i]) {
                q = p[i] + r[j-i]
                s[j] = i
            }
            r[j] = q
        }
    }
    return [r,s]
}

function PRINT_CUT_ROD_SOLUTION(p, n) {
    e = EXTENDED_BOTTOM_UP_CUT_ROD(p, n)
    var r = e[0]
    var s = e[1]
    while (n > 0) {
        console.log(s[n])
        n = n-s[n]
    }
}

var p = [0,1,5,8,9,10,17,17,20,24,30]
var n = 4
var v = EXTENDED_BOTTOM_UP_CUT_ROD(p, 4)
console.log(v[0], v[1])

PRINT_CUT_ROD_SOLUTION(p,2)
