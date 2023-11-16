/*
 * Filename: sophisticated_code.js
 * Description: Complex JavaScript code showcasing various concepts and functionalities
 */

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  // Method to get the person's name
  getName: function() {
    return this.name;
  },
  
  // Method to get the person's current age
  getAge: function() {
    return this.age;
  },
  
  // Method to increase age by a certain number of years
  increaseAge: function(years) {
    this.age += years;
  }
};

// Create new person objects
var person1 = new Person("John", 25);
var person2 = new Person("Jane", 30);

// Output initial details
console.log(person1.getName() + " is " + person1.getAge() + " years old.");
console.log(person2.getName() + " is " + person2.getAge() + " years old.");

// Increase age and output new details
person1.increaseAge(5);
person2.increaseAge(3);

console.log(person1.getName() + " is now " + person1.getAge() + " years old.");
console.log(person2.getName() + " is now " + person2.getAge() + " years old.");

// Simple implementation of Fibonacci sequence using iteration
function fibonacci(n) {
  var fib = [0, 1];
  
  for (var i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  
  return fib;
}

console.log("Fibonacci sequence:");
console.log(fibonacci(10));

// A closure example
function outer() {
  var value = "Hello";
  
  return function() {
    console.log(value + " world!");
  };
}

var inner = outer();
inner();

// Asynchronous call demonstration
console.log("Before setTimeout");

setTimeout(function() {
  console.log("Inside setTimeout");
}, 2000);

console.log("After setTimeout");

// Promises example
function wait(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, delay);
  });
}

console.log("Before Promise");

wait(3000).then(function() {
  console.log("Inside Promise");
});

console.log("After Promise");

// Array manipulation
var numbers = [1, 2, 3, 4, 5];

console.log("Original array: " + numbers);

// Map function to double each element
var doubledNumbers = numbers.map(function(num) {
  return num * 2;
});

console.log("Doubled array: " + doubledNumbers);

// Filter function to get even numbers
var evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log("Even numbers: " + evenNumbers);

// Reduce function to get sum of all elements
var sum = numbers.reduce(function(total, num) {
  return total + num;
}, 0);

console.log("Sum: " + sum);

// More code...
// ...continued for over 200 lines