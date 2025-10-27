# **JavaScript Timer Functions (Web APIs)**

JavaScript itself (the engine) doesn’t handle timing — instead, **browser Web APIs** (or Node.js APIs) provide timing functions like `setTimeout()` and `setInterval()`.
When the timer completes, the callback is queued into the **callback queue**, and then executed by the **event loop** once the **call stack** is empty.

---

## **1. `setTimeout()`**

`setTimeout()` executes a function **once** after a specified delay (in milliseconds).

### **Syntax**

```javascript
setTimeout(callback, delay, arg1, arg2, ...);
```

* **callback** → Function to execute after the delay
* **delay** → Time in milliseconds (1000 ms = 1 second)

---

### **Example**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");
```

**Output**

```
Start
End
Executed after 2 seconds
```

Explanation:
The `setTimeout` callback is sent to Web APIs, and after 2 seconds, it’s pushed to the callback queue. The **event loop** then executes it after the call stack is empty.

---

### **Example: Passing Arguments**

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

setTimeout(greet, 1000, "Karan");
```

**Output**

```
Hello, Karan
```

---

### **Cancelling a Timeout — `clearTimeout()`**

If you set a timeout but later decide not to run it, you can cancel it using `clearTimeout()`.

```javascript
const timer = setTimeout(() => {
  console.log("Will not run");
}, 3000);

clearTimeout(timer);
```

No output will appear because we cancelled the timer before it executed.

---

## **2. `setInterval()`**

`setInterval()` executes a function **repeatedly** after a fixed interval (in milliseconds).

### **Syntax**

```javascript
setInterval(callback, interval, arg1, arg2, ...);
```

---

### **Example**

```javascript
let count = 0;

const interval = setInterval(() => {
  count++;
  console.log("Count:", count);
  if (count === 5) {
    clearInterval(interval);
  }
}, 1000);
```

**Output**

```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

Explanation:
The callback runs every 1 second. Once `count` reaches 5, we stop the interval using `clearInterval()`.

---

## **3. `clearInterval()`**

Used to stop a repeating timer created with `setInterval()`.

---

## **4. `setImmediate()` (Node.js only)**

* This is **not available in browsers**, only in **Node.js**.
* It runs a callback **immediately after the current event loop phase** ends.

```javascript
console.log("Start");

setImmediate(() => {
  console.log("Executed immediately after current phase");
});

console.log("End");
```

**Output**

```
Start
End
Executed immediately after current phase
```

---

## **5. `requestAnimationFrame()` (Browser only)**

Used for smooth animations — it tells the browser to run a function **before the next repaint**.

```javascript
function animate() {
  console.log("Frame drawn");
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

This is more efficient for animations than `setInterval()` because it syncs with the browser’s refresh rate (usually 60fps).

---

## **6. Interview Question Example**

**Q:** What will be the output?

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");
```

**Output**

```
Start
End
Promise resolved
Timer 1
```

**Explanation:**

* `Promise` callbacks go to the **microtask queue**.
* `setTimeout` callbacks go to the **callback (macrotask) queue**.
* Microtasks always run **before** macrotasks, so `"Promise resolved"` runs before `"Timer 1"`.

---

### **Summary Table**

| Function                  | Type         | Executes                  | Cancelled By             |
| ------------------------- | ------------ | ------------------------- | ------------------------ |
| `setTimeout()`            | Asynchronous | Once after delay          | `clearTimeout()`         |
| `setInterval()`           | Asynchronous | Repeatedly after delay    | `clearInterval()`        |
| `setImmediate()`          | Node.js only | After current event phase | —                        |
| `requestAnimationFrame()` | Browser only | Before next repaint       | `cancelAnimationFrame()` |
