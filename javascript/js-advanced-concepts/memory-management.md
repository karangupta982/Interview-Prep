## 1. Overview

JavaScript is a **garbage-collected language**,
which means it **automatically allocates and frees memory** for you.
You don’t manually allocate (`malloc`) or deallocate (`free`) memory like in C/C++.

But understanding *how it does this* helps you:

* Write more efficient code
* Avoid **memory leaks**
* Understand **closures**, **WeakMap**, and **event listeners** better

---

## 2. Memory Life Cycle in JavaScript

Every variable, object, or function follows this **three-step memory cycle**:

### (1) **Memory Allocation**

When you create variables, objects, or functions, JavaScript allocates memory for them.

```js
let x = 10;                // Allocate for number
let str = "Karan";         // Allocate for string
let obj = { name: "JS" };  // Allocate for object
```

---

### (2) **Memory Usage**

You use the allocated memory during execution.

```js
console.log(obj.name); // Memory is accessed (read)
obj.age = 25;          // Memory is updated (write)
```

---

### (3) **Memory Release (Garbage Collection)**

When a variable or object **is no longer reachable**,
JavaScript automatically **frees that memory**.

Example:

```js
let user = { name: "Karan" };
user = null; // The original object is now unreachable — eligible for garbage collection
```

---

## 3. How JavaScript Determines “No Longer Reachable”

JavaScript uses a **reachability-based garbage collection algorithm** —
also known as the **Mark-and-Sweep Algorithm**.

### Reachability means:

A value is *reachable* if it can be accessed directly or indirectly from the “root” objects.

**Roots include:**

* Global variables
* Local variables in functions currently executing
* The call stack

---

### Example:

```js
function createUser() {
  let user = { name: "Karan" }; // Object is reachable
  return user;
}

let u1 = createUser(); // reachable
u1 = null; // now unreachable → garbage collected
```

When no variable points to the object `{ name: "Karan" }`,
it becomes **unreachable** and **collected by the garbage collector**.

---

## 4. Mark-and-Sweep Algorithm (Simplified)

1. **Mark Phase:**
   The garbage collector starts from “roots” (global, stack, closures) and marks all reachable objects.

2. **Sweep Phase:**
   All objects **not marked** are considered unreachable and are deleted from memory.

---

## 5. Common Causes of Memory Leaks

Even though JavaScript has garbage collection, **you can still leak memory** if references are unintentionally kept.

### 1. **Global Variables**

```js
function leak() {
  x = "This becomes a global variable"; // Forgot 'let' or 'const'
}
```

### 2. **Uncleared Timers or Intervals**

```js
setInterval(() => {
  console.log("Running...");
}, 1000); // Never cleared — memory leak

// Fix:
const interval = setInterval(...);
clearInterval(interval);
```

### 3. **Event Listeners not removed**

```js
const btn = document.getElementById("myBtn");
btn.addEventListener("click", () => console.log("clicked"));
// If 'btn' is later removed from DOM, listener still holds reference
```

### 4. **Closures holding unnecessary references**

```js
function outer() {
  let bigData = new Array(1000000).fill("*");
  return function inner() {
    console.log("Hello");
  };
}
const innerFn = outer(); // bigData is still in memory (not garbage collected)
```

### Fix:

```js
function outer() {
  let bigData = new Array(1000000).fill("*");
  const inner = () => console.log("Hello");
  bigData = null; // release before returning
  return inner;
}
```

---

## 6. WeakMap and WeakSet Help Here

As discussed earlier:

* `WeakMap` and `WeakSet` **don’t prevent garbage collection**.
* They allow objects to be automatically freed when no longer referenced.

That’s why they’re ideal for **caching** or **private data** tied to objects.

---

## 7. Practical Tips for Managing Memory

1. Always use `let` or `const` (avoid implicit globals)
2. Clear intervals/timeouts when no longer needed
3. Remove event listeners when elements are deleted
4. Break circular references (like two objects referencing each other)
5. Use `WeakMap`/`WeakSet` for object-based caching
6. Use Chrome DevTools → “Memory” tab → **Heap Snapshot** to debug leaks

---

### Example of Circular Reference

```js
function circular() {
  const a = {};
  const b = {};
  a.b = b;
  b.a = a; // circular reference
}
```

This can prevent garbage collection until both references are removed.

---

## Summary

| Step | Concept          | Description                               |
| ---- | ---------------- | ----------------------------------------- |
| 1    | **Allocation**   | Memory is allocated for variables/objects |
| 2    | **Usage**        | Data is accessed or modified              |
| 3    | **Release**      | GC removes unreachable memory             |
| -    | **Algorithm**    | Mark-and-sweep based on reachability      |
| -    | **Common leaks** | Global vars, timers, listeners, closures  |
| -    | **Tools**        | Chrome DevTools, Performance Profiler     |
