
const Table  = require("../mine.js").Table;

var A = [
    {s:1, f:4},
    {s:3, f:5},
    {s:0, f:6},
    {s:5, f:7},
    {s:3, f:9},
    {s:5, f:9},
    {s:6, f:10},
    {s:8, f:11},
    {s:8, f:12},
    {s:2, f:14},
    {s:12, f:16},
]

function planning(A, s, f){
    var l = s - f
    var mark = new Table(f+1, f+1, 0)
    for (var l = 1; l <= f; l++ ){
        for (var i = 0; i <= f-l; i++) {
            var j = i + l
            // console.log(i,j)
        }
    }
    // mark.print()

}

planning(A, 0, 16)