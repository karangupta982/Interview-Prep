# **Rendering Lists & Keys (Crisp Notes)**

## **1. Rendering Lists in React**

React allows you to display lists using JavaScript’s `map()`.

### **Example**

```jsx
const items = ["A", "B", "C"];

return (
  <ul>
    {items.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);
```

---

## **2. Why Keys Are Required**

React needs **keys** to uniquely identify list items so it can:

* Track which item changed
* Avoid unnecessary re-renders
* Improve performance
* Correctly apply DOM updates

**Keys help React match old vs new elements during reconciliation.**

---

## **3. Correct Use of Keys**

Keys must be:

* **Unique**
* **Stable**
* **Consistent**

### **Good Key**

Use `id` if available.

```jsx
users.map(user => (
  <li key={user.id}>{user.name}</li>
));
```

---

## **4. Bad Key Example**

Using index as key is not recommended:

```jsx
<li key={index}></li>
```

### **Why index is bad?**

If the list is:

* Reordered
* Filtered
* Modified

React may:

* Mis-match items
* Preserve wrong state
* Cause UI bugs

Use index **only when:**

* List is static
* List never changes order
* No unique IDs available

---

## **5. Keys Must Be on the Actual List Item**

Incorrect:

```jsx
<div key={id}>
  <li>Item</li>
</div>
```

Correct:

```jsx
<li key={id}>Item</li>
```

---

## **6. Keys Are Not Accessible as Props**

Inside the child component, `key` is not available via `props`.

---

## **Common Interview Questions**

1. Why do we need keys in React lists?
2. Why should we not use array index as a key?
3. Where should we add the key in a list?
4. How do keys help with diffing/reconciliation?
