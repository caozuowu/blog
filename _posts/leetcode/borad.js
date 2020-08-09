

var result = []

var INSERTION_SORT = function(A) {
    for (var i = 1; i < A.length; i++) {
        var key = A[i]
        //把 A[j] 插入到前面数组中合适的位置
        var j = i - 1
        while (j >= 0 && A[j] > key) {
            A[j+1] = A[j]
            j = j - 1
        }
        A[j+1] = key
    }
}

var deepSelected = function (array, candidates, target, start) {

    if (target <= 0) {
        if (target == 0) {
            console.log(array);
            result.push([].concat(array))
        }
        return;
    }

    for (var i = start; i < candidates.length; i ++) {
        if (target < candidates[i]) {
            continue
        }
        if (i > start && candidates[i] == candidates[i-1]) {
            continue;
        }
        array.push(candidates[i])
        deepSelected(array , candidates, target-candidates[i], i+1)
        array.pop()
    }
}


var combinationSum = function(candidates, target) {
    INSERTION_SORT(candidates)
    console.log(candidates)
    deepSelected([], candidates, target, 0);
    console.log('result = ', result);

};




combinationSum([10,1,2,7,6,1,5], 8)

