## **Arrays & Methods**

# 1. Array Length

Returns the number of elements in an array.

```js
const arr = [10, 20, 30];
console.log(arr.length); 
// Output: 3
```

---

# 2. Array toString()

Converts an array to a comma-separated string.

```js
const arr = [1, 2, 3];
console.log(arr.toString());
// Output: "1,2,3"
```

---

# 3. Array at()

Returns element at a specific index (supports negative index).

```js
const arr = [10, 20, 30, 40];
console.log(arr.at(2));  
// Output: 30

console.log(arr.at(-1)); 
// Output: 40
```

---

# 4. Array join()

Joins array elements using a custom separator.

```js
const arr = ["Karan", "Gupta", "MERN"];
console.log(arr.join(" - "));
// Output: "Karan - Gupta - MERN"
```

---

# 5. Array pop()

Removes and returns the last element.

```js
const arr = [1, 2, 3];
console.log(arr.pop()); 
// Output: 3

console.log(arr);
// Output: [1, 2]
```

---

# 6. Array push()

Adds an element to the end; returns new length.

```js
const arr = [1, 2];
console.log(arr.push(3)); 
// Output: 3 (new length)

console.log(arr);
// Output: [1, 2, 3]
```

---

# 7. Array shift()

Removes and returns the first element.

```js
const arr = [10, 20, 30];
console.log(arr.shift());
// Output: 10

console.log(arr);
// Output: [20, 30]
```

---

# 8. Array unshift()

Adds elements at the beginning; returns new length.

```js
const arr = [20, 30];
console.log(arr.unshift(10)); 
// Output: 3 (new length)

console.log(arr);
// Output: [10, 20, 30]
```

---

# 9. Array isArray()

Checks if a value is an array.

```js
console.log(Array.isArray([1, 2, 3])); 
// Output: true

console.log(Array.isArray("hello")); 
// Output: false
```

---

# 10. Array delete()

Deletes element at index (but leaves empty slot).

```js
const arr = [10, 20, 30];
delete arr[1];

console.log(arr);
// Output: [10, empty, 30]
```

---

# 11. Array concat()

Merges multiple arrays; returns new array.

```js
const a = [1, 2];
const b = [3, 4];

console.log(a.concat(b));
// Output: [1, 2, 3, 4]
```

---

# 12. Array copyWithin()

Copies array elements to another index in the same array.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(1, 3));
// Copy from index 3 -> start at index 1
// Output: [1, 4, 5, 4, 5]
```

---

# 13. Array flat()

Flattens nested arrays.

```js
const arr = [1, [2, [3, 4]]];
console.log(arr.flat());
// Output: [1, 2, [3, 4]]

console.log(arr.flat(2));
// Output: [1, 2, 3, 4]
```

---

# 14. Array slice()

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

# 15. Array splice()

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

```

---

# 16. Array toSpliced()

Same as splice() but **does NOT mutate** original array.

```js
const arr = [10, 20, 30, 40];

const newArr = arr.toSpliced(1, 1, 99);

console.log(newArr);
// Output: [10, 99, 30, 40]

console.log(arr);
// Output: [10, 20, 30, 40] (original unchanged)
```

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

// map
const squared = nums.map(num => num * num);
console.log(squared);

// filter
const evens = nums.filter(num => num % 2 === 0);
console.log(evens);

// reduce
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
```
