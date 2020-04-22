/*

L EET C ODE I SHI R ING

L   C   I   R
E T O E S I I G
E   D   H   N

LEETCODEISHIRING

LECD
ETOE

L EETCO D EISHI R ING

L     D     R
E   O E   I I
E C   I H   N
T     S     G

*/



function find(s, m = 1) {

  if (m == 1) {
    return s
  }

  var step = 2 * m -2
  var res = []
  for (var i = 0; i < m; i++) {
    res.push('')
  }

  for (var x = 0; x < s.length; x += step) {

    res[0] += s[x]
    var h = m - 2
    var bottom = x + m - 1

    while (h != 0) {
      var left = s[bottom - h]
      var right = s[bottom + h]
      if (left) {
        res[m-h-1] += left
      }
      if (right) {
        res[m-h-1] += right
      }
      
      h--
    }
    if (s[bottom]){
      res[res.length-1] += s[bottom]
    }
    
  }

  for (var i = 0; i < res.length; i++) {
    console.log(res[i])
  }
}

var s = 'LEETCODEISHIRING'
find(s, 4)

/*
LDR
EOEII
ECIHN
TSG
*/
