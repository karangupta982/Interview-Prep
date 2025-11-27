# What is a Hook in React?

A **Hook** is a special function in React that lets functional components use features like:

* **state**
* **lifecycle methods**
* **context**
* **performance optimizations**

Hooks allow you to do everything that class components used to do, but in a **cleaner and simpler** way.

### Example Hooks:

* `useState` → to manage state
* `useEffect` → to handle side effects
* `useContext` → to use context
* `useRef` → to store mutable values or access DOM
* `useMemo`, `useCallback` → optimization
* Custom hooks → reuse logic

---

# One-Line Interview Answer

**A Hook is a special React function that lets functional components use state and other React features without writing class components.**

---

# Purpose of React Hooks

React Hooks allow function components to:

* **use state**
* **use lifecycle methods**
* **reuse logic**
* **avoid class components**

Before Hooks, these features were only possible in class components (`this.state`, `componentDidMount`, etc.).

### Why Hooks exist?

To solve problems like:

* Complex class components
* Hard-to-reuse logic (HOCs, render props)
* `this` confusion
* Too much boilerplate

### Common Hooks

* `useState` – manage state
* `useEffect` – handle side effects
* `useContext` – access context
* `useRef` – reference DOM elements or store mutable values
* `useMemo` / `useCallback` – performance optimization

---

# How `useEffect` Works

`useEffect` runs **side effects** in React components.

### What is a side effect?

Anything that happens **outside** the component render:

* Fetching data
* Subscribing to events
* Setting timers
* Manually updating the DOM
* LocalStorage operations
* Logging

---

# Syntax

```jsx
useEffect(() => {
  // side effect code
  return () => {
    // cleanup (optional)
  };
}, [dependencies]);
```

---

# How it Actually Works (Simple)

### 1. Component renders

React runs the **effect callback** after the DOM is updated.

### 2. Dependency array decides when to run

| Dependency Array | When Effect Runs          |
| ---------------- | ------------------------- |
| `[]`             | Runs once (on mount)      |
| `[state]`        | Runs when `state` changes |
| No array         | Runs on every render      |

---

# Example 1: Running once (componentDidMount)

```jsx
useEffect(() => {
  console.log("Runs once");
}, []);
```

---

# Example 2: Runs when `count` changes

```jsx
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

---

# Example 3: Cleanup (componentWillUnmount)

Useful for:

* removing event listeners
* clearing timers
* unsubscribing

```jsx
useEffect(() => {
  const id = setInterval(() => console.log("tick"), 1000);

  return () => clearInterval(id); // cleanup
}, []);
```

---

# Core Interview Points

### 1. `useEffect` runs **after render**, not during.

### 2. Dependency array controls re-run behavior.

### 3. Cleanup runs before the effect re-runs and on unmount.

### 4. It handles all side effects that should not run during rendering.

---

# One-Line Interview Summary

**Hooks let functional components manage state and lifecycle logic.
`useEffect` handles side effects by running code after render, with optional cleanup and dependency-based control.**

* Real-world useEffect examples (API fetch, event listeners, timers)


