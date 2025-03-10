class Node {
    constructor(element)
     {
       this.element = element;
       this.next = null;
     }
  }
  var head; 
  class Node {
    constructor(a)
    {
     this.data = a;
     this.next = null;
    } // Constructor
   }
    var head = new Node(1);
    var second = new Node(2);
    var third = new Node(3);
    head.next = second; 
    second.next = third;
    var head;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
function printListData()
{
   var n = head;
   while (n != null) {
      document.write(n.data + " ");
      n = n.next;
    }
}
   var head = new Node(1);
   var second = new Node(2);
   var third = new Node(3);
   var fourth = new Node(4);
   head.next = second; 
   second.next = third; 
   third.next = fourth;
printListData();