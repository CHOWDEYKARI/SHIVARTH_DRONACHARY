class Node{
    constructor(data){
        this.prev=null;
        this.data=data;
        this.next=null;
    }
}
class DobuleLinkedList{
    constructor(){
        this.head=null;
        this.size=null;
        }
    insert(data){
        var node = new Node(data);
        if(this.head==null){
                this.head = node;
            } else {
                var n = this.head;
                while(n.next !== null){
                    n=n.next;
                }
                n.next = node;
                node.prev = n;
            }
        this.size++;
    }

    traverse()
    {
        if(this.head == null)
        {
            console.log("List is empty");
        }else{
            var n= this.head;
            while(n.next != null)
            {
                console.log(n.data);
                n = n.next;
            }
            console.log(n.data);
        } 
    }
}

const num= new DobuleLinkedList();
num.insert(1);
num.insert(99);
num.insert(2);
num.insert(2.5);
num.insert(3);
num.insert(4);

console.log(num);
num.traverse();