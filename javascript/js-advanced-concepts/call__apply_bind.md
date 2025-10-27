# **call(), apply(), and bind() in JavaScript**

---

## **1. Background – The `this` keyword**

In JavaScript, the value of `this` depends on **how** a function is called — not where it’s defined.

Example:

```js
function showDetails() {
  console.log(this.name);
}

const user1 = { name: "Karan" };
const user2 = { name: "Aman" };
```

If we call `showDetails()` directly:

```js
showDetails(); // undefined (in strict mode)
```

But we can use **call**, **apply**, or **bind** to explicitly define what `this` refers to.

---

## **2. call()**

### **Definition:**

`call()` **invokes the function immediately**, and allows you to **pass `this` value and arguments individually**.

### **Syntax:**

```js
functionName.call(thisArg, arg1, arg2, ...);
```

---

### **Example:**

```js
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Karan" };

greet.call(person, "Hello", "!"); // Hello, Karan!
```

**Explanation:**

* `this` is set to `person`
* Arguments are passed **individually**

---

### **Use Case 1 – Borrowing a Method**

```js
const student1 = {
  name: "Karan",
  introduce: function() {
    console.log(`Hi, I am ${this.name}`);
  }
};

const student2 = { name: "Aman" };

student1.introduce.call(student2); // Hi, I am Aman
```

Here, `student2` borrows the `introduce` method of `student1`.

---

## **3. apply()**

### **Definition:**

`apply()` is similar to `call()`, but it takes **arguments as an array (or array-like object)**.

### **Syntax:**

```js
functionName.apply(thisArg, [arg1, arg2, ...]);
```

---

### **Example:**

```js
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Aman" };

greet.apply(person, ["Hi", "!!!"]); // Hi, Aman!!!
```

**Difference from `call()`**

* `call()` → arguments individually
* `apply()` → arguments as an array

---

### **Use Case 2 – Using with Math Functions**

```js
const numbers = [5, 1, 8, 3, 10];

const maxNum = Math.max.apply(null, numbers);
console.log(maxNum); // 10
```

Here, `apply` spreads the array elements as arguments to `Math.max`.
