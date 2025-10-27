## **Scope, Hoisting & TDZ**

**Topics:**

* Global, Function, Block Scope
* Hoisting
* Temporal Dead Zone

---

The **Temporal Dead Zone (TDZ)** is a behavior in JavaScript that occurs with variables declared using **`let`** and **`const`**.
It refers to the time between when a variable is **declared** and when it is **initialized**, during which the variable **cannot be accessed**.

---

## 1. Explanation

When JavaScript executes code:

1. It **hoists** variable declarations (for `var`, `let`, and `const`) to the top of their scope. Functions with body are stored in the memory phase of global execution context.
2. But **only `var`** variables are initialized with `undefined` during hoisting.
3. **`let` and `const`** are hoisted but **not initialized** until the code execution reaches their declaration line.

The period between the **start of the scope** and the **actual initialization** is called the **Temporal Dead Zone (TDZ)**.

---

## 2. Example

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;
```

Explanation:

* `a` is hoisted and initialized with `undefined`, so no error occurs.
* `b` is hoisted but not initialized, so accessing it before declaration throws a **ReferenceError**.
  That time window is the **TDZ** for `b`.

---

## 3. Example with `const`

```js
{
  console.log(x); // ReferenceError (TDZ)
  const x = 20;
  console.log(x); // 20
}
```

`x` exists in memory but is in the TDZ until its declaration line is executed.

---

## 4. Key Points

| Concept                       | `var`             | `let` / `const` |
| ----------------------------- | ----------------- | --------------- |
| Hoisted                       | Yes               | Yes             |
| Initialized at hoisting       | Yes (`undefined`) | No              |
| Accessible before declaration | Yes               | No (TDZ)        |
| Error type                    | None              | ReferenceError  |

---

* TDZ starts at the **beginning of the scope** and ends when the variable is **declared**.
* Accessing a `let` or `const` variable before declaration results in a **ReferenceError**.
* It helps prevent accidental use of variables before they are ready.

---

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
