


class WeightedGraph extends require("./ch22_graph").Graph {

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

    MST_KRUSKAL() {

        var A = []
        //生成森林
        var forest = []
        for (var v of Object.keys(this.V)) {
            forest.push([v])
        }
        // console.log(forest)

        var FIND_SET = function(set, v) {
            for (var i = 0; i < set.length; i++) {
                for (var s of set[i]) {
                    if (s == v) {
                        return i
                    }
                }
            }
            return undefined
        }

        for (var key of Object.keys(this.Weight).sort(function(a, b) { return Number(a) > Number(b) })) {
            for (var edge of this.Weight[key]){
                var v = edge[0]
                var u = edge[1]
                var ui = FIND_SET(forest, u)
                var vi = FIND_SET(forest, v)
                if (vi != ui) {
                    A.push(edge)
                    //合并森林
                    forest[ui] = forest[ui].concat(forest[vi])
                    forest[vi] = []
                }
            }
        }
        // console.log(JSON.stringify(A))
        return A
    }

    MST_PRIM(r){

        if (!r){
            return
        }
 
        var Q = JSON.parse(JSON.stringify(this.V));
        for (var key in Q) {
            Q[key].p = null
            Q[key].key = Infinity
        }

        Q[r].key = 0
        // console.log(JSON.stringify(Q))

        var EXTRACT_MIN = function(Q) {
            var mv = Infinity
            var res = 0
            for (var u of Object.keys(Q)){
                if (Q[u] && Q[u].key < mv) {
                    mv = Q[u].key
                    res = u
                }
            }
            delete Q[res]
            return res
        }

        var w = function(u, v, weight) {
            for (var key of Object.keys(weight)){
                for (var edg of weight[key]) {
                    if ((edg[0] == u && edg[1] == v) || (edg[1] == u && edg[0] == v) ) {
                        return Number(key)
                    }
                }
            }
            return Infinity
        }

        while (Object.keys(Q).length != 0) {
            var u = EXTRACT_MIN(Q)
            // console.log(u)
            for (var v of this.Adj[u]){
                var weight = w(u, v, this.Weight)
                //标记出这一层遍历得到的最小下次参与比较
                if (Q[v] && weight < Q[v].key) {
                    Q[v].p = u
                    Q[v].key = weight
                    this.V[v].p = u
                }
            }
        }

        for (var v in this.V) {
            // console.log(v)
            var p = this.V[v].p
            if (p) {
                if (!this.V[p].c) {
                    this.V[p].c = []
                }
                this.V[p].c.push(v)
            }
        }

        // console.log(JSON.stringify(this.V))
        // var queue = []
        // queue.push(r)
        // var str = ''
        // while (queue.length > 0) {
        //     for (var i = 0; i < queue.length; i++) {
        //         var k = queue.shift(i)
        //         str += k + ' '
        //         // console.log(k)
        //         if (this.V[k].c) {
        //             queue = queue.concat(this.V[k].c)
        //         }
        //     }
        //     str += '\n'
        // }

        // console.log(str)
    }

}

var g = new WeightedGraph()
for (var v of ['a','b','c','d','e','f','g','h','i']) {
    g.addVertex(v)
}

for (var e of [['a','b', 4],['a','h', 8],['b','h', 11],['b','c', 8],['h','i', 7],['i','c', 2],['h','g', 1],['i','g', 6],['g','f', 2],['c','f', 4],['c', 'd', 7],['d', 'f', 14], ['d', 'e', 9], ['e', 'f', 10]]){
    g.addEdge(e[0],e[1],e[2])
}

g.print()
// g.MST_KRUSKAL()
// g.MST_PRIM('a')

