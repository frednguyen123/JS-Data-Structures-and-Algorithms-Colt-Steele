/**
 * Insertion Sort
 */

/**
 * INSERTION SORT: INTRODUCTION
 * Builds up the sort by graduallu creating a larger half which is always sorted
 * 
 * SELECTION SORT PSEUDOCODE
 * Start by picking the second element in the array.
 * Now compare the second element with the one before it and swap if necessary.
 * Continue to the next element and if it is in the incorrect order, iterate
 * through the sorted portion (i.e the left side) to place the element in the
 * correct place.
 * Repeat ultin the array is sorted.
 * 
 */

// INSTRUCTOR SOLUTION
function insertionSort(arr){
    for (var i = 1; i < arr.length; i++){
        var currentVal = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j + 1] = arr[j]
            console.log(arr);
        }
        arr[j + 1] = currentVal;
    }
    return arr
}
console.log(insertionSort([ 5, 3, 4, 1, 2 ]))

/**
 * INSERTION SORT TIME COMPLEXITY
 * Average/Worst Case: O(N^2)
 * Best Case (Nearly Sorted): O(N)
 * Works well when data is coming, sort as data is coming in because
 * one side of the array is already sorted.
 * 
 */
