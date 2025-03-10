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
    removeEdge(origin, destination){
        for(let ele of this.adjacencyList){
            if(ele[0]=== origin){
                ele[1].map((item, index)=>{
                if (item === destination ){
                    ele[1].splice(index, 1);
                }
            });
        }
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

A12.removeEdge("B","D");
console.log(A12);