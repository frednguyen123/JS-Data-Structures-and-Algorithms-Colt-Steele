/**
 * Radix Sort
 */

/**
 * RADIX SORT: INTRODUCTION
 * 
 * COMPARISON SORTS
 * Bubble Sort: O(N^2)
 * Insertion Sort: O(N^2)
 * Selection Sort: O(N^2)
 * Quick Sort: O(NLOG(N))
 * Merge Sort: O(NLOG(N))
 * 
 * CAN WE DO BETTER?
 * We can but not by making comparisons
 * 
 * RADIX SORT
 * Radix sort is a special sorting algorithm that works on lists of numbers
 * It never makes comparisons between elements!
 * It exploits the fact that information about the size of a number is encoded
 * in the number of digits
 * More digits is a bigger number.
 * 
 * We group numbers into buckets then return them in that order, we look at the 
 * right most digit and work inward.
 * 
 */

/**
 * RADIX SORT HELPERS
 * In order to implement radix sort, it's helpful to build a few helper functions
 * getDigit(num,place) returns the digit in num at the given place.
 * 
 */

// MY SOLUTION
function getDigit(num, place){
   let digitsArr =  Array.from(String(num), Number);

    return place > digitsArr.length-1 ? 0 : digitsArr[(digitsArr.length - 1) - place]
}
console.log(getDigit(12345, 0));

// INSTRUCTOR SOLUTION
function getDigit1(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

// MY SOLUTION
function digitCount(num){
    let numArr =  Array.from(String(Math.abs(num)), Number);
    return numArr.length;
}
console.log(digitCount(1345));

// INSTRUCTOR SOLUTION
function digitCount1(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
  
// MY SOLUTION
function mostDigits(nums){
    let count = 0;
    let largestDigits = 0;
    while(count < nums.length){
        let digits = digitCount(nums[count]);
        if (digits > largestDigits){
            largestDigits = digits; 
        }
        count++
    }
    return largestDigits;
}
console.log(mostDigits([12354, 56, 7]));
// console.log(mostDigits([10, 100, 1, 1000, 10000000]));

// INSTRUCTOR SOLUTION
function mostDigits1(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
console.log(mostDigits([23,567,89,12234324,90]));

/**
 * RADIX SORT PSEUDOCODE
 * Define a function that accepts a list of numbers
 * Figure out how many digits the largest number has
 * Loop from k = 0 up to this largest number of digits
 * For each iteration of the loop:
 *      -Create buckets for each digit(0-9)
 *      -place each number in the corresponding bucket 
 *       based on its kth digit
 * Replace our existing array with values in our buckets,
 * starting with 0 going up to 9. 
 * Return list at the end.
 *  
 */

// MY SOLUTION

function radixSort(list){
    let counter = mostDigits(list);
    let currArr = list;
    console.log(counter);
    for(let k = 0; k < counter; k++){
        let bucket = Array.from({length: 10}, () => [])
        for(let i = 0; i < list.length; i++){
            let bucketNum = getDigit(currArr[i], k);
            bucket[bucketNum].push(currArr[i]);
            console.log(bucket);
        }
        currArr = bucket.flat(); //Doesnt work on Udemy Editor .flat() ES2019
        console.log(currArr);
    }
    return currArr;
}
console.log(radixSort([10, 100, 1, 1000, 10000000]));
console.log(radixSort1([23,345,5467,12,2345,9852]))

function radixSort1(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
// console.log(radixSort1([23,345,5467,12,2345,9852]));


/**
 * RADIX SORT BIG O
 * Best: O(NK)
 * Average: O(NK)
 * Worst: O(NK)
 * 
 * SPACE: O(N + K)
 * 
 * WHY N and K?
 * N - length of array
 * K - number of digits (average)
 * 
 * O(N LOG(N)) due to computer and how they store the numbers in memory
 * 
 */