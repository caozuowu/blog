
var ARR = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]

var FIND_MAX_SUBARRAY = function (A, low, high) {
    
    var left = 0;
    var right = 0;
    var sum = 0;
    var max_value = -Infinity;
    for (var i = low; i <= high; i++) {
        sum = 0;
        for (var j = i; j <= high; j++) {
            sum += A[j]
            if (sum >= max_value) {
                max_value = sum
                left = i;
                right = j;
            }
        }
    }

    return {left: left, right: right, max_value: max_value}
}


