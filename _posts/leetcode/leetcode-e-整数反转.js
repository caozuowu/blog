/*
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
*/

var resverse = function(x) {

    var n = 0
    var begin = false
    var res = 0
    while (x > 0) {

        
        if (x%10 != 0) {
            begin = true
        }
        if (begin) {
            // n++
            res += x%10 * Math.pow(10, n)
            

            console.log(x%10)
            // console.log(n)
            n++
        }
        x = Math.floor(x / 10)
        // console.log(x/10)
        
    }

    console.log(res)
}

resverse(1230)

