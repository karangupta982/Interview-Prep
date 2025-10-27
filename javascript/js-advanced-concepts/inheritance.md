# **Prototypes and Inheritance in JavaScript**

---

## **1. Everything in JavaScript is an Object**

In JavaScript, almost everything is an object or can behave like one.

* Primitive types (string, number, boolean, etc.) have **object wrappers** like `String`, `Number`, and `Boolean`.
* When you call a method like `"hello".toUpperCase()`, JavaScript temporarily wraps the string in a `String` object to access its methods.

```javascript
let x = "Prototype";
console.log(typeof x); // string
console.log(x.toUpperCase()); // PROTOTYPE
```

Internally, `x` behaves like:

```javascript
let x = new String("Prototype");
```

So `"Prototype"` is actually an instance of the `String` class.

---

## **2. What is a Prototype?**

A **prototype** is an object from which other objects **inherit properties**.

Every JavaScript object has an internal link to another object called its **prototype**.

If you try to access a property that doesn’t exist on the object, JavaScript automatically looks for it in its prototype.

---

## **3. `__proto__` (Prototype Chain)**

The `__proto__` property is a reference to the object’s **prototype** — the object it inherits from.

Example:

```javascript
const p1 = {
  xp1: "I am inside p1"
};

const p2 = {
  xp2: "I am inside p2",
  __proto__: p1
};

const p3 = {
  xp3: "I am inside p3",
  __proto__: p2
};

console.log(p3.xp3); // "I am inside p3"  -> found in p3
console.log(p3.xp2); // "I am inside p2"  -> found in p2
console.log(p3.xp1); // "I am inside p1"  -> found in p1
```

### **Explanation**

When you access `p3.xp1`, JavaScript:

1. Looks for `xp1` in `p3` → Not found
2. Looks in `p3.__proto__` (which is `p2`) → Not found
3. Looks in `p2.__proto__` (which is `p1`) → Found
4. If not found there either → goes to `Object.prototype`
5. Eventually reaches `null` (end of the prototype chain)

---

## **4. `Object.create()`**

`Object.create(proto)` creates a **new object** with its prototype set to `proto`.

```javascript
const p1 = { xp1: "I am inside p1" };

const p2 = Object.create(p1);
p2.xp2 = "I am inside p2";

console.log(p2.xp1); // "I am inside p1"  (inherited from p1)
console.log(p2.xp2); // "I am inside p2"
```

This is a clean and preferred way to set prototypes (instead of using `__proto__` directly).

---

## **5. The Prototype Chain**

Every object has a prototype, and that prototype may also have a prototype — forming a **prototype chain**.

Example:

```
p3 → p2 → p1 → Object.prototype → null
```

When searching for a property, JavaScript traverses this chain until it finds the property or reaches `null`.

---

## **6. `prototype` vs `__proto__`**

| Property    | Belongs To                   | Description                                                                                      |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| `__proto__` | Object instance              | Refers to the prototype of that particular object.                                               |
| `prototype` | Constructor function / Class | A property that defines what will become the prototype of instances created by that constructor. |

### **Example**

```javascript
function Student(name) {
  this.name = name;
}

Student.prototype.sayHello = function() {
  console.log(`Hello, I am ${this.name}`);
};

const s1 = new Student("Karan");

console.log(s1.__proto__ === Student.prototype); // true
s1.sayHello(); // Hello, I am Karan
```

* `Student.prototype` → defines the shared behavior of all Student instances.
* `s1.__proto__` → points to `Student.prototype`.

---

## **7. Class Syntax (ES6)**

JavaScript classes are just **syntactic sugar** over the prototype system.
They make the syntax cleaner and more familiar for developers from other languages.

### **Example**

```javascript
class Student {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const s2 = new Student("Gupta");
s2.sayHello(); // Hello, I am Gupta

console.log(s2.__proto__ === Student.prototype); // true
```

---

## **8. Inheritance in JavaScript**

We can create **class inheritance** using the `extends` keyword.

### **Example**

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, roll) {
    super(name); // calls parent class constructor
    this.roll = roll;
  }

  showRoll() {
    console.log(`My roll number is ${this.roll}`);
  }
}

const student1 = new Student("Karan", 21);
student1.greet();      // Hi, I'm Karan
student1.showRoll();   // My roll number is 21
```

---

## **9. Behind the Scenes (Prototype Chain in Classes)**

```
student1 → Student.prototype → Person.prototype → Object.prototype → null
```

That’s the internal prototype chain built automatically when you use `extends`.

---

## **10. Summary**

| Concept           | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| Prototype         | Object from which others inherit properties                    |
| `__proto__`       | Reference to an object’s prototype                             |
| `prototype`       | Property on constructor function used to define shared methods |
| `Object.create()` | Creates object with specific prototype                         |
| Inheritance       | One object or class deriving from another                      |
| Class             | ES6 syntax built on top of prototypes                          |

---

### **Interview Questions**

1. **What is the difference between `__proto__` and `prototype`?**

   * `__proto__` is a property of an **object instance**.
   * `prototype` is a property of a **constructor function or class**.

2. **How does inheritance work in JavaScript?**

   * Each object has a link (`__proto__`) to another object (its prototype).
   * Property lookup continues up the chain until found or `null`.

3. **What is the prototype chain end?**

   * Always ends with `Object.prototype`, whose prototype is `null`.

4. **How do classes implement inheritance in JavaScript?**

   * Using `extends` keyword and `super()` to call the parent constructor.

