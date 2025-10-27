## 1. **Promises**

A **Promise** is an object that represents a value that may be **available now**, **later**, or **never**.
It is used to handle **asynchronous operations** in JavaScript — such as fetching data or reading files — *without blocking the main thread*.

### Example using Promise

```js
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

getData()
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

**Explanation:**

* `getData()` returns a promise.
* `.then()` runs when the promise is **resolved**.
* `.catch()` runs when the promise is **rejected**.

---

## 2. **Async/Await**

`async` and `await` are **syntactic sugar** over Promises.
They make asynchronous code look **synchronous and cleaner**.

### Example using async/await

```js
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

async function fetchData() {
  try {
    const result = await getData(); // waits until promise resolves
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

**Explanation:**

* `async` makes a function return a **Promise**.
* `await` pauses the execution **until the promise resolves or rejects**.
* Easier to read, maintain, and debug.

---

## 3. **Key Differences**

| Feature            | Promises (.then/.catch)                             | Async/Await                      |
| ------------------ | --------------------------------------------------- | -------------------------------- |
| **Syntax**         | Uses chaining (`.then()`, `.catch()`)               | Looks synchronous with `await`   |
| **Readability**    | Harder to read when multiple async calls are nested | Cleaner and more readable        |
| **Error Handling** | `.catch()` used for errors                          | `try...catch` used for errors    |
| **Return Value**   | Returns a Promise object                            | Returns a Promise automatically  |
| **Execution Flow** | Doesn’t pause code execution                        | Pauses execution at each `await` |

---

## 4. **Example Comparison**

### Using Promise chaining

```js
fetch('https://api.example.com/user')
  .then(res => res.json())
  .then(user => fetch(`https://api.example.com/posts/${user.id}`))
  .then(res => res.json())
  .then(posts => console.log(posts))
  .catch(err => console.error(err));
```

### Using async/await

```js
async function getUserData() {
  try {
    const res = await fetch('https://api.example.com/user');
    const user = await res.json();

    const postRes = await fetch(`https://api.example.com/posts/${user.id}`);
    const posts = await postRes.json();

    console.log(posts);
  } catch (err) {
    console.error(err);
  }
}
getUserData();
```

**Same logic — but async/await is more readable and avoids “callback-like chaining.”**

---

## 5. **Under the Hood**

* `await` **always works with Promises** — it pauses the async function until the promise is resolved.
* If a function doesn’t return a Promise, JavaScript automatically wraps it in one when using `await`.
