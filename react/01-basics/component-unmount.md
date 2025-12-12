# **Component Unmount in React (Crisp Notes)**

## **What Does “Component Unmount” Mean?**

A component **unmounts** when React **removes it from the DOM**.

This happens when:

* The component is no longer rendered due to conditional UI
* A route/page changes
* A parent component stops rendering that child
* A list item is removed

Unmounting = **component is destroyed and cleaned up**.

---

## **Why Is Unmounting Important?**

When a component unmounts, you must clean up things like:

* Event listeners
* Timers (setInterval, setTimeout)
* Subscriptions (WebSocket, Firebase, API streams)
* Memory-heavy objects

If not cleaned → **memory leaks**, unnecessary background work.

---

# **Unmounting in Class Components**

Use:

```jsx
componentWillUnmount() {
  // cleanup code
}
```

---

# **Unmounting in Functional Components (useEffect Cleanup)**

The cleanup function inside `useEffect` runs on unmount.

```jsx
useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
```

---

## **When Does the Cleanup Function Run?**

1. Before the component unmounts
2. Before the effect runs again (when dependencies change)

---

## **Common Unmounting Scenarios**

### **1. Conditional Rendering**

```jsx
{show && <Child />}
```

If `show` becomes false → `Child` unmounts.

### **2. Route Change (React Router)**

Switching pages removes the previous component from DOM.

### **3. Removing List Items**

```jsx
setList(list.filter(item => item.id !== id));
```

---

## **Practical Example**

Cleaning an interval:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(timer); // cleanup
}, []);
```

---

## **Common Interview Questions**

1. What does it mean when a component unmounts?
2. When does the cleanup function inside useEffect run?
3. Why is cleanup necessary?
4. What causes a React component to unmount?
