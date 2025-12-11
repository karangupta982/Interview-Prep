# Function Factories in JavaScript

## What is a Function Factory?

A **function factory** is a function that **creates and returns another function**.
The returned function usually behaves differently depending on the **parameters passed to the factory**.

Function factories rely heavily on **closures**, because the inner function remembers the variables from the factory function even after the factory has finished executing.

In simple words:

A **Function Factory = A function that produces new customized functions**.

---

## Basic Example

```javascript
function greetingFactory(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
}

const sayHello = greetingFactory("Hello");
const sayHi = greetingFactory("Hi");

sayHello("Karan");  // Hello, Karan
sayHi("Aman");      // Hi, Aman
```

Explanation:

* `greetingFactory("Hello")` creates a new function that always uses `"Hello"` as the greeting.
* Both `sayHello` and `sayHi` are produced by the same factory, but behave differently.

This is possible because of **closures** — the inner function remembers the value of `greeting`.

---

## Why Use Function Factories?

1. To **generate multiple similar functions** without repeating code.
2. To create **reusable logic** with customization.
3. Useful in functional programming patterns.
4. Helpful in React for custom hooks, event handlers, or utility factories.

---

## Real World Example: Formatting Output

You want functions that log messages with different prefixes.

```javascript
function loggerFactory(prefix) {
  return function(message) {
    console.log(`[${prefix}] ${message}`);
  };
}

const info = loggerFactory("INFO");
const warn = loggerFactory("WARN");
const error = loggerFactory("ERROR");

info("Server started");   // [INFO] Server started
warn("Low memory");       // [WARN] Low memory
error("Server crashed");  // [ERROR] Server crashed
```

Each returned function behaves differently but shares the same logic.

---

## Function Factory for Multiplication

```javascript
function multiplyFactory(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiplyFactory(2);
const triple = multiplyFactory(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

This pattern is identical to **currying**, but the purpose here is **production of customized functions**.

---

## Function Factory for DOM Events (Real Use Case)

```javascript
function eventHandlerFactory(type) {
  return function(event) {
    console.log(`Event type: ${type}, Target: ${event.target.id}`);
  };
}

const clickHandler = eventHandlerFactory("click");
const hoverHandler = eventHandlerFactory("hover");

button.addEventListener("click", clickHandler);
button.addEventListener("mouseover", hoverHandler);
```

---

## Another Important Use Case: Permission Checking

```javascript
function permissionFactory(role) {
  return function(action) {
    console.log(`${role} can perform: ${action}`);
  };
}

const adminActions = permissionFactory("Admin");
const userActions = permissionFactory("User");

adminActions("delete file"); // Admin can perform: delete file
userActions("view file");    // User can perform: view file
```

---

## Summary

**Function factories** in JavaScript:

* Are functions that return other functions.
* Help create **customized**, **reusable**, and **specialized** functions.
* Use **closures** to remember values.
* Improve code modularity and reduce repetition.
* Are widely used in React, utilities, and functional programming.
