
class YangMatrix {
    constructor(A){
        this.A = A
        this.nr = A.length
        this.nc = A[0].length
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

    RIGHT(i, j){
        return {
            x: i + 1,
            y: j
        }
    }
    DOWN(i, j){
        return {
            x: i,
            y: j + 1
        }
    }

    MIN_MATRIX(i, j){
        var min = {x:i, y:j}
        var r = this.RIGHT(i,j)

        if (r.x >= 0 && r.x < this.nc && r.y >= 0 && r.y < this.nr && this.A[r.y][r.x] < this.A[min.y][min.x]) {
            min = r
        }
        var d = this.DOWN(i,j)
        if (d.x >= 0 && d.x < this.nc && d.y >= 0 && d.y < this.nr && this.A[d.y][d.x] < this.A[min.y][min.x]) {
            min = d
        }

        if ((min.x != i || min.y != j) && min.x >= 0 && min.x < this.nc && min.y >= 0 && min.y < this.nr) {
            var key = this.A[j][i]
            this.A[j][i] = this.A[min.y][min.x]
            this.A[min.y][min.x] = key
            this.MIN_MATRIX(min.x, min.y)
        }
    }
}

var A = [
    [6,5,1, Infinity],
    [4,2,3, Infinity],
    [4,6,Infinity, Infinity],
    [7,4,9, Infinity],
]

var m = new YangMatrix(A)
m.PRINT()
m.MIN_MATRIX(0,0)
m.PRINT()