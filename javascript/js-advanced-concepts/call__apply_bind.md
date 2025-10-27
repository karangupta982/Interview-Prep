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

---

## **4. bind()**

### **Definition:**

`bind()` does **not invoke the function immediately**.
It **returns a new function** with the specified `this` value and optional arguments pre-set.

### **Syntax:**

```js
const newFunc = functionName.bind(thisArg, arg1, arg2, ...);
```

---

### **Example:**

```js
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Karan" };

const greetKaran = greet.bind(person, "Hello");

greetKaran(); // Hello, Karan
```

**Explanation:**

* `bind` returns a new function (`greetKaran`)
* You can call it later, and it remembers the bound `this` and arguments.

---

### **Use Case 3 – Fixing `this` in Event Handlers**

```js
const user = {
  name: "Karan",
  showName() {
    console.log(this.name);
  }
};

const button = document.getElementById("btn");
button.addEventListener("click", user.showName.bind(user));
```

Without `.bind(user)`, `this` would refer to the button element instead of the `user` object.

---

## **5. Summary Table**

| Method      | Invokes Immediately? | Arguments Format                 | Returns                         | Use Case                               |
| ----------- | -------------------- | -------------------------------- | ------------------------------- | -------------------------------------- |
| **call()**  | Yes                  | Individually (`arg1, arg2, ...`) | Return value of function        | Borrow methods, pass `this` explicitly |
| **apply()** | Yes                  | As array (`[arg1, arg2, ...]`)   | Return value of function        | Use array arguments (e.g., `Math.max`) |
| **bind()**  | No                   | Individually (`arg1, arg2, ...`) | New function with bound context | Event handlers, delayed execution      |

---

## **6. Real-Life Analogy**

| Concept     | Analogy                                                                    |
| ----------- | -------------------------------------------------------------------------- |
| **call()**  | “Do this task now using this person’s context.”                            |
| **apply()** | “Do this task now using this person’s context and these tools (in a box).” |
| **bind()**  | “Prepare the task for later using this person’s context.”                  |

---

## **7. Example to Compare All Three**

```js
function introduce(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}.`);
}

const person = { name: "Karan" };

introduce.call(person, "Bhopal", "India");   // Immediate
introduce.apply(person, ["Bhopal", "India"]); // Immediate
const boundFunc = introduce.bind(person, "Bhopal", "India");
boundFunc(); // Later execution
```

---

## **8. Interview Tip**

A very common question:

> What’s the difference between `call`, `apply`, and `bind`?

**Answer:**

> `call` and `apply` both invoke the function immediately —
> the only difference is in how arguments are passed (`call` individually, `apply` as array).
> `bind` returns a new function that can be executed later with the bound context.
