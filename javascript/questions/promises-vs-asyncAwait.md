# What are Promises?

A **Promise** is an object that represents the result of an asynchronous operation.
It can be in one of three states:

* **pending**
* **fulfilled**
* **rejected**

Example:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});

promise.then(result => console.log(result)).catch(err => console.log(err));
```

---

# Why were Promises introduced?

They solve problems of:

* Callback hell
* Hard-to-manage async flow
* Error handling issues in callbacks

---

# How async/await differs

`async/await` is **syntactic sugar** built on top of Promises.
It allows you to write asynchronous code in a **synchronous, cleaner style**.

### Example using async/await:

```js
async function getData() {
  try {
    const data = await promise;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

---

# Key Differences (Interview-Ready)

### 1. **Readability**

* **Promises:** Use `.then()` and `.catch()`, can get nested.
* **async/await:** Looks synchronous, easier to read and write.

### 2. **Error Handling**

* **Promises:** `.catch()` handles errors.
* **async/await:** `try...catch` blocks handle errors more cleanly.
