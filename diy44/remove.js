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
    addEdge(origin, destination){
        this.adjacencyList.get(origin).push(destination);
    }
    removeNode(airport){
        this.adjacencyList.delete(airport);
        for(let ele of this.adjacencyList){
            ele[1].map((item,index)=>{
                if (item === airport){
                    ele[1].splice(index, 1);
                }
            });
        }
    }
}

const adjacencyList = new Map();
const A12= new Graph();
A12.addNode("A");
A12.addNode("B");
A12.addNode("C");
A12.addNode("D");

A12.addEdge("A","B");
A12.addEdge("A","C");
A12.addEdge("B","D");
A12.addEdge("C","D");

A12.removeNode("D");
console.log(A12);