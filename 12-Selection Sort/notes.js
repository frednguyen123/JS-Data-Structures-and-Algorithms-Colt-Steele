/**
 * Selection Sort
 */

/**
 * SELECTION SORT: INTRODUCTION
 * Similar to bubble sort, but instead of first placing lare values into 
 * sorted position, it places small values into sorted position.
 * 
 * SELECTION SORT PSEUDOCODE
 * Store the first element as the smallest value you've seen so far
 * Compare this item tothe next item in the array until you find a smaller
 * number.
 * If a smaller number is found, designate that smaller number to be the new 
 * "minimum" is not the value(index) you initially began with, swap the two values
 * Repeat this with the next element until the array is sorted.
 * 
 */

// MY SOLUTION
function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp; 
}
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let min = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j]
            }
            // console.log(arr, min, arr[i], arr[j])
            // console.log(`${j} iteration`);
        }
        if(arr[i] > min){
            swap(arr, i, arr.indexOf(min))
        }
    }
    return arr;
}
console.log(selectionSort([ 5, 3, 4, 1, 2 ]))

// INSTRUCTOR SOLUTION
// LEGACY VERSION (non ES2015 syntax)
function selectionSort2(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort3(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

/**
 * SELECTION SORT TIME COMPLEXITY
 * Average/Worst Case: O(N^2)
 * Best Case (Nearly Sorted): O(N^2)
 * Even in the base case scenario, it is still O(N^2) because we still have to
 * traverse to make sure that the first index is the lowest on every iteration.
 */
