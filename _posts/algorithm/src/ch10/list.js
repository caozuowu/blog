

class list{
    constructor(){
        this.head = null
    }

    PRINT(){
        var k = this.head
        while (k != null) {
            console.log(k.value, k.prev, k.next)
            k = k.next
        }
    }

    INSERT(x){
        //头插法
        x.next = this.head
        if (this.head != null) {
            this.head.prev = x
        }
        this.head = x
        x.prev = null
    }

    SEARCH(k){
        var x = this.head
        if (x != null && x.value != k){
            x = x.next
        }
        return x
    }

    DELETE(x){
        if (x.prev != null) {
            x.prev.next = x.next
        }else {
            this.head = x.next
        }
        if (x.next != null) {
            x.next.prev = x.prev
        }
    }
}

var l = new list()
l.INSERT({
    value:1
})
l.INSERT({
    value:2
})
l.INSERT({
    value:3
})
l.PRINT()