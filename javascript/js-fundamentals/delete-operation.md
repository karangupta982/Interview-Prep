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

---

## 4. Step-by-Step Explanation of the Example

### Code:

```js
const name = "thanos";
age = 24;

console.log(delete name);
console.log(delete age);
```

### Execution Breakdown:

1. `const name = "thanos";`

   * Declares a constant using `const`.
   * Stored in the lexical environment (not a property of the global object).
   * `delete name` tries to delete it, but constants are not configurable.
   * **Output:** `false`.

2. `age = 24;`

   * No `var`, `let`, or `const` keyword.
   * JavaScript (in non–strict mode) treats it as an **implicit global variable**.
   * This creates a configurable property `age` on the global object.
   * `delete age` successfully removes it.
   * **Output:** `true`.

### Output:

```
false
true
```

---

## 5. Strict Mode Behavior

If `"use strict"` is enabled at the top of the script:

```js
"use strict";

const name = "thanos";
age = 24; // ReferenceError: age is not defined
```

In **strict mode**, assigning to an undeclared variable (`age`) is not allowed, so the second line throws an error before reaching the `delete` statements.

---

## 6. Summary Table

| Declaration Type | Scope Type      | Attached to Global Object | Deletable | `delete` Result |
| ---------------- | --------------- | ------------------------- | --------- | --------------- |
| `var`            | Function/Global | Yes (non-configurable)    | ❌         | `false`         |
| `let` / `const`  | Block           | No                        | ❌         | `false`         |
| Implicit Global  | Global          | Yes (configurable)        | ✅         | `true`          |

---

## 7. Key Takeaways

* `delete` removes **object properties**, not variables.
* `var`, `let`, and `const` declarations are **not deletable**.
* Implicitly declared globals (without `var`, `let`, `const`) **can be deleted** in non–strict mode.
* Always use `"use strict"` to avoid creating unintended globals.

---

## References

* [MDN Web Docs – delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
* [MDN Web Docs – Variable scope](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Scope)
