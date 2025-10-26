
## **Functions**

**Topics:**

* Function Declaration & Expression
* Arrow Functions
* Default Parameters
* Return vs Console.log


```javascript
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Karan"));

// Function Expression
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 10));

// Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 6));

// Default Parameters
function welcome(user = "Guest") {
  console.log(`Welcome ${user}`);
}
welcome(); // Guest
welcome("Karan");
```
--- 

## **Key Differences between simple function and arrow function**

### **(a) `this` Keyword Behavior**

This is the *most important* difference.

#### **Regular Function**

* Has its **own `this`** (depends on how it’s called).
* `this` can change based on **call, bind, or object context**.

```js
const obj = {
  value: 10,
  regularFunc: function() {
    console.log(this.value);
  }
};

obj.regularFunc(); // 10 (this refers to obj)
```

#### **Arrow Function**

* **Does NOT have its own `this`**.
* It **inherits `this` from the surrounding (lexical) scope**.

```js
const obj = {
  value: 10,
  arrowFunc: () => {
    console.log(this.value);
  }
};

obj.arrowFunc(); // undefined (this doesn’t refer to obj)
```

---

### **(b) `arguments` Object**

#### **Regular Function**

Has access to the special `arguments` object (array-like of passed arguments):

```js
function showArgs() {
  console.log(arguments);
}
showArgs(1, 2, 3); // [1, 2, 3]
```

#### **Arrow Function**

Does **not** have its own `arguments` object.

```js
const showArgs = () => {
  console.log(arguments); // ReferenceError
};
```

---

### **(c) Use as a Constructor**

#### **Regular Function**

Can be used with `new` to create objects.

```js
function Person(name) {
  this.name = name;
}
const p = new Person("Karan");
console.log(p.name); // Karan
```

#### **Arrow Function**

Cannot be used as a constructor (throws error).

```js
const Person = (name) => { this.name = name; };
const p = new Person("Karan"); // TypeError
```

---

### **(d) Syntax and Readability**

| Regular Function                 | Arrow Function                           |
| -------------------------------- | ---------------------------------------- |
| Verbose but flexible             | Shorter and cleaner for simple logic     |
| Good for methods or constructors | Great for callbacks and inline functions |

Example:

```js
// Regular
function square(x) {
  return x * x;
}

// Arrow
const square = x => x * x;
```
---

## **In Short**

* **Use regular functions** → when you need your own `this` (e.g., methods in objects, constructors).
* **Use arrow functions** → for short, simple, or callback functions (like in `map`, `filter`, `forEach`, etc.).
