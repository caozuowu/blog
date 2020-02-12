
var INSERTION_SORT = function(A) {
    for (var i = 1; i < A.length; i++) {
        var key = arr[i]
        //把 A[j] 插入到前面数组中合适的位置
        var j = i - 1
        while (j >= 0 && A[j] > key) {
            A[j+1] = A[j]
            j = j - 1
        }
        A[j+1] = key
    }
}