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

