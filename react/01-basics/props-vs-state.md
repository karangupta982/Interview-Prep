# **Props vs State**

## **1. Props**

Props (properties) are **inputs passed to components**.

### **Key Points**

* Read-only
* Passed **from parent → child**
* Cannot be modified inside the child
* Used to customize components

### **Example**

```jsx
function Greet({ name }) {
  return <h1>Hello {name}</h1>;
}
<Greet name="Karan" />;
```

---

## **2. State**

State is **data managed inside a component**.
State can **change over time**, causing a **re-render**.

### **Key Points**

* Managed inside the component
* Mutable (using setState or useState)
* Causes re-render when updated
* Stores dynamic data

### **Example**

```jsx
const [count, setCount] = useState(0);
```

---

## **3. Core Differences**

| Props                                      | State                        |
| ------------------------------------------ | ---------------------------- |
| Read-only                                  | Mutable                      |
| Passed from parent                         | Managed inside component     |
| No re-render unless parent sends new props | Re-render when state changes |
| Used for configuration                     | Used for dynamic behavior    |

---

## **4. When to Use What?**

### **Use Props When**

* Parent sends data
* Component needs configuration
* Same component used multiple times

### **Use State When**

* Value changes based on user interaction
* UI must update automatically
* Component stores internal data
