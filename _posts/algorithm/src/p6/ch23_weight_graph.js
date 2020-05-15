

class WeightedGraph extends require('./ch22_graph').Graph {

    constructor(){
        super()
        this.Weight = {}
    }

    addWeight(a, b, l) {
        if (!this.Weight[l]) {
            this.Weight[l] = []
        }
        this.Weight[l].push([a,b])
    }

    addEdge(a, b, l) {
        super.addEdge(a, b)
        this.addWeight(a, b, l)
    }

    toString(){

        var str = '\n'
        for (var key of Object.keys(this.Weight).sort(function(a, b) { return Number(a) > Number(b) })) {
            str += key + '  --  '
            str += JSON.stringify(this.Weight[key])
            str += '\n'
        }

        return super.toString() + str
    }

}

module.exports = {
    WeightedGraph: WeightedGraph
}