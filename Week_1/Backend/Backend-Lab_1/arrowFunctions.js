// Arrow function
const sayHelloWorld = () => "Hello, world!";

console.log(sayHelloWorld());

// Arrow function
const doubleArrow = (x) => x * 2;

console.log(doubleArrow(2));

// Arrow function
const addArrow = (x, y) => x + y;

console.log(addArrow(2, 3));

// Arrow function
const personArrow = {
  name: "Alice",
  sayHi: function () {
    return "Hi, " + this.name + "!";
  },
};

console.log(personArrow.sayHi());

// Arrow function
const numbersArrow = [1, 2, 3, 4, 5];
const doubledArrow = [];
numbersArrow.forEach((num) => doubledArrow.push(num * 2));

for (let i = 0; i < doubledArrow.length; i++) {
  console.log(doubledArrow[i]);
}
