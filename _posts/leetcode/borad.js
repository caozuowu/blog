
var subString = function(s){

    // var set = new Set();
    var set = {}
    var result = {};
    var max = 0;
    var right = 0;

    //&& !set[s[right]]
    for (var left = 0; left < s.length; left++) {

        if (left > 0){
            set[s[left-1]] = null;
        }

        // set[s[left]] = s[left]
        // var right = left;
        while (right < s.length && !set[s[right]]) {
            set[s[right]] = s[right]
            right ++
        }

        var length = right - left;
        result[length] = s.substring(left, right);
        if (length > max) {
            max = length;
        }

    }

    console.log(set)
    console.log(result);
    return result[max];

}

subString("dkneweknbhje");

