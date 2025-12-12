# **Event Handling in React (Crisp Notes)**

## **1. What is Event Handling?**

Event handling in React is how you respond to user actions like:

* Clicks
* Input typing
* Form submissions
* Mouse events
* Keyboard events

React uses a **synthetic event system**, which wraps native browser events for better performance and cross-browser consistency.

---

## **2. Event Handling Syntax**

React uses **camelCase** event names and passes a **function** instead of a string.

### **Example**

```jsx
<button onClick={handleClick}>Click Me</button>
```

---

## **3. Passing a Function to Events**

Correct:

```jsx
<button onClick={handleClick}>Click</button>
```

Incorrect:

```jsx
<button onClick={handleClick()}>Click</button>  // invokes immediately
```

---

## **4. Inline Event Handler**

```jsx
<button onClick={() => alert("Clicked!")}>Click</button>
```

---

## **5. Accessing Event Object**

React passes a **synthetic event** automatically.

```jsx
function handleChange(e) {
  console.log(e.target.value);
}
```

---

## **6. Event Binding**

Functional components automatically bind `this`, unlike class components.

Class Component (old way):

```jsx
this.handleClick = this.handleClick.bind(this);
```

Functional Component (modern):

* No binding required

---

## **7. Common Events in React**

| Event                       | Description        |
| --------------------------- | ------------------ |
| onClick                     | Button, div clicks |
| onChange                    | Form inputs        |
| onSubmit                    | Forms              |
| onKeyDown / onKeyUp         | Keyboard events    |
| onMouseEnter / onMouseLeave | Hover events       |

---

## **8. Prevent Default Behavior**

```jsx
function handleSubmit(e) {
  e.preventDefault();
}
```

---

## **9. Passing Arguments to Event Handlers**

```jsx
<button onClick={() => handleDelete(id)}>Delete</button>
```

---

## **10. Synthetic Events**

React uses a **cross-browser wrapper** for events to standardize behavior.
They mimic browser events but are more consistent.

---

## **Common Interview Questions**

1. How do you handle events in React?
2. What are synthetic events?
3. Why shouldn’t we call the event handler directly (`onClick={func()}`)?
4. How do you pass arguments in an event handler?
