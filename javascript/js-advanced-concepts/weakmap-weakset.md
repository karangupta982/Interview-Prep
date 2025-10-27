## 1. The Problem They Solve

In normal JavaScript collections like `Map` or `Set`,
**keys and values are strongly referenced**, meaning they **prevent garbage collection**.

That is, even if an object is no longer needed elsewhere,
it won’t be deleted from memory as long as it’s inside a `Map` or `Set`.

This can cause **memory leaks** in long-running applications.

**WeakMap** and **WeakSet** fix this issue by using **weak references** —
they don’t prevent their objects from being garbage-collected.

---

## 2. WeakMap

A **WeakMap** is similar to a regular `Map`,
but it can **only have objects as keys**,
and those keys are **weakly referenced**.

### Example

```js
let user = { name: "Karan" };

const weakMap = new WeakMap();
weakMap.set(user, "Some user data");

console.log(weakMap.get(user)); // "Some user data"

// If we remove the reference
user = null;

// Now the {name: "Karan"} object can be garbage-collected
// and weakMap entry is automatically removed
```

**Key Points:**

* Keys must be **objects**, not primitives.
* Entries are **automatically garbage-collected** when there are no references to the key.
* It is **not iterable** (you can’t use `.keys()`, `.values()`, `.forEach()`, etc.)
* You can only use:

  * `weakMap.set(key, value)`
  * `weakMap.get(key)`
  * `weakMap.has(key)`
  * `weakMap.delete(key)`

---

### Why not iterable?

Because keys in WeakMap might be garbage-collected anytime,
so JavaScript can’t guarantee their presence for iteration.

---

### Use Case: Private Data for Objects

```js
const privateData = new WeakMap();

class User {
  constructor(name, password) {
    privateData.set(this, { password });
    this.name = name;
  }

  getPassword() {
    return privateData.get(this).password;
  }
}

const user1 = new User("Karan", "12345");
console.log(user1.getPassword()); // 12345

// If user1 is deleted, its private data will also be garbage-collected
```

So `WeakMap` is great for **storing metadata or private info** for objects
without worrying about memory leaks.

---

## 3. WeakSet

A **WeakSet** is similar to a `Set`,
but it can only contain **objects**, and those are **weakly referenced** too.

### Example

```js
let user1 = { name: "Karan" };
let user2 = { name: "Rohan" };

const weakSet = new WeakSet();
weakSet.add(user1);
weakSet.add(user2);

console.log(weakSet.has(user1)); // true

user1 = null;

// user1 will be garbage-collected and automatically removed from weakSet
```

**Key Points:**

* Only **objects** can be stored (no strings, numbers, etc.)
* It’s **not iterable** (no `.forEach()` or `.size`)
* Useful for **tracking object existence** or **marking objects**

---

### Use Case: Tracking visited objects

```js
const visited = new WeakSet();

function visit(obj) {
  if (visited.has(obj)) {
    console.log("Already visited:", obj);
  } else {
    console.log("First time visiting:", obj);
    visited.add(obj);
  }
}

let page = { url: "example.com" };

visit(page); // First time visiting
visit(page); // Already visited

page = null; // Object can now be garbage collected automatically
```

---

## 4. Difference Summary

| Feature                | Map                                     | WeakMap                                 | Set                                    | WeakSet                          |
| ---------------------- | --------------------------------------- | --------------------------------------- | -------------------------------------- | -------------------------------- |
| **Keys/Values Type**   | Any                                     | Keys must be objects                    | Any                                    | Only objects                     |
| **Garbage Collection** | No                                      | Yes                                     | No                                     | Yes                              |
| **Iterable**           | Yes                                     | No                                      | Yes                                    | No                               |
| **Methods Available**  | full (`.entries()`, `.forEach()`, etc.) | limited (`get`, `set`, `has`, `delete`) | full (`.values()`, `.forEach()`, etc.) | limited (`add`, `has`, `delete`) |

---

## 5. In Summary

* **WeakMap** → key-value pairs where keys are weakly held objects.
* **WeakSet** → stores weakly held object references only.
* Both help **prevent memory leaks** in long-running or large-scale applications.
