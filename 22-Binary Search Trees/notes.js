/**
 * BINARY SEARCH TREES
 */

/**
 * INTRODUCTION TO TREES
 * 
 * OBJECTIVES
 * Define what a tree is 
 * Compare and contrast trees and lists
 * Explain the difference between trees, binary trees, and binary search trees.
 * Implement operations on binary search trees.
 * 
 * WHAT IS A TREE?
 * A data strucuture that consists of nodes in a parent/child relationship
 * Lists - Linear
 * Tree - Non-linear
 * 
 * TREE TERMINOLOGY
 * Root - Top node in a tree.
 * Child - A node directly connected to another node when moving away from the Root.
 * Parent - The converse notion of a child
 * Siblings - A group of nodes with the same parent.
 * Leaf - A node with no children.
 * Edge - The connection between one node to another.
 * 
 * USES FOR TREES
 * HTML DOM
 * Network Routing 
 * Abstract Syntax Trees
 * Artificial Intelligence (decision tree)
 * Folders in operating systems
 * Computer File Systems
 * 
 */

/**
 * INTRODUCTION TO BINARY TREES
 * 
 * KINDS OF TREES
 * Trees
 * Binary Trees
 * Binary Search Trees
 * 
 * HOW BSTS WORK
 * Every parent node has at most two children
 * Every node to the left of a parent node is always less than the parent.
 * Every node to the right of a parent node is always greater than the parent.
 * 
 */

/**
 * BST: INSERT
 * Steps: Iteratively or Recursively
 * Create a node
 * Start at the root
 *  -Check if there is a root, if not - the root now becomes that new node
 *  -If there is a root, check if the value of the new node is greater than
 *   or less than the value of the root
 *  -If it is greater
 *      -Check to see if there is a node to the right
 *          -If there is, move to that node and repeat these steps.
 *          -If there is not, add that node as the right property
 *  -If it is less
 *      -Check to see if there is a node to the left
 *          -If there is, move to that node and repeat these steps.
 *          -If there is not, add that node as the left property.
 * 
 */

/**
 * BST: Find
 * Steps: Iteratively or Recursively
 * Starting at the root
 *  -Check if there is a root, if not we are done searching
 *  -If there is a root, check fi the value of the new node is the value we
 *   are looking for. If we found it we're done!
 *  -If not, check to see if the value is greater than or less than the value 
 *   of the root
 *  -If it is greater
 *      -Check to see if there is a node to the right
 *          -If there is, move to that node and repeat these steps.
 *          -If there is not, we're done searching
 *  -If it is less
 *      -Check to see if there is a node to the left
 *          -If there is, move to that node and repeat these steps.
 *          -If there is not, we're done searching
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
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree);

//    10
//  5   13
// 2 7 11 16

/**
 * BIG O BINARY SEARCH TREES
 * Insertion - O(log N)
 * Searching - O(log N)
 * 
 * RECAP
 * Each time we double the number of nodes we have to take an extra step
 * 2 Nodes = 1 step
 * 4 Nodes = 2 steps
 * 8 Nodes = 3 steps
 * Log (base 2) N
 *  
 */