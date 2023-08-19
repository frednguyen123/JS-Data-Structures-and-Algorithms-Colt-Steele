/**
 * STACKS & QUEUES
 */

/**
 * INTRODUCTION TO STACKS
 * 
 * OBJECTIVES
 * Define what a stack is
 * Understand use cases for a stack
 * 
 * WHAT IS A STACK?
 * A LIFO data structure 
 * THe last element added to the stack will be the first element removed
 * from the stack.
 * 
 * HOW IS IT USED?
 * Think about a stack of plates, or a stack of markers, or a stack of anything
 * As you pile it up the last thing (or the topmost thing) is what gets removed
 * first.
 * 
 * WHERE STACKS ARE USED
 * Managing function onvocation
 * Undo / Redo
 * Routing (the history object) is treated like a stack!
 * 
 */

/**
 * CREATING A STACK WITH AN ARRAY
 * Use push() and pop() to use an array like a stack.
 * Use shift() and unshift() can create a stack but in the beginning.
 * 
 */

/**
 * WRITING A STACK FROM SCRATCH
 * We have a stack class and a node class
 * 
 * PUSH PSEUDOCODE
 * The function should accept a value
 * Create a new node with that value
 * If there are no nodes in the stack, set the first and last property to be
 * the newly created node.
 * If there is at least one node, create a variable that stores the current
 * first property on the stack.
 * Reset the first property to be the newly created node.
 * Set the next property on the node to be the previously created variable.
 * Increment the size of the stack by 1.
 * 
 * POP PSEUDOCODE
 * If there are no nodes in the stack, return null.
 * Create a temporary variable to store the first property on the stack.
 * If there is only 1 node, set the first and last property to be null.
 * If there is more than one node, set the first property to be the next
 * property on the current first
 * Decrement the size by 1.
 * Return the value of the node removed.
 * 
 */

/**
 * BIG O STACKS
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(N)
 * Access - O(N)
 * 
 * RECAP
 * Stacks are a LIFO data structure where the last value in is always the 
 * first one out.
 * Stacks are used to handle funciton invocations (the call stack), for
 * operations like undo/redo, and for routing (remember pages you have visited
 * and going back/forward).
 * They are not a built in data structure in Javascript, but are relatively simple
 * to implement.
 * 
 */

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){ //unshift
        let newNode = new Node(value);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return this.size++;
    }
    pop(){ //shift
        if(this.size === 0) return null;

        let temp = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }
        if(this.size > 1){
            this.first = temp.next; 
        }
        this.size--;
        return temp;
    }

}

let stack = new Stack()
stack.push("HELLO");
stack.push("GOODBYE");
stack.push("99");
console.log(stack);

/**
 * INTRODUCTION TO QUEUES
 * 
 * OBJECTIVES
 * Define what a queue is
 * Understand use cases for a queue
 * Implement operations on a queue data structure. 
 * 
 * WHAT IS A QUEUE?
 * A FIFO data structure.
 * First in first out.
 * 
 * EXAMPLES
 * Waiting in line
 * Background tasks
 * Uploading resources
 * Print/Task Processing
 * 
 */

/**
 * CREATING A QUEUE WITH AN ARRAY
 * Use push() and shift() to use an array like a queue.
 * Use unshift() and pop() can create a stack but in the beginning.
 * 
 */

/**
 * WRITING A QUEUE FROM SCRATCH
 * We have a queue class and a node class
 * 
 * ENQUEUE PSEUDOCODE
 * This function accepts a value
 * Create a new node using that value passed ot the function.
 * If there are no nodes in the queue, set this node to be the first and last
 * property of the queue
 * Otherwise, set the next property on the current last to be that node, and 
 * then set the last property of the queue to be that node. 
 * 
 * DEQUEUE PSEUDOCODE
 * If there is no first property, jsut return null
 * Store the first property in a variable
 * See if the first is the same as the last (check if there is only 1 node). If 
 * so, set the first and last to be null.
 * If there is more than 1 noe, set the first property to be the next property 
 * of first.
 * Decrement the size by 1
 * Return the value of the node dequeued
 * 
 */

/**
 * BIG O QUEUES
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(N)
 * Access - O(N)
 * 
 * RECAP
 * Queues are FIFO data structure, all elements are first in first out.
 * Queues are useful for processing tasks and are foundational for more complex 
 * data structure.
 * Insertion and Removal can be done in O(1)
 * 
 */

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){ //push
        let newNode = new Node(value);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size++;
    }
    dequeue(){ //
        if(this.size === 0) return null;

        let temp = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }
        if(this.size > 1){
            this.first = temp.next; 
        }
        this.size--;
        return temp;
    }

}

let queue = new Queue()
queue.enqueue("HELLO");
queue.enqueue("GOODBYE");
queue.enqueue("99");
console.log(queue);