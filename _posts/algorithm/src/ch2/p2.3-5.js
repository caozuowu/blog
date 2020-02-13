
//迭代
var SEARCH_ITERATION = function (A, v) {
    var l = 0;
    var r = A.length
    while (l < r) {
        var m = Math.floor((l + r) / 2)
        if (A[m] == v) {
            return m
        }else if (A[m] > v) {
            r = m - 1
        }else {
            l = m + 1
        }
    }
    return undefined;
}
//递归
var SEARCH_RECURSION = function (A, v, l, r) {
    var m = Math.floor((l+r)/2)
    if (A[m] == v) {
        return m
    }else if (A[m] > v) {
        return SEARCH_RECURSION(A, v, l, m - 1)
    }else if (A[m] < v){
        return SEARCH_RECURSION(A, v, m + 1, r)
    }
}

var arr = [1,2,3,4,5,6,7,8]

var res = SEARCH_RECURSION(arr, 8, 0, 7)
console.log(res)

//证明
//一直就是对长度n 折半, n最多能折半 ln(N) 次，而每次都是一次寻找为O(1),所以最坏时间为 ln(N)