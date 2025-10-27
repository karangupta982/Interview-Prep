# **Execution Context, Call Stack, and Event Loop in JavaScript**

---

## **1. Global Execution Context (GEC)**

When a JavaScript program starts, a **Global Execution Context** (GEC) is created automatically.
This is the base environment where the entire code runs.

The GEC has **two phases**:

### **1. Memory Creation Phase (Hoisting Phase)**

* Memory is allocated for **variables and functions**.
* Variables declared with:

  * `var` → initialized with `undefined`
  * `let` and `const` → allocated in memory but **not initialized** (kept in the **Temporal Dead Zone**, TDZ)
* Functions → their **entire function definition** is stored in memory.

Example:

```javascript
console.log(a); // undefined
console.log(b); // ReferenceError
var a = 10;
let b = 20;
```

During memory phase:

* `a` → `undefined`
* `b` → in TDZ → not accessible

---

### **2. Code Execution Phase**

Now the code runs **line by line**:

* Variables get assigned real values.
* Functions are invoked.
* New execution contexts are created for each function call.

Example:

```javascript
let x = 5;
function add(y) {
  return x + y;
}
add(10);
```

1. GEC created → memory phase assigns space for `x` and `add`.
2. Code phase:

   * `x = 5`
   * `add(10)` creates a **Function Execution Context (FEC)**.

Each FEC also has its own **memory** and **code phase**, similar to GEC.

---

## **2. Function Execution Context (FEC)**

Whenever a function is invoked, a new **Function Execution Context** is created.

It also goes through two phases:

1. **Memory Phase** – local variables and parameters are allocated space.
2. **Code Phase** – the function code executes line by line.

Once the function finishes, its context is **popped off the call stack** and removed from memory.

Example:

```javascript
function outer() {
  let a = 5;
  function inner() {
    let b = 10;
    console.log(a + b);
  }
  inner();
}
outer();
```

Execution order:

1. GEC created → contains `outer`.
2. `outer()` called → FEC created for `outer`.
3. Inside `outer`, `inner()` called → new FEC created for `inner`.
4. When `inner` finishes → popped from stack.
5. When `outer` finishes → popped from stack.

---

## **3. Call Stack**

The **Call Stack** manages the order of execution contexts.

It works on a **LIFO (Last In, First Out)** principle.

```
| inner()  |  ← pushed last, executed first
| outer()  |
| global() |  ← created first, removed last
```

* When a function is called → new context pushed to stack.
* When the function finishes → context popped.
* Once the stack is empty → program ends.

---

## **4. The Event Loop and Concurrency Model**

JavaScript is **single-threaded** — it executes one statement at a time in the **call stack**.
But asynchronous tasks (like timers, API calls, or promises) are handled through **browser APIs**, **task queues**, and the **event loop**.

---

### **How It Works**

1. **Synchronous code** runs line by line in the **call stack**.
2. **Asynchronous code** (like `setTimeout`) is registered in **Web APIs**.
3. Once done, their callback functions move to a **queue** (task queue or microtask queue).
4. **The Event Loop** continuously checks:

   * If the **call stack** is empty, it picks tasks from the queues and pushes them to the stack for execution.

---

### **Example**

```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");
```

**Output:**

```
Start
End
Promise resolved
Timeout
```
