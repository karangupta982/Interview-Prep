# **Debounce and Throttle in JavaScript**

Both **Debounce** and **Throttle** are **performance optimization techniques** used to **limit the rate** at which a function executes — especially for **high-frequency events** like:

* `scroll`
* `resize`
* `input` (typing in search box)
* `mousemove`

---

## **1. The Problem**

Imagine you have a search bar that makes an API call every time a user types something:

```js
document.getElementById("search").addEventListener("input", function(e) {
  fetch(`/api/search?q=${e.target.value}`);
});
```

If the user types *"apple"*, this will make **5 API calls** — one for each keystroke (`a`, `ap`, `app`, `appl`, `apple`).
That’s **wasteful** and can **crash your API** if thousands of users do this.

To fix this, we use **Debounce** or **Throttle**.

---

## **2. Debouncing**

### **Definition:**

**Debounce** ensures that a function runs **only after a certain time has passed** since it was last called.

In other words, the function **executes only once the user has stopped performing the event** for a specific delay.

---

### **Example:**

```js
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);          // Clear previous timer
    timer = setTimeout(() => {
      func.apply(this, args);     // Execute after delay
    }, delay);
  };
}
```

### **Usage:**

```js
function handleSearch(e) {
  console.log("API Call for:", e.target.value);
}

const debouncedSearch = debounce(handleSearch, 1000);

document.getElementById("search").addEventListener("input", debouncedSearch);
```

### **Explanation:**

* When user types continuously, the timer keeps **resetting**.
* Only when the user **stops typing for 1 second**, the `handleSearch` function executes.
* Hence, only **one API call** is made for “apple”, not five.

---

### **Use Cases of Debounce**

| Use Case             | Why                                  |
| -------------------- | ------------------------------------ |
| Search box API calls | Wait for user to finish typing       |
| Window resize events | Update layout only after resize ends |
| Auto-saving drafts   | Save after user stops typing         |
| Button clicks        | Prevent multiple rapid clicks        |

---

## **3. Throttling**

### **Definition:**

**Throttle** ensures that a function runs **at most once every given time interval**, even if it’s called many times.

Unlike debounce, **throttle guarantees periodic execution**.

---

### **Example:**

```js
function throttle(func, limit) {
  let flag = true;
  return function(...args) {
    if (flag) {
      func.apply(this, args);
      flag = false;
      setTimeout(() => flag = true, limit);
    }
  };
}
```

### **Usage:**

```js
function handleScroll() {
  console.log("Scroll Event Fired:", new Date().toLocaleTimeString());
}

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);
```

### **Explanation:**

* Even if the scroll event fires **hundreds of times per second**,
  the `handleScroll` function executes **once every 1 second**.
* Prevents overloading your app with continuous function calls.

---

### **Use Cases of Throttle**

| Use Case            | Why                                    |
| ------------------- | -------------------------------------- |
| Scroll events       | Limit execution while user scrolls     |
| Window resize       | Update UI at fixed intervals           |
| Mouse move tracking | Smooth animations or real-time updates |
| Button spamming     | Prevent multiple API hits              |

---

## **4. Debounce vs Throttle (Comparison Table)**

| Feature        | Debounce                              | Throttle                                         |
| -------------- | ------------------------------------- | ------------------------------------------------ |
| **Definition** | Executes after a pause in activity    | Executes periodically during continuous activity |
| **Use Case**   | Wait until user stops typing/clicking | Execute at fixed intervals while user continues  |
| **Example**    | Search input API call                 | Scroll position logging                          |
| **Behavior**   | Executes once after delay             | Executes at every fixed interval                 |
| **Goal**       | Limit execution until calm            | Limit execution frequency                        |
