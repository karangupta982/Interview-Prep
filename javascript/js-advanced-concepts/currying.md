## 1. What is Currying?

**Currying** is the process of **transforming a function** that takes multiple arguments
into a **sequence of functions**, each taking **one argument at a time**.

In other words:

```js
// Normal function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}
```

Now you can call:

```js
console.log(add(1)(2)(3)); // Output: 6
```

---

## 2. Why use Currying?

Currying helps to:

* Reuse functions by **partially applying arguments**
* Make functions more **modular and composable**
* Improve **code readability** in functional programming

---

## 3. Example: Without Currying

```js
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 5)); // 10
```

## Example: With Currying

```js
function multiply(a) {
  return function(b) {
    return a * b;
  }
}

const double = multiply(2);  // function waiting for second argument
console.log(double(5));      // 10

const triple = multiply(3);
console.log(triple(5));      // 15
```

Here, `multiply(2)` returns a function that already knows the value of `a = 2`,
and you can reuse it as `double()` — this is **partial application**.

---

## 4. Using Arrow Functions (Cleaner Syntax)

```js
const add = a => b => c => a + b + c;

console.log(add(1)(2)(3)); // 6
```

Each function returns another function until the final argument is received.
