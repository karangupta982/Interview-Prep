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
