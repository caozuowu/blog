
// T(n) = O(1)   n = 1
// T(n) = T(n-1) + O(n) n > 1
var INSERTION_SORT = function (A, n) {
    //走到0才能从1号开始插入排序
    if (n <= 0) {
        return
    }
    INSERTION_SORT(A, n - 1);
    var i = n;
    while (i > 0 && A[i] < A[i - 1]){
        var key = A[i]
        A[i] = A[i - 1]
        A[i - 1] = key
        i--
    }
} 

var arr = [9,8,7,6,5,4,3,2,1]
INSERTION_SORT(arr, arr.length - 1)
console.log(arr)