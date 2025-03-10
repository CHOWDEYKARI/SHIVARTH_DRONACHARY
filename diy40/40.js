// insertion
class Node{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.size = 0;
        
    }

    insert(data)
    {
        var node= new Node(data);
        var current;
        if(this.head == null){
            this.head = node;
        } else{
            current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
        //console.log(this.size);
    }

    traverse()
    {
     var current = this.head;
     //console.log(this.head.data);
     while(current.next != null){
        console.log(current.data);
        current= current.next;
        }
        console.log(current.data);
    } 
}

var List1 = new LinkedList();
List1.insert(2);
List1.insert(99);
List1.insert(2.5);
List1.insert(3);
List1.insert(4);

console.log(List1)
 // traverse
List1.traverse();





















//     insertAt(element , index)
//     {
//         if (index < 0 || index > this.size)
//             return console.log("please  enter a valid index. ");
//         else{
//             var node = new Node(element);
//             var curr, prev;
//             curr = this.head;
//             if(index = 0){
//                 node.next = this.head;
//                 this.head = node;
//             }else{
//                 curr = this.head;
//                 var it = 0;
//                 while(it < index){
//                     it++;
//                     prev = curr;
//                     curr = curr.next;
//                 }
//                 node.next = curr;
//                 prev.next= node;

//             }
//             this.size++;
//         }
//     }

// add(element)
// {
//     var node = new Node(element);
//     var current;
//     if(this.head = null)
//          this.head = node;
//     else
//     {
//         current = this.head;
//         while(current.next){
//             current = current.next;
//         }
//         current.next = node;
//     }
// this.size++;
// }