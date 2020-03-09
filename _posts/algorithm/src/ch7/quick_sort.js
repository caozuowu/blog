
function PARTITION(A, p, r) {
    var x = A[r]
    var i = p - 1
    for (var j = p ; j <= r-1; j ++) {
        if (A[j] <= x) {
            i++
            var key = A[i]
            A[i] = A[j]
            A[j] = key
        }
    }

    var key = A[i+1]
    A[i+1] = A[r]
    A[r] = key

    return  i + 1;
}

function QUICKSORT(A, p, r){
    if (p < r) {
        var q = PARTITION(A, p, r)
        QUICKSORT(A, p, q-1)
        QUICKSORT(A, q+1, r)
    }
}

var A = [2,3,1,5,6,2,7,4]
QUICKSORT(A,0,A.length-1)
console.log(A)