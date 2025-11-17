## **Basics, Variables & Data Types**

### 1. undefined

#### A variable is undefined when it has been declared but not assigned any value.
#### It also appears when you try to access a variable or property that doesn’t exist.


### 2. null

#### null is an assigned value.
#### It’s a way for the programmer to explicitly indicate “no value” or “empty”.

| Aspect          | `undefined`                           | `null`                               |
| --------------- | ------------------------------------- | ------------------------------------ |
| **Type**        | `undefined`                           | `object` (weird JS quirk)            |
| **Assigned by** | JavaScript itself                     | Programmer (manually)                |
| **Meaning**     | Variable exists but no value assigned | Variable explicitly has “no value”   |
| **Example**     | `let a;` → `a` is `undefined`         | `let a = null;` → `a` is `null`      |
| **Use case**    | Default value before assignment       | Reset or clear a value intentionally |

---

# Difference Between `var`, `let`, and `const`

## 1. **Scope**

### **var**

* Function-scoped
* Accessible anywhere inside the function

### **let**

* Block-scoped
* Accessible only inside `{ }`

### **const**

* Block-scoped
* Also accessible only inside `{ }`

**Example**

```js
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // Error
console.log(c); // Error
```

---

## 2. **Re-declaration**

### **var**

* Can be **redeclared** in the same scope (not good)

### **let**

* Cannot be redeclared in the same scope

### **const**

* Cannot be redeclared

**Example**

```js
var x = 1;
var x = 2; // Allowed

let y = 1;
let y = 2; // Error

const z = 1;
const z = 2; // Error
```

---

## 3. **Re-assignment**

### **var**

* Can be re-assigned

### **let**

* Can be re-assigned

### **const**

* Cannot be re-assigned (value is fixed)

**Example**

```js
let a = 10;
a = 20; // OK

const b = 10;
b = 20; // Error
```

---

## 4. **Hoisting**

### **var**

* Hoisted with **undefined**
* Can be used before declaration (bad practice)

### **let**

* Hoisted but in **Temporal Dead Zone (TDZ)**
* Cannot be used before declaration

### **const**

* Same as let (hoisted but not accessible before declaration)

**Example**

```js
console.log(a); // undefined
var a = 5;

console.log(b); // Error
let b = 5;

console.log(c); // Error
const c = 5;
```

---

### **Dynamically Typed**
- In JavaScript, **you don’t declare variable types** (like `int`, `string`, etc.) explicitly.  
- The type is **determined at runtime**, based on the value currently stored in the variable.  
- And yes — you can **change the type of a variable dynamically** by assigning a new value of a different type.

**Example:**
```js
let x = 10;       // x is a number
x = "Hello";      // now x is a string
x = true;         // now x is a boolean
```
No error — JavaScript allows it.

---

## `{}` → **Object Literals**

An **object literal** is a simple way to create an object directly using curly braces `{}`.

```js
let person = {
  name: "Karan",
  age: 22,
  city: "Gwalior"
};
```

* Each property is written as `key: value`.
* You can access properties using:

  ```js
  console.log(person.name);  // "Karan"
  console.log(person["age"]); // 22
  ```

So `{}` is the **object literal syntax** used to define objects directly.

---

## `` ` ` `` → **Template Literals**

Template literals (introduced in ES6) are strings enclosed in **backticks** (`` ` ``) that allow:

1. **String Interpolation** – embed variables or expressions directly using `${}`.
2. **Multi-line Strings** – write strings across multiple lines easily.

### Example

```js
let name = "Karan";
let age = 22;

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
```

Output:

```
My name is Karan and I am 22 years old.
```

They are more flexible than normal quotes (`' '` or `" "`).

---

## JavaScript Is **Synchronous** and **Single-Threaded**

### (a) **Single-Threaded**

* JavaScript executes code in **a single thread**, meaning **one statement at a time**.
* It has **one call stack**, and only one piece of code runs at any given moment.

Example:

```js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

Output will always be:

```
Task 1
Task 2
Task 3
```

---

### (b) **Synchronous by Default**

* JavaScript runs code **line by line**, waiting for one line to finish before moving to the next.

However, it can **handle asynchronous operations** (like `setTimeout`, `fetch`, or Promises) using the **event loop** and **callback queue** — but the main thread still stays single.

Example (mixing sync and async):

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

console.log("End");
```

Output:

```
Start
End
Inside setTimeout
```

Even though `setTimeout` has 0 delay, it runs later because JavaScript is single-threaded and asynchronous tasks go through the event loop.

---

## Summary

| Concept               | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| `{}`                  | Object literal (used to create objects)                           |
| `` ` ` ``             | Template literal (used for multi-line and interpolated strings)   |
| Single-threaded       | Executes one statement at a time on a single call stack           |
| Synchronous           | Executes code line by line, blocking the next line until done     |
| Asynchronous behavior | Managed using event loop and callbacks, but still single-threaded |

---

### 2. **Interpreted (or Just-In-Time Compiled)**
- Traditionally, JavaScript is called **interpreted** because it’s executed **line by line** by the browser or Node.js engine.
- Modern JS engines (like Google’s V8) actually **use Just-In-Time (JIT) compilation** for performance — meaning they compile parts of the code to machine code *as it runs*.

---

```javascript
// JavaScript is a dynamically typed(types determined at runtime), interpreted language(executed directly by the engine without prior compilation step).

// Variable Declarations
var a = 10;   // function scoped
let b = 20;   // block scoped
const c = 30; // constant

// Data Types
let name = "Karan";     // string
let age = 22;           // number
let isDev = true;       // boolean
let skills = ["JS", "React"]; // object type (array)
let info = { city: "Bhopal", country: "India" };
let nothing = null;
let notDefined;

console.log(typeof name);       // string
console.log(typeof skills);     // object
console.log(typeof nothing);    // object (JS quirk!)

// Template Literals
console.log(`Hey, my name is ${name} and I am ${age} years old.`);

// Type Conversion
console.log(Number("123")); // 123
console.log(String(100));   // "100"
console.log(Boolean(0));    // false 


let a;          // undefined (declared but not assigned)
let b = null;   // null (explicitly assigned)

console.log(a); // undefined
console.log(b); // null

console.log(a == b);  // true  (because of type coercion)
console.log(a === b); // false (strict comparison — different types)

```





