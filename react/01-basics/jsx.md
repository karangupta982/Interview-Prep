# **JSX**

## **What is JSX?**

JSX (JavaScript XML) is a **syntax extension** that allows you to write **HTML-like code inside JavaScript**.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

JSX is not valid JavaScript by default — it gets **compiled into JavaScript** using Babel.

---

## **Why JSX?**

* Makes UI code more readable
* Allows HTML + JavaScript logic in one place
* Helps React create the Virtual DOM tree
* Easier to visualize UI structure

---

## **How JSX Works**

JSX:

```jsx
<h1>Hello</h1>
```

Compiles to:

```js
React.createElement("h1", null, "Hello");
```

This object is used to build the Virtual DOM.
