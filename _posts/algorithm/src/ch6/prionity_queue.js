

var HEAP = require('./heap.js').HEAP

var PRIORITY_QUEUE = function(A, size, callback = undefined) {

    HEAP.call(this, A, size, callback);
    this.BUILD_MAX_HEAP()
    
    //返回最大
    this.MAXNUM = function() {
        return this.A[0]
    }
    //弹出最大
    this.EXTRACT_MAX = function() {
        if (this.heap_size < 0) {
            console.error('heap underflow')
            return;
        }
        var max = this.A[0]
        this.A[0] = this.A[this.heap_size-1]
        this.heap_size --
        this.MAX_HEAPIFY(0)
        return max
    }

    this.INCREASE_KEY = function(i, key) {
        if (key < this.A[i]) {
            console.error('new key is smaller than current key');
            return;
        }
        this.A[i] = key
        while (i > 0 && this.A[this.PARENT(i)] < this.A[i]){
            var t = this.A[this.PARENT(i)]
            this.A[this.PARENT(i)] = this.A[i]
            this.A[i] = t
            i = this.PARENT(i)
        }
    }

    this.INSERT = function(x){
        this.heap_size ++
        this.A[this.heap_size-1] = -Infinity
        this.INCREASE_KEY(x, this.heap_size-1)
    }
}

