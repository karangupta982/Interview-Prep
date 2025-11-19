# Callback Function

## **Definition**

A **callback function** is a function that is **passed as an argument** to another function and is **executed later**, usually after some operation is completed.

It is mainly used for:

* Asynchronous operations (API calls, timers, file operations)
* Handling results after something finishes

## **Example**

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // executing the callback function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Karan", sayBye);
```

### **Output**

```
Hello Karan
Goodbye!
```

## **Why we use callbacks?**

* To avoid blocking code
* To run code only after an async operation completes

Example with `setTimeout` (async callback):

```js
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
```

---

# Arrow Function

## **Definition**

An **arrow function** is a shorter and cleaner way to write functions in JavaScript.
Introduced in ES6, it removes the need for `function` keyword.

## **Syntax**

```js
const add = (a, b) => {
  return a + b;
};
```

## **Implicit return (short form)**

If the function has only one expression:

```js
const add = (a, b) => a + b;
```

## **Why arrow functions?**

* Short and easy syntax
* Do not bind their own `this`
* Great for callbacks

Example:

```js
setTimeout(() => console.log("Hello"), 1000);
```

---

# Key Differences

| Feature     | Callback Function                | Arrow Function                   |
| ----------- | -------------------------------- | -------------------------------- |
| What is it? | A function passed as an argument | A shorter way to write functions |
| Purpose     | Execute later after an operation | Cleaner syntax, lexical `this`   |
| Syntax      | Traditional function structure   | Uses `=>`                        |
| Own `this`? | Yes                              | No (inherits parent `this`)      |
| Common use  | Asynchronous code                | Short functions, callbacks       |

---

# Why Arrow Functions Are Best for Callbacks

## 1. **Arrow functions do NOT have their own `this`**

Traditional function callbacks create confusion because the value of `this` changes depending on how they're called.

Arrow functions **inherit `this` from their surrounding scope (lexical scoping)**.

### Example Problem (normal function)

```js
function Person() {
  this.age = 21;

  setTimeout(function () {
    console.log(this.age); 
    // Output: undefined (this now refers to global/window)
  }, 1000);
}

new Person();
```

### Fixed with Arrow Function

```js
function Person() {
  this.age = 21;

  setTimeout(() => {
    console.log(this.age); 
    // Output: 21 (arrow function uses lexical 'this')
  }, 1000);
}

new Person();
```

**Reason:**
Arrow functions don’t bind their own `this`, so callbacks behave consistently.

---

## 2. **Short and cleaner syntax**

Callbacks are often small one-line functions.
Arrow functions eliminate:

* `function` keyword
* `return` keyword (for single lines)

### Example

```js
// Regular function
arr.map(function (item) {
  return item * 2;
});

// Arrow function
arr.map(item => item * 2);
```

Clean and readable → ideal for callbacks.

---

## 3. **Implicit return makes callbacks compact**

Many callbacks only need to return a value.
Arrow functions allow implicit return:

```js
const doubled = arr.map(n => n * 2);
// No return keyword needed
```

---

## 4. **Avoid accidental binding of `this`**

In callbacks inside classes or objects, normal functions create bugs due to their `this` behavior.

Arrow functions prevent these issues.

---

## 5. **Better for functional programming style**

Methods like:

* `map()`
* `filter()`
* `reduce()`
* `sort()`
* `forEach()`

become more expressive and readable with arrow functions.

### Example

```js
const evens = nums.filter(n => n % 2 === 0);
```

---

**"Arrow functions are ideal for callbacks because they don’t have their own `this` and instead use lexical scoping, which avoids common bugs in async functions like setTimeout. They also offer shorter syntax and implicit returns, making callback code cleaner and more readable, especially in array methods like map, filter, and reduce."**