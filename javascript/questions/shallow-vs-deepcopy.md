# Shallow Copy vs Deep Copy in JavaScript

## 1. Shallow Copy

A **shallow copy** only copies the **top-level properties**.
If the object contains nested objects/arrays, it **copies references**, not actual values.

### Meaning:

* Outer object → copied
* Inner/nested objects → **still point to the same memory**

### Example (shallow copy):

```js
const obj = { a: 1, b: { x: 10 } };

const shallow = { ...obj };  // or Object.assign({}, obj)

shallow.b.x = 20;

console.log(obj.b.x);  // 20 → changed (same reference)
```

### Key Issue:

Changes to nested objects in the copy will affect the original.

---

## 2. Deep Copy

A **deep copy** creates a **completely independent clone**, including all nested objects.

### Meaning:

* Entire structure is copied
* No shared references
* Changing the copy does **not** affect the original

### Example (deep copy):

```js
const obj = { a: 1, b: { x: 10 } };

const deep = JSON.parse(JSON.stringify(obj));

deep.b.x = 20;

console.log(obj.b.x);  // 10 → unchanged
```

---

# Differences (Interview-Ready Table)

| Feature                              | Shallow Copy           | Deep Copy                 |
| ------------------------------------ | ---------------------- | ------------------------- |
| Copies top-level values              | Yes                    | Yes                       |
| Copies nested objects                | No (copies references) | Yes (creates new objects) |
| Memory independent?                  | No                     | Yes                       |
| Original affected by nested changes? | Yes                    | No                        |
| Performance                          | Faster                 | Slower                    |

---

# Common Methods

### **Shallow Copy**

* `Object.assign({}, obj)`
* `{ ...obj }` (spread operator)
* `Array.prototype.slice()`
* `Array.prototype.concat()`

### **Deep Copy**

* `JSON.parse(JSON.stringify(obj))`
* `structuredClone(obj)` (Modern JS)
* Third-party libraries: **Lodash cloneDeep**

---

# One-Line Interview Answer

**Shallow copy copies only top-level properties and shares nested references, while deep copy creates a completely independent clone of all levels, including nested objects.**
