
var INORDER_TREE = require('./ch12_inorder_tree.js').INORDER_TREE



const RED = "RED"
const BLACK = "BLACK"

class RB_TREE extends INORDER_TREE {

    constructor(A){
        super(A)
    }

    //左旋
    LEFT_ROTATE(x){
        //保存右节点
        var y = x.right
        //移动叶子
        x.right = y.left
        if (y.left) {
            y.left.parent = x
        }
        //x原来的位置换成y
        y.parent = x.parent
        if (!x.parent) {
            this.root = y
        }else if (x.parent.left == x) {
            x.parent.left = y
        }else {
            x.parent.right = y
        }
        //把x拼接到有的左子节点
        y.left = x
        x.parent = y
    }

    //右旋
    RIGHT_ORTATE(x){
        var y = x.left
        x.left = y.right
        if (y.right) {
            y.right.parent = x
        }
        y.parent = x.parent
        if (!x.parent) {
            this.root = y
        }else if (x.parent.left == x) {
            x.parent.left = y
        }else {
            x.parent.right = y
        }
        y.right = x
        x.parent = y
    }

    //插入
    INSERT(z){
        var y = undefined
        var x = this.root
        while (x) {
            y = x
            if (z.key < x.key) {
                x = x.left
            }else {
                x = x.right
            }
        }
        z.parent = y
        if (!y) {
            this.root = z
        }else if (z.key < y.key) {
            y.left = z
        }else {
            y.right = z
        }
        z.left = z.right = null
        z.color = RED
        this.INSERT_FIZUP(z)
    }

    INSERT_FIZUP(z){
        while (z.parent.color == RED) {
            if (z.parent == z.parent.parent.left) {
                //如果父节点是左孩子
                //保存叔叔节点
                var y = z.parent.parent.right
                if (y.color == RED) {
                    //如果叔叔是红色的,则父辈变为黑色,爷爷变为红色,然后再从爷爷开始找
                    z.parent.color = BLACK
                    y.color = BLACK
                    z.parent.parent = RED
                    z = z.parent.parent
                }else if (z == z.parent.right) {
                    //如果当前节点为右孩子,则找到父节点然后左旋
                    z = z.parent
                    this.LEFT_ROTATE(z)
                }else {
                    //如果当前节点为左孩子,则父节点为黑色,爷爷节点为红色,右旋爷爷节点
                    z.parent.color = BLACK
                    z.parent.parent = RED
                    this.RIGHT_ORTATE(z.parent.parent)
                }
                
            }else {
                //如果父节点是右孩子
                //保存叔叔节点
                var y = z.parent.parent.left
                if (y.color == RED) {
                    //如果叔叔是红色的,则父辈变为黑色,爷爷变为红色,然后再从爷爷开始找
                    z.parent.color = BLACK
                    y.color = BLACK
                    z.parent.parent = RED
                    z = z.parent.parent
                }else if (z == z.parent.left) {
                    //如果当前节点为左孩子,则找到父节点然后右旋
                    z = z.parent
                    this.RIGHT_ORTATE(z)
                }else {
                    //如果当前节点为右孩子,则父节点为黑色,爷爷节点为红色,左旋爷爷节点
                    z.parent.color = BLACK
                    z.parent.parent = RED
                    this.LEFT_ROTATE(z.parent.parent)
                }
            }
        }
        this.root.color = BLACK
    }
}



var t = new RB_TREE()
t.INSERT({
    key: 4
})
t.INSERT({
    key: 5
})
t.PRINT()