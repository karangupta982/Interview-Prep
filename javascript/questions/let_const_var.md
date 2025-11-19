# Difference Between `var`, `let`, and `const`

## 1. **Scope**

### **var**

* Function-scoped
* Accessible anywhere inside the function

### **let**

* Block-scoped
* Accessible only inside `{ }`

### **const**

* Block-scoped
* Also accessible only inside `{ }`

**Example**

```js
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // Error
console.log(c); // Error
```

---

## 2. **Re-declaration**

### **var**

* Can be **redeclared** in the same scope (not good)

### **let**

* Cannot be redeclared in the same scope

### **const**

* Cannot be redeclared

**Example**

```js
var x = 1;
var x = 2; // Allowed

let y = 1;
let y = 2; // Error

const z = 1;
const z = 2; // Error
```

---

## 3. **Re-assignment**

### **var**

* Can be re-assigned

### **let**

* Can be re-assigned

### **const**

* Cannot be re-assigned (value is fixed)

**Example**

```js
let a = 10;
a = 20; // OK

const b = 10;
b = 20; // Error
```

---

## 4. **Hoisting**

### **var**

* Hoisted with **undefined**
* Can be used before declaration (bad practice)

### **let**

* Hoisted but in **Temporal Dead Zone (TDZ)**
* Cannot be used before declaration

### **const**

* Same as let (hoisted but not accessible before declaration)

**Example**

```js
console.log(a); // undefined
var a = 5;

console.log(b); // Error
let b = 5;

console.log(c); // Error
const c = 5;
```

---

# Summary Table

| Feature   | var             | let                   | const        |
| --------- | --------------- | --------------------- | ------------ |
| Scope     | Function        | Block                 | Block        |
| Redeclare | Yes             | No                    | No           |
| Re-assign | Yes             | Yes                   | No           |
| Hoisting  | Yes (undefined) | Yes (TDZ)             | Yes (TDZ)    |
| Use Case  | Old JS code     | Variables that change | Fixed values |
