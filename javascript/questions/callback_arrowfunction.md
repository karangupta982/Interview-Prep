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
