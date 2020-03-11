
function COUNTING_SORT(A, B, k){
    var C = new Array(k+1)
    for (var i = 0; i <= k; i++) {
        C[i] = 0
    }

    for (var j = 0; j < A.length; j++) {
        C[A[j]]++
    }

    for (var i = 1; i <= k; i++) {
        C[i] = C[i] + C[i-1]
    }

    for (var j = A.length-1; j >= 0; j--) {
        B[C[A[j]]-1] = A[j]
        C[A[j]]--
    }
}

var A = [2,5,3,0,2,3,0,3]
var B = [0,0,0,0,0,0,0,0]
var k = 5
COUNTING_SORT(A, B, 5)
console.log(A)
console.log(B)
