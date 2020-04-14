
const Table = require("./mine.js").Table;

function LHS(str) {

    var t = new Table(str.length, str.length)
    // t.print()

    for (var i = 0; i < str.length; i++) {
        for (var j = i; j < str.length; j++) {
            // console.log(str[i] + ' ,  ' + str[j])
            if (i == j) {
                t[i][j] = 1
            }else {
                if (str[i] == str[j]) {
                    t[i][j] = t[i+1][j-1] + 2
                }else {
                    t[i][j] = Math.max(t[i+1][j], t[i][j-1]);
                }
            }
            // if (str[i] == str[j]) {
            //     t[i][j] = t[i+1][j-1] + 2
            // }else {
            //     t[i][j] = Math.max(t[i+1][j],t[i][j-1]);
            // }
        }
    }

    t.print()
}

var str = 'javaej'

LHS(str)