
## **Functions**

**Topics:**

* Function Declaration & Expression
* Arrow Functions
* Default Parameters
* Return vs Console.log


```javascript
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Karan"));

// Function Expression
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 10));

// Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 6));

// Default Parameters
function welcome(user = "Guest") {
  console.log(`Welcome ${user}`);
}
welcome(); // Guest
welcome("Karan");
```