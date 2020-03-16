
class queue{

    constructor(length = 10){
        this.A = new Array(length)
        this.head = 0
        this.tail = 0
    }

    ENQUEUE(x){

        if (this.OVERFLOW()) {
            console.error('over flow');
            return;
        }

        this.A[this.tail] = x
        if (this.tail == this.A.length) {
            this.tail = 0
        }else {
            this.tail++
        }
    }

    DEQUEUE(){

        if (this.UNDERFLOW()){
            console.error('under flow');
            return
        }
        
        var x = this.A[this.head]
        if (this.head == this.A.length-1){
            this.head = 0
        }else {
            this.head ++
        }
        return x
    }

    OVERFLOW(){
        var nt = this.tail == (this.A.length - 1 ? 0 : this.tail + 1)
        return nt == this.head
    }

    UNDERFLOW(){
        return this.head == this.tail
    }
}