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

---

## **4. Stopping Propagation**

Sometimes you don’t want the event to bubble or capture further.
You can stop it using **`event.stopPropagation()`**.

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

document.getElementById("child").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Child clicked");
});
</script>
```

### **Output:**

```
Child clicked
```

The parent’s handler never runs because propagation stopped at the child.

---

## **5. Event Delegation**

### **Definition:**

Event delegation means **attaching one event listener to a parent element** instead of adding it to multiple child elements.
You then detect which child was clicked using `event.target`.

This works **because of event bubbling**.

---

### **Example:**

```html
<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>

<script>
document.getElementById("list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("You clicked:", event.target.textContent);
  }
});
</script>
```

### **Output (if user clicks on Banana):**

```
You clicked: Banana
```

**Explanation:**

* The click on `<li>` bubbles up to the `<ul>`.
* The `<ul>` handler runs and uses `event.target` to find the clicked `<li>`.

---

## **6. Summary Table**

| Concept               | Direction              | Default                                   | Trigger Order  | Usage                                  |
| --------------------- | ---------------------- | ----------------------------------------- | -------------- | -------------------------------------- |
| **Capturing**         | Top → Bottom           | `false` by default (must enable manually) | Parent → Child | Used rarely, for early interception    |
| **Bubbling**          | Bottom → Top           | Default behavior                          | Child → Parent | Used widely, supports event delegation |
| **stopPropagation()** | Stops further movement | Works in both phases                      | —              | Used to prevent unwanted handlers      |
| **Event Delegation**  | Uses bubbling          | Common practice                           | —              | Efficient event handling               |

---

## **7. Interview Question Example**

**Q:** What will be the output of the following code?

```html
<div id="outer">
  <button id="inner">Click</button>
</div>

<script>
document.getElementById("outer").addEventListener("click", () => console.log("Outer Bubble"));
document.getElementById("outer").addEventListener("click", () => console.log("Outer Capture"), true);

document.getElementById("inner").addEventListener("click", () => console.log("Inner Bubble"));
document.getElementById("inner").addEventListener("click", () => console.log("Inner Capture"), true);
</script>
```

### **Output:**

```
Outer Capture
Inner Capture
Inner Bubble
Outer Bubble
```

**Explanation:**

1. Capturing Phase: Outer → Inner
2. Target Phase: Click happens on Inner
3. Bubbling Phase: Inner → Outer

---

## **8. Summary in One Line**

> Event **capturing** goes from top to bottom.
> Event **bubbling** goes from bottom to top.
> **Event delegation** uses bubbling for efficient event management.
