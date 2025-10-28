## 1. What is `"use strict"`?

`"use strict"` is a **directive** introduced in **ES5 (ECMAScript 2009)** that enables **Strict Mode** in JavaScript.

Strict Mode changes JavaScript’s behavior to:

* Make it more **secure and predictable**
* Catch **common coding errors**
* Prevent **silent mistakes**
* Restrict the use of **problematic features**

It helps developers write **cleaner and less error-prone** code.

---

## 2. How to Enable Strict Mode

You can enable it in **two ways**:

### a) Globally (for the whole script)

```js
"use strict";
x = 10; // Error: x is not defined
```

### b) Locally (inside a function)

```js
function test() {
  "use strict";
  y = 20; // Error: y is not defined
}
test();
```

If `"use strict"` is inside a function, it only applies to that function’s scope.

---

## 3. What Changes in Strict Mode?

Let’s go over the main differences with examples.

---

### 1. **Prevents using undeclared variables**

Without strict mode:

```js
x = 5; // Works (creates global variable)
```

With strict mode:

```js
"use strict";
x = 5; // ReferenceError: x is not defined
```

---

### 2. **Makes assignments to non-writable properties throw errors**

```js
"use strict";

const obj = {};
Object.defineProperty(obj, "name", { value: "Karan", writable: false });

obj.name = "Gupta"; // TypeError
```

---

### 3. **Prevents deleting undeletable properties**

```js
"use strict";
delete Object.prototype; // TypeError
```

---

### 4. **Prevents duplicate parameter names**

```js
"use strict";
function sum(a, a, b) { // SyntaxError
  return a + b;
}
```

---

### 5. **Prevents using `this` as the global object**

Without strict mode:

```js
function show() {
  console.log(this); // window (in browsers)
}
show();
```

With strict mode:

```js
"use strict";
function show() {
  console.log(this); // undefined
}
show();
```

Strict mode avoids accidental access to the global object.

---

### 6. **Prevents using reserved keywords for variables**

```js
"use strict";
let public = 10;  // SyntaxError
let interface = 20; // SyntaxError
```

---

### 7. **Forbids `with` statement**

The `with` statement is not allowed in strict mode because it makes code ambiguous.

```js
"use strict";
with (Math) { // SyntaxError
  console.log(sin(45));
}
```

---

### 8. **Safer `eval()` behavior**

`eval()` in strict mode creates variables only within its local scope,
not in the global or outer scope.

```js
"use strict";
eval("var x = 5;");
console.log(typeof x); // undefined
```

Without strict mode, `x` would be created globally.

---

### 9. **Octal literals are not allowed**

```js
"use strict";
let num = 010; // SyntaxError
```

---

## 4. Why Should You Use Strict Mode?

* Helps catch **silent errors** early
* Prevents **global variable pollution**
* Increases **security**
* Makes code **easier to optimize** by JS engines (faster execution)
* Encourages **better coding practices**

---

## 5. When You Should Use It

* Always use `"use strict";` at the **top of scripts or modules**
* All **ES6 modules** (`import/export`) are automatically in strict mode
  → You don’t need to manually add it there.

---

## 6. Example Summary

```js
"use strict";

function demo(a, b) {
  // a = 5, b = 10
  x = a + b; // Error (x not declared)
  console.log(x);
}

demo(5, 10);
```

Output:

```
ReferenceError: x is not defined
```

Without `"use strict"`, this code would silently create a global variable `x`.

---

## 7. Quick Summary Table

| Behavior                      | Without Strict Mode | With Strict Mode |
| ----------------------------- | ------------------- | ---------------- |
| Undeclared variable           | Allowed             | Error            |
| Duplicate params              | Allowed             | Error            |
| Deleting undeletable property | Silent fail         | Error            |
| `this` in functions           | Global object       | undefined        |
| Octal literals                | Allowed             | Error            |
| `with` statement              | Allowed             | Error            |
| Reserved words                | Allowed             | Error            |

---

In short:

> `"use strict"` makes JavaScript safer, cleaner, and closer to modern ES6+ module behavior.
> It catches silent errors and prevents unintended bugs — always recommended for production code.
