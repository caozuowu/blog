

var RANDOM_PARTITION = require('../ch7/quick-sort.js').RANDOM_PARTITION

function RANDOMIZED_SELECT(A, p, r, i){
    if (p == r) {
        return A[p]
    }

    var q = RANDOM_PARTITION(A, p, r)
    //q 把数组分为大于q和小于q的两部分,则q前面有k=q-p个小于q的,所以对用k和i比较即可
    k = q - p + 1
    if (i == k) {
        return A[q]
    }else if (i < k) {
        return RANDOMIZED_SELECT(A, p, q-1, i)
    }else {
        //i>k 递归右半边, 去掉前面k个小于i的数字还有i-k个
        return RANDOMIZED_SELECT(A, q+1, r, i-k)
    }
}

// var A = [2,3,1,5,6,2,7,4]
// var k = RANDOMIZED_SELECT(A, 0, A.length-1, 4)
