
var arr = [2, 3, 1, 5, 7, 2, 4, 5, 8]

var SELECT_SORT = function (A) {

    for (var i = 0; i < A.length - 1; i++) {   //n-1 c1
        var key = A[i]    //n-1 c2
        var j = i         //n-1 c3
        var min = i       //n-1 c4
        while (j < A.length) {  //sum(1, n-1) c5
            if (A[j] < A[i]) {  //sum(1, n-1) c6
                min = j         //sum(1, n-1) c7
            }
            j++                 //rang(1 - n) c8
        }
        A[i] = A[min]  //n-1 c9
        A[min] = key   //n-1 c10
    }

}
SELECT_SORT(arr);
console.log(arr)


//最好和最坏情况都一样 n(n-1)/2 + (c5 + c6 + c7 + c8) + (n-1)(c1 + c2 + c3 + c4 + c9 + c10)
//Θ(n^2)