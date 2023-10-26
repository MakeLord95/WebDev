// Part 1

// 1.
var cube = function (x) {
  return x * x * x;
};

// 2.
var fullName = function (first, last) {
  return first + " " + last;
};

// 3.
var power = function (base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};

// 4.
var sumCubes = function (numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
};

// Part 2

/**
 * 1.
 * console.log(message);
 * var message = 'Hi there!';
 *
 * The reason why this doesn't throw and error is that the var declaration is hoisted to the top of the program.
 */

/**
 * 2.
 * console.log(message);
 * let message = 'Hi there!';
 *
 * This throws an error because let declarations are not hoisted at all.
 */

/**
 * 3.
 * console.log(showMessage());
 * const showMessage = function(){
 * return 'Hi there!';
 * };
 *
 * When this code is executed, it will throw an error because const declarations are not hoisted at all.
 */

/**
 * 4.
 * console.log(showMessage());
 * function showMessage(){
 * return 'Hi there!';
 * }
 *
 * The reason why this code doesn't throw an error is that function declarations are always hoisted to the top of the program when they are defined.
 */

// Part 3

// 1.
var values = [10, 20, 30];

for (var i = 0; i < values.length; i++) {
  console.log(values[i]);
}

// 2.
var lastLogin = "1/1/1970";

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
}

console.log(welcome("Charlie", "Munger"));
