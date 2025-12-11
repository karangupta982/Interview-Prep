# Difference Between async and Promise in JavaScript

---

## 1. What is a Promise?

A **Promise** is an object that represents the eventual result of an asynchronous operation.

A Promise has three states:

1. Pending
2. Fulfilled (resolved)
3. Rejected

A Promise **does not block the thread**. It executes asynchronously and notifies the caller via:

* `.then()` for success
* `.catch()` for failure
* `.finally()` for cleanup

### Example using Promise

```javascript
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

getData()
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

---

## 2. What is async?

`async` is a **keyword** that makes a function return a Promise automatically, even if you return a normal value.

### Example

```javascript
async function getValue() {
  return 42;
}

getValue().then(console.log); 
// Output: 42  (wrapped in a Promise)
```

So:

* `async` makes functions asynchronous.
* The returned value is **implicitly wrapped in a Promise**.

---

## 3. What is await?

`await` pauses the execution inside an async function **until the Promise resolves**.

It is syntactic sugar on top of Promises, making async code look synchronous.

### Example

```javascript
async function fetchData() {
  const result = await getData(); 
  console.log(result);
}
```

---

## 4. Key Differences Between async and Promise

| Feature        | Promise                            | async (and await)                                 |
| -------------- | ---------------------------------- | ------------------------------------------------- |
| Type           | A JavaScript object                | A function keyword and operator                   |
| Purpose        | Handle async operations            | Make async code look synchronous                  |
| Syntax         | Uses `.then()` and `.catch()`      | Uses `await` and `try...catch`                    |
| Error Handling | `.catch()`                         | `try...catch`                                     |
| Readability    | Works but can get long with chains | Cleaner, easier to read                           |
| Returned Value | Returns a Promise explicitly       | Returns a Promise implicitly                      |
| Execution Flow | Non-blocking, uses callbacks       | Pauses execution at `await` inside async function |

---

## 5. Example: Promise vs Async Function

### Using Promise

```javascript
function fetchData() {
  return getData().then(result => {
    console.log(result);
  });
}
```

### Using async/await

```javascript
async function fetchData() {
  const result = await getData();
  console.log(result);
}
```

Both do the same thing, but async/await is more readable.

---

## 6. Does async replace Promises?

No.

**Async/Await is built on top of Promises**.
You cannot use `await` without a Promise.

A Promise is the fundamental mechanism.
`async` and `await` are just **syntactic sugar** to work with Promises more easily.

---

## 7. Interview-Ready Summary

* Promises represent an async value and use `.then()` and `.catch()`.
* `async` makes a function automatically return a Promise.
* `await` pauses execution until a Promise resolves.
* Async/await improves readability but does not replace Promises.
* Async/await still uses Promises internally.
