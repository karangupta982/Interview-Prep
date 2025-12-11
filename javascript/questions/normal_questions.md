## 1. What are the key features of JavaScript?

* JavaScript is interpreted (executed line-by-line, not pre-compiled).
* Functions are first-class (you can store them in variables, pass them around, and return them).
* Dynamically typed (a variable can hold any type).
* Prototype-based object-oriented system (objects inherit from other objects).
* Event-driven and non-blocking (thanks to the event loop).
* Supports asynchronous programming using callbacks, promises, and async/await.
* Runs in browsers and also on servers using Node.js.

---

## 2. What is the DOM?

The DOM (Document Object Model) is a tree-like representation of your HTML page. JavaScript uses it to read or change content, structure, and styles dynamically.

---

## 3. What are arrow functions?

**Your answer is correct. Simplified version:**

Arrow functions provide shorter syntax and do not have their own `this`, `arguments`, or `prototype`.

Example:

```js
const sum = (a, b) => a + b;
```

They cannot be used as constructors.

---

## 4. What is a prototype?

Every JavaScript object has a hidden property called `[[Prototype]]` (accessible using `__proto__`).
It points to another object whose properties are inherited.
Constructor functions have a `.prototype` object that becomes the prototype of all objects created with `new`.

---

## 5. What is prototypal inheritance?

Objects inherit directly from other objects. When you access a property, JavaScript checks the object first, then walks up the prototype chain until it finds the property or reaches `null`.

This is different from classical languages that use class-based inheritance.

---

## 6. Explain the concept of scope in JS

Scope decides where variables can be used.

* `var` → function scope
* `let` and `const` → block scope
* Variables defined outside any function = global scope

Inner functions can access variables of outer functions, which leads to **closures**.

---

## 7. What is lexical scope?

Lexical scope means a variable’s scope is decided by where it is written in the source code.
Inner functions always remember the scope where they were created, not where they are called.

---

## 8. What is a pure function?

A pure function:

* Always returns the same output for the same input.
* Does not modify anything outside the function.
  This makes pure functions predictable and easy to test.

---

## 9. Explain microtask vs. macrotask queue

* **Macrotask queue**: setTimeout, setInterval, I/O, DOM events.
  Processed one per event loop cycle.

* **Microtask queue**: Promise callbacks, queueMicrotask.
  Always executed *before* the next macrotask, and before rendering.

---

## 10. What is JSON and how is it used?

JSON is a lightweight format for sending data between a server and browser.
Use:

* `JSON.stringify()` → convert JS value to JSON string
* `JSON.parse()` → convert JSON string to JS object

---

## 11. How does JavaScript handle memory management?

JavaScript uses automatic garbage collection.
If an object is no longer reachable from the program, memory for that object is freed.
You can help by removing unused references, clearing timers, and cleaning up event listeners.

---

## 12. What is a JavaScript engine?

A JavaScript engine reads, compiles, optimizes, and executes JavaScript code.
Examples:

* V8 → Chrome, Node.js
* SpiderMonkey → Firefox
* JavaScriptCore → Safari

---

## 13. Difference between default export and named export

* **Default export**:
  Only one per file. Imported without braces.

  ```js
  export default function() {}
  import fn from './file';
  ```

* **Named export**:
  Many per file. Must use braces.

  ```js
  export const a = 1;
  import { a } from './file';
  ```

---

## 14. How do you handle errors in JavaScript?

* Use `try...catch` for synchronous code.
* Use `.catch()` for Promises.
* Use `try...catch` with `await` for async/await.
* Global handlers:

  * Browser → `window.onerror`
  * Node.js → `process.on('uncaughtException')`

---

## 15. What is a service worker?

A service worker is a background script that:

* Runs independently of the webpage
* Can intercept network requests
* Enables offline caching (PWA)
* Supports push notifications

---

## 16. What are async generators?

**Correct. Clarified:**

Async generators (`async function*`) allow:

* Yielding values asynchronously
* Using both `await` and `yield` together
* Consumption using `for await...of`

Useful for streaming data, like reading paginated API responses.

---

## 17. What is CORS in JS?

CORS is a browser security rule that blocks requests to a different domain unless the server explicitly allows it using headers like:

```
Access-Control-Allow-Origin
```

---

## 18. What is memory leak and how to prevent it in JS?

A memory leak happens when unneeded objects remain in memory.

Common causes:

* Unused global variables
* Timers not cleared
* Event listeners not removed
* Circular references between JS objects and DOM nodes

Prevention:

* Avoid globals
* Clear timers/listeners
* Break circular references
* Use weak references (WeakMap, WeakSet)

---

## 19. How do arrow functions differ from regular functions?

* Arrow functions do not have their own `this`; they use the surrounding value.
* Do not have `arguments` object.
* Cannot be used as constructors.
* No `prototype` property.

---

## 20. What are Map and Set in JavaScript?

* **Map**: key-value pairs; keys can be any type; maintains insertion order.
* **Set**: stores unique values; does not allow duplicates.

---

## 21. Explain WeakMap and WeakSet

* **WeakMap**: keys must be objects; keys are weakly held (garbage collected if no other references).
* **WeakSet**: contains only objects; objects are weakly held.

They cannot be iterated or checked for size.

---

## 22. What are symbols in JS?

Symbols are unique primitive values.
They are used as object keys to avoid naming conflicts or to hide internal properties.

---

## 23. What is functional programming in JS?

Functional programming focuses on:

* Pure functions
* Avoiding side effects
* Immutability
* Functions as first-class values

It uses techniques like higher-order functions, currying, and composition.
