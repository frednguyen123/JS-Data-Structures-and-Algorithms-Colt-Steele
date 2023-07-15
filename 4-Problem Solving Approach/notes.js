/**
 * Problem Solving Approach
 */

/**
 * OBJECTIVES
 * Define what an algorithm is
 * Devise a plan to solve algorithms
 * Compare and contrast problem solving patterns including frequency counters,
 * two pointer problems and divide & conquer. 
 * 
 * WHAT IS AN ALGORITHM
 * A process or sets of steps to accomplish a certain task
 * 
 * WHY?
 * Almost everything that you do in programming involves some kind of algorithm.
 * It's the foundation for being successful problem solver.
 * 
 * HOW DO YOU IMPROVE?
 * 1. Devise a plan for solving problems
 * 2. Master common problem solving patterns
 * 
 * PROBLEM SOLVING
 * 1. Understand the Problem
 * 2. Explore Concrete Examples
 * 3. Break it down
 * 4. Solve/Simplify
 * 5. Look back and Refactor
 * 
 */

/**
 * STEP 1: UNDERSTAND THE PROBLEM
 * 
 * 1. Can I restate the problem in my own words?
 * 2. What are the inputs that go into the problem?
 * 3. What are the outputs that should come from the solution to the problem?
 * 4. Can the outputs be determined from the inputs? In other words, do I have enough
 *    information to solve the problem? (You may not be able to answer this question
 *    until you set about solving the problem. Worth considering even in early stages.)
 * 5. How should I label the important pieces of data that are a part of the problem?
 * 
 * EXAMPLE: Write a function which takes two numbers and returns their sum.
 * 1. Implement addition
 * 2. Two numbers? What kind of numbers (float, integer, etc)? Is there an upper bound limit?
 *    Will the solution only work for two numbers? What about string for large numbers?
 * 3. Int? float? String?
 * 4. What if there is only one number is passed in? Do we return undefined or null?
 * 5. Inputs(num1, num2) Output(sum), function 
 * 
 */

/**
 * STEP 2: CONCRETE EXAMPLES
 * 
 * EXPLORE EXAMPLES
 * Coming up with examples can help you understand the problem better
 * Examples also provide sanity checks that your eventual solution works how it should
 * User Stories
 * Unit Tests
 * Start with simple examples
 * Progress to more complex examples
 * Explore examples with empty inputs
 * Explore examples with invalid inputs
 * 
 * EXAMPLE: Write a function which takes in a string and returns counts each character
 * in the string. 
 * 
 * SIMPLE EXAMPLE INPUTS
 * charCount('aaaa'); // {a:4}
 * charCount('hello'); // {h:1, e:1, l:2, o:1}
 * 
 * COMPLEX EXAMPLE INPUTS
 * "my phone number is 182763"
 * "Hello hi"
 * 
 * EMPTY/INVALID INPUTS (what do we want to return)
 * charCount("")
 * charCount() 
 * 
 */

/**
 * STEP 3: BREAK IT DOWN
 * 
 * Explicitly write out the steps you need to take
 * This forces you to thnk about the code you'll write before you write it,
 * and helps you catch any lingering conceptual issues or misunderstandings 
 * before you dive in and have to worry about details (syntax) as well.
 * 
 */

charCount("aaaa"); 
/*
{a: 4}
*/
charCount("hello"); 
/*
{h:1, e:1, l:2, o:1}
*/
charCount("Your PIN number is 1234!"); 
/*
{
1: 1,
2: 1,
3: 1,
4: 1,
b: 1,
e: 1,
i: 2,
m: 1,
n: 2,
o: 1,
p: 1,
r: 2,
s: 1,
u: 2,
y: 1
}
*/

function charCount(str){
    // do something
    // return an object with keys, lowercase alphanumeric characters in the string
    // values should be counts of those characters 
}

function charCount(str){
    // make object to return at end
    // loop over string, for each character....
        // if the char is a number/letter AND is key in object, add one to count
        // if char is a number/letter AND not in object, add it and set value to 1
        // if character is something else (space, period) do nothing
    // return object at the end 
}

/**
 * STEP 4: SOLVE OR SIMPLIFY
 * 
 * SIMPLIFY
 * Solve the problem if you can't solve a simplier problem.
 * Find the core difficulty in what you're trying to do
 * Temporarily ignore that difficulty
 * Write a simplified solution
 * Then incorporate that difficulty back in 
 * 
 */

function charCount(str){
    // make object to return at end
    let result = {}
    // loop over string, for each character....
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        // if the char is a number/letter AND is key in object, add one to count
        if(result[char] > 0){
            result[char]++;
        }
        // if char is a number/letter AND not in object, add it and set value to 1
        else{
            result[char] = 1;
        };
    }
    // if character is something else (space, period) do nothing
    return result;
    // return object at the end 
}

console.log(charCount("hello"));
console.log(charCount("Hi there!"));

/**
 * STEP 5: LOOK BACK AND REFACTOR
 * 
 * REFACTORING QUESTIONS
 * Can you check the result?
 * Can you derive the result differently?
 * Can you understand it at a glance?
 * Can you use the result or method for some other problem?
 * Can you improve the performance of your solution?
 * Can you think of other ways to refactor?
 * How have other people solved this problem?
 * 
 */

// REFACTORED
function charCount2(str){
    let result = {}
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(result[char] > 0){
                result[char]++;
            }
            else{
                result[char] = 1;
            };
        }
    }
    return result;
}
console.log(charCount2("Hi there!"));

// REFACTORED (AESTHETIC) REPLACE FOR WITH FOR-OF
function charCount3(str){
    let result = {}
    for(let char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(result[char] > 0){
                result[char]++;
            }
            else{
                result[char] = 1;
            };
        }
    }
    return result;
}
console.log(charCount3("Hi there!"));

// EXPRESSION REPLACING IF-ELSE + REGEX
function charCount4(str){
    let result = {}
    for(let char of str){
        char = char.toLowerCase();
        if(isAlphaNumeric(char)){
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

// USING CHARACTER CODES INSTEAD OF REGEX
function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&
       !(code > 64 && code < 91) &&
       !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}
console.log(charCount4("Hi there!!!"));

/**
 * RECAP
 * Understand the problem
 * Explore Concrete Examples
 * Break it down
 * Solve/Simplify
 * Look back and refactor
 * 
 */



