# Difference Between a Framework and a Library

## 1. **Control (Inversion of Control)**

### **Library**

* *You* call the library functions.
* You stay in control of the program flow.
* Example: Using **React** (library), *you* decide when to call components, hooks, etc.

### **Framework**

* The framework calls *your* code.
* The overall flow is controlled by the framework.
* Example: **Angular**, **Django** — they define the structure; you just fill in the parts.

---

## 2. **Structure / Rules**

### **Library**

* No fixed project structure.
* You can use any parts you want.
* More freedom, less opinionated.

### **Framework**

* Gives a predefined structure.
* You MUST follow rules, folder patterns, naming, lifecycle, etc.
* More opinionated but keeps large projects organized.

---

## 3. **Size & Scope**

### **Library**

* Small, focused set of functions.
* Solves a specific problem (UI, data fetching, math, etc.)

### **Framework**

* Larger, full solution for application development.
* Handles routing, state, rendering, data management, CLI, testing, etc.

---

## 4. **Learning Curve**

### **Library**

* Easier to learn (just learn the functions you need).

### **Framework**

* Higher learning curve because you must learn the whole ecosystem and its rules.

---

# Simple One-Line Summary

* **Library → You call it.**
* **Framework → It calls you.**

---

# Quick Examples

| Category   | Library              | Framework                              |
| ---------- | -------------------- | -------------------------------------- |
| JavaScript | React, Lodash, Axios | Angular, Next.js, Vue (semi-framework) |
| Python     | NumPy, Pandas        | Django, Flask                          |
| CSS        | Tailwind             | Bootstrap (semi-framework)             |
