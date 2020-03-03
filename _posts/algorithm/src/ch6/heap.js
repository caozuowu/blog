

var HEAP = function(A, size, callback = undefined){

    this.A = A;
    this.heap_size = size;

    this.PRINT = function(){
        var n = Math.floor(Math.log(this.A.length)/Math.log(2))
        var i = 0;
        for (var t = 0; t <= n; t++) {
            var m = Math.pow(2, t);
    
            var line = ''
    
            for (var j = 1; j <= m; j++) {
                if (this.A[i] != undefined) {
                    line += this.A[i]
                }
                line += '   '
                i++
            }
            console.log(line);
            console.log("\n");
        }
    },

    this.PARENT = function(i) {
        return (i-1)/2
    },

    this.LEFT = function(i){
        return 2*i + 1
    },
    this.RIGHT = function(i) {
        return 2*i + 2
    }

    //维护最大堆 小的沉底...
    this.MAX_HEAPIFY = function(i) {
        var l = this.LEFT(i)
        var r = this.RIGHT(i)
        var largest = l
        if (l <= this.heap_size && this.A[l] > this.A[i]) {
            largest = l
        }else {
            largest = i
        }
        if (r <= this.heap_size && this.A[r] > this.A[largest]) {
            largest = r
        }
        if (largest != i) {
            var key = this.A[largest]
            this.A[largest] = this.A[i]
            this.A[i] = key

            if (callback != undefined) {
                callback(A)
            }

            this.MAX_HEAPIFY(largest)
        }
    },

    //建堆
    this.BUILD_MAX_HEAP = function () {
        var n = Math.floor(this.A.length/2)
        for (var i = n; i >= 0 ; i--) {
            this.MAX_HEAPIFY(i)
        }
    },

    //堆排序
    this.HEAPSORT = function() {
        this.BUILD_MAX_HEAP()
        for (var i = this.heap_size - 1; i >= 1; i--) {
            var key = this.A[0]
            this.A[0] = this.A[i]
            this.A[i] = key
            this.heap_size--
            this.MAX_HEAPIFY(0)
        }
        this.heap_size = this.A.length
    }
    
};


console.log(123)
var h = new HEAP([6,4,5,3,2,1,7,9,4,5,3,2], 12)
h.PRINT()
h.BUILD_MAX_HEAP()
h.PRINT()
module.exports.HEAP = HEAP;
