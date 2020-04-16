
function find(s) {
    var mark = []
    for (var x in s) {
        mark.push(new Array(s.length))
        mark[x][x] = 1
    }

   
    for (var l = 1; l < s.length; l++) {
        for (var i = 0; i < s.length - l; i++) {
            var j = i + l
            if (s[i] == s[j]) {
                var left = i
                var right = j
                if (j == i+1) {
                    mark[i][j] = 2
                }else {
                    mark[i][j] = mark[i+1][j-1] + 2
                }
                
            }else {
                mark[i][j] = Math.max(mark[i+1][j], mark[i][j-1])
            }
        }
    }


    for (var x of mark) {
        var s = ''
        for (var n of x) {
            s += n + ' '
        }
        console.log(s)
    }


}

// var s = 'javaej'
// var s = 'aaaaaa'
var s = 'character'
find(s)