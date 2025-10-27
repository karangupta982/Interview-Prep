# **Asynchronous JavaScript: Callbacks, Promises, and Callback Hell**

---

## **1. What is Asynchronous JavaScript?**

JavaScript is **single-threaded** — it executes one command at a time, line by line, using a **call stack**.
But when operations take time (like fetching data from a server), we don’t want to block the rest of the code.
That’s where **asynchronous behavior** comes in.

Asynchronous tasks are handled by the **Web APIs**, and once completed, they return results through the **callback queue** or **microtask queue**, managed by the **event loop**.

---

## **2. Callbacks**

A **callback** is simply a function passed as an argument to another function, which is called later after a task completes.

### **Example 1: Simple Callback**

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Karan", sayBye);
```

**Output:**

```
Hello Karan
Goodbye!
```

Here, `sayBye` is passed as a callback and executed after greeting.

---

### **Example 2: Asynchronous Callback**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Fetching data...");
}, 2000);

console.log("End");
```

**Output:**

```
Start
End
Fetching data...
```

The callback inside `setTimeout` is asynchronous — it’s executed after 2 seconds, once the main code finishes.

---

## **3. Callback Hell**

When multiple asynchronous operations depend on each other, developers often **nest callbacks inside callbacks**, leading to deeply indented, hard-to-read code.
This is known as **Callback Hell**.

### **Example: Callback Hell**

```javascript
getUser(function (user) {
  getPosts(user.id, function (posts) {
    getComments(posts[0].id, function (comments) {
      console.log(comments);
    });
  });
});
```

This structure quickly becomes **unmaintainable**, difficult to debug, and error-prone.

---

## **4. Promises**

A **Promise** is an object that represents the eventual **completion or failure** of an asynchronous operation.

It has **three states**:

1. **Pending** – initial state, neither fulfilled nor rejected.
2. **Fulfilled** – the operation completed successfully (`resolve()` called).
3. **Rejected** – the operation failed (`reject()` called).

---

### **Creating a Promise**

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data fetched successfully");
  } else {
    reject("Error fetching data");
  }
});

myPromise
  .then((message) => console.log("Success:", message))
  .catch((error) => console.log("Error:", error))
  .finally(() => console.log("Operation complete"));
```

**Output (if success = true):**

```
Success: Data fetched successfully
Operation complete
```

---

### **Example: Converting Callback Hell to Promises**

```javascript
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Karan" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

getUser()
  .then((user) => getPosts(user.id))
  .then((posts) => console.log(posts))
  .catch((err) => console.error(err));
```

This avoids the **callback pyramid**, making the flow cleaner.

---

## **5. Promise Chaining**

When one asynchronous task depends on another, you can chain `.then()` calls:

```javascript
fetchData()
  .then(processData)
  .then(saveToDatabase)
  .then(() => console.log("All done"))
  .catch((error) => console.error(error));
```

Each `.then()` receives the resolved value of the previous promise.

---

## **6. Callback Hell vs Promises (Comparison)**

| Feature        | Callback Hell                | Promises              |
| -------------- | ---------------------------- | --------------------- |
| Readability    | Nested structure             | Flat and readable     |
| Error handling | Must handle in each callback | Single `.catch()`     |
| Debugging      | Hard to trace                | Easier stack trace    |
| Chaining       | Difficult                    | Simple with `.then()` |
