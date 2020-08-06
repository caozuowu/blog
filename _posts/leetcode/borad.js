

var searchRange = function (target, nums) {

    var lowLeft = 0;
    var lowRight = nums.length-1;

    var low = 0;

    while (lowLeft < lowRight) {
        var lowMid = Math.floor((lowRight-lowLeft)/2);
        if (target == nums[lowMid]) {
            low = lowMid;
            break;
        }
        if (target < nums[lowMid]) {
            lowRight = lowMid-1
        }else {
            lowLeft = lowMid+1
        }
    }

    console.log(low)

}

var nums = [5,7,7,8,8,10]
var target = 8
searchRange(target, nums)
