
class YangMatrix {
    constructor(A){
        this.A = A
    }

    PRINT(){
        var res = ''
        for (var i = 0 ; i < this.A.length; i++) {
            for (var j = 0; j < this.A[i].length; j++) {
 
                res += A[i][j] == Infinity ? '∞' : A[i][j]
                res += ' '
            }
            res += '\n'
        }
        console.log(res)
        return res
    }
}

var A = [
    [1,1,1, Infinity],
    [1,1,1, Infinity],
    [1,1,Infinity, Infinity],
    [1,1,1, Infinity],
]

var m = new YangMatrix(A)
m.PRINT()