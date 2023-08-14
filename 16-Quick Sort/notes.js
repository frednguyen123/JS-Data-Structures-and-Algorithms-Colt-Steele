/**
 * Quick Sort
 */

/**
 * INTRODUCTION TO QUICKSORT
 * Like merge sort, exploits the fact that arrays of 0 or 1 element are
 * always sorted.
 * Works by selecting one element (called the "pivot") and finding the index
 * where the pivot should end up in the sorted array. 
 * Once the pivot is positioned appropriately, quick sort can be applied on
 * either side of the pivot.
 * 
 * HOW DOES IT WORK?
 * [5, 2, 1, 8, 4, 7, 6, 3]
 * [3, 2, 1, 4, *5*, 7, 6, 8] 
 * 
 * We move the current value of the array we are looking at. 
 * We count the amount of numbers under 5 (4 numbers) so we know there are
 * 4 numbers less than 5 so we move 5 to position arr[4];
 * 
 */

/**
 * PIVOT HELPER INTRODUCTION
 * In order to implement quick sort, it's useful to first implement a function
 * responsible arranging elements, in an array on eiter side of a pivot.
 * given an array, this helper function should designate an element as the pivot.
 * It should then rearrange elements in the array so that all values less than 
 * the pivot are moved to the left of the pivot, and all values greater than the
 * pivot are moved to the right of the pivot.
 * The order of the elements on either side of the pivot doesn't matter!
 * The helper should do this in place, that is, it should not create a new array
 * When complete, the helper should return the index of the pivot.
 * 
 * PICKING A PIVOT
 * The runtime of quicksort depend in part on how one selects the pivot
 * Ideally, the pivot should be chosen so that it's roughly the median 
 * value in the data set you're sorting.
 * For simplicity, we'll always choose the pivot to be the first element
 * (we'll talk about consequences later).
 * 
 * PIVOT PSEDUOCODE
 * It will help to accept three arguements: an array, a start index, and an
 * end index (these can default to 0 and the array length minus 1, respectively)
 * Grab the pivot from the start of the array
 * Store the current pivot index in a variable (this will track where pivot should end up)
 * Loop through the array from the start until the end
 *      -If the pivot is greater than the current element, increment the pivot index 
 *       variable and then sqap the current element with the element at the pivot index.
 */


// First Version
function pivot(arr, start=0, end=arr.length+1){
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    var pivot = arr[start];
    var swapIdx = start;
  
    for(var i = start + 1; i < arr.length; i++){
      if(pivot > arr[i]){
        swapIdx++;
        swap(arr,swapIdx,i);
      }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
  }
  
  // Version with ES2015 Syntax
//   function pivot(arr, start = 0, end = arr.length - 1) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
  
//     // We are assuming the pivot is always the first element
//     let pivot = arr[start];
//     let swapIdx = start;
  
//     for (let i = start + 1; i <= end; i++) {
//       if (pivot > arr[i]) {
//         swapIdx++;
//         swap(arr, swapIdx, i);
//       }
//     }
  
//     // Swap the pivot from the start the swapPoint
//     swap(arr, start, swapIdx);
//     return swapIdx;
//   }
  
  console.log(pivot([4,8,2,1,5,7,6,3]));
  
/**
 * QUICKSORT PSEUDOCODE + IMPLEMENTATION
 * Call the pivot helper on the array
 * When the helper returns to you the updated pivot index, recursively call
 * the pivot helper on the subarray to the left of that index, and the subarray
 * to the right of that index.
 * Your base case occurs when you consider a subarray with less than 2 elements
 * 
 */

// INSTRUCTOR SOLUTION
function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right); //3
        // left
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}
console.log(quickSort([4,6,9,1,2,5,3]));

/**
 * QUICK SORT BIG O
 * Best: O(N LOG(N))
 * Average: O(N LOG(N))
 * Worst: O(N^2)
 * 
 * SPACE: O(LOG N)
 * 
 * WHY LOG N?
 * O(LOG N) is the number of splits when increasing the array size
 * Example: Each decompositions as the array grows. We have to look at each 
 * subarray and move the pivot which grows by logN
 * log base 2 (8) = 3, because 2^3=8;
 * 
 * O(N LOG(N)), First 'N' Comes from the comparisons, at each level the number 
 * of comparisons is based on the size of the array, as the array grows,
 * the number of comparisons grow.
 * 
 * WORST CASE
 * If the array is sorted. If picking the first or last element we have to check 
 * every comparison. We would have the minimum already and count up and compare 
 * minimum value with everything greater than it. 
 * 
 * Doing that for the entire array is like loop over each index once initially,
 * and second to compare every value.
 * 
 */