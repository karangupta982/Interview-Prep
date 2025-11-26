# **Controlled vs Uncontrolled Components**

## **1. Controlled Components**

A **controlled component** is a form element whose value is **controlled by React state**.

React fully manages:

* The input value
* The changes
* The UI updates

### **Example**

```jsx
const [text, setText] = useState("");

<input 
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
```

### **Key Points**

* React is the “single source of truth”
* Easy validation
* Predictable behavior
* Preferred in most scenarios

---

## **2. Uncontrolled Components**

An uncontrolled component stores its own state **inside the DOM**, not in React.

You access its value using **refs**.

### **Example**

```jsx
const inputRef = useRef();

<input ref={inputRef} />

<button onClick={() => console.log(inputRef.current.value)}>
  Log Value
</button>
```

### **Key Points**

* DOM manages the value
* Less React code
* Useful for simple input situations (like focusing)
* Not ideal for validation

---

## **3. Difference Summary**

| Controlled             | Uncontrolled                       |
| ---------------------- | ---------------------------------- |
| React controls value   | DOM controls value                 |
| Needs state + onChange | Uses refs                          |
| Best for validation    | Best for quick uncontrolled inputs |
| Predictable            | Less predictable                   |

---

## **4. When to Use Which?**

### **Use Controlled When**

* You need form validation
* You need dynamic updates
* You want predictable UI behavior

### **Use Uncontrolled When**

* Simple form
* Low interaction
* Using React with non-React code (e.g., integrating libraries)

---

## **Common Interview Questions**

1. What is the difference between controlled and uncontrolled components?
2. Why are controlled components preferred?
3. Can we mix controlled and uncontrolled approaches?
