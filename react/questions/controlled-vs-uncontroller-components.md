# Controlled vs Uncontrolled Components in React

This document explains:

* What controlled & uncontrolled components are
* How they work
* Real-world examples
* When to prefer each
* Common interview questions
* The controlled → uncontrolled warning
* Full code example
* Behavior differences

---

# 1. Controlled Components

A **controlled component** is a form input whose value is **fully managed by React state**.

## Key Idea

* React state is the **single source of truth**.
* Every change is handled through `onChange`.
* Typing triggers `setState` → re-render → updates value.

## Example

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

## Characteristics

* React controls the input.
* Easy validation (e.g., disabling button, real-time warnings).
* Predictable behavior.
* Re-renders on every keystroke.
* Best for forms requiring logic or dynamic UI updates.

---

# 2. Uncontrolled Components

An **uncontrolled component** stores its value **in the DOM**, not in React state.

## Key Idea

* DOM is the **source of truth**.
* Use `useRef()` to read the value only when needed (e.g., on submit).
* No `onChange`, no React state updates for typing.

## Example

```jsx
const nameRef = useRef();

<input ref={nameRef} />

<button onClick={() => console.log(nameRef.current.value)}>
  Submit
</button>
```

## Characteristics

* Faster to set up.
* No re-renders when typing.
* Harder to validate and manage.
* Best for simple forms with no dynamic UI logic.

---

# 3. Key Differences (Interview Table)

| Feature                | Controlled Component                    | Uncontrolled Component   |
| ---------------------- | --------------------------------------- | ------------------------ |
| Data stored in         | React state                             | DOM                      |
| Value updated via      | `onChange` + `setState`                 | Direct user input        |
| Validation             | Easy and immediate                      | Hard and manual          |
| Re-renders on typing   | Yes                                     | No                       |
| React is in control?   | Yes                                     | No                       |
| Best for               | Login, signup, search, multi-step forms | Simple or external forms |
| Default value handling | `value`                                 | `defaultValue`           |

---

# 4. Real-World Examples

## Controlled Components – Real World

### a) Login or Signup Form

Needs:

* Instant validation
* Error handling
* Button disabling
* State persistence

```jsx
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

### b) Search Bar With Live Suggestions

* Debouncing
* API calls
* Filtering
* Dynamic rendering

### c) Multi-step Forms (address, payment, confirmation)

State must persist between steps.

---

## Uncontrolled Components – Real World

### a) Simple Forms (value read only when submitting)

Contact form, feedback form, newsletter signup.

```jsx
const nameRef = useRef();
<input ref={nameRef} />
```

### b) Forms Integrated With Non-React Libraries

Example: jQuery UI widgets

### c) File Uploads

`<input type="file">` is **always uncontrolled**.

```jsx
<input type="file" ref={fileRef} />
```

---

# 5. When to Prefer Each

## Prefer Controlled Components When:

* You need real-time validation.
* Input value affects UI instantly.
* You want predictable form behavior.
* You want easier testing.
* You need dynamic UI changes (error messages, disabling buttons).
* You want to easily reset the form.

**Examples:** Login, Signup, Search bars, Multi-step forms.

---

## Prefer Uncontrolled Components When:

* You only need the input value once (on submit).
* Form is simple.
* You want fewer re-renders (performance).
* You don't need validation while typing.
* You integrate with external DOM-based libraries.
* You work with file inputs.

**Examples:** Newsletter signup, feedback forms, file upload forms.

---

# 6. Common Interview Trick Questions

### 1. Why use uncontrolled components if controlled ones are more powerful?

**Answer:**
They are simpler, cause fewer re-renders, faster for large forms, and work better with non-React libraries.

---

### 2. Which causes more re-renders?

**Answer:** Controlled components, because `setState` fires on every keystroke.

---

### 3. Can you switch a component from uncontrolled to controlled?

**Answer:**
React warns if the input’s initial value is `undefined`.
Example causing warning:

```jsx
const [name, setName] = useState(); // undefined
<input value={name} />
```

React sees:

* First render → uncontrolled (`value` = undefined)
* Later → controlled (`value` = "something")

**Fix:**
Always initialize state properly:

```jsx
const [name, setName] = useState("");
```

---

### 4. Why is `<input type="file">` always uncontrolled?

**Answer:**
Browsers don’t allow JavaScript to set file paths for security reasons.

---

### 5. If you use both `value` and `defaultValue`, which wins?

**Answer:**
`value` wins → makes it controlled.

---

### 6. Which is better for performance?

**Answer:**
Uncontrolled components → no re-renders while typing.

---

### 7. How do you reset an uncontrolled input?

**Answer:**

```jsx
ref.current.value = "";
```

or re-render the component.

---

# 7. Uncontrolled → Controlled Warning Explained

React throws this warning:

```
A component is changing an uncontrolled input to be controlled.
```

### Why?

If initial value is **undefined**, input starts uncontrolled.

Example that causes warning:

```jsx
const [text, setText] = useState(); // undefined
<input value={text} />
```

React flow:

* value is undefined → uncontrolled
* Later value becomes “hello” → controlled
  → ❗ Warning

### Fix

Provide a valid initial value:

```jsx
const [text, setText] = useState("");
```

Now it stays controlled from the beginning → no warning.

---

# 8. Full Example: Simple Uncontrolled Form

```jsx
import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" ref={nameRef} />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" ref={emailRef} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```

---

# 9. How This Uncontrolled Form Behaves

* No `useState` is used.
* Typing does **not** cause re-renders.
* React does **not** track value changes.
* Values are read from DOM only on submit.

Add this to verify:

```jsx
console.log("Rendered!");
```

Typing won't re-render → proves uncontrolled behavior.

---

# 10. Quick Comparison Summary

| Feature              | Controlled                   | Uncontrolled             |
| -------------------- | ---------------------------- | ------------------------ |
| Stored in            | React state                  | DOM                      |
| Re-renders on typing | Yes                          | No                       |
| Validation           | Easy                         | Hard                     |
| Reset                | With state                   | Using `.value = ""`      |
| Best use cases       | Login, signup, dynamic forms | Simple or external forms |
| Uses                 | `value`, `onChange`          | `defaultValue`, `ref`    |

---

# Final One-Line Summary

**Controlled components keep input values in React state for full control and validation, whereas uncontrolled components store values in the DOM and are accessed using refs, making them simpler but less powerful.**
