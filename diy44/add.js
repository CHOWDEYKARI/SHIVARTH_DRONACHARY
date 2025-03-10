class Graph{
    constructor(){
        this.adjacencyList = new Map();
    }
    addNode(node){
        this.adjacencyList.set(node, [] );
    }
}

const adjacencyList = new Map();
const A1= new Graph();
A1.addNode("A");
A1.addNode("B");
A1.addNode("C");

console.log(A1);