# Understanding the `delete` Operator in JavaScript

This document explains the behavior of the `delete` operator in JavaScript through the following example:

```js
const name = "thanos";
age = 24;

console.log(delete name);
console.log(delete age);
```

---

## 1. The `delete` Operator

The `delete` operator in JavaScript is used to **remove properties from objects**.
It attempts to delete a property from an object and returns:

* `true` if the property was successfully deleted or did not exist,
* `false` if the property could not be deleted.

**Syntax:**

```js
delete object.property
delete object["property"]
```

---

## 2. Global Scope and Object Relationship

In a **browser environment**, the global object is `window`.
When a variable is declared globally using `var`, it becomes a **property of the global object**.
However:

* Variables declared with `let` or `const` are **not attached** to the global object.
* Implicit global variables (variables assigned without declaration) are **automatically created as properties** of the global object.

---

## 3. Variable Declarations and Deletion Behavior

### a) `var`

* Variables declared using `var` become **non-configurable** properties of the global object.
* The `delete` operator **cannot** delete non-configurable properties.
* Returns `false`.

Example:

```js
var x = 10;
console.log(delete x); // false
```

### b) `let` and `const`

* These are **block-scoped** and **not attached** to the global object.
* They are part of the **lexical environment**, not the global object.
* Hence, `delete` **cannot** access or remove them.
* Returns `false`.

Example:

```js
let y = 20;
const z = 30;
console.log(delete y); // false
console.log(delete z); // false
```

### c) Implicit Global Variable (without `var`, `let`, or `const`)

* If a variable is **assigned a value without being declared**, JavaScript automatically creates it as a **property of the global object** (in non–strict mode).
* Since such a property is configurable, it **can be deleted**.
* Returns `true`.

Example:

```js
undeclaredVar = 100;
console.log(delete undeclaredVar); // true
```

> Note: In **strict mode**, assigning to an undeclared variable throws a `ReferenceError`.
