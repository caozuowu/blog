

function find(s, i, j) {
    var n = Math.floor((j+i)/2)
    console.log(n)
    var mark = [s[n]]
    //left
    for (var i = n; i <= j ; i++) {
        for (var j = 0; j <= mark.length-1; j++) {
            if (s[i] == mark[j]) {
                break;
            }
        }
    }
    //right
}

var s = '3kdkjgooe'
var r = find(s)