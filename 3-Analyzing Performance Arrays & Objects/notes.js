/**
 * Analyzing Performance of Arrays and Objects
 */

/**
 *
 * OBJECTIVES
 * Understand how objects and arrays work through Big O
 * Explain why adding elements to the beginning of an array is costly
 * Compare and contrast runtimes for arrays and objects, and built in 
 * methods.
 * 
 * OBJECTS
 * Unordered, key value pairs
 * Used when you don't need order, or need fast access/insertion and removal
 * 
 * BIG O for OBJECTS
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(N)
 * Access - O(1)
 * 
 * BIG O for OBJECT METHODS
 * Object.keys - O(N)
 * Object.values - O(N)
 * Object.entries - O(N)
 * hasOwnProperty - O(1)
 * 
 * SEARCH VS ACCESS
 * When searching you are traversing through array or object
 * When accessing you get value from the index of an array or key from an object
 * 
 */

/**
 * ARRAYS
 * When you need order
 * When you need fast access/insertion and removal (sort of)
 * 
 * BIG O for Arrays
 * Insertion - Depends
 * Removal - Depends
 * Searching - O(N)
 * Access - O(1)
 * 
 * Insertion at the end is O(1)
 * 
 * Insertion at the beginning, reindexes the array so 
 * the bigger the array the longer its going to take O(N).
 * 
 * Removal from the beginning, also reindexes the array so 
 * the bigger the array the longer its going to take O(N).
 * 
 * Searching fastest is O(N), as array grows the time it takes 
 * grows linear with size of array
 * 
 * BIG O for ARRAY METHODS
 * push - O(1)
 * pop - O(1)
 * shift - O(N)
 * unshift - O(N)
 * concat - O(N)
 * slice - O(N)
 * splice - O(N)
 * sort - O(N * log N)
 * forEach/map/filter/reduce - O(N)
 * 
 */

