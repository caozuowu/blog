
//从中间查找一个最大子数组
var FIND_MAX_CROSSING_SUBARRAY = function  (A, low, mid, high){
    var sum = 0;
    var left_sum = -Infinity;
    var max_left = mid;
    for (var i = mid; i >= low; i--) {
        sum += A[i];
        if (sum > left_sum) {
            left_sum = sum;
            max_left = i;
        }
    }
    sum = 0;
    var right_sum = -Infinity;
    var max_right = mid + 1;
    for (var i = mid + 1; i <= high; i++) {
        sum += A[i];
        if (sum > right_sum) {
            right_sum = sum;
            max_right = i;
        }
    }

    return {
        max_left: max_left,
        max_right: max_right,
        max_value: left_sum + right_sum
    }
}

//从中间一个位置开始向两边查找,然后递归两边的子数组查找
var FIND_MAX_SUBARRAY = function(A, low, high) {
    if (low == high) {
        return { max_left: low, max_right: high, max_value: A[low] }
    }else {
        //比较三者最大
        var mid = Math.floor((low + high)/2)
        var left = FIND_MAX_SUBARRAY(A, low, mid);
        var right = FIND_MAX_SUBARRAY(A, mid+1, high);
        var cross = FIND_MAX_CROSSING_SUBARRAY(A, low, mid, high);
        if (left.max_value >= right.max_value && left.max_value >= cross.max_value){
            return left
        }else if (right.max_value >= left.max_value && right.max_value >= cross.max_value) {
            return right
        }else {
            return cross
        }
    }
}

module.exports.FIND_MAX_SUBARRAY = FIND_MAX_SUBARRAY;

// var ARR = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]
// console.log(FIND_MAX_SUBARRAY(ARR, 0, ARR.length - 1))




