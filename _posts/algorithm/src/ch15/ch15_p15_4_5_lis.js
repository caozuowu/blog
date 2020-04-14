
function LIS(A){
    var r = new Array(A.length)
    for (var x = 0; x < r.length; x++) {
        r[x] = { l:1,  p:[]}
    }

    var max_index = []
    var max_length = 0

    for (var i = 0; i < A.length; i++) {
        var max = 0
        var node = []
        for (var j = 0; j < i; j++) {
            if (A[i] >= A[j]){
                if (r[j].l > max) {
                    max = r[j].l
                    node = [j]
                } else if (r[j].l == max) {
                    node.push(j)
                }
            }
        }
        if (max + 1 > r[i].l) {
            r[i].l = max + 1
            r[i].p = node
        }

        if (r[i].l > max_length) {
            max_length = r[i].l
            max_index = [i]
        }else if (r[i].l == max_length) {
            max_index.push(i)
        }
    }

    // console.log(max_length)
    // console.log(max_index)
    return {
        r: r,
        max_index: max_index,
        max_length: max_length
    }
}

function FIND(A, r, index, c){
    for (var x of index) {
        if (r[x].p && r[x].p.length > 0) {
            FIND(A,r,r[x].p, c+A[x]+', ')
        }else {
            console.log(c+A[x])
        }
    }
}

var A = [1,3,2,6,9,5,7,4,6]

var data = LIS(A)
FIND(A, data.r, data.max_index, '')
/*
9, 6, 3, 1
9, 6, 2, 1
7, 6, 3, 1
7, 6, 2, 1
7, 5, 3, 1
7, 5, 2, 1
6, 6, 3, 1
6, 6, 2, 1
6, 5, 3, 1
*/

