
var C = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

Array.prototype.mstr = function(){
    var res = '---\n'
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this[i].length; j++) {
            res += this[i][j] + ' '
        }
        res += '\n'
    }
    return res
}

console.log(C.mstr())

function disassemble(arr) {
    var size = arr[0].length
    var n = Math.floor(size/2);

    var C11 = []
    var C12 = []
    var C21 = []
    var C22 = []

    for (var i = 0; i < n; i++) {
        var line = []
        for (var j = 0; j < n ; j++) {
            line.push(arr[i][j])
        }
        C11.push(line)
    }

    for (var i = 0; i < n; i++) {
        var line = []
        for (var j = n; j < size ; j++) {
            line.push(arr[i][j])
        }
        C12.push(line)
    }

    for (var i = n; i < size; i++) {
        var line = []
        for (var j = 0; j < n ; j++) {
            line.push(arr[i][j])
        }
        C21.push(line)
    }

    for (var i = n; i < size; i++) {
        var line = []
        for (var j = n; j < size ; j++) {
            line.push(arr[i][j])
        }
        C22.push(line)
    }

    // console.log(C11.mstr())
    // console.log(C12.mstr())
    // console.log(C21.mstr())
    // console.log(C22.mstr())

    return [C11,C12,C21,C22]
}

function synthetize(C11, C12, C21, C22){

    var h = C11.length + C21.length;
    var w = C11[0].length + C12[0].length;
    var C = Array(h)
    for (var i = 0; i < C.length; i++) {
        C[i] = Array(w)
    }

    for (var i = 0; i < C11.length; i++) {
        for (var j = 0; j < C11[i].length; j++) {
            C[i][j] = C11[i][j]
        }
    }

    for (var i = 0; i < C12.length; i++) {
        for (var j = 0; j < C12[i].length; j++) {
            C[i][j + C11[0].length] = C12[i][j]
        }
    }

    for (var i = 0; i < C21.length; i++) {
        for (var j = 0; j < C21[i].length; j++) {
            C[i + C11.length][j] = C21[i][j]
        }
    }

    for (var i = 0; i < C22.length; i++) {
        for (var j = 0; j < C22[i].length; j++) {
            C[i + C11.length][j + C11[0].length] = C22[i][j]
        }
    }

    return C
}

function add_matrix(A, B) {
    var C = []
    for(var i = 0; i < A.length; i ++) {
        C.push(Array(A.length))
    }
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A[i].length; j++) {
            C[i][j] = A[i][j] + B[i][[j]]
        }
    }
    return C
}


var SQUARE_MATRIX_MULITIPLY_Y_RECURSIVE = function (A, B) {
    var n = A.length;
    if (n == 1) {
        return A[0][0] * B[0][0];
    }else {
        var resA = disassemble(A);

        var A11 = resA[0];
        var A12 = resA[1];
        var A21 = resA[2];
        var A22 = resA[3];

        var resB = disassemble(B);

        var B11 = resB[0];
        var B12 = resB[1];
        var B21 = resB[2];
        var B22 = resB[3];

        var C11 = add_matrix(SQUARE_MATRIX_MULITIPLY_Y_RECURSIVE(A11,B11) ,SQUARE_MATRIX_MULITIPLY_Y_RECURSIVE(A12,B21))
        var C12 = add_matrix(SQUARE_MATRIX_MULITIPLY_Y_RECURSIVE(A11,B11) ,SQUARE_MATRIX_MULITIPLY_Y_RECURSIVE(A12,B21))
        var C21 = add_matrix(SQUARE_MATRIX_MULITIPLY_Y_RECURSIVE(A11,B11) ,SQUARE_MATRIX_MULITIPLY_Y_RECURSIVE(A12,B21))
        var C22 = add_matrix(SQUARE_MATRIX_MULITIPLY_Y_RECURSIVE(A11,B11) ,SQUARE_MATRIX_MULITIPLY_Y_RECURSIVE(A12,B21))
        return synthetize(C11,C12,C21,C22)
    }
}
