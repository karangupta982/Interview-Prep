## **Arrays & Methods**

**Topics:**

* Array Creation
* Common Methods: `push`, `pop`, `shift`, `unshift`, `splice`, `slice`
* Higher Order Methods: `map`, `filter`, `reduce`

---

## `slice()` — Extracts a Portion (Does Not Modify Original)

### Syntax

```js
array.slice(start, end)
```

### Description

* Returns a **shallow copy** of a portion of the array.
* Extracts elements **from `start` index up to (but not including) `end`**.
* Does **not** change the original array.

### Example

```js
let arr = [10, 20, 30, 40, 50];

let part = arr.slice(1, 4);

console.log(part); // [20, 30, 40]
console.log(arr);  // [10, 20, 30, 40, 50]  (unchanged)
```

### Notes

* If `end` is omitted, it goes till the end of the array.
* Negative indices count from the end.

```js
arr.slice(-3); // last 3 elements → [30, 40, 50]
```

---

## `splice()` — Adds, Removes, or Replaces (Modifies Original)

### Syntax

```js
array.splice(start, deleteCount, item1, item2, ...)
```

### Description

* Changes (mutates) the original array.
* Can **remove**, **add**, or **replace** elements.
* Returns an array of **removed** elements.

---

### Example 1: Remove Elements

```js
let arr = [10, 20, 30, 40, 50];
let removed = arr.splice(1, 2); // remove 2 elements starting at index 1

console.log(removed); // [20, 30]
console.log(arr);     // [10, 40, 50]
```

---

### Example 2: Add Elements

```js
let arr = [10, 40, 50];
arr.splice(1, 0, 20, 30); // start at 1, remove 0, insert 20 and 30

console.log(arr); // [10, 20, 30, 40, 50]
```

---

### Example 3: Replace Elements

```js
let arr = [10, 20, 30, 40, 50];
arr.splice(2, 2, 100, 200); // start at 2, remove 2, insert 100 and 200

console.log(arr); // [10, 20, 100, 200, 50]
```
---

```js
let arr = [1, 2, 3, 4, 5];

// slice
let sliced = arr.slice(1, 4); // [2, 3, 4]
console.log(arr);             // [1, 2, 3, 4, 5] (unchanged)

// splice
let spliced = arr.splice(1, 3); // removes [2, 3, 4]
console.log(arr);               // [1, 5]
console.log(spliced);           // [2, 3, 4]
```
---

* **`slice()`** → copies part of an array without changing it.
* **`splice()`** → changes the array (add, remove, or replace elements).

---

```javascript
const nums = [1, 2, 3, 4, 5];

const arr = new Array(6);
console.log(arr);
const twoDarray = Array.from({length:4},() => Array(length:5).fill(0));
console.log(twoDarray);

// Basic Methods
nums.push(6);
nums.unshift(0);
console.log("unshift by 0",nums); // [0,1,2,3,4,5,6]
nums.pop();
console.log("pop",nums); // [0,1,2,3,4,5]
nums.shift();
console.log("shift",nums); // [1,2,3,4,5]
nums.splice(2, 1);
console.log("splice",nums); // [1,2,4,5]
console.log("slice",nums.slice(1, 3)); // [2,4]

// Higher Order Methods

// 2️⃣ map
const squared = nums.map(num => num * num);
console.log(squared);

// 3️⃣ filter
const evens = nums.filter(num => num % 2 === 0);
console.log(evens);

// 4️⃣ reduce
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
```
