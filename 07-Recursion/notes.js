/**
 * Recursion
 */

/**
 * OBJECTIVES
 * 1. Define what recursion is and how it can be used
 * 2. Understand the two essential components of a recursive function
 * 3. Visualize the call stack to better debug and understand recursive functions
 * 4. Use helper method recursion and pure recursion to solve more difficult problems
 *
 * WHAT IS RECURSION + WHY WE CARE?
 * A process (a function in our case) that calls itself.
 * Used Everywhere
 * JSON.parse/JSON.stringify
 * document.getElementById and DOM Traversal Algorithm
 * Object traversal 
 * We will see it with more complex data structures.
 * Cleaner alternative to iteration.
 */

/**
 * CALL STACK
 * In almost all program languages, there is a built in data structure that 
 * manages what happens when functions are invoked. 
 * Its a stack data structure (talked about later)
 * Any time a function is invoked it is placed (pushed) on the top of the call stack
 * When Javascript sees the return keyword or when the function ends, the compiler
 * will remove(pop).
 * 
 * WHY DO I CARE?
 * You're used to functions being pushed onthe call stack and popped off when they 
 * are done.
 * When we write recursive functions, we keep pushing new functions onto the call stack
 * 
 */

// EXAMPLE
// Call Stack 
// (wakeUp -> takeShower)
// (wakeUp -> eatBreakfast -> cookFood)
// (wakeUp -> eatBreakfast)
// (wakeUp)
// () 
function takeShower(){
    return "Showering!"
}
function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}
function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}
wakeUp()

/**
 * OUR FIRST RECURSIVE FUNCTION
 * 
 * HOW RECURSIVE FUNCTIONS WORK
 * Invoke the same function with a different input until you reach your base case!
 * 
 * TWO ESSENTIAL PARTS OF A RECURSIVE FUNCTION
 * Base Case
 * Different Input
 */

// RECURSIVE FUNCTION
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// ITERATIVE VERSION
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}

/**
 * OUR SECOND RECURSIVE FUNCTION
 * EXAMPLE
 * sumRange(3) Called
 * 3 + sumRange(2)
 *        2 + sumRange(1)
 *                1
 */

function sumRange(num){
    if(num === 1) return 1; 
    return num + sumRange(num-1);
 }
 
 console.log(sumRange(4))

//  WRITE FACTORIAL ITERATIVELY
 function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i;
    }
    return total;
 }
 console.log(factorial(3));



//  WRITE FACTORIAL RECURSIVELY 
 function factorial2(num){
    if(num === 1) return 1;
    return num * factorial(num - 1);
 }
 console.log(factorial2(5));
 
/**
 * WHERE THINGS GO WRONG
 * 1. No Base Case
 * 2. Forgetting to return or returning the wrong thing
 * 3. Stack overflow!
 * 
 * EXAMPLES
 * Returning a console.log()
 * Returning the wrong value
 */

/**
 * HELPER METHOD RECURSION
 * We have a function that is not recursive calling a function that is recursive it.
 * Helper Method function helps with not resetting a variable holding our return
 * So that whenever the recursive function is executed it doesn't reset our value.
 */

// EXAMPLE
function collectOddValues(arr){
    
    let result = [];
    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

/**
 * PURE RECURSION
 * Does not require a helper function
 * For arrays, use methods like slice, spread operator, and concat that make copies
 * of arrays so you do not mutate them
 * Remember that strings are immutable so you will need to use methods like slice,
 * substr, or substring to make copies of strings
 * To make copies of objects use Object.assign, or the spread operator.
 * 
 */

// EXAMPLE
function collectOddValues(arr){
    let newArr = [];
    if(arr.length === 0) {
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
collectOddValues([1,2,3,4,5])