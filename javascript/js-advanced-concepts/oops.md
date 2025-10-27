# **OOPS in JavaScript**

---

## **1. Introduction**

JavaScript supports **Object-Oriented Programming (OOP)**, but it’s *prototype-based*, not *class-based* (like Java or C++).
However, since ES6, JavaScript introduced the `class` syntax, which makes it look similar to classical OOP languages — but internally, it still works through **prototypes**.

---

## **2. Four Pillars of OOP**

1. **Encapsulation**
2. **Abstraction**
3. **Inheritance**
4. **Polymorphism**

We’ll go through each one with clear code examples.

---

## **3. Objects in JavaScript**

An **object** is a collection of key-value pairs.
Everything in JavaScript (arrays, functions, classes) is an object or derived from one.

### **Example**

```javascript
const student = {
  name: "Karan",
  age: 22,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

student.greet(); // Hello, my name is Karan
```

---

## **4. Classes and Objects (Encapsulation)**

**Encapsulation** means bundling data (properties) and behavior (methods) inside one unit — a class.

### **Example**

```javascript
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  }
}

const s1 = new Student("Karan", 22);
s1.greet();
```

**Output**

```
Hello, I am Karan and I am 22 years old.
```

* `class` defines the blueprint.
* `constructor` initializes the object.
* `new` keyword creates an instance of the class.
