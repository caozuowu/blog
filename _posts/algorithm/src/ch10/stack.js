
class stack{
    constructor(n = undefined){
        this.A = new Array(n || 10)
        this.top = -1
    }

    ENPYT(){
        return this.top == -1
    }

    PUST(x){
        this.top ++
        this.A[this.top] = x
    }

    POP(){
        if (this.EMPTY()){
            console.error('underflow');
        }else {
            this.top--
            return this.A[this.top] + 1
        }
    }
}