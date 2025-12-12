# **Prop Drilling (Crisp Notes)**

## **What is Prop Drilling?**

Prop drilling is when **data is passed through multiple nested components** even though only the deepest component needs it.

Example:
Parent → Child → SubChild → TargetComponent
(but only TargetComponent uses the prop)

This makes components messy and harder to maintain.

---

## **Why Does Prop Drilling Happen?**

Because React uses **unidirectional (top-down) data flow**, so props must be passed through every intermediate component—even if they don’t use them.

---

## **Example of Prop Drilling**

```jsx
function App() {
  const username = "Karan";
  return <Level1 username={username} />;
}

function Level1({ username }) {
  return <Level2 username={username} />;
}

function Level2({ username }) {
  return <Level3 username={username} />;
}

function Level3({ username }) {
  return <p>User: {username}</p>;
}
```

Only **Level3** needs `username`, but all components pass it → **prop drilling**.

---

## **Problems with Prop Drilling**

* Makes components tightly coupled
* Harder to refactor
* Redundant props
* Unnecessary re-renders
* Deep component trees become hard to manage

---

## **Solutions to Prop Drilling**

### **1. Context API**

Provides global state without passing props manually.

```jsx
const UserContext = createContext();
```

### **2. Redux / Redux Toolkit**

For larger-scale global state management.

### **3. Zustand / Recoil / Jotai**

Lightweight state management alternatives.

---

## **When Is Prop Drilling Acceptable?**

* Very small applications
* Props passed down only 1–2 levels
* Data not used globally

---

## **Common Interview Questions**

1. What is prop drilling?
2. Why does prop drilling occur in React?
3. What are the drawbacks of prop drilling?
4. How can we avoid prop drilling?
5. When should you use Context instead of props?
