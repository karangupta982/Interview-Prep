# **Event Bubbling and Event Capturing in JavaScript**

---

## **1. What is Event Propagation?**

When an event (like a click) happens on an element inside the DOM, it **does not occur only on that element** —
it moves through a **hierarchy of elements**, from the root (`document`) down to the target, and then back up.

This movement of events through the DOM tree is called **Event Propagation**, and it happens in **three phases**:

---

### **Phases of Event Propagation**

1. **Capturing Phase** – Event travels **from the root to the target** (top → bottom)
2. **Target Phase** – Event is handled **at the target element**
3. **Bubbling Phase** – Event travels **back up from the target to the root** (bottom → top)

---

### **Example DOM Structure**

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

If you click the button:

```
Document → <div> → <button>  (Capturing Phase)
<button>                    (Target Phase)
<button> → <div> → Document  (Bubbling Phase)
```

---

## **2. Event Bubbling**

### **Definition:**

In **event bubbling**, the event **starts from the target element** and **bubbles up** (propagates upward) through its ancestors.

By default, most events in JavaScript use **bubbling phase**.

---

### **Example:**

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
</script>
```

### **Output:**

```
Child clicked
Parent clicked
```

**Explanation:**

* You clicked the child (`button`), so its event handler runs first.
* Then the event bubbles up to the parent `<div>`, triggering its handler.

---

## **3. Event Capturing (Trickling)**

### **Definition:**

In **event capturing**, the event **starts from the root element** and **travels down** to the target before being handled.

To use capturing, set the third parameter of `addEventListener` to `true`.

---

### **Example:**

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
}, true); // capture = true

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
}, true);
</script>
```

### **Output:**

```
Parent clicked
Child clicked
```

**Explanation:**

* Since capturing is enabled, the event is caught **while moving down** the DOM tree.
* Hence the parent logs first.
