
function find(s) {

    var mark = []
    var matching = []

    for (var x in s) {
        mark.push(new Array(s.length))
        mark[x][x] = 1
        matching.push(new Array(s.length))
        matching[x][x] = 1
    }

    for (var l = 1; l < s.length; l++) {
        for (var i = 0; i < s.length - l; i++) {
            var j = i + l
            if (s[i] == s[j]) {
                if (j == i+1) {
                    mark[i][j] = 2
                    matching[i][j] = 2
                }else {
                    mark[i][j] = mark[i+1][j-1] + 2
                    matching[i][j] = mark[i+1][j-1] + 2
                }
                // matching[i][j] = '↙'
               
            }else {
                var right = mark[i+1][j]
                var down = mark[i][j-1]
                mark[i][j] = Math.max(right, down)
                matching[i][j] = right < down ? '←' : '↓'

            }
        }
    }


    for (var x of mark) {
        var line = ''
        for (var n of x) {
            line += (n || ' ')  + ' '
        }
        console.log(line)
    }
    console.log("\n")
    for (var x of matching) {
        var line = ''
        for (var n of x) {
            line += (n || ' ')  + ' '
        }
        console.log(line)
    }

    var i = 0
    var j = matching[0].length - 1
    var substr = ''

    while (i <= j) {
        if (matching[i][j] == '←') {
            j--
        }else if (matching[i][j] == '↓') {
            i++
        }else {
            // console.log(matching[i][j])
            var t = substr.length/2
            var head = substr.slice(0, t)
            var tail = substr.slice(t, substr.length)
            var middle = i == j ? s[i] : s[i] + s[j]
            substr = head + middle + tail
            j--
            i++
        }
    }
    console.log(substr)
    return substr
}

// var s = 'aaaaaa'
var s = 'character'
find(s)

/*
1 1 1 1 3 5 5 5 5 
  1 1 1 3 3 3 3 3 
    1 1 3 3 3 3 3 
      1 1 1 1 1 3 
        1 1 1 1 1 
          1 1 1 1 
            1 1 1 
              1 1 
                1 

1 ↓ ↓ ↓ ↓ 5 ← ← ← 
  1 ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    1 ↓ 3 ← ← ← ↓ 
      1 ↓ ↓ ↓ ↓ 3 
        1 ↓ ↓ ↓ ↓ 
          1 ↓ ↓ ↓ 
            1 ↓ ↓ 
              1 ↓ 
                1 
carac
*/


