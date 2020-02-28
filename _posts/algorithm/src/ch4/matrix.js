
var C = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
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

    var C1 = []
    var C2 = []
    var C3 = []
    var C4 = []

    for (var i = 0; i < n; i++) {
        var line = []
        for (var j = 0; j < n ; j++) {
            line.push(arr[i][j])
        }
        C1.push(line)
    }

    for (var i = 0; i < n; i++) {
        var line = []
        for (var j = n; j < size ; j++) {
            line.push(arr[i][j])
        }
        C2.push(line)
    }

    for (var i = n; i < size; i++) {
        var line = []
        for (var j = 0; j < n ; j++) {
            line.push(arr[i][j])
        }
        C3.push(line)
    }

    for (var i = n; i < size; i++) {
        var line = []
        for (var j = n; j < size ; j++) {
            line.push(arr[i][j])
        }
        C4.push(line)
    }

//    var line1 = []
//    var line2 = []
//    var line3 = []
//    var line4 = []
//     for (var i = 0 ; i < size; i ++) {
//         for (var j = 0; j < size; j++) {
//             if (i < n && j < n) {
//                 if (j == n) {
//                     line1 == []
//                 }
//                 line1.push(arr[i][j])
//             }else if (i < n && n - 1 < j ) {
//                 if (j == n) {
//                     line2 == []
//                 }
//                 line2.push(arr[i][j])
//             }else if (n - 1 < i && j < n) {
//                 if (j == n) {
//                     line3 == []
//                 }
//                 line3.push(arr[i][j])
//             }else {
//                 if (j == n) {
//                     line4 == []
//                 }
//                 line4.push(arr[i][j])
//             }
//         }

//         if (line1.length != 0) {
//             C1.push(line1)
//             line1 = []
//         }
//         if (line2.length != 0) {
//             C2.push(line2)
//             line2 = []
//         }
//         if (line3.length != 0) {
//             C3.push(line3)
//             line3 = []
//         }
//         if (line4.length != 0) {
//             C4.push(line4)
//             line4 = []
//         }
//     }

    // console.log(C1.mstr())
    // console.log(C2.mstr())
    // console.log(C3.mstr())
    // console.log(C4.mstr())

    return {C1,C2,C3,C4}

}

var res = disassemble(C)

function synthetize(C11, C12, C21, C22){
    return []
}

