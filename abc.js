

//a b c d e
//1 2 3

var Node = function (val) {
    this.val = val;
    this.next = null

    this.print = function() {
        var node = this
        while (node) {
            console.log(this.val)
            node = node.next
        }
    }
}

var createList = function(arr) {
    var head = new Node(0);
    var result = head;
    for (var i = 0; i < arr.length; i++) {
        head.next = new Node(arr[i])
    }
    return result.next
}

var node1 = createList(['a','b','c','d'])
node1.print()

var swap = function(node1, node2) {
    var head_1 = new Node(0)
    // head_1.next = node1
    var head_2 = new Node(0)
    // head_2.next = node2

    while (node1 || node2) {
        if (!node1) {
            head_1.next = node2
            head_1 = head_1.next
            node1 = node1.next
        }
        if (!node2) {
            head_2.next = node1
            head_2 = head_2.next
            node2 = node2.next
        }

        head_1.next = node2
        head_2.next = node1

        node1 = node1.next
        node2 = node2.next
    }

    return head_1.next , head_2.next
}