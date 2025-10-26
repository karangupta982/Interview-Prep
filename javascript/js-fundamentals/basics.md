## **Basics, Variables & Data Types**

**Topics:**

* What is JavaScript?
* `let`, `const`, `var`
* Primitive & Non-Primitive Data Types
* Type Conversion & typeof
* Template Literals


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

### 1. **Dynamically Typed**
- In JavaScript, **you don’t declare variable types** (like `int`, `string`, etc.) explicitly.  
- The type is **determined at runtime**, based on the value currently stored in the variable.  
- And yes — you can **change the type of a variable dynamically** by assigning a new value of a different type.

**Example:**
```js
let x = 10;       // x is a number
x = "Hello";      // now x is a string
x = true;         // now x is a boolean
```
✅ No error — JavaScript allows it.

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





