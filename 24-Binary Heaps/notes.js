/**
 * BINARY HEAPS
 */

/**
 * INTRODUCTION TO BINARY HEAPS
 * 
 * OBJECTIVES
 * Define what a binary heap is
 * Compare and contrast min and max heaps
 * Implement basic methods on heaps
 * Understand where heaps are used in the real world and what other data 
 * structures can be constructed from heaps
 * 
 * WHAT IS A BINARY HEAP?
 * Very similar to a binary search tree, with different rules
 * In a MaxBinaryHeap, parent nodes are always larger than child nodes.
 * In a MinBinaryHeap, parent nodes are always smaller than child nodes.
 * 
 * MAX BINARY HEAP
 * Each parent has at most two child nodes.
 * The value of each parent node is always greater than its child nodes.
 * In a max Binary Heap the parent is greater than the children, but there 
 * are no guarantees between siblings nodes.
 * A binary heap is as compact as possible. All the children of each node are
 * as full as they can be and left children are filled out first.
 * 
 * WHY DO WE NEED TO KNOW THIS?
 * Binary Heaps are used to implement Priority Queues, which are very 
 * commonly used data structures.
 * There are also used quite a bit, with graph traversal algorithms.
 * 
 */

/**
 * STORING HEAPS
 * For any index in an array n... 
 * The left child is stored at 2n + 1
 * The right child is at 2n + 2
 * 
 * For any child node at index n...
 * Its parent is at index (n-1)/2 (floored)
 * 
 */

/**
 * HEAP: INSERT
 * 
 * ADDING TO MAXBINARYHEAP
 * Add to the end
 * Bubble Up
 * 
 * INSERT PSEUDOCODE
 * Push the value into the values property on the heap.
 * Bubble:
 *  -Create a variable called index which is the length of the values
 *   property - 1
 *  -Create a variable called parentIndex which is the floor of (index-1)/2
 *  -Keep looping as long as the values element at the parentIndex is less 
 *   than the values element at the child index.
 *      -Swap the value of the values element at the parentIndex with the 
 *       value of the element property at the child index.
 *  -Set the index to be the parentIndex, and start over.
 * 
 */

/**
 * HEAP: EXTRACTMAX/MIN
 * 
 * REMOVING FROM A HEAP
 * Remove the root 
 * Replace with most recently added
 * Adjust (sink down)
 * 
 * REMOVE PSEUDOCODE
 * Swap the first value in the values property with the last one.
 * Pop from the values property, so you can return the value at the end.
 * Have the new root "sink down" to the correct spot
 *  -Your parent index starts at 0 (the root)
 *  -Find the index of the left child: 2*index + 1 (not out of bounds)
 *  -Find the index of the right child: 2*index + 2 (not out of bounds)
 *  -If the left or right child is greater than the element, swap. If both
 *   left and right children are larger, swap with the largest child.
 *  -The child index you swapped to now becomes the new parent index.
 *  -Keep looping and swapping until neither child is larger than the element
 *  -Return old root.
 * 
 */

class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    insert(element){
        this.values.push(element);
        let index = this.values.length - 1;
        while(true){
            let parentIndex = Math.floor((index-1)/2);
            if(element > this.values[parentIndex] && parentIndex >= 0){
                let temp = this.values[parentIndex];
                this.values[parentIndex] = element;
                this.values[index] = temp;
                index = parentIndex;
            } else {
                return false;
            }
        }
    }

    extractMax(){
        let max = this.values[0];
        let newHead = this.values[this.values.length - 1];
        this.values[0] = newHead;
        let parentIndex = 0;
        this.values.pop();
        let condition = true;
        while(condition === true){
            console.log(this.values)
            let left = 2 * parentIndex + 1;
            let right = 2* parentIndex + 2;
            if(newHead < this.values[left] && newHead < this.values[right] && left < this.values.length && right < this.values.length){
                let temp = this.values[parentIndex];
                if(this.values[left] > this.values[right]){
                    this.values[parentIndex] = this.values[left];
                    this.values[left] = temp;
                    parentIndex = left;
                } else {
                    this.values[parentIndex] = this.values[right];
                    this.values[right] = temp;
                    parentIndex = right;
                }
            } else if(newHead < this.values[left] && left < this.values.length){
                let temp = this.values[parentIndex];
                this.values[parentIndex] = this.values[left];
                this.values[left] = temp;
                parentIndex = left;
            } else if (newHead < this.values[right] && right < this.values.length){
                let temp = this.values[parentIndex];
                this.values[parentIndex] = this.values[right];
                this.values[right] = temp;
                parentIndex = right;
            } else {
                condition = false;
            }
        }
        return max
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

/**
 * PRIORITY QUEUE INTRODUCTION
 * A data structure where each element has a priority. Elements with higher
 * priorities are served before elements with lower priorities.
 * 
 * PRIORITY QUEUE PSEUDOCODE
 * Write a Min Binary Heap - lower number means higher priority.
 * Each Node has a val and a priority. Use the priority to build the heap.
 *  -Enqueue method acceps a value and prioirty, makes a new node, and puts it in
 *   the right spot based off its priority.
 *  -Dequeue method removes root element, returns itm and rearranges heap using 
 *   priority
 * 
 */

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(val, priority){
        let newNode = new Node (val, priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        while(true){
            let parentIndex = Math.floor((index-1)/2);
            if(newNode.priority < this.values[parentIndex]?.priority && parentIndex >= 0){
                let temp = this.values[parentIndex];
                this.values[parentIndex] = newNode;
                this.values[index] = temp;
                index = parentIndex;
            } else {
                return false;
            }
        }
    }
    dequeue(){
        let max = this.values[0];
        let newHead = this.values[this.values.length - 1];
        this.values[0] = newHead;
        let parentIndex = 0;
        this.values.pop();
        let condition = true;
        while(condition === true){
            let left = 2 * parentIndex + 1;
            let right = 2* parentIndex + 2;
            if(this.values[parentIndex]?.priority > this.values[left]?.priority && 
               this.values[parentIndex]?.priority > this.values[right]?.priority && 
               left < this.values.length && 
               right < this.values.length){
                let temp = this.values[parentIndex];
                if(this.values[left].priority < this.values[right].priority){
                    this.values[parentIndex] = this.values[left];
                    this.values[left] = temp;
                    parentIndex = left;
                } else {
                    this.values[parentIndex] = this.values[right];
                    this.values[right] = temp;
                    parentIndex = right;
                }
            } else if(this.values[parentIndex]?.priority > this.values[left]?.priority && left < this.values.length){
                let temp = this.values[parentIndex];
                this.values[parentIndex] = this.values[left];
                this.values[left] = temp;
                parentIndex = left;
            } else if (this.values[parentIndex]?.priority > this.values[right]?.priority && right < this.values.length){
                let temp = this.values[parentIndex];
                this.values[parentIndex] = this.values[right];
                this.values[right] = temp;
                parentIndex = right;
            } else {
                condition = false;
            }
        }
        return max
    }
}

let queue = new PriorityQueue();
queue.enqueue("common cold", 5);
queue.enqueue("gunshot wound", 1);
queue.enqueue("highfever", 4);
queue.enqueue("broken arm", 2);
queue.enqueue("glass in foot", 3);


/**
 * BIG O BINARY HEAPS
 * Insertion - O(log N)
 * Removal - O(log N)
 * Searching - O(N)
 * 
 *  -Each time we double the number of nodes we have to take an extra step
 *  -When inserting the largest node we have to make 4 comparisons to reach 
 *   the top of the tree
 * 
 * 2 Nodes = 1 step
 * 4 Nodes = 2 steps
 * 8 Nodes = 3 steps
 * 16 Nodes = 4 Steps
 * Log (base 2) N(#ofnodes) = How many steps
 *  
 * RECAP
 * Binary Heaps are very useful data structures for sorting, and implementing
 * other data structures like priority queue.
 * Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either
 * being smaller or larger than their children.
 * With just a little math we can represent heaps using arrays.
 * 
 */