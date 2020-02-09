


var MAX_HEAPIFY = function (A, i, callback = undefined) {

    var l = i * 2 + 1
    var r = i * 2 + 2

    var larget = l
    if (l < A.length && A[l] > A[i]) {
        larget = l
    }else {
        larget = i
    }

    if (r < A.length && A[r] > A[larget]) {
        larget = r
    }

    if (larget != i) {
        var key = A[larget]
        A[larget] = A[i]
        A[i] = key

        if (callback != undefined) {
            callback(A)
        }

        MAX_HEAPIFY(A, larget)
    }
}



var Arr = [27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0]


module.exports.MAX_HEAPIFY = MAX_HEAPIFYß