
const Table  = require("./mine.js").Table;

var X = ['A', 'B', 'C', 'B', 'D', 'A', 'B']
var Y = ['B', 'D', 'C', 'A', 'B', 'A']

function LCS_LENGTH(X, Y) {
    var m = X.length
    var n = Y.length

    var b = new Table(m + 1, n + 1)
    var c = new Table(m + 1, n + 1)

    for (var x = 0 ; x <= m; x++) {
        c[x][0] = 0
    }

    for (var x = 0 ; x <= n; x++) {
        c[0][x] = 0
    }

    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (X[i-1] == Y[j-1]) {
                c[i][j] = c[i-1][j-1] + 1
                b[i][j] = '↖'
            }else if (c[i-1][j] >= c[i][j-1]) {
                c[i][j] = c[i-1][j]
                b[i][j] = '↑'
            }else {
                c[i][j] = c[i][j-1]
                b[i][j] = '←'
            }
        }
    }

    c.print()
    b.print()
    return [c,b]
 
}

function PRINT_LCS(b, X, i, j) {
    if (i == 0 || j == 0) {
        return
    }
    if (b[i][j] == '↖') {
        console.log(X[i-1])
    }else if (b[i][j] == '↑') {
        PRINT_LCS(b, X, i-1, j)
    }else {
        PRINT_LCS(b, X, i, j-1)
    }
}
















