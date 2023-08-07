/**
 * Searching Algorithms
 */

/**
 * INTRO TO SEARCHING/OBJECTIVES
 * Describe what a searching algorithm is
 * Implement linear search on arrays
 * Implement binary search on sorted arrays
 * Implement a naive string searching algorithm
 * Implement the KMP string searching algorithm
 * 
 */

/**
 * LINEAR SEARCH
 * Javascript has search
 * There are many search methods on arrays in Javascript: 
 * indexOf, includes, find, findIndex
 * 
 * EXAMPLE
 * Lets search for 12:
 * [5, 8, 1, 100, 12, 3, 12]
 * We traverse through the entire array one index at a time
 * 
 * LINEAR SEARCH PSEUDOCODE
 * This function accepts an array and a value
 * Loop through the entire array and check if the current array element is 
 * equal to the value. 
 * If it is, return the index at which the element is found
 * If the value is never found, return -1
 * 
 */

/**
 * CODING EXERCISE 24: LINEAR SEARCH EXERCISE
 * Write a function called linearSearch which accepts an array and a value, 
 * and returns the index at which the value exists. If the value does not 
 * exist in the array, return -1. Don't use indexOf to implement this function!
 * 
 */

// MY SOLUTION O(N) Time Complexity
function linearSearch(arr, value){
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] === value){
            return i;
        }
    }
    return -1
}
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5

/**
 * BINARY SEARCH
 * Binary search is a much faster form of search
 * Rather than eliminating one element at a time you can eliminate half of the 
 * remaining elements at a time.
 * Binary Search only works on sorted arrays
 * 
 * EXAMPLE
 * Lets search for 15:
 * [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]
 * We traverse through the array through looking at the middle element and checking
 * if 15 is greater than or less than, we ignore the other half of the array. We continue
 * dividing until we find the element we are looking for.
 * 
 * BINARY SEARCH PSEUDOCODE
 * This function accepts a sorted array and a value
 * Create a left pointer at the start of the array, and a right pointer at the end of the
 * array.
 * While the left pointer comes before the right pointer.
 * 1. Create a pointer in the middle.
 * 2. If you find the value you want, return the index.
 * 3. If the value is too small, move the left pointer up.
 * 4. If the value is too large, move the right pointer down.
 * If you never find the value return -1.
 * 
 */

/**
 * CODING EXERCISE 25: BINARY SEARCH EXERCISE
 * Write a function called binarySearch which accepts a sorted array and a value and 
 * returns the index at which the value exists. Otherwise, return -1.
 * 
 */

// MY SOLUTION
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.ceil((left + right) / 2)
    if (arr[left] === val) return 0;
    if (arr[right] === val) return arr.length-1;
    while(left < right){
        if(arr[middle] === val){
            return middle;
        }
        else if(arr[middle] > val){
            right = middle;
            middle = Math.ceil((left + right) / 2)
        }
        else{
            left = middle;
            middle = Math.ceil((left + right) / 2)
        }
    }
    return -1;
}
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)) // 16

// INSTRUCTOR SOLUTION
function binarySearch1(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// INSTRUCTOR REFACTORED VERSION
function binarySearch2(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 28))

/**
 * BINARY SEARCH BIG O
 * Best Case: O(1)
 * Worst and Average Case: O(log n)
 * 
 * EXAMPLE
 * Suppose we're searching for 13
 * [2, 4, 5, 9, 11, 14, *19*, 21, 25, 28, 30, 50, 52, 60, 63]
 * [2, 4, 5, *9*, 11, 14, 19]
 * [11, *14*, 19]
 * [11]
 * 
 * 16 elements = 4 steps (worst case scenario 13 isn't in the array)
 * Log₂16 = 4 because 2^4 = 16 
 * This Search grows at O(Log N)
 * 
 */

/**
 * NAIVE STRING SEARCH
 * Suppose you want to count the number of time a smaller string appears
 * in a longer string
 * A straightforward approach involves checking pairs of characters 
 * individually
 * 
 * PSEUDOCODE
 * Loop over the longer string
 * Loop over the shorter string
 * If the characters don't match, break out of the inner loop
 * If you complete the inner loop and find a match increment the count of matches
 * Return the count
 * 
 */

// MY SOLUTION
function stringFind(long, short){
    let match = 0;
    for (let i = 0; i < long.length; ++i){
        for (let j = 0; j < short.length; ++j){
            console.log(short[j], long[i+j]);
            if(short[j] !== long[i+j]){
                console.log('break');
                break;
            }
            if(j === short.length - 1) match++;
        }
    }
    return match;
}
console.log(stringFind("lorie loled", "lol"));

// INSTRUCTOR SOLUTION
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}
console.log(naiveSearch("lorie loled", "lol"));