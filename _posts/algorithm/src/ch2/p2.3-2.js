
var MERGE = function(A , p, q, r){
    var L = [];
    var R = [];
    for (var i = p; i <= q; i++){
        L.push(A[i])
    }
    for (var i = q+1; i <= r; i++) {
        R.push(A[i])
    }

    var i = 0;
    var j = 0;

    for (var k = p; k <= r; k++) {
        if (i < L.length  && j < R.length ) {
            if (L[i] < R[j]) {
                A[k] = L[i]
                i++
            }else {
                A[k] = R[j]
                j++
            }
        }else if (i < L.length) {
            A[k] = L[i]
            i++
        }else if (j < R.length) {
            A[k] = R[j]
            j++
        }
    }
}

var MERGE_SROT = function (A, p, r) {
    if (p < r) {
        var q = Math.floor((p + r) / 2)
        MERGE_SROT(A, p, q)
        MERGE_SROT(A, q + 1, r)
        MERGE(A, p, q, r)
    }
}

var arr = [8,9,6,7,5,4,3,2,1,0]
MERGE_SROT(arr, 0, arr.length - 1)
console.log(arr)