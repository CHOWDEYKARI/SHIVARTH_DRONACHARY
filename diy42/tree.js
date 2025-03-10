    class TreeNode
    {
        constructor(element)
        {
            this.value =[];
            this.element = element;
            this.left= null;
            this.right =null;
        }
    }
    
    const b = new TreeNode(9);
    const c = new TreeNode(10);
    const d = new TreeNode(18);
    const e = new TreeNode(20);
    const f = new TreeNode(30);
    const g = new TreeNode(40);
    b.value.push(c);
    c.value.push(d,e,f,g);
    console.log(b);
    console.log(c);
    console.log('Element 25 is removed');

class TreeNode1{
    constructor(element){
        this.element = element;
        this.left= null;
        this.right =null;
    }
}

var defaultCompare = function(n,m)
{
    if(n<m)
    {
        return 1;
    }

    if(n>m)
    {
        return -1;
    }
}

class BinarySearchTree{
    constructor(compareFun = defaultCompare)
    {
        this.root = null;
        this.compareFun =compareFun;
    }
        insert(element)
        {
            if(element == null)
                return false;
            if(this.root == null)
                this.root = new TreeNode(element);
            else
                this.insertNode(element, this.root);
            return true;
        }

        insertNode(element, node)
        {
            if(this.compareFun(element, node.element) == -1)
                if(node.left == null)
                    node.left = new TreeNode(element);
                else 
                    this.insertNode(element,node.left);
                
            else if(this.compareFun(element,node.element)== 1)
                    {
                        if (node.right==null)
                            node.right = new TreeNode(element);
                        else
                            this.insertNode(element,node.right);
                    }
                    
            }
    search(element)
    {
        return this.searchNode(this.root, element);
    }
    searchNode(node, element)
    {
        if(node == null){
            return false;
        }
        if (this.compareFun(element, node.element)== 1){
            return this.searchNode(node.left, element);
        } else if (this.compareFun(element, node.element)==-1){
            return this.searchNode(node.right, element);
        } else{
            return true;}
    }
    inOrderTraverse1(node, callback)
    {
        if(node != null)
        {
            this.inOrderTraverse1(node.left, callback);
            callback(node.element);
            this.inOrderTraverse1(node.right, callback);
        }
    }
    inOrderTraverse(callback)
    {
        this.inOrderTraverse1(this.root, callback);
    }

    preOrderTraverse1(node, callback)
    {
        if(node != null)
        {
            callback(node.element);
            this.preOrderTraverse1(node.left, callback);
            //callback(node.element);
            this.preOrderTraverse1(node.right, callback);
        }
    }
    preOrderTraverse (callback)
    {
        this.preOrderTraverse1(this.root, callback);
    }

    postOrderTraverse1(node, callback)
    {
        if(node != null)
        {
            callback(node.element);
            this.postOrderTraverse1(node.left, callback);
            //callback(node.element);
            this.postOrderTraverse1(node.right, callback);
        }
    }

    postOrderTraverse (callback)
    {
        this.postOrderTraverse1(this.root, callback);
    }

}

const bst= new BinarySearchTree();
bst.insert(9);
bst.insert(18);
bst.insert(10);
bst.insert(20);
bst.insert(30);
bst.insert(40);

console.log(bst.search(9));
console.log(bst.search(40));

console.log("***********");

bst.inOrderTraverse((value)=>
{
    console.log(value);
});

console.log("***********");

 bst.preOrderTraverse((value)=>
 {
     console.log(value);
 });

 console.log("***********");

bst.postOrderTraverse((value)=>
 {
     console.log(value);
 }); 

 console.log("***********");
 console.log(bst);
































// {
    
// class Node {
//     constructor(val) {
//       this.val = val;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BinarySearchTree1 {
//     constructor() {
//       this.root = null;
//     }
  
//     insert(val) {
//       let newNode = new Node(val);
//       if (!this.root) {
//         this.root = newNode;
//         return this;
//       } else {
//         let current = this.root;
//         while (true) {
//           if (val === current.val) return undefined;
//           if (val < current.val) {
//             if (current.left === null) {
//               current.left = newNode;
//               return this;
//             }
//             current = current.left;
//           } else {
//             if (current.right === null) {
//               current.right = newNode;
//               return this;
//             }
//             current = current.right;
//           }
//         }
//       }
//     }
  
//     find(val) {
//       if (!this.root) return false;
//       let current = this.root,
//         found = false;
//       while (current && !found) {
//         if (val < current.val) {
//           current = current.left;
//         } else if (val > current.val) {
//           current = current.right;
//         } else {
//           found = true;
//         }
//       }
//       if (!found) return false;
//       return current;
//     }
//   }
//   const bst1 = new BinarySearchTree1();
//   bst1.insert(10);
//   bst1.insert(8);
//   bst1.insert(12);
//   bst1.insert(15);
//   bst1.find(10); 
//   bst1.find(13); 
//   console.log(bst1);
// }