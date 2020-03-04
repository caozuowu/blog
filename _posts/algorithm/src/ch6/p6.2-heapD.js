
class HEAPD {
    constructor(A, d = 2, size){
        this.A = A;
        this.d = d;
        this.size = size ? size : A.length;
    }

    PRINT(){
        var n = Math.floor(Math.log(this.size)/Math.log(this.d))
        var i = 0;
        for (var t = 0; t <= n; t++) {
            var m = Math.pow(this.d, t);
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
    }

    PARENT(i){
        return Math.floor((i-1)/this.d)
    }

    CHILDREN(i) {
        var res = []
        for (var j = 1; j <= this.d; j++) {
            var key = i * this.d + j
            if (key < this.size) {
                res.push(i * this.d + j)
            }
        }
        return res
    }

    MAX_HEAPIFY(i) {
        var chindren = this.CHILDREN(i)
        if (!chindren || chindren.length <= 0) {
            return
        }
        var largest = chindren[0]
        for (var j in chindren) {
            var k = chindren[j]
            if (this.A[k] > this.A[largest] && k < this.size) {
                largest = k
            }
        }
        if (largest != i) {
            var key = this.A[largest]
            this.A[largest] = this.A[i]
            this.A[i] = key
            this.MAX_HEAPIFY(largest)
        }
    }

    //建堆
    BUILD_MAX_HEAP() {
        var n = Math.floor(this.A.length/this.d)
        for (var i = n; i >= 0 ; i--) {
            this.MAX_HEAPIFY(i)
        }
    }

    HEAPSORT() {
        this.BUILD_MAX_HEAP()
        for (var i = this.size - 1; i >= 1; i--) {
            var key = this.A[0]
            this.A[0] = this.A[i]
            this.A[i] = key
            this.size--
            this.MAX_HEAPIFY(0)
        }
        this.size = this.A.length
    }

    //弹出最大
    EXTRACT_MAX () {
        if (this.size < 0) {
            console.error('heap underflow')
            return;
        }
        var max = this.A[0]
        this.A[0] = this.A[this.size-1]
        this.size --
        this.MAX_HEAPIFY(0)
        return max
    }

    INCREASE_KEY(i, key) {
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

    INSERT(x){
        this.size ++
        this.A[this.size-1] = -Infinity
        this.INCREASE_KEY(x, this.size-1)
    }
}

var h = new HEAPD([0,1,2,3,4,5,6,7,8,9], 3)
h.PRINT()
h.HEAPSORT()
h.PRINT()
console.log(h.A)