
/*
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
说明：你不能倾斜容器，且 n 的值至少为 2。
*/

var maxArea = function(height) {
    //动态规划 O(n^2)
    // var mark = []
    // for (var x = 0; x < height.length; x++) {
    //     mark.push(new Array(height.length))
    //     mark[x][x] = 0
    // }
    // for (var l = 1; l <= height.length; l ++) {
    //     for (var i = 0; i < height.length-l; i++) {
    //         var j = i + l
    //         console.log(i,j)
    //         var current = (j - i) * Math.min(height[i], height[j])
    //         var left =  mark[i][j-1]
    //         var right = mark[i+1][j]
    //         mark[i][j] =  Math.max(current, left, right)
    //     }
    // }

    // for (var i = 0; i < mark.length; i++) {
    //     var line = ''
    //     for (var j = 0; j < mark[i].length; j++) {
    //         line += (mark[i][j] == undefined ? ' ' :  mark[i][j]) + ' '
    //     }
    //     console.log(line)
    // }

    //贪心选择  动态 O(n)
    var max = 0
    var i = 0
    var j = height.length - 1
    while (i <= j) {
        if (height[i] < height[j]) {
            var a = height[i] * (j-i)
            max = a > max ? a : max
            i++
        }else {
            var a = height[j] * (j-i)
            max = a > max ? a : max
            j--
        }
    }

    console.log(max)
    

};

var h = [1,8,6,2,5,4,8,3,7]

maxArea(h)