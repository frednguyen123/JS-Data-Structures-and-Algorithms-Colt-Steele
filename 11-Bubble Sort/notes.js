/**
 * Bubble Sort
 */

/**
 * INTRO TO SORTING ALGORITHMS
 * 
 * WHAT IS SORTING
 * Sorting is the process of rearranging the items in a collection so
 * that the items are in some kind of order
 * 
 * EXAMPLES
 * Sorting numbers from smallest to largest.
 * Sorting names alphabetically.
 * Sorting movies based on release year.
 * Sorting movies based on revenue.
 * 
 * WHY DO WE NEED THIS?
 * Sorting is an incredibly common task, so it's good to know how it works
 * There are many different ways to sort things, and different techniques have 
 * their own advantages and disadvantages.
 * 
 * OBJECTIVES
 * Implement bubble sort
 * Implement selection sort
 * Implement insertion sort
 * Understand why it is important to learn these simpler sorting algorithms
 * 
 */

/**
 * BUILT-IN JAVASCRIPT SORTING
 * 
 * TELLING JAVASCRIPT HOW TO SORT
 * Javascript has a sort method.
 * You can use this comparator function to tell Javascript how you want it
 * to sort.
 * The comparator looks at pairs of elements (a and b), determines their sort
 * order based on the return value.
 * If it returns a negative number, a should come before b.
 * If it returns a positive number, a should come after b.
 * If it returns 0, a and b are the same (in sorting).
 * 
 */

/**
 * BUBBLESORT
 * A sorting algorithm where the largest values bubble up to the top
 * 
 * EXAMPLE
 * [ 5, 3, 4, 1, 2 ] 
 * [ 3, 5, 4, 1, 2 ]
 * [ 3, 4, 5, 1, 2 ]
 * [ 3, 4, 1, 5, 2 ]
 * [ 3, 4, 1, 2, 5 ]
 * 
 * SWAPPING
 * Many sorting algorithms involve some type of swapping functionality
 * Swapping to numbers to put them in order
 * 
 */

function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp; 
}

const swap2 = (arr, idx1, idx2) =>{
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

/**
 * BUBBLESORT IMPLEMENTATION
 * 
 * BUBBLESORT PSEUDOCODE
 * Start looping from with a variable called i the end of the array towards the beginning
 * Start an inner loop with a variable called j from the beginning until i-1
 * If arr[j] is greater than arr[j+1], swap those two values
 * Return the sorted array
 * 
 */

// MY SOLUTION
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
    return arr;
}
console.log(bubbleSort([ 5, 3, 4, 1, 2 ]));

// INSTRUCTOR SOLUTION
function bubbleSort2(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
        console.log('ONE PASS COMPLETE!')
    }
    return arr;
}
console.log(bubbleSort2([ 5, 3, 4, 1, 2 ]));

// SOLUTION THAT SHORT CIRCUITS IF THERE IS NO SWAPS
function bubbleSort3(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
                noSwaps = false;
            }
        }
        if(noSwaps) break;
        // console.log('ONE PASS COMPLETE!')
    }
    return arr;
}
console.log(bubbleSort3([ 5, 3, 4, 1, 2 ]));

/**
 * BUBBLESORT TIME COMPLEXITY
 * Average/Worst Case: O(N^2)
 * Best Case (Nearly Sorted): O(1)
 */