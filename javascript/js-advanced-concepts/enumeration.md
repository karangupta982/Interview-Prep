# Enumeration in JavaScript

**Enumeration** means **iterating over the properties of an object or the elements of a collection**.

To “enumerate” something is to **list out its values or keys**.

In JavaScript, an *enumerable property* is one that can be listed during iteration.

---

## 1. What Does "Enumerable" Mean in JavaScript?

Every property of an object has internal descriptors:

* `value`
* `writable`
* `configurable`
* `enumerable`

If a property is **enumerable**, it will show up in loops like:

* `for...in`
* `Object.keys()`
* `Object.values()`
* `Object.entries()`

### Example

```javascript
const obj = {
  name: "Karan",
  age: 22
};

for (let key in obj) {
  console.log(key);  // name, age
}
```

Both properties are **enumerable** by default.

---

## 2. Making a Property Non-Enumerable

```javascript
const obj = {};

Object.defineProperty(obj, "secret", {
  value: "12345",
  enumerable: false
});

obj.visible = "hello";

console.log(Object.keys(obj)); // ["visible"]
console.log(obj.secret);       // "12345" (can access it)
```

`secret` exists but is **not enumerated** in loops or keys.

---

## 3. Enumerating Arrays

Arrays can also be enumerated:

```javascript
const arr = ["a", "b", "c"];

arr.forEach(item => console.log(item));
```

Or using:

* `for...of`
* `for...in` (not recommended for arrays)

---

## 4. Enumeration in React

In React, enumeration usually refers to **mapping over arrays to render UI lists**.

Example:

```jsx
const items = ["apple", "banana", "mango"];

function List() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

`items.map(...)` is an example of **enumerating list values** for rendering.

React developers often say:

* "We enumerate the array to display items."
* "Enumeration helps convert data into JSX elements."

So in React, enumeration means **looping over data structures to generate UI**.

---

## 5. Enumeration vs Iteration

People often use the words interchangeably, but technically:

* **Enumerate** = List keys or values
* **Iterate** = Loop through a data structure

In JavaScript, enumeration usually refers to **object properties**, while iteration refers to arrays and iterable objects.

---

## 6. Summary

1. Enumeration means **listing out keys or values**.
2. In JavaScript, object properties can be **enumerable** or **non-enumerable**.
3. `for...in`, `Object.keys()`, `Object.values()`, and `Object.entries()` enumerate object properties.
4. In React, enumeration refers to **mapping arrays to JSX**.
5. Properties can be made **non-enumerable** using `Object.defineProperty()`.
