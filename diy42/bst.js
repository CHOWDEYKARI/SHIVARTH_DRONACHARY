// class TreeNode{
//     constructor(element){
//         this.element = element;
//         this.left= null;
//         this.right =null;
//     }
// }

// var defaultCompare = function(n,m)
// {
//     if(n<m)
//     {
//         return 1;
//     }

//     if(n>m)
//     {
//         return -1;
//     }
// }

// class BinarySearchTree{
//     constructor(compareFun = defaultCompare)
//     {
//         this.root = null;
//         this.compareFun =compareFun;
//     }
//         insert(element)
//         {
//             if(element == null)
//                 return false;
//             if(this.root == null)
//                 this.root = new TreeNode(element);
//             else
//                 this.insertNode(element, this.root);
//             return true;
//         }

//         insertNode(element, node)
//         {
//             if(this.compareFun(element, node.element) == -1)
//                 if(node.left == null)
//                     node.left = new TreeNode(element);
//                 else 
//                     this.insertNode(element,node.left);
                
//             else if(this.compareFun(element,node.element)== 1)
//                     {
//                         if (node.right==null)
//                             node.right = new TreeNode(element);
//                         else
//                             this.insertNode(element,node.right);
//                     }
                    
//             }
// }

// const bst= new BinarySearchTree();
// bst.insert(1);
// bst.insert(12);
// bst.insert(18);
// bst.insert(6);

// console.log(bst);

//
// function TreeNode(val, left, right) {
//     this.val = val || null;
//     this.left = left || null;
//     this.right = right || null;
// }

// function inorderTraversal(root) {
//     const traversal = [];
//     function traverse(node) {
//         if (node === null) return;
//         traverse(node.left);
//         traversal.push(node.val);
//         traverse(node.right);
//     }
//     traverse(root);
//     return traversal;
// }
// const root1 = new TreeNode(9,
//     new TreeNode(10,
//         new TreeNode(18),
//         new TreeNode(20)
//     ),
//     new TreeNode(30,
//         new TreeNode(40)
//     )
// );
// const traversal1 = inorderTraversal(root1);
// console.log(traversal1);
// function preorderTraversal(root) {
//     const traversal = [];
//     function traverse(node) {
//         if (node === null) return;
//         traversal.push(node.val);
//         traverse(node.left);
//         traverse(node.right);
//     }
//     traverse(root);
//     return traversal;
// }
// const traversal2 = preorderTraversal(root1);
// console.log(traversal2); 
// function postorderTraversal(root) {
//     const traversal = [];
//     function traverse(node) {
//         if (node === null) return;
//         traverse(node.left);
//         traverse(node.right);
//         traversal.push(node.val);
//     }
//     traverse(root);
//     return traversal;
// }
// const traversal = postorderTraversal(root1);
// console.log(traversal);
