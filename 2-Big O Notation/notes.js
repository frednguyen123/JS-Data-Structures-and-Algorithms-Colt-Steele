/**
 * Big O Notation 
 */

/**
 * 
 * THE NEED FOR BIG O NOTATION
 * Generalizing code and comparing code perforamnce with other
 * pieces of code
 * 
 * WHAT DOES BETTER MEAN?
 * Faster? Less memory? Readablity?
 * 
 * THE PROBLEM WITH TIME
 * Different Machines will record different times
 * The same machine will record different times
 * For fast algorithms, speed measurements may not be precise enough?
 * 
 * ALTERNATIVE TO TIME
 * Count the number of simple operations the computer has to 
 * perform.
 * 
 * Allows us to talk formally about how the runtime of an algorithm
 * gross as the inputs grow.
 * 
 * O(n) operation inside an O(n) operation is O(n^2) time complexity
 * 
 * SIMPLIFYING BIG O EXPERSSIONS
 * When determining the time complexity of an algorithm there 
 * are some helpful rules of thumbs for big O Expressions
 * 
 * These rules are consequences of the definition of big O notation
 * 
 * CONSTANTS DONT MATTER
 * 
 * SMALLER TERMS DONT MATTER
 * 
 * BIG O SHORTHANDS
 * 1. Arithmetic operations are constant
 * 2. Variable assignments are constant
 * 3. Accessing elements in an array (by index) or object (by key)
 *    is constant
 * 4. In a loop, the complexity is the length of the loop times the
 *    complexity of whatever happens inside of the loop
 * 
 */

/**
 * SPACE COMPLEXITY
 * 
 * We can also use big O Notation to analyze space complexity,
 * how much additional memory do we need to allocate in order to 
 * run the code in our algorithm?
 * 
 * WHAT ABOUT THE INPUTS?
 * When talking about space complexity we are talking about 
 * auxillary space complexity to refer to space required by 
 * the algorithm, not including space taken up by inputs
 * 
 * SPACE COMPLEXITY IN JS
 * 1. Most primitives(booleans, numbers, undefined, null) are 
 *    space
 * 2. Strings require O(n) space (where n is the string length)
 * 3. Reference types are generally O(n), where n is the length
 *    (for arrays) or the number of keys (for objects).
 * 
 * LOGARITHMS
 * Shorthand is just Log
 * 
 * The logarithm of a number roughly measures the number of times 
 * you can divide that number by 2 before you get a value that's 
 * less than or equal to one. 
 * 
 * Logarithmic time complexity is great
 * 
 * WHY WE CARE?
 * Certain searching algos have log time complexity
 * Efficient sorting algorithms involve logarithms
 * Recursion sometimes involves logarithmic space complexity
 * 
 * RECAP
 * To analyze performance we use Big O Notation
 * 
 * Big O can gve us a high level understanding of time and space
 * complexity.
 * 
 * Big O doesn't care about precision, only about trends?
 * (Linear, quadratic, constant)
 * 
 * The time or space complexity depends only on the algorithm, 
 * not the hardware used to run the algorithm.
 */

// Add Up To Slower
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  
  var t1 = performance.now();
  addUpTo(1000000000);
  var t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// Add up to Faster
function addUpTo(n) {
    return n * (n + 1) / 2;
  }
  
  var time1 = performance.now();
  addUpTo(1000000000);
  var time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)