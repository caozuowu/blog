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

var s = 'LEETCODEISHIRING'

function find(s) {
  var h = 4
  var j = 0
  for (var x = 0; x < s.length; x++) {
    // console.log(x%4)
    if (x%4 == 0) {
      console.log(x, s[x])
    }
  }
}

find(s)