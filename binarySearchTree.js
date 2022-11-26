class Node{
    constructor(value){
        this.value = value,
        this.left = null,
        this.right = null
    }
}


class BinarySearchtree{
    constructor(){
        this.root = null;
    }
    find(value){
        if(this.root === null || this.root.value === value){
            return this.root;
        }
        
        let currentNode = this.root;
        while(true){
            if(value < currentNode.value){
                currentNode = currentNode.left;
                if(currentNode == null){
                    return null;
                }

                else if (value == currentNode.value) {
                    return currentNode.value;
                }
               
            }
            else{
                currentNode = currentNode.right;
                if(currentNode == null){
                    return null;
                }
                else if (value == currentNode.value) {
                    return currentNode.value;
                }
              
            }
        }
        
    }

    insert(data){
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        
        else{
            let currentNode = this.root;
            while(true){
                if(data < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else{
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    deleteNode(value){
        if(this.root === null){
            return this.root;
        }
        let currentNode = this.root;
        let parentNode = null;

        while(currentNode){
          if(value < currentNode.value){
             parentNode = currentNode;
             currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          }
          else if(currentNode.value === value){
            // we have  amatch get to work

            // Option 1:no right child
            if(currentNode.right == null){
                if(parentNode === null){
                    this.root = current.left; 
                }
            }
          }
        }
       
    }


    DFSInorder(){
        return traverseInorder(this.root,[])
    }

    DFSPreorder(){
        return  traversePreorder(this.root,[]);
    }
    DFSPostorder(){
        return  traversePostorder(this.root,[]);
    }

    prettyPrint(prefix = '', isLeft = true){
        if (this.root.right !== null) {
          this.prettyPrint(this.root.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${this.root.data}`);
        if (this.root.left !== null) {
          this.prettyPrint(this.root.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
     }
  
    breadthFirstSearch(){
        let list = []
        let queue = [];
        let currentNode = this.root;
        queue.push(currentNode);

        while(queue.length>0 ){
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
}



//recursion functions
function traverseInorder(node,list){
   
    if(node.left){
       this.traverseInorder(node.left,list)
    }
    list.push(node.value);
   
    if(node.right){
     this.traverseInorder(node.right,list)
    }

    return list;
 }


function traversePreorder(node,list){
    
    list.push(node.value);
    if(node.left){
        traversePreorder(node.left,list)
    }
  
    if(node.right){
        traversePreorder(node.right,list);
    }
    return list
} 
function traversePostorder(node,list){

    if(node.left){
        traversePostorder(node.left,list)
    }
  
    if(node.right){
        traversePostorder(node.right,list);
    }
    list.push(node.value);
    return list
} 


let tree = new BinarySearchtree();
tree.insert(9);
tree.insert(4);
tree.insert(20)
tree.insert(1)
tree.insert(6)
tree.insert(15);
tree.insert(170);
tree.prettyPrint();
// console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
// console.log(tree.DFSPostorder());
