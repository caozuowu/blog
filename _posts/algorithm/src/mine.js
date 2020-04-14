class Table extends Array{

    constructor(nr = 0, nc = 0, dv = 0){

        super(nr)

        this.nr = nr
        this.nc = nc
        
        for (var i = 0; i < this.nr; i++) {
            this[i] = new Array(this.nc)
            for (var j = 0; j < this[i].length; j++) {
                this[i][j] = dv
            }
        }

    }

    print(){
        console.log('------')
        for (var i = 0; i < this.nr; i++) {
            var str = ''
            for (var j = 0; j < this.nc ; j++) {
                str += this[i][j] + '   '
            }
            console.log(str)
        }
        console.log('------')
    }
}

// var t = new Table(3,4)
// console.log(t)
// t.print()

module.exports = {
    Table: Table
}