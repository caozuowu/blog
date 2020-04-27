


class Graph {
    constructor() {
        this.V = {}
        this.Adj = {}
    }

    addVertex(v) {
        if (!this.V[v]) {
            this.V[v] = {}
            this.Adj[v] = []
        }
    }

    addEdge(a, b) {
        if (!this.V[a]) {
            this.addVertex(a)
        }
        if (!this.V[b]) {
            this.addVertex(b)
        }
        this.Adj[a].push(b)
        this.Adj[b].push(a)
    }

    //广度优先搜索
    BFS(x) {

        if (!this.V[x]) {
            return
        }

        //所有顶点设为白色
        for (var v in this.V) {
            this.V[v].color = 'WHITE'
            this.V[v].d = Infinity
            this.V[v].p = null
        }

        //起始节点为灰色
        this.V[x].color = 'GRAY'
        this.V[x].d = 0
        this.V[x].p = null

        //圈遍历 灰色为下一圈 黑色为上一圈 
        var queue = [x]
        while (queue.length != 0) {
            var u = queue.shift()
            for (var v of this.Adj[u]) {
                if (this.V[v].color == 'WHITE') {
                    this.V[v].color = 'GRAY'
                    this.V[v].d = this.V[u].d + 1
                    this.V[v].p = u
                    queue.push(v)
                }
            }
            this.V[u].color = 'BLACK'
        }
    }

    //打印s到v的一条最短路径上所有节点
    PRINT_PATH(s, v) {
        if (s == v) {
            console.log(s)
        }else if(this.V[v].p == null) {
            console.log('no path from ' + s + ' to ' + v + ' exists')
        }else {
            this.PRINT_PATH(s, this.V[v].p)
            console.log(v)
        }
        
    }

    toString() {
        var s = ''
        for (var v in this.V) {
            s += v + ' -> '
            for (var e of this.Adj[v]) {
                s += e + ' '
            }
            s += '\n'
        }
        return s
    }

    print(){
        console.log(this.toString())
    }
}

var g = new Graph()

for (var v of ['r','v','s','w','t','x','u','y']) {
    g.addVertex(v)
}
for (var e of [['r','v'],['r','s'],['s','w'],['w','t'],['w','x'],['t','x'],['t','u'],['x','u'],['x','y'],['u','y']]){
    g.addEdge(e[0],e[1])
}
g.print()
g.BFS('s')
g.PRINT_PATH('s', 'w')

/*
r -> v s 
v -> r 
s -> r w 
w -> s t x 
t -> w x u 
x -> w t u y 
u -> t x y 
y -> x u
*/








