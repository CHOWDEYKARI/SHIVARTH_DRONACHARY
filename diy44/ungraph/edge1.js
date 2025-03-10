class Graph{
    constructor(){
        this.adjacencyList = new Map();
    }
    addNode(origin){
        this.adjacencyList.set(origin, [] );
    }
    addEdge(origin, vertices){
        this.adjacencyList.get(origin).push(vertices);
        this.adjacencyList.get(vertices).push(origin);
    }
}

const A12= new Graph();
A12.addNode('A');
A12.addNode('B');
A12.addNode('C');
A12.addNode('D');
A12.addEdge('A','B');
A12.addEdge('A','C');
A12.addEdge('C','A');
A12.addEdge('B','D');
console.log(A12);