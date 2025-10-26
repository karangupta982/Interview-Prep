## **Scope, Hoisting & TDZ**

**Topics:**

* Global, Function, Block Scope
* Hoisting
* Temporal Dead Zone


```javascript
// Scope
let x = 10;
function test() {
  let y = 20;
  console.log(x + y); // accessible
}
test();
// console.log(y); // ReferenceError

// Hoisting
console.log(a); // undefined
var a = 5;
// console.log(b); // ReferenceError (TDZ)
let b = 10;

// Function Hoisting
sayHello();   
function sayHello() {
  console.log("Hi, this works because of hoisting");
}
```
