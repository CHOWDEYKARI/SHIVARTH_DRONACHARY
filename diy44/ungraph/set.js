class Graph{
    constructor(){
        this.adjacencyList = new Map();
    }
    addNode(node){
        this.adjacencyList.set(node, [] );
    }
}

const A1= new Graph();
A1.addNode("A");
A1.addNode("B");
A1.addNode("C");
A1.addNode("D");

console.log(A1);