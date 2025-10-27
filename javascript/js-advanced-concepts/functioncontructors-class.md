## 1. **Normal Function → camelCasing**

* Used for **regular functions** (not meant to create objects).
* The convention is **camelCase** — first letter lowercase, each subsequent word starts uppercase.

```js
function calculateTotal(price, tax) {
  return price + tax;
}

let result = calculateTotal(100, 18);
console.log(result); // 118
```

* This function is **called directly**.
* It **does not** use `this` or `new`.

---

## 2. **Constructor Function → PascalCasing**

* Used to **create objects** before `class` syntax was introduced in ES6.
* Convention: **PascalCase** — every word starts with an uppercase letter.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("Karan", 22);
console.log(person1.name); // "Karan"
```

Key points:

* Must be called with the **`new` keyword**.
* Inside, `this` refers to the newly created object.
* Commonly used before classes were added in ES6.

---

## 3. **Object Literals**

* Simplest way to create objects — written directly using `{}`.

```js
let person = {
  name: "Karan",
  age: 22,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Hello, my name is Karan
```

* You can define methods and properties directly.
* No need for `new` or a constructor.

---

## 4. **ES6 `class` Keyword**

* Introduced in **ES6 (2015)**.
* A modern and cleaner syntax over constructor functions.
* Still uses prototypal inheritance internally.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

let person2 = new Person("Karan", 22);
person2.greet(); // Hi, I'm Karan
```

* Must be instantiated with `new`.
* Supports inheritance using `extends` and `super`.
