

var WeightedGraph = require('./ch22_weight_graph').WeightedGraph

WeightedGraph.prototype.MST_KRUSKAL = function () {
    var A = []
    //生成森林
    var forest = []
    for (var v of Object.keys(this.V)) {
        forest.push([v])
    }
    // console.log(forest)

    var FIND_SET = function (set, v) {
        for (var i = 0; i < set.length; i++) {
            for (var s of set[i]) {
                if (s == v) {
                    return i
                }
            }
        }
        return undefined
    }

    for (var key of Object.keys(this.Weight).sort(function (a, b) { return Number(a) > Number(b) })) {
        for (var edge of this.Weight[key]) {
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
    console.log(JSON.stringify(A))
    return A
}

var g = new WeightedGraph()
for (var v of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']) {
    g.addVertex(v)
}

for (var e of [['a', 'b', 4], ['a', 'h', 8], ['b', 'h', 11], ['b', 'c', 8], ['h', 'i', 7], ['i', 'c', 2], ['h', 'g', 1], ['i', 'g', 6], ['g', 'f', 2], ['c', 'f', 4], ['c', 'd', 7], ['d', 'f', 14], ['d', 'e', 9], ['e', 'f', 10]]) {
    g.addEdge(e[0], e[1], e[2])
}

// g.print()
// g.MST_KRUSKAL()
// [["h","g"],["i","c"],["g","f"],["a","b"],["c","f"],["c","d"],["a","h"],["d","e"]]

