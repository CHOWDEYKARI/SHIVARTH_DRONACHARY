class Graph{
    constructor(){
        this.adjacencyList = new Map();
    }
    addNode(node){
        this.adjacencyList.set(node, [] );
    }
    addNode(airport){
        this.adjacencyList.set(airport, [] );
    }
    addEdge(origin, vertices){
        this.adjacencyList.get(origin).push(vertices);
    }
}

const adjacencyList = new Map();
const A12= new Graph();
A12.addNode('A');
A12.addNode('B');
A12.addNode('C');
A12.addNode('D');
A12.addEdge('A','B');
A12.addEdge('A','C');
A12.addEdge('B','D');
A12.addEdge('B','D');
console.log(A12);