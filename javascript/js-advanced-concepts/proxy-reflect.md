# **Reflect and Proxy in JavaScript**

---

## **1. What is a Proxy in JavaScript?**

A **Proxy** is an object that wraps another object (called the *target*) and allows you to **intercept** or **customize** fundamental operations on that object such as reading, writing, deleting, or calling properties.

### **Syntax**

```js
const proxy = new Proxy(target, handler);
```

* **target** → the object you want to wrap.
* **handler** → an object with "traps" (functions that intercept operations).

---

### **Example 1: Basic Proxy**

```js
const user = {
  name: "Karan",
  age: 22
};

const handler = {
  get(target, property) {
    console.log(`Accessing ${property}`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting ${property} to ${value}`);
    target[property] = value;
  }
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.name); // Accessing name → "Karan"
proxyUser.age = 23;          // Setting age to 23
```

**Explanation:**
The `get` trap runs whenever you try to access a property, and `set` trap runs whenever you assign one.

---

### **Example 2: Validation with Proxy**

```js
const student = {
  name: "Rahul",
  age: 18
};

const validator = {
  set(target, prop, value) {
    if (prop === "age") {
      if (typeof value !== "number" || value <= 0) {
        throw new Error("Age must be a positive number!");
      }
    }
    target[prop] = value;
  }
};

const studentProxy = new Proxy(student, validator);

studentProxy.age = 20; // Works fine
// studentProxy.age = -5; // Throws Error
```

**Use Case:** You can use proxies to validate data before modifying an object — a common backend use case.

---

### **Common Proxy Traps**

| Trap                                | Description                                    |
| ----------------------------------- | ---------------------------------------------- |
| `get`                               | Intercepts property access                     |
| `set`                               | Intercepts property assignment                 |
| `has`                               | Intercepts the `in` operator                   |
| `deleteProperty`                    | Intercepts deletion of a property              |
| `apply`                             | Intercepts function calls                      |
| `construct`                         | Intercepts `new` operator                      |
| `ownKeys`                           | Intercepts `Object.keys()` or `for...in` loops |
| `getPrototypeOf` / `setPrototypeOf` | Intercepts prototype operations                |

---

## **2. What is Reflect in JavaScript?**

The **Reflect** object provides built-in static methods for performing object operations in a **standardized and safe** way.
It was introduced alongside Proxy to make working with intercepted objects more predictable.

It **mirrors** most of the Proxy traps and provides the default behavior for them.

---

### **Example 1: Using Reflect**

```js
const user = { name: "Karan", age: 22 };

// Using Reflect instead of direct property access
Reflect.set(user, "name", "Aman");
console.log(Reflect.get(user, "name")); // Aman
```

---

### **Example 2: Combining Proxy and Reflect**

```js
const product = { name: "Laptop", price: 50000 };

const handler = {
  set(target, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    // Default behavior via Reflect
    return Reflect.set(target, prop, value);
  },
  get(target, prop) {
    console.log(`Accessing ${prop}`);
    return Reflect.get(target, prop);
  }
};

const proxyProduct = new Proxy(product, handler);

proxyProduct.name;        // Accessing name
proxyProduct.price = 60000; // Setting price to 60000
```

**Why Reflect?**
Without Reflect, you’d have to manually write logic like `target[prop] = value;`, but that might break consistency or throw unexpected errors.
Reflect ensures safe, built-in behavior — so `Proxy` and `Reflect` work together as complements.

---

## **3. Key Differences**

| Feature      | Proxy                                   | Reflect                                        |
| ------------ | --------------------------------------- | ---------------------------------------------- |
| **Purpose**  | To intercept/modify behavior of objects | To perform default object operations safely    |
| **Type**     | Constructor function                    | Built-in static object                         |
| **Use Case** | Create custom behaviors                 | Call default operations inside Proxy traps     |
| **Example**  | Custom validation, logging              | Maintain consistency with standard JS behavior |
