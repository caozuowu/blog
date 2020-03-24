

class INORDER_TREE{
    constructor(A = []){
        this.root = undefined
        for(var i = 0; i < A.length; i++) {
            A[i]
            this.INSERT({ key:A[i]})
        }
    }

    WALK(x){
        if (x != undefined){
            this.WALK(x.left)
            console.log(x.key)
            this.WALK(x.right)
        }
    }

    PRINT(){
        var queue = []
        queue.push(this.root)
        var result = ""
        while (queue.length != 0) {
            var size = queue.length
            while (size){
                var cur = queue.shift()
                result += String(cur.key) + " "
                if (cur.left) {
                    queue.push(cur.left)
                }
                if (cur.right) {
                    queue.push(cur.right)
                }
                size--
            }
            result += "\n"
        }
        console.log(result)
    }

    //插入 不会断开已经存在的链，只会插入到深处的叶子上，会自动判断左右
    INSERT(z){
        var y = undefined 
        var x = this.root
        //x保存选择到的位置，y保存选择到的位置的父节点用来方便插入操作
        while (x != undefined) {
            y = x
            if (z.key < x.key) {
                x = x.left
            }else {
                x = x.right
            }
        }
        z.parent = y
        //root empty
        if (y == undefined) {
            this.root = z
        }else if (z.key < y.key){
            y.left = z
        }else {
            y.right = z
        }
    }

    TRANSPLANT(u, v){
        if (!u.parent) {
            this.root = v
        }else if (u == u.parent.left){
            u.parent.left = v
        }else {
            u.parent.right = v
        }
        if (u) {
            v.parent = u.parent
        }
    }

    DELETE(z){
        if (!z.left) {
            this.TRANSPLANT(z, z.right)
        }else if (!z.right) {
            this.TRANSPLANT(z, z.left)
        }else {
            var y = this.MINIMUN(z.right)
            if (y.parent != z) {
                this.TRANSPLANT(y, y.right)
                y.right = z.right
                y.right.parent = y
            }
            this.TRANSPLANT(z, y)
            y.left = z.left
            y.left.parent = y
        }
    }

    SEARCH(x, k){
        if (!x || x.key == key) {
            return x
        }
        if (k < x.left.key) {
            return this.SEARCH(x.left, k)
        }else {
            return this.SEARCH(x.right, k)
        }
    }

    ITERATIVE_SEARCH(k){
        var x = this.root
        while (x && k != x.key) {
            if (k < x.key) {
                x = x.left
            }else {
                x = x.right
            }
        }
        return x
    }

    MINIMUN(x){
        while (x.left) {
            x = x.left
        }
        return x
    }

    MAXINUM(x){
        while (x.right) {
            x = x.right
        }
        return x
    }

    SUCCESSOR(x){
        if (x.right) {
            return this.MINIMUN(x.right)
        }
        var y = x.parent
        while (y && x == y.right) {
            x = y
            y = y.p
        }
        return y
    }
}

var t = new INORDER_TREE([2,1,3,2,4,5,7,5,3,2])
t.PRINT()
