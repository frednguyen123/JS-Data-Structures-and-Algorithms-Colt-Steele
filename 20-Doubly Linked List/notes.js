/**
 * DOUBLY Linked Lists
 */

/**
 * INTRODUCTION TO DOUBLY LINKED LISTS
 * 
 * OBJECTIVES
 * Construct Doubly Linked List
 * Compare and contrast Doubly and Singly Linked Lists
 * Implement basic operations on a Doubly Linked List
 * 
 * WHAT IS A DOUBLY LINKED LIST
 * Almost identical to Singly Linked Lists, except every node has another pointer,
 * to the pervious node.
 * 
 * COMPARISONS WITH SINGLY LINKED LISTS
 *  More memory === More Flexibility
 * 
 */

/**
 * PUSH PSEUDOCODE
 * Adding a node to the end of a Doubly Linked List
 * 
 * STEPS
 * Create a new node with the value passed into the function.
 * If the head property is null set the head and tail to be
 * the newly created node.
 * if not, set the next property on the tail to be that node.
 * Set the previous property on the newly created node to be the tail.
 * Set the tail to be the newly created node.
 * Increment the length
 * Return the Doubly Linked List
 * 
 */

/**
 * POP PSEUDOCODE
 * Removing a node from the end of the Doubly Linked List
 * 
 * STEPS
 * If there is no head, return undefined.
 * Store the current tail in a variable to return later.
 * If the length is 1, set the head and tail to null.
 * Update the tail to be the previous Node.
 * Set the newTail's next to null.
 * Decrement the length.
 * Return the value removed.
 * 
 */

/**
 * SHIFT PSEUDOCODE
 * Removing a node from the beginning of the Doubly Linked List
 * 
 * STEPS
 * If length is 0, returned undefined.
 * Store the curretn head property in a variable.
 * If the length is one
 *  -Set the head to be null
 *  -Set the tail to be null
 * Update the head to be the next of the old head. 
 * Set the head's prev proeprty to null
 * Set the old head's next to null
 * Decrement the length
 * Return old head. 
 * 
 */

/**
 * UNSHIFT PSEUDOCODE
 * Adding a node from the beginning of the Doubly Linked List
 * 
 * STEPS
 * Create a new node with the value passed to the function.
 * If the length is 0
 *  -Set the ehad to be the new node
 *  -Set the tai lto be the new node
 * Otherwise
 *  -Set the previous property on the head of the list to be the new node.
 *  -Set the next property on the new node t obe the head property.
 *  -Update the head to be the new node.
 * 
 */

/**
 * GET PSEUDOCODE
 * Accessing a node in a Doubly Linked List by its position.
 * 
 * STEPS
 * If the index is less than 0 or greater or equal to the length, return null
 * If the index is less than or equal to half the length of the list
 *  -Loop through the list starting from the head and loop towards the middle
 *  -Return the node once found
 * If the index is greater than half the length of the list
 *  -Loop through the list starting from the tail and loop towards the middle.
 *  -Return the node once it is found.
 * 
 */


/**
 * SET PSEUDOCODE
 * Replacing the valueofo a node to the index a Doubly Linked List
 * 
 * STEPS
 * Create a variable which is the result of the get method at the index
 * passed to the function
 *  -If the get method returns a valid node, set the value of that node to be 
 *   the value of that node to be the value passed to the function
 *  -Return true
 * Otherwise False.
 * 
 */

/**
 * INSERT PSEUDOCODE
 * Adding a node in a Doubly Linked List by a certain position
 * 
 * STEPS
 * If the index is less than zero or greater than or equal to the length return false.
 * If the index is 0, unshift.
 * If the index is the same as the length, push
 * Use the get method to access the index-1 
 * Set the next and prev properties on the correct nodes to link everything together
 * Increment the length
 * Return true
 * 
 */

/**
 * REMOVE PSEUDOCODE
 * Removing a node in a Doubly Linked List by a certain position
 * 
 * STEPS
 * If the index is less than zero or greater than or equal to length return undefined
 * If the index is 0, shift
 * If the index is the same as length-1, pop
 * Use the get method to retrieve the item to be removed
 * Update the next and prev properties to remove the found node from the list
 * Set next and prev to null on the found node
 * Decrement the length
 * Return the node
 * 
 */

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        } 
        let currentTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            let newTail = this.tail.prev;
            this.tail = newTail;
            this.tail.next = null;
            currentTail.prev = null;
        }
        this.length--;
        return currentTail;
    }
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.tail = null;
            this.head = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null; 
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode; 
        } else {
            this.head.prev = newNode;
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
        let currentIndexStart = this.head;
        let currentIndexEnd = this.tail;
        if(index <= Math.floor((this.length-1) / 2)){
            let counter = 0;
            while(counter < index){
                currentIndexStart = currentIndexStart.next;
                counter++;
            }
            return currentIndexStart;
        }
        if(index > Math.floor((this.length-1) / 2)){
            let counter = this.length-1;
            while(counter > index){
                currentIndexEnd = currentIndexEnd.prev;
                counter--;
            }
            return currentIndexEnd;
        }
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
        let beforeNode = this.get(index-1);
        let nextNode = beforeNode.next;
        if(beforeNode){
            nextNode.prev = null;
            beforeNode.next = newNode, newNode.prev = beforeNode;
            newNode.next = nextNode, nextNode.prev = newNode;
            this.length++;
            return true
        }
        else{
            return false;
        }
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if (index === 0) return this.unshift();
        if(index === this.length-1) return this.pop();

        let removed = this.get(index);
        let beforeNode = removed.prev;
        let afterNode = removed.next;
        beforeNode.next = removed.next;
        afterNode.prev = removed.prev;
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }
}

let list = new DoublyLinkedList()
list.push("node1");
list.push("node2");
list.push("node3");
list.push("node4");
list.push("node5");
list.push("node6");
console.log(list);

/**
 * BIG O DOUBLY LINKED LISTS
 * Insertion - O(1)
 * Removal - O(1) 
 * Searching - O(N) technically O(N/2) we can start at either side
 * Access - O(N)
 * 
 * RECAP
 * Doubly Linked Lists are almost identical to Singly Linked Lists
 * except there is an additional pointer to previous nodes.
 * Better than Singly Linked Lists for finding nodes and can be done 
 * in half the time!
 * However, they do take up more memory considering the extra pointer.
 * 
 */