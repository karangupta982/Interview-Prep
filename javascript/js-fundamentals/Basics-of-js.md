## 1. Type Conversion (Implicit and Explicit)

### Implicit Conversion (Type Coercion)

JavaScript automatically converts one data type to another.

```javascript
console.log('5' + 2);   // "52" -> number 2 is converted to string
console.log('5' - 2);   // 3 -> string '5' is converted to number
console.log(true + 1);  // 2 -> true becomes 1
console.log(false + 'x'); // "falsex" -> boolean to string
```

### Explicit Conversion

We manually convert data types.

```javascript
let str = String(100);  // "100"
let num = Number("50"); // 50
let bool = Boolean(1);  // true
```

---

## 2. Equality: `==` vs `===`

* `==` (loose equality) checks value only (with type coercion)
* `===` (strict equality) checks both value and type

```javascript
console.log(5 == '5');  // true
console.log(5 === '5'); // false
```

---

## 3. Truthy and Falsy Values

**Falsy values**: `false`, `0`, `""`, `null`, `undefined`, `NaN`

Everything else is **truthy**.

```javascript
if ("") console.log("True"); else console.log("False"); // False
if (42) console.log("True"); else console.log("False"); // True
```

---

## 4. Null vs Undefined

* `undefined`: variable declared but not assigned.
* `null`: explicitly set to “no value”.

```javascript
let a;
let b = null;
console.log(a); // undefined
console.log(b); // null
```

---

## 5. Template Literals

Allow embedding expressions inside strings using backticks (`` ` ``).

```javascript
let name = "Karan";
let message = `Hello ${name}, welcome to JavaScript!`;
console.log(message);
```

---

## 6. Destructuring

Extract values from arrays or objects easily.

### Array Destructuring

```javascript
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a, b, c); // 10 20 30
```

### Object Destructuring

```javascript
const user = { name: "Karan", age: 22 };
const { name, age } = user;
console.log(name, age);
```

---

## 7. Spread and Rest Operators

### Spread (`...`) – Expand elements

```javascript
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); // [1,2,3,4,5]
```

### Rest (`...`) – Collect remaining elements

```javascript
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); // 10
```

---

## 8. Default Parameters

You can set default values for function parameters.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();       // Hello, Guest!
greet("Karan"); // Hello, Karan!
```

---

## 9. Short-Circuit Evaluation

Using `&&` and `||` for conditional logic.

```javascript
let username = "";
let displayName = username || "Anonymous";
console.log(displayName); // Anonymous

let isLoggedIn = true;
isLoggedIn && console.log("Welcome!"); // executes because true
```

---

## 10. The `this` Keyword

`this` refers to the current context (depends on how function is called).

```javascript
const obj = {
  name: "Karan",
  greet: function() {
    console.log(this.name);
  }
};
obj.greet(); // "Karan"
```

If used in a normal function (not bound to object):

```javascript
function show() {
  console.log(this);
}
show(); // In browser: Window object
```

---

## 11. Call, Apply, and Bind

Used to set `this` explicitly.

```javascript
const person = { name: "Karan" };
function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}

greet.call(person, "Bhopal");     // Hello Karan from Bhopal
greet.apply(person, ["Bhopal"]);  // same as call but arguments as array
const newFunc = greet.bind(person, "Bhopal");
newFunc(); // Hello Karan from Bhopal
```

---

## 12. Closures

A closure is when a function “remembers” variables from its outer scope even after the outer function has finished executing.

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

#### Step 1: Define `outer()`

When you write:

```javascript
function outer() { ... }
```

You’re defining a function called `outer` which:

* Creates a variable `count = 0`
* Returns another function (`inner`)

So, **`outer` returns the inner function** — not a value.

---

#### Step 2: Call `outer()`

```javascript
const counter = outer();
```

Here’s what happens when you call `outer()`:

* A **new variable `count`** is created inside `outer`, with an initial value `0`.
* The function `outer` returns the **function `inner`**.
* But — this is the key — `inner` **still has access to the variable `count`** that was defined inside `outer`, **even after `outer` has finished running.**

So now, `counter` refers to the returned inner function.

Think of it like this:

```javascript
const counter = function inner() {
  count++;
  console.log(count);
};
```

…but with `count` still remembered from when `outer()` ran.

---

#### Step 3: Call `counter()`

When you call:

```javascript
counter(); // 1
```

JavaScript looks for `count` inside `inner` — it’s not there.
Then it looks at the scope chain (the outer function `outer`) and finds `count = 0`.

Then it increments it: `count++ → count = 1`
and logs it.

---

#### Step 4: Call `counter()` Again

```javascript
counter(); // 2
```

Here’s the magic:

* The previous `count` value (which was 1) is **still remembered** by the closure.
* So it increments again: `count = 2`
* Logs `2`.

Even though `outer()` finished executing long ago, the **inner function still “closes over” the variables of `outer()`** — that’s why it’s called a **closure**.

---

### 3. Why Closures Are Important

Closures allow:

* **Private variables** (data hiding)
* **State preservation** between function calls
* **Function factories**

---

### 4. Visualizing It

```
outer() called
 ├── count = 0
 └── returns inner()

counter() --> uses inner(), but still has access to count (from outer)
counter() --> again uses same count variable (count = 2 now)
```

---

### 5. Another Example for Clarity

```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
```

Each time you call `createCounter()`, it creates a **new private `count` variable** with its own copy.

















---

## 13. Higher-Order Functions

A function that takes another function as argument or returns one.

```javascript
function greet(name) {
  return `Hello, ${name}`;
}

function processUser(func, value) {
  console.log(func(value));
}

processUser(greet, "Karan"); // Hello, Karan
```

---

## 14. Immediately Invoked Function Expression (IIFE)

Executes immediately after creation.

```javascript
(function() {
  console.log("Executed immediately!");
})();
```

---

## 15. Error Handling (try-catch)

```javascript
try {
  let x = y + 1; // y is not defined
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("This always runs");
}
```

---

## 16. ES6 Modules (import/export)

### `math.js`

```javascript
export function add(a, b) {
  return a + b;
}
```

### `main.js`

```javascript
import { add } from './math.js';
console.log(add(2, 3)); // 5
```
