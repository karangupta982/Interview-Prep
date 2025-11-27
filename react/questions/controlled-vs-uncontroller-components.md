# Controlled vs Uncontrolled Components in React

## 1. Controlled Components

A **controlled component** is a form input whose value is **controlled by React state**.

### Key idea:

* The **source of truth** is **React state**, not the DOM.
* Every change triggers `onChange` → updates state → re-renders the input.

### Example:

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### Characteristics:

* React fully controls the input.
* Easier to validate, track, and manipulate.
* Predictable behavior.

---

## 2. Uncontrolled Components

An **uncontrolled component** stores input value **in the DOM** instead of React state.

### Key idea:

* The **source of truth** is the **DOM**, not React.
* You use a `ref` to read the value when needed.

### Example:

```jsx
const nameRef = useRef();

<input ref={nameRef} />

<button onClick={() => console.log(nameRef.current.value)}>
  Submit
</button>
```

### Characteristics:

* Faster to set up.
* Useful when immediate state tracking is not needed.
* Harder to validate and manage.

---

# Key Differences (Interview Table)

| Feature                  | Controlled Component                     | Uncontrolled Component     |
| ------------------------ | ---------------------------------------- | -------------------------- |
| Data stored in           | React state                              | DOM                        |
| Value updated via        | `onChange` + `setState`                  | Direct user input          |
| Best for                 | Forms with validation, conditional logic | Simple forms, quick inputs |
| React is in control?     | Yes                                      | No                         |
| Default value handled by | `value` prop                             | `defaultValue`             |

---

# One-Line Interview Answer

**Controlled components use React state as the single source of truth for form inputs, while uncontrolled components let the DOM manage the input value and access it using refs.**

---

# 1. Real-World Examples

## **Controlled Component – Real World**

### a) Login form (email + password validation)

You need:

* instant validation
* disabling submit button
* showing error messages
* trimming spaces

```jsx
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

<input value={email} onChange={(e) => setEmail(e.target.value)} />
<input value={password} onChange={(e) => setPassword(e.target.value)} />
```

### b) Search bar with live suggestions

Every keystroke triggers:

* API calls
* filtering
* highlighting

Controlled form makes this easy.

### c) Multi-step form (address form, payment form)

State must persist between steps → Controlled is ideal.

---

## **Uncontrolled Component – Real World**

### a) Simple forms where you only read the value on submit

Example: contact-us form, newsletter signup, feedback form.

You don’t need to track every keystroke.

```jsx
const nameRef = useRef();
const emailRef = useRef();

<input ref={nameRef} />
<input ref={emailRef} />
```

### b) Integrating with non-React libraries (e.g., jQuery plugins)

Some libraries modify DOM values directly → uncontrolled fits.

### c) File uploads

Input type `file` is almost always uncontrolled.

```jsx
<input type="file" ref={fileRef} />
```

---

# 2. When to Prefer Controlled vs Uncontrolled

## Prefer **Controlled** when:

* You need real-time validation
* Input value affects UI immediately
* You want form data synced with state
* You need conditional rendering based on input
* You want predictable, testable forms
* You want to reset forms easily using state

**Use Controlled for:**
Signup forms, login forms, search bars, multi-step forms, dynamic inputs.

---

## Prefer **Uncontrolled** when:

* You only need the value **once**, e.g., on submit
* You want less re-renders
* Form is very simple
* You don’t need validation
* You want quick, minimal setup
* You’re integrating with 3rd-party DOM libraries

**Use Uncontrolled for:**
Newsletter signup, feedback forms, contact forms, file inputs.

---

# 3. Common Interview Trick Questions

### **1. Why would you ever use uncontrolled components if controlled components are more powerful?**

**Answer:**
Uncontrolled components are simpler, avoid re-renders, integrate better with non-React libraries, and are ideal when you only need the value at form submission.

---

### **2. Which one causes more re-renders?**

**Answer:**
Controlled components — because each keystroke updates React state.

---

### **3. Can you switch a component from uncontrolled to controlled?**

**Answer:**
Yes, but React gives a warning if the input’s `value` is initially undefined.
This happens when:

```jsx
<input value={undefined} />
```

Fix by setting initial value:

```jsx
const [text, setText] = useState("");
```

---

### **4. Why is `<input type="file">` always uncontrolled?**

**Answer:**
For security reasons, browsers don’t allow JavaScript/React to set the file path programmatically. So React cannot control it.

---

### **5. What happens if you use both `value` and `defaultValue`?**

**Answer:**
`value` wins → the component becomes fully controlled.

---

### **6. Which has better performance?**

**Answer:**
Uncontrolled components — because they don’t cause React re-renders during typing.

---

### **7. How do you reset an uncontrolled input?**

**Answer:**
Manually set:

```jsx
ref.current.value = ""
```

or re-render the component so React remounts the input.
