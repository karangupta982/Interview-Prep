## What is an Abstract Class?

An **abstract class** is a **blueprint**, not a real object.

> It tells **what methods must exist**,
> but **not how they work**.

You **cannot create an object** of an abstract class.
You **must inherit it** and **complete it**.

That’s why people call it a **ghost class**.

---

## Why does Python need abstract classes?

Because Python is **dynamically typed**, you can otherwise do this:

```python
class Vehicle:
    def go(self):
        pass

v = Vehicle()
v.go()   # Does nothing, no error 🤦
```

This is **dangerous in real systems**.

Abstract classes exist to:

* Prevent incomplete implementations
* Force a contract
* Catch mistakes early

---

## Core idea (INTERVIEW GOLD)

> **Abstract class = contract**
>
> “If you inherit me, you MUST implement these methods.”

---

## How abstract classes work in Python

Python uses the **`abc` module**
(ABC = Abstract Base Class)

```python
from abc import ABC, abstractmethod
```

---

## Your example (cleaned & explained)

```python
from abc import ABC, abstractmethod

class Vehicle(ABC):

    @abstractmethod
    def go(self):
        pass

    @abstractmethod
    def stop(self):
        pass
```

### What this means

* `Vehicle` is a **blueprint**
* `go()` and `stop()` are **required methods**
* No implementation is provided
* Object creation is blocked

```python
v = Vehicle()   # ❌ ERROR
```

Python stops you **at runtime**.

---

## Why object creation is blocked

Because an abstract class is **incomplete**.

Imagine:

> “How can something move if `go()` is undefined?”

Python enforces this strictly.

---

## Correct usage (real world)

```python
class Car(Vehicle):

    def go(self):
        print("Car is moving")

    def stop(self):
        print("Car stopped")
```

Now:

```python
c = Car()   # ✅ OK
c.go()
```

---

## What happens if you forget a method?

```python
class Bike(Vehicle):
    def go(self):
        print("Bike moving")
```

```python
b = Bike()   # ❌ ERROR
```

**Why?**

* `stop()` not implemented
* Contract violated

---

## Real-world analogy (BEST explanation)

Think of an abstract class like:

### 🏗 Building Blueprint

* Blueprint says:

  * There must be doors
  * There must be windows
* Blueprint itself is **not a building**
* A real building **must follow the blueprint**

---

## When do we use abstract classes?

### 1️⃣ To enforce a structure

```python
class PaymentGateway(ABC):
    @abstractmethod
    def pay(self, amount):
        pass
```

Every payment system **must implement `pay()`**.

---

### 2️⃣ To support polymorphism safely

```python
def process_payment(gateway: PaymentGateway):
    gateway.pay(100)
```

You don’t care **which gateway**, only that it has `pay()`.

---

### 3️⃣ To prevent misuse

Without abstract class:

```python
gateway = PaymentGateway()
gateway.pay(100)   # silently broken
```

With abstract class:

```python
PaymentGateway()   # ❌ blocked
```

---

## Abstract class vs Interface (interview)

Python **does not have interfaces** like Java.

👉 **Abstract class = interface + optional implementation**

You *can*:

* Have abstract methods
* Have normal methods
* Have instance variables

---

## Key interview one-liners

* Abstract class **cannot be instantiated**
* Used to **enforce method implementation**
* Uses `ABC` and `@abstractmethod`
* Prevents incomplete classes
* Enables safe polymorphism

---

## One-liner mental model

> **Abstract class = rulebook**
>
> “You can’t play unless you follow the rules.”

---

## When NOT to use abstract classes?

* Small scripts
* One-off programs
* When flexibility > safety

