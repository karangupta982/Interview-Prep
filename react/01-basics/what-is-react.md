# Introduction to React

## What is React?

React is a **JavaScript library for building user interfaces**, developed and maintained by **Facebook (Meta)**.  
It allows developers to build **component-based**, **declarative**, and **efficient** front-end applications.

---

## Key Features

1. **Component-Based Architecture**  
   - UI is divided into reusable, independent components.  
   - Each component manages its own logic and state.

2. **Declarative UI**  
   - You describe *what* the UI should look like, and React takes care of updating the DOM efficiently.

3. **Virtual DOM**  
   - React maintains an in-memory representation of the real DOM.  
   - On state change, it compares the Virtual DOM with the actual DOM (diffing) and updates only what’s necessary.

4. **Unidirectional Data Flow**  
   - Data flows from parent to child via **props**, making applications predictable and easier to debug.

5. **JSX (JavaScript XML)**  
   - Syntax extension that allows writing HTML-like code inside JavaScript.  
   - Example:
     ```jsx
     const element = <h1>Hello, React!</h1>;
     ```

6. **React Hooks**  
   - Introduced in React 16.8 for using state and lifecycle features inside functional components.

7. **Ecosystem Support**  
   - Compatible with libraries like Redux, React Router, and Context API for advanced state and routing management.

---

## Advantages of Using React

- Improves **performance** with Virtual DOM and efficient rendering.  
- Promotes **code reusability** through components.  
- Enables **fast UI updates** through a declarative model.  
- **Large community** and strong ecosystem support.  
- Can be used for **web** (ReactJS), **mobile** (React Native), and **server rendering** (Next.js).

---

## Common Interview Points

- **React is a library, not a framework.**
- **Virtual DOM** helps React update the UI efficiently.
- **Components** are the core building blocks.
- **JSX** allows writing HTML-like syntax inside JS.
- **Unidirectional data flow** ensures predictable behavior.
- **Hooks** provide state and lifecycle management in functional components.

---

## Example Component

```jsx
function Welcome() {
  return <h2>Hello, React</h2>;
}
