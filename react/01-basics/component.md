# **Components in React**

## **What is a Component?**

A component is a **reusable, independent piece of UI** in React.
React apps are built by combining multiple components like building blocks.

---

## **Types of Components**

### **1. Functional Components (modern, preferred)**

A function that returns JSX.

```jsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

### **2. Class Components (older)**

Used before Hooks were introduced.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

---

## **Why Components?**

* Reusability
* Easy to maintain
* Better code structure
* Encapsulates logic + UI together

---

## **Component Naming Rules**

* Must start with **capital letter**
* Must return JSX
* Can accept **props**
* Should be pure (same input → same output)

---

## **Composition (Core Idea)**

Components can contain other components.

```jsx
function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
```
