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

---

## **JSX Rules**

### **1. Return a single parent element**

Wrap siblings inside a wrapper:

```jsx
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

### **2. Use camelCase for HTML attributes**

```jsx
<input type="text" autoFocus />
```

### **3. Use `{}` for JavaScript expressions**

```jsx
<p>{username}</p>
```

### **4. Class becomes `className`**

```jsx
<div className="container"></div>
```

### **5. JSX is expressions**

You can store JSX in variables, return it, pass it as props.

---

## **Embedding JavaScript in JSX**

Anything inside `{}` must evaluate to a value.

```jsx
const age = 21;
<p>Age: {age}</p>
```

Valid:

* variables
* function calls
* ternary expressions

Invalid:

* statements like `if`, `for` (use ternary or map)

---

## **Conditional Rendering in JSX**

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

---

## **JSX vs HTML**

| JSX                  | HTML                 |
| -------------------- | -------------------- |
| Inside JS            | Separate file        |
| camelCase attributes | lowercase attributes |
| className            | class                |
| expressions in `{}`  | no expressions       |

---

## **Common Interview Questions**

1. What is JSX?
2. Why do we use JSX?
3. How does JSX convert into JavaScript?
4. Why do we need a parent wrapper in JSX?
5. Difference between JSX and HTML?
