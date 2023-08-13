/**
 * Merge Sort
 */

/**
 * INTRO TO INTERMEDIATE SORTS
 * 
 * OBJECTIVES
 * Understand the limitations of the sorting algorithms we've learned so far.
 * Implement merge sort
 * Implement quick sort
 * Implement radix sort
 * 
 * WHY LEARN THIS?
 * The sorting algorithms we've learned os far don't scale well
 * Try out bubble sort on array on 100000 items, much longer time.
 * 
 * FASTER SORTS
 * There is afamily of soting algoritms that can improve time complexity from
 * O(n^2) to O(n logn).
 * There's more tradeoff between efficiency and simlicity
 * The more efficient algorithms are much less simple, and take longer to understand
 * 
 */

/**
 * Merge Sort: Introduction
 * It's a combination of two things - merging and sorting
 * Exploits the fact that arrays of 0 or 1 elements are always sorted
 * Works by decomposing an array into smaller arrays of 0 or 1 elements, 
 * then building up a newly sorted array.
 * 
 * HOW DOES IT WORK?
 * [ 8, 3, 5, 4, 7, 6, 1, 2 ] //Split in half
 * [ 8, 3, 5, 4 ] [ 7, 6, 1, 2 ]
 * [ 8, 3 ] [ 5, 4 ] [ 7, 6 ] [ 1, 2 ]
 * [ 8 ] [ 3 ] [ 5 ] [ 4 ] [ 7] [ 6 ] [ 1 ] [ 2 ] //Split until array size 0 or 1
 * [ 3, 8 ] [ 4, 5 ] [ 6, 7 ] [ 1, 2 ] //Merge by comparing sorted arrays
 * [ 3, 4, 5, 8 ] [ 1, 2, 6 ,7 ]
 * [ 1, 2, 3, 4, 5, 6, 7, 8 ]
 * 
 */

/**
 * MERGING ARRAYS
 * In order to implement merge sort, it's useful to first implement a function
 * responsible for merging two sorted arrays.
 * Given two arrays which are sorted, this helper function should create a array
 * which is also sorted, and consists of all the elements in the two input arrays. 
 * This function should run in O(N + M) time and O(N + M) space and should not 
 * modify the paraneters passed to it.
 * 
 * MERGING ARRAYS PSEUDOCODE
 * Create an empty array, take a look at the smalleest values in each input array
 * While there are still values we haven't looked at
 *     -If the value in the first array is smaller than the value in the second array,
 *      push the value in the first array into our resutls and move on to the next value
 *      in the first array.
 *     -If the value in the first array is larger than the value in the second array, push
 *      the value in the second array into or results and move on to the next value in the 
 *      second array.
 *     -Once we exhaust one array, push in all remaining values from the other array. 
 * 
 */

// MY IMPLEMENTATION OF MERGE (MINE IS RIGHT!)
function merge(arr1, arr2){
    let mergedArr = []
    let first = 0;
    let second = 0; 

    while(first < arr1.length && second < arr2.length){
        if(arr1[first] <= arr2[second]){
            mergedArr.push(arr1[first])
            first++;
        }
        else{
            mergedArr.push(arr2[second])
            second++;
        }
    }
    while(first < arr1.length){
        mergedArr.push(arr1[first]);
        first++;
    }
    while(second < arr2.length){
        mergedArr.push(arr2[second]);
        second++;
    }

    return mergedArr;
}
console.log(merge([1,10,50], [2,14,99,100]));

// INSTRUCTOR SOLUTION MERGE (SAME AS MINE!)
// Merges two already sorted arrays
function merge2(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
console.log(merge2([100,200], [1,2,3,5,6]));

/**
 * WRITING MERGE SORT PART 1
 * 
 * MERGESORT PSEUDOCODE
 * Break up the array into halves until you have arrays that empty or 
 * have one element. (Use slice)
 * Once you have a smaller sorted arrays, merge those arrays with other
 * sorted arrays until you are back at the full length of the array.
 * Once the array has been merged back together, return the merged
 * (and sorted) array.
 * 
 */

// INSTRUCTOR SOLUTION
function mergeSort(arr){

    // MY THOUGHTS
    // let arrsplit = [];
    // let arrsplit2 = [];
    // let midpoint =  Math.ceil(arr.length/2)
    // arrsplit = arr.slice(0, midpoint);
    // arrsplit2 = arr.slice(midpoint);
    // console.log(arrsplit, arrsplit2)

    if(arr.length <= 1) return arr;
    let midpoint =  Math.ceil(arr.length/2)
    let left = mergeSort(arr.slice(0, midpoint));
    let right = mergeSort(arr.slice(midpoint));
    return merge(left, right);

}
console.log(mergeSort([10,8,9,2,1]));

/**
 * MERGE SORT BIG O
 * Best: O(N LOG(N))
 * Average: O(N LOG(N))
 * Worst: O(N LOG(N))
 * 
 * SPACE: O(N)
 * 
 * WHY LOG N?
 * O(LOG N) is the number of splits when increasing the array size
 * Example: Array size of 8 has 3 splits 
 * [ 8, 3, 5, 4, 7, 6, 1, 2 ] 
 * [ 8, 3, 5, 4 ] [ 7, 6, 1, 2 ] //first split
 * [ 8, 3 ] [ 5, 4 ] [ 7, 6 ] [ 1, 2 ] //second split
 * [ 8 ] [ 3 ] [ 5 ] [ 4 ] [ 7] [ 6 ] [ 1 ] [ 2 ] //third split
 * log base 2 (8) = 3, because 2^3=8;
 * 
 * O(N LOG(N)), First 'N' Comes from the comparisons, at each level the number 
 * of comparisons is based on the size of the array, as the array grows,
 * the number of comparisons grow.
 * 
 */