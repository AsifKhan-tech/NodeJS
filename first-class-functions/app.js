// function statement
function greet() {
  console.log("Hi, Asif");
}
greet();

// functions are first-class (it means pass them around as a variable)
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function expression
let greetMe = function () {
  console.log("Hello, Dev");
};
greetMe();

// It's still first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function () {
  console.log("Use function expression on the fly.");
});
