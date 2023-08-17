/**
 * Singly Linked Lists
 */

/**
 * INTRODUCTION TO SINGLY LINKED LISTS
 * 
 * OBJECTIVES
 * Define what a Singly Linked List is
 * Compare and contrast Linked Lists with Arrays
 * Implement insertion, removal and traversal methods on Singly Linked Lists
 * 
 * WHAT IS A LINKED LIST
 * A data structure that contains a head, tail, and length property
 * Linked Lists consist of nodes, and each node ha a value and a pointer to
 * another node or null.
 * 
 * COMPARISONS WITH ARRAYS
 *  Lists
 *      -Do not have indexes
 *      -Connected via nodes with a next pointer
 *      =Random access is not allowed
 *  Arrays
 *      -Index in order!
 *      -Insertion and deletion can be expensive
 *      -Can quickly be accessed at a specific index
 * 
 */

/**
 * LINKED LISTS STARTER CODE + PUSH 
 * 
 * PUSHING PSEUDOCODE
 * Adding a new node to the end of a linked list
 * This function should accept a value
 * Create a new node using the value passed to the function
 * If there is no head property on the list, set the head and tail to be the
 * newly created node
 * Otherwise set the next property on the tail to be the new node and set the 
 * tail property on the list to be the newly created node
 * Increment the length by one.
 * 
 */

/**
 * LINKED LISTS POP INTRODUCTION
 * Removing a node from the end of the Linked List
 * 
 * A WAY TO TRAVERSE
 *  traverse(){
            let current = this.head;
            while(current){
                console.log(current.val);
                current = current.next
            }
    }
 * 
 * POPPING PSEUDOCODE
 * If there are no nodes in the list return undefined
 * Loop through the list until you reach the tail
 * Set the next property of the 2nd to last node to be null
 * Set the tail to be the 2nd to last node
 * Decrement the length of the list by 1
 * Return the value of the node removed
 * 
 */

/**
 * LINKED LIST SHIFT PSEUDOCODE
 * Remove a new node from the beginning of a Linked List
 * Store the current head property in a variable
 * Set the head property to be the current head's next property
 * Decrement the length by 1
 * Return the value of the node removed.
 * 
 */

/**
 * LINKED LIST UNSHIFT PSEUDOCODE
 * Adding a new node to the beginning of a Linked List.
 * 
 * The function should accept a value.
 * Create a new node using the value passed to the function.
 * If there is no head property on the list, set the head and tail to be the 
 * newly created node.
 * Otherwise set the newly created node's next property to be the current
 * head property on the list.
 * Set the head propertty on the list to be that newly created node.
 * Increment the length of the list by 1.
 * Return the linked list.
 * 
 */

/**
 * LINKED LIST GET PSEUDOCODE
 * Retrieving a node by it's position in the Linked List!
 * 
 * This function should accept an index
 * If the index is less than zero or greater than or equal to the length
 * of the list, return null.
 * Loop through the list until you reach the index and return the node at that 
 * specific index.
 * 
 */

/**
 * LINKED LIST SET PSEUDOCODE
 * Changing the value of a node based on it's position in the Linked List
 * 
 * This function should accept a value and an index
 * Use get function to find the specific node
 * If the node is not found, return false
 * If the node is found, se tthe value of that node to be the value passed to the 
 * function and return true.
 * 
 */

/**
 * LINKED LIST INSERT PSEUDOCODE
 * Adding a node to the Linked List at a specific position
 * 
 * If the index is less than zero or greater than the length, return false.
 * If the index is the same as the length, push a new noe to the end of the list.
 * If the index is 0, unshift a new node to the start of the list
 * Otherwise, use the get method, access the node at the index -1
 * Set the next property on that node to the new node
 * Set the next property on that new node to be the previous next
 * Increment the length
 * Return true
 * 
 */

/**
 * LINKED LIST REMOVE PSEUDOCODE
 * Removing a node from the Linked List at the specific position
 * 
 * If the index is less than zero or greater than the length, return undefined
 * If the index is the same as the length-1, pop
 * If the index is 0, shift
 * Otherwise, using the get method, access the node at the index - 1
 * Set the next property on that node to be the next of the next node
 * Decrement the length
 * Return the value of the node removed.
 * 
 */

/**
 * LINKED LIST REVERSE PSEUDOCODE
 * Reversing the Linked List in place
 * 
 * Swap the head and tail
 * Create a variable next
 * Create a variable prev
 * Create a variable called node and initialize it to the head property
 * Loop through the list
 * Set next to be the next property on whatever node is
 * Set the next property on the node to be whatever prev is
 * Set prev to be the value of the node variable
 * Set the node variable to be the value of the next variable.
 * 
 */

// piece of data - val
// reference to next node - next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = this.head;
        if(!current.next){
            this.tail = null;
            this.head = null;
            this.length--;
            return current;
        } 
        while(current.next){
            newTail = current; 
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }  
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        let currentIndex = this.head;
        let counter = 0;
        while(counter < index){
            currentIndex = currentIndex.next;
            counter++;
        }
        return currentIndex;
    }
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true
        } else {
            return false;
        }
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        
        if(index === this.length){
            this.push(val);
            return true
        }
        if(index === 0){
            this.unshift(val);
            return true;
        }
        let newNode = new Node(val);
        let foundNode = this.get(index-1);
        if(foundNode){
            newNode.next = foundNode.next;
            foundNode.next = newNode;
            this.length++;
            return true
        }
        else{
            return false;
        }
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;

        if(index === this.length-1) return this.pop();

        if (index === 0) return this.unshift();

        let foundNode = this.get(index-1);
        let removed = foundNode.next;
        foundNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);

let list = new SinglyLinkedList()
list.push("HELLO");
list.push("GOODBYE");
list.push("99");
list.push("100")
console.log(list);
list.pop();
console.log(list);

/**
 * BIG O SINGLY LINKED LISTS
 * Insertion - O(1)
 * Removal - O(1) or O(N)
 * Searching - O(N)
 * Access - O(N)
 * 
 * RECAP
 * Singly Linked Lists are an excellent alternative to arrays when insertion
 * and deletion at the beginning are frequently required.
 * Arrays contain a built in index whereas Linked Lists do not.
 * The idea of a list data structure that consists of nodes is the foundation 
 * for the other data structures like Stacks and Queues.
 * 
 */