// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 532234323432344323443n



//  Reference or Non-Primitive

//  Array, objects, Functions

const heros = ["shaktiman", "hanuman", "ShreeRam"];

// {
//   name: "sunny",
//   age: 20,
// }
let myObj = {
    name: "sunny",
    age: 20,
  }
//   console.log(myObj);

const myfunction = function() {
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof Function);
console.log(typeof anotherId);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// In Stack take anything it gives only copied part but in heap, it gives reference part

let myYoutubeName = "mrsjdotcom"

let anotherName = myYoutubeName
anotherName =  "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "sunny@google.com"

console.log(userOne.email);
console.log(userTwo.email);