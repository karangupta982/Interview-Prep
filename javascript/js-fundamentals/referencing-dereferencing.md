## 1. How JavaScript Stores Data

In JavaScript, there are **two main types of values**:

| Type                               | Examples                                                               | Stored in | Passed by |
| ---------------------------------- | ---------------------------------------------------------------------- | --------- | --------- |
| **Primitive**                      | `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint` | Stack     | Value     |
| **Non-Primitive (Reference Type)** | `object`, `array`, `function`                                          | Heap      | Reference |

---

## 2. Referencing

**Referencing** means when a variable **points to the memory location** of a value (object/array/function) instead of holding the value directly.

### Example:

```javascript
let user = { name: "Karan", age: 22 };
let person = user; // 'person' references the same object in memory

person.age = 25;

console.log(user.age);   // 25
console.log(person.age); // 25
```

Here:

* `user` and `person` **point to the same reference in memory (Heap)**.
* Changing one affects the other because both reference the same object.

That’s what we mean by **referencing**.

---

## 3. Dereferencing

**Dereferencing** means **accessing** the value that the reference points to (the actual data stored in memory).

For example:

```javascript
let user = { name: "Karan" };
console.log(user.name); // Dereferencing: accessing the value of "name"
```

When we use `user.name`, we are dereferencing the memory reference held by `user` to get the value `"Karan"`.

---

## 4. Copying Behavior (Value vs Reference)

### Case 1: Primitive Types (copied by value)

```javascript
let x = 10;
let y = x; // a copy of x’s value is stored in y
y = 20;

console.log(x); // 10
console.log(y); // 20
```

Each variable holds its **own value** in memory.

---

### Case 2: Reference Types (copied by reference)

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 references the same array in memory

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
```

Both variables point to the **same memory location**, so modifying one changes the other.

---

## 5. Creating a True Copy (Breaking the Reference)

To avoid unintentional changes, we must **clone** or **copy** the object/array instead of referencing it.

### Shallow Copy (copies only one level)

```javascript
let user = { name: "Karan", age: 22 };
let copy = { ...user }; // spread operator creates a shallow copy

copy.age = 30;

console.log(user.age); // 22
console.log(copy.age); // 30
```

### Deep Copy (copies nested structures)

```javascript
let user = {
  name: "Karan",
  address: { city: "Bhopal", country: "India" }
};

// Shallow copy
let shallow = { ...user };
shallow.address.city = "Indore";
console.log(user.address.city); // "Indore" (still affected)

// Deep copy
let deep = JSON.parse(JSON.stringify(user));
deep.address.city = "Delhi";
console.log(user.address.city); // "Indore"
console.log(deep.address.city); // "Delhi"
```

---

## 6. Common Interview Questions

**Q1. Is JavaScript pass-by-value or pass-by-reference?**

**Answer:**
Technically, **everything in JavaScript is pass-by-value**, but for **reference types**, the **value passed is the reference** (the memory address).

Example:

```javascript
function modify(obj) {
  obj.name = "Changed";
}

let user = { name: "Original" };
modify(user);
console.log(user.name); // "Changed" (because reference was passed)
```

If you reassign inside the function, the reference breaks:

```javascript
function modify(obj) {
  obj = { name: "New Object" }; // reassigning the local reference
}

let user = { name: "Original" };
modify(user);
console.log(user.name); // "Original"
```

---

**Q2. How do you create an independent copy of an object or array?**

Use:

* Spread operator: `{ ...obj }`
* `Object.assign({}, obj)`
* JSON methods: `JSON.parse(JSON.stringify(obj))` (for deep copy)
* Libraries like Lodash: `_.cloneDeep(obj)`

---

**Q3. What happens when you assign one object to another variable?**

You only copy the **reference**, not the data.
Both variables point to the same memory address.

---

### Summary

| Concept           | Meaning                                                | Example                           |
| ----------------- | ------------------------------------------------------ | --------------------------------- |
| **Referencing**   | Variable points to the same memory location as another | `let b = a;`                      |
| **Dereferencing** | Accessing the value from that reference                | `a.name`                          |
| **Shallow Copy**  | Copies top-level properties                            | `{ ...obj }`                      |
| **Deep Copy**     | Copies all nested properties                           | `JSON.parse(JSON.stringify(obj))` |
