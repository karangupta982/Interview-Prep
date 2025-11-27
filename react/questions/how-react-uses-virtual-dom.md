# What is the Virtual DOM?

The **Virtual DOM (VDOM)** is a **lightweight JavaScript representation** of the actual DOM.

It is:

* a **copy** of the real DOM
* stored in memory
* cheap and fast to update
* used by React to calculate the most efficient way to update the real DOM

---

# Why Virtual DOM?

Because **updating the real DOM is slow**.
Updating a JavaScript object (Virtual DOM) is **super fast**.

---

# How React Uses the Virtual DOM (Step-by-Step)

### 1. You write UI (React components)

React creates a **virtual DOM tree** representing the UI.

### 2. State or props change

React creates a **new virtual DOM** version.

### 3. Diffing

React compares:

* old virtual DOM
* new virtual DOM

It finds exactly **what has changed**.

### 4. Reconciliation

React updates **only the changed parts** in the real DOM.

### 5. DOM update happens efficiently

Minimal, optimized updates → better performance.

---

# Why is Virtual DOM fast?

Because:

* It avoids direct DOM manipulation (expensive).
* It batches updates.
* It updates only the necessary part instead of re-rendering the whole UI.

---

# Interview-Friendly Two-Line Answer

**Virtual DOM is an in-memory light JS representation of the real DOM.
React compares the old and new virtual DOMs, finds the minimal changes, and updates only the required parts in the real DOM for better performance.**
