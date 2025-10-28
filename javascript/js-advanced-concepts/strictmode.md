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
