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

---

## **5. Abstraction**

**Abstraction** means hiding the internal details and showing only the necessary features to the user.

In JavaScript, we can achieve abstraction using:

* Methods that hide complex logic.
* Private class fields (`#variableName` — ES2022 feature).

### **Example**

```javascript
class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // 1000
console.log(account.#balance); // ❌ SyntaxError: Private field '#balance' must be declared
```

Here, `#balance` is **private** — it cannot be accessed or modified directly outside the class.

---

## **6. Inheritance**

**Inheritance** allows one class to inherit properties and methods from another class.

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

  display() {
    console.log(`Name: ${this.name}, Roll: ${this.roll}`);
  }
}

const s2 = new Student("Gupta", 21);
s2.greet();  // inherited method
s2.display();
```

**Output**

```
Hi, I'm Gupta
Name: Gupta, Roll: 21
```

---

## **7. Polymorphism**

**Polymorphism** means “many forms.”
It allows methods to have the same name but behave differently based on the object that calls them.

### **Example**

```javascript
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const a1 = new Animal();
const d1 = new Dog();
const c1 = new Cat();

a1.speak(); // Animal makes a sound
d1.speak(); // Dog barks
c1.speak(); // Cat meows
```

Each subclass provides its own implementation of `speak()`.

---

## **8. Getters and Setters**

Used to control how object properties are accessed or modified.

### **Example**

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }

  get price() {
    return `$${this._price}`;
  }

  set price(newPrice) {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      console.log("Invalid price");
    }
  }
}

const p1 = new Product("Laptop", 500);
console.log(p1.price); // $500
p1.price = 800;
console.log(p1.price); // $800
p1.price = -100;       // Invalid price
```

---

## **9. Static Methods**

Static methods belong to the **class itself**, not to the instances.

### **Example**

```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(10, 5)); // 15
```

---

## **10. Object Prototypes Behind the Scene**

Even though we use `class` syntax, under the hood JavaScript uses **prototypes**.

```javascript
class Student {
  greet() {
    console.log("Hello!");
  }
}

const s = new Student();
console.log(Object.getPrototypeOf(s) === Student.prototype); // true
```

So `class` is just a **syntactic sugar** over the traditional prototype-based inheritance.

---

## **11. Example Combining All OOP Concepts**

```javascript
class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  start() {
    console.log(`${this.name} is starting`);
  }
}

class Car extends Vehicle {
  #fuel = 0;

  constructor(name, type, brand) {
    super(name, type);
    this.brand = brand;
  }

  refuel(amount) {
    this.#fuel += amount;
    console.log(`${this.name} refueled: ${this.#fuel}L`);
  }

  start() {
    console.log(`${this.brand} ${this.name} is running on ${this.#fuel}L fuel`);
  }

  static about() {
    console.log("Cars are four-wheeled vehicles");
  }
}

const car1 = new Car("Civic", "Sedan", "Honda");
car1.refuel(20);
car1.start();
Car.about();
```

**Output**

```
Civic refueled: 20L
Honda Civic is running on 20L fuel
Cars are four-wheeled vehicles
```

This example includes:

* **Encapsulation** → `#fuel` private property
* **Inheritance** → `Car` extends `Vehicle`
* **Polymorphism** → Overridden `start()` method
* **Abstraction** → `refuel()` hides internal logic
* **Static method** → `Car.about()`

---

## **12. Summary Table**

| Concept           | Description                     | Example                                |
| ----------------- | ------------------------------- | -------------------------------------- |
| **Encapsulation** | Bundling data & methods         | Class with private fields              |
| **Abstraction**   | Hiding internal logic           | Private methods, controlled interfaces |
| **Inheritance**   | Reusing code from another class | `extends` keyword                      |
| **Polymorphism**  | Method overriding               | `Animal.speak()` vs `Dog.speak()`      |
| **Static Method** | Belongs to class, not object    | `ClassName.method()`                   |

---

## **13. Interview Questions**

1. **How does JavaScript implement OOP if it’s prototype-based?**
   → It uses prototype chaining; `class` is syntactic sugar over prototypes.

2. **Can we have private properties in JavaScript?**
   → Yes, using `#propertyName` syntax (ES2022+).

3. **What’s the difference between `static` and instance methods?**
   → Static belongs to class, instance methods to objects created with `new`.

4. **How is inheritance achieved in JavaScript?**
   → Through the `extends` keyword or manually via `Object.create()`.
