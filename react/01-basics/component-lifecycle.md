# **Component Lifecycle (Crisp Notes)**

*(Relevant mainly for understanding React behavior + interviews; used in class components)*

React components (especially **class components**) go through specific lifecycle phases:

---

# **Lifecycle Phases**

## **1. Mounting (Component is created & added to DOM)**

Methods run in this order:

1. **constructor()** → initialize state & bind methods
2. **render()** → returns JSX
3. **componentDidMount()** → runs after component appears in the UI

### **Use Cases**

* API calls
* Subscriptions
* Setting up timers

---

## **2. Updating (When state or props change)**

Component re-renders when:

* `setState()` is called
* new props are received
* parent re-renders

Methods:

1. **render()**
2. **componentDidUpdate(prevProps, prevState)**

### **Use Cases**

* Run code after DOM updates
* Compare previous and current state/props
* Update UI based on prop change

---

## **3. Unmounting (Component removed from DOM)**

**componentWillUnmount()** runs before removal.

### **Use Cases**

* Cleanup intervals
* Cleanup event listeners
* Cleanup subscriptions
* Prevent memory leaks

> Functional component equivalent → useEffect cleanup function.

---

# **Functional Component Lifecycle Equivalent**

Functional components don’t have lifecycle methods but use **useEffect**:

| Class Component      | Functional Component                |
| -------------------- | ----------------------------------- |
| componentDidMount    | useEffect(() => {}, [])             |
| componentDidUpdate   | useEffect(() => {}, [deps])         |
| componentWillUnmount | useEffect(() => return cleanup, []) |

---

# **Diagram (Conceptual)**

```
Mounting → Updating → Unmounting
 constructor  
     ↓  
  render  
     ↓  
componentDidMount  
     ↓  
 (state/props change)  
     ↓  
  render  
     ↓  
componentDidUpdate  
     ↓  
componentWillUnmount
```

---

## **Common Interview Questions**

1. What are the lifecycle phases of a class component?
2. When does componentDidMount run?
3. What is the purpose of componentWillUnmount?
4. How do you run code when a component updates?
5. How does useEffect relate to lifecycle methods?
