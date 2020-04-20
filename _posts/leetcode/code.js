//最长回文子串
function find(s) {

  var mark = []
  var matching = []
  for (var i = 0; i < s.length; i++) {

    mark.push(new Array(s.length))
    matching.push(new Array(s.length))
  
    mark[i][i] = 1
    matching[i][i] = 1
  }

  for (var l = 1; l < s.length; l++) {
    for (var i = 0; i < s.length - l; i++) {
      var j = i + l
      // console.log(i, j)
      if (s[i] == s[j]) {
        if (j == i+1) {
          mark[i][j] = 2
        }else {
          mark[i][j] = mark[i+1][j-1] + 2
        }
        matching[i][j] = '↙'
      }else {
        var left = mark[i+1][j]
        var down = mark[i][j-1]
        mark[i][j] = Math.max(left, down)
        matching[i][j] = left < down ? '←' : '↓'
      }
    }
  }

  for (var line of mark) {
    var str = ''
    for (var c of line) {
      str += (c || ' ') + ' '
    }
    console.log(str)
  }

  for (var line of matching) {
    var str = ''
    for (var c of line) {
      str += (c || ' ') + ' '
    }
    console.log(str)
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
      if (matching[i+1][j-1] == '↙' || j == i ) {
        var t = substr.length/2
        var head = substr.slice(0, t)
        var tail = substr.slice(t, substr.length)
        var middle = i == j ? s[i] : s[i] + s[j]
        substr = head + middle + tail
      }else {
        substr = ''
      }
      
      j--
      i++
    }
  }

  console.log(substr)
}

var s = 'character'
find(s)