

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

    INSERT(z){
        //y保存游标用来确定parent x用来遍历
        var y = undefined 
        var x = this.root
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
}

var t = new INORDER_TREE([2,1,3,2,4,5,7,5,3,2])
t.PRINT()