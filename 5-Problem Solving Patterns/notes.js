/**
 * Problem Solving Patterns
 */

/**
 * HOW DO YOU IMPROVE?
 * 1. Devise a plan for solving problems
 * 2. Master common problem solving patterns
 * 
 * SOME PATTERNS...
 * Frequency Counter
 * Multiple Pointers
 * Sliding Window
 * Divide and Conquer
 * Dynamic Programming 
 * Greedy Algorithms
 * Backtracking
 *
 */

/**
 * FREQUENCY COUNTERS
 * This pattern uses objects or sets to collect values/frequencies of values.
 * This can often avoid the need for nested loops or O(N^2) operations with
 * arrays/strings 
 * 
 * AN EXAMPLE
 * Write a function called same, which accepts two arrays. The function should 
 * return true if every value in the array has it;s corresponding value squared in 
 * the second array. The frequency of values must be the same.
 * 
 * same([1,2,3], [4,1,9]) true
 * same([1,2,3], [1,9]) false
 * same([1,2,3], [4,4,1]) false
 * 
 */

// NAIVE SOLUTION
function same1(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1){
            return false;
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1);
    }
    return true;
}

same1([1,2,3,2], [9,1,4,4]);

// REFACTORED
function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true;
}

same2([1,2,3,2], [9,1,4,4]);

/**
 * FREQUENCY COUNTER: ANAGRAM CHALLENGE
 * Given two strings, write a funciton to determine if the second string 
 * is an anagram of the first. An anagrapm is a word, phrase, or name formed 
 * by rearranging the letters of another, such as cinema, formed from iceman. 
 * 
 * EXAMPLES
 * validAnagram('', '') //true
 * validAnagram('aaz', 'zza') //false
 * validAnagram('anagram', 'nagaram') //true
 * validAnagram('rat', 'car') //false
 * validAnagram('awesome', 'awesom') //false
 * validAnagram('qwerty', 'qeywrt') //true
 * 
 */

// MY SOLUTION
function validAnagram(string1, string2){
    if(string1.length !== string2.length){
        return false;
    }
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let i = 0; i < string1.length; ++i){
        // if object contains char add 1
        // else add char to property list
        if (frequencyCounter1[string1[i]] >= 1){
            frequencyCounter1[string1[i]]++;
        }
        else{
            frequencyCounter1[string1[i]] = 1;
        }
    }
    for (let i = 0; i < string2.length; ++i){
        // if object contains char add 1
        // else add char to property list
        if (frequencyCounter2[string2[i]] >= 1){
            frequencyCounter2[string2[i]]++;
        }
        else{
            frequencyCounter2[string2[i]] = 1;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    // Compare the number of each property to each other
    for(let key in frequencyCounter1){
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }

    return true;
}

validAnagram('anagram', 'nagaram'); //true

// INSTRUCTOR SOLUTION

function validAnagram2(first, second){
    if(first.length !== second.length){
        return false;
    }

    const lookup = {};
    for (let i = 0; i < first.length; i++){
        let letter = first[i];
        // if letter exists, increment otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        // can't find letter or letter is zero then it is not an anagram
        if (!lookup[letter]){
            return false;
        }
        else{
            lookup[letter] -= 1;
        }
    }
    return true;
}

validAnagram2('anagram', 'nagaram'); //true

/**
 * MULTIPLE POINTERS
 * Creating Pointers or values that correspond to an index or position and move 
 * towards the beginning, end or middle based on a certain condition. 
 * Very efficient for solving problems with minimal space complexity as well 
 * 
 * Use two pointers and traverse a linear structure (array, string, linked lists)
 * Usually searches for a pair of values. Uses two references and traverse together.
 * 
 * AN EXAMPLE
 * Write a function called sumZero which accepts a sorted array of integers. The
 * function should find the first pair wherethe sum is 0. Return an array that includes 
 * both values that sum to zero or undefined if a pair does not exist.
 * 
 * sumZero([-3,-2,-1,0,1,2,3]); //[-3,3]
 * sumZero([-2,,0,1,3]); //undefined
 * sumZero([1,2,3]); //undefined
 * 
 */

// NAIVE SOLUTION Time: O(N^2) Space: O(1)
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// REFACTORED
function sumZero2(arr){
    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }
        else if(sum > 0){
            right--;
        }
        else{
            left++;
        }
    }
}
console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]));

/**
 * MULTIPLE POINTERS: COUNT UNIQUE VALUES CHALLENGE
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the
 * array, but it will always be sorted. 
 * 
 * EXAMPLES
 * countUniqueValues([1,1,1,1,1,2]) //2
 * countUniqueValues([1,2,3,4,4,4,5,5,12,12,13]) //7
 * countUniqueValues([]) //0
 * countUniqueValues([[-2,-1,-1,0,1]]) //4
 * 
 */

// MY SOLUTION
function countUniqueValues(arr){
    let pointer1 = 0;
    let pointer2 = 1;

    while(pointer2 < arr.length-1){
        if (arr[pointer2] === arr[pointer1]){
            pointer2++;
        }
        if(arr[pointer2] !== arr[pointer1]){
            pointer1++;
            arr[pointer1] = arr[pointer2];
        }
        // Entire array after traversing with pointers
        console.log(arr);
        // console.log(`iteration index ${pointer2}`)
    }
    
    // use slice to return array only unique values
    let uniqueArr = arr.slice(0, pointer1+1)

    // count unique values
    let uniqueNumbers = uniqueArr.length;
    
    return uniqueNumbers;
}

console.log(countUniqueValues([1,2,3,4,4,4,5,5,12,12,13]));

// INSTRUCTOR SOLUTION
function countUniqueValues2(arr){
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
console.log(countUniqueValues2([1,2,3,4,4,4,5,5,12,12,13]));

/**
 * SLIDING WINDOW
 * This pattern involves creating a window which can either be an array or number
 * from one position to another. 
 * Depending on the certain condition, the window either increases or closes (and a 
 * new window is created).
 * Very useful for keeping track of a subset of data in an array/string.
 * 
 * AN EXAMPLE
 * Write a function called maxSubarraySum which accepts an array of integers and a 
 * number called n. The function should calculate the maximum sum of n consecutive 
 * elements in the array. 
 * 
 */

// NAIVE SOLUTION
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));

// REFACTORED
function maxSubarraySum2(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3],3));
  
/**
 * DIVIDE AND CONQUER
 * This pattern involves dividing a data set into small chunks and then 
 * repeating a process with a subset of data
 * This pattern can tremendously decrease time complexity
 * 
 * AN EXAMPLE
 * Given a sorted array of integers, write a function called search, that 
 * accepts a value and returns the index where the value passed to the function
 * is located. If the value is not found, return -1.
 */

// NAIVE SOLUTION
function search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

// REFACTOR (BINARY SEARCH)
function search2(array, val){
    let min = 0; 
    let max = array.length - 1;

    while(min <= max) {
        let middle = Math.floor((min+max) / 2);
        let currentElement = array[middle];

        if(array[middle] < val){
            min = middle + 1;
        }
        else if (array[middle] > val){
            max = middle - 1;
        }
        else{
            return middle;
        }
    }

    return -1;
}
