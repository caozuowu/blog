

var subString = function (s) {
    var mark = [];
    for (var i = 0; i < s.length; i ++) {
        mark.push(new Array(s.length))
    }

    var result = "";

    for (var l = 0; l < s.length; l++) {
        for (var i = 0; i < s.length - l; i++) {
            var j = i + l;
            if (l == 0) {
                mark[i][j] = true;
            }else if (l == 1) {
                mark[i][j] = s[i] == s[j];
            }else {
                mark[i][j] = mark[i+1][j-1] && (s[i] == s[j]);
            }

            if (mark[i][j] && l+1 > result.length) {
                result = s.substring(i,j+1);
            }
        }
    }

    console.log(mark)
    console.log(result)

    return result;
}


subString("babad");