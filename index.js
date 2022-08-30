//Q.1: Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const parent = {
    value: 2,
    method() {
      return this.value + 1;
    }
  };
  console.log(parent.method()); // 3

  const child = {
    __proto__: parent,
  };
  console.log(child.method()); // 3  
  child.value = 4;
  console.log(child.method()); // 5

  //Q.2: Write code to explain prototype chaining

//   all the objects in JavaScript, inherit the properties and methods from Object. prototype. This is called Prototype chaining.

function Person () {
  this.name = 'edward',
  this.age = 25
}

const person = new Person();  //we are trying to access the prototype property of a Person constructor function.

// checking the prototype value
console.log(Person.prototype); // { ... } 

//=> Since the prototype property has no value at the moment, it shows an empty object { ... }.

//Q.3: Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

const element1 = [40, 60, 120, 20]; // 240
const element2 = [20, 450]; // 470

Array.prototype.total = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  console.log(sum);
};

element1.total(); // 240
element2.total(); // 470



//Q.4: Write a JavaScript function to retrieve all the names of object's own and inherited properties.

const studentOne ={
  name:"Falak",
   age:"19",
    showDetails: function(){
     console.log(`student name is ${this.name} and age is ${this.age}`);
    }
} 

const studentTwo = {
  name: "wali"
}

//Inheritance of properties and methods of an object

studentTwo.__proto__ = studentOne;

console.log(studentTwo);
console.log(studentTwo.age);
console.log(studentTwo.showDetails());

console.log(studentOne.__proto__);
console.log(studentOne.__proto__.__proto__);

console.log(studentTwo.__proto__);//inheriting from studentOne
console.log(studentTwo.__proto__.__proto__);
console.log(studentTwo.__proto__.__proto__.__proto__);//null
