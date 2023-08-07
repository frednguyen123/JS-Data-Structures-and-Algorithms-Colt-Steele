/**
 * Recursion Problem Set
 */

/**
 * CODING EXERCISE 10: POWER
 * Write a function called power which accepts a base and an exponent. 
 * The function should return the power of the base to the exponent. 
 * This function should mimic the functionality of Math.pow()  - do not worry 
 * about negative bases and exponents.
 */

// MY SOLUTION
function power(base, exponent){
    if(exponent == 0) return 1
    return base * power(base, exponent - 1)
}
console.log(power(2, 3)) //8

/**
 * CODING EXERCISE 11: FACTORIAL
 * Write a function factorial which accepts a number and returns the factorial 
 * of that number. A factorial is the product of an integer and all the integers 
 * below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 
 * equals 24. factorial zero (0!) is always 1
 */

// MY SOLUTION
function factorial(num){
    if(num == 0) return 1;
    return num * factorial(num - 1)
}
console.log(factorial(4))

/**
 * CODING EXERCISE 12: PRODUCTOFARRAY
 * Write a function called productOfArray which takes in an array of numbers 
 * and returns the product of them all.
 */

// MY SOLUTION
function productOfArray(arr){
    if(arr.length === 0) return 1 //base case
    return arr[0] * productOfArray(arr.slice(1))
}
console.log(productOfArray([1,2,3,10])) // 60

/**
 * CODING EXERCISE 13: RECURSIVERANGE
 * Write a function called recursiveRange which accepts a number and adds up 
 * all the numbers from 0 to the number passed to the function 
 */
function recursiveRange(num){
    if(num === 0) return 0
    return num + recursiveRange(num - 1)
}
console.log(recursiveRange(6)); // 21

/**
 * CODING EXERCISE 14: FIB (FIBONACCI)
 * Write a recursive function called fib which accepts a number and returns 
 * the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence 
 * is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
 * and where every number thereafter is equal to the sum of the previous two numbers.
 */

// 1, 1, 2, 3, 5, 8 
// Input example : 4th num in fib sequence
// Output example: 3 is the 4th number in fib sequence

// MY SOLUTION
function fib(num){
    let first = 1;
    let second = 1;
    let sum = 0;
    let counter = num;
    if(num <= 1){
        return 1;
    }
    if(num > 2){
        counter = num - 2; 
    }
    function helper(counter){
        if(counter === 0) return;
        sum = first + second;
        first = second;
        second = sum;
        counter--;
        // console.log(counter);
        return helper(counter);
    }
    helper(counter);
    return sum;
}
console.log(fib(4))
console.log(fib(10))
console.log(fib(28))

// CORRECT SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}