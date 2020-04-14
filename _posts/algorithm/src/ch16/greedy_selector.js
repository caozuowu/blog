
var A = [
    {s:1, f:4},
    {s:3, f:5},
    {s:0, f:6},
    {s:5, f:7},
    {s:3, f:9},
    {s:5, f:9},
    {s:6, f:10},
    {s:8, f:11},
    {s:8, f:12},
    {s:2, f:14},
    {s:12, f:16},
]
//递归
function RECURISVE_ACTIVITY_SELECTOR(A, k, n){
   
    var m = k + 1
    while (m <= n && A[m].s < A[k].f) {
        m++
    }

    if (k >= n) {
        return [A[k]] || []
    }else {
        return [A[k]].concat(RECURISVE_ACTIVITY_SELECTOR(A, m, n, r))
    }
}

var r = RECURISVE_ACTIVITY_SELECTOR(A, 0, A.length-1);
console.log(JSON.stringify(r))
/*
[{"s":1,"f":4},{"s":5,"f":7},{"s":8,"f":11},{"s":12,"f":16}]
*/
//迭代
function GREEDY_ACTIVITY_SELECTOR(A, k, n) {
    var res = []
    res.push(A[0])
    var k = 0
    for (var i = 1 ; i <= n ; i ++) {
        if (A[i].s >= A[k].f) {
            res.push(A[i])
            k = i 
        }
    }
    return res
}
r = GREEDY_ACTIVITY_SELECTOR(A, 0, A.length-1);
console.log(JSON.stringify(r))
/*
[{"s":1,"f":4},{"s":5,"f":7},{"s":8,"f":11},{"s":12,"f":16}]
*/

//动态规划

