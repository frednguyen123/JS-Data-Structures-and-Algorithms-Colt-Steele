/**
 * TREE TRAVERSAL
 */

/**
 * INTRODUCTION TO TREE TRAVERSAL
 * 
 * TRAVERSING A TREE
 * Breadth First Search
 * Depth First Search (inorder, preorder, postorder)
 * 
 */

/**
 * BREADTH FIRST SEARCH
 * 
 * BFS-ITERATIVELY
 * Create a queue(this can be an array) and a variable to store the value of nodes.
 * Place the root node in the queue
 * Loop as long as there is anything in the queue
 *  -Dequeue a node from the queue and push the value of the node into the variable 
 *   that stores the nodes.
 *  -If there is a left property on the node dequeued - add it to the queue
 *  -If there is a right property on the node dequeued - add it to the queue
 * Return the variable that stores the values
 * 
 */

/**
 * DEPTH FIRST SEARCH PREORDER-Recursively
 * Create a variable to store the values of nodes visited
 * Store the root of the BST in a variable called current
 * Write a helper function which accepts a node
 *  -Push the value of the node to the variable that stores the values
 *  -If the node has a left property, call the helper function with the left property
 *   on the node
 *  -If the node has a right property, call the helper function with the right property
 *   on the node
 * Invoke the helper function with the current variable
 * Return the array of values
 * 
 */

/**
 * DEPTH FIRST SEARCH POST-Recursively
 * Create a variable to store the values of nodes visited
 * Store the root of the BST in a variable called current
 * Write a helper function which accepts a node
 *  -If the node has a left property, call the helper function with the left property
 *   on the node
 *  -If the node has a right property, call the helper function with the right property
 *   on the node
 *  -Push the value of the node to the variable that stores the values
 * Invoke the helper function with the current variable
 * Return the array of values
 * 
 */

/**
 * DEPTH FIRST SEARCH INORDER-Recursively
 * Create a variable to store the values of nodes visited
 * Store the root of the BST in a variable called current
 * Write a helper function which accepts a node
 *  -If the node has a left property, call the helper function with the left property
 *   on the node
 *  -Push the value of the node to the variable that stores the values
 *  -If the node has a right property, call the helper function with the right property
 *   on the node
 * Invoke the helper function with the current variable
 * Return the array of values
 * 
 */

/**
 * WHEN TO USE BFS AND DFS
 * Time Complexity is the same, visit each node once
 * BFS-Lots of nodes to keep track of (wide tree takes more space)
 * DFS-Fewer nodes to keep track of (long tree takes more space)
 * 
 * DFS Inorder: Used commonly with Binary Search Trees, we get all of the nodes
 * in the tree in their underlying order.
 * DFS Preorder: Can be used to "export" a tree structure so that it can be 
 * easily reconstruct the tree.
 * 
 * RECAP
 *  -Trees are non-linear data structures that contain a root and child nodes
 *  -Binary trees can have values of any type, but at most two children for each parent
 *  -Binary Search Trees are a more specific version of binary tree where every node to 
 *   left of a parent is less than it's value and every node to the right is greater.
 *  -We can search through trees using BFS and DFS
 * 
 */



class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    
    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
            return this;
        } 
        let current = this.root
        while(true){
            if(newNode.value === current.value) return undefined;
            if (newNode.value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left
                }
            } else if (newNode.value > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right
                }
            } 
        }
    }

    find(value){
        if(!this.root){
            return false;
        } 
        let current = this.root;
        while(true){
            if(value === current.value) return true;
            else if (value > current.value){
                if(current.right !== null){
                    current = current.right
                } else {
                    return false
                }
            }   
            else if (value < current.value){
                if(current.left !== null){
                    current = current.left
                } else {
                    return false
                }
            } 
        }
    }

    BFS(){
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPre(){
        let data = [];
        let current = this.root;
        function helper(current){
            data.push(current);
            if(current.left !== null){
                helper(current.left)
            }
            if(current.right !== null) {;
                helper(current.right)
            }
        }
        helper(current)
        return data;
    }

    DFSPost(){
        let data = [];
        let current = this.root;
        function helper(current){
            if(current.left !== null){
                helper(current.left)
            }
            if(current.right !== null) {;
                helper(current.right)
            }
            data.push(current);
        }
        helper(current)
        return data;
    }
    DFSInorder(){
        let data = [];
        let current = this.root;
        function helper(current){
            if(current.left !== null){
                helper(current.left)
            }
            data.push(current);
            if(current.right !== null) {;
                helper(current.right)
            }
        }
        helper(current)
        return data;
    }
}

//    10
//  6    15
// 3 8     20

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
    
