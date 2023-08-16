/**
 * Data Structures Introduction
 */

/**
 * WHICH DATA STRUCTURE IS THE BEST?
 * (ALL WORK IN DIFFERENT SITUATIONS)
 * Binary Search Tress
 * Queues
 * Singly Linked Lists
 * Undirected Unweighted Graphs
 * Binary Heaps
 * Directed Graphs 
 * Hash Tables
 * Double Linked Lists
 * Stacks
 * 
 * WHAT DO THEY DO?
 * Data structures are collections of values, the relationships among them,
 * and the functions or operations that can be applied to the data.
 * 
 * WHY SO MANY?
 * Different data structures excel at different things. Some are highly specialized,
 * while others (like arrays) are more generally used. 
 * 
 * WHY CARE?
 * The more time you spend as a developer, the more likely you'll need to use
 * one of these data structures.
 * 
 * WORKING WITH LOCATION DATA?
 * Use a graph
 * 
 * NEED ORDERED LIST WITH FAST INSERT/REMOVAL AT BEGINNING AND END?
 * Use a linked lists
 * 
 * WEBSCRAPING NESTED HTML
 * Use a tree
 * 
 * NEED TO WRITE A SCHEDULER?
 * Use a binary heap
 * 
 */

/**
 * ES2015 CLASS SYNTAX
 * 
 * OBJECTIVES
 * Explain what a class is 
 * Understand how Javascript implements the idea of classes
 * A blueprint for creating objects with pre-defined properties and methods.
 * 
 * WHY WE NEED TO KNOW?
 * We're going to implement data structures as classes.
 * 
 */

/**
 * THE SYNTAX
 * The method to create new objects must be called constructor
 * The class keyword creates a constant, so you can not define it.
 */

/**
 * Class Methods
 * Utility function that is part of the class. They are called wihtout instantiating their
 * class and cannot be called through a class instance. Static methods are often used to 
 * create utility functions for an application.
 * 
 */

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3)
        {
            return "YOU ARE EXPELLED!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
       let sum = this.scores.reduce(function(a,b){return a + b;});
        return sum/this.scores.length;
    }
    static EnrollStudents(){
        return "ENROLLING STUDENTS";
    }
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);
console.log(firstStudent, secondStudent);
console.log(firstStudent.fullName());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(secondStudent.addScore(92));
console.log(secondStudent.addScore(87));
console.log(secondStudent.scores);
console.log(secondStudent.calculateAverage());
console.log(secondStudent.calculateAverage());
// console.log(secondStudent.EnrollStudents()); Doesnt work
console.log(Student.EnrollStudents());

class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  
  console.log(Point.distance(p1, p2)); // 7.0710678118654755

  /**
   * HOW WE WILL USE CLASSES
   * We will be using constructor and instance methods quite a bit!
   * We will almost never be used static methods.
   * 
   * THIS KEYWORD
   * Inside all of our instance methods and constructor, the keyword 'this'
   * refers to the object created from that class (also known as an instance)
   * 
   * RECAP
   * Classes are blueprints that when created make objects known as instances
   * Classes are created with the new keyword
   * The constructor function is a special function that gets run when the class
   * is instantiated.
   * Instance methods can be added to classes similar to methods in objects
   * Class moethods can be added using the static keyword
   */
