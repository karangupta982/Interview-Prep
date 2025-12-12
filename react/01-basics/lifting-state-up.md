# **Lifting State Up (Crisp Notes)**

## **What is Lifting State Up?**

Lifting State Up means **moving the shared state** to the **closest common parent** when two or more child components need to share or sync data.

React encourages having **a single source of truth**, so shared state must live in a parent component.

---

## **Why Do We Lift State Up?**

To solve issues like:

* Two components needing the same data
* One component's update affecting another
* Duplicate or inconsistent state

Example use cases:

* Forms
* Filters
* Shared counters
* Synchronized UI sections

---

## **Simple Example**

### Without lifting (problem):

Two components maintain separate states → out of sync.

```jsx
function A() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

function B() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
```

These inputs won't stay synced.

---

### **With lifting (solution):**

Move state to parent → pass as props.

```jsx
function Parent() {
  const [text, setText] = useState("");

  return (
    <>
      <ChildA text={text} setText={setText} />
      <ChildB text={text} setText={setText} />
    </>
  );
}

function ChildA({ text, setText }) {
  return <input value={text} onChange={e => setText(e.target.value)} />;
}

function ChildB({ text, setText }) {
  return <input value={text} onChange={e => setText(e.target.value)} />;
}
```

Both inputs now share state = **synced**.

---

## **Key Concepts**

* Shared state must be kept **in closest common ancestor**
* Children receive data via **props**
* Children update state via **callback functions**
* Helps avoid inconsistencies

---

## **Signs You Need to Lift State Up**

* Two components show the same data
* Child interactions should update sibling UI
* You duplicate the same state in multiple places

---

## **Common Interview Questions**

1. What is lifting state up?
2. Why is it needed?
3. How does lifting state up help avoid inconsistencies?
4. How do siblings share data in React?
