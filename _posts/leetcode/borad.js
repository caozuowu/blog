


var threeSum = function(nums){

    var result = [];

    nums.sort((a,b)=>{
        return a>b
    });
    var n = nums.length;
    for (var first = 0; first < n; first++) {
        if (first > 0 && nums[first] == nums[first-1]) {
            continue;
        }
        var target = -nums[first];
        var third = n - 1;
        //由于数组排序了所以不必要考虑数组中二重循环first之前的内容，直接从first开始遍历即可
        for (var second = first; second < n; second ++){
            if (second > first && nums[second] == nums[second-1]){
                continue;
            }
            //只有 第二个和第三个加起来大于第一个的相反数才考虑 如果小于不考虑 因为数组是排序的
            //third要大于second 因为数组排好序了
            while (second < third && nums[second] + nums[third] > target) {
                third--;
            }
            //不能有重复元素
            if (second == third) {
                break;
            }
            if (nums[second] + nums[third] == target) {
                console.log(nums[first],nums[second],nums[third]);
                result.push([nums[first],nums[second],nums[third]]);
            }
        }
    }

    return result;
}

var nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums))