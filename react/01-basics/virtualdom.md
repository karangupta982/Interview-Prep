# **Virtual DOM **

## **What is the Virtual DOM?**

The **Virtual DOM (VDOM)** is a **lightweight JavaScript object** that represents the actual DOM.
React uses it to efficiently update the UI without touching the real DOM directly.

---

## **Why Virtual DOM?**

The real DOM is **slow** to update.
VDOM makes updates **fast** by:

1. Creating a virtual representation of the UI
2. Comparing it with the previous one (diffing)
3. Updating **only the changed parts** in the real DOM

---

## **How Virtual DOM Works (Simple Steps)**

1. Component renders → React creates a Virtual DOM tree
2. State/props change → a new Virtual DOM is created
3. React compares old vs new (diffing algorithm)
4. React updates only the necessary nodes in the real DOM

---

## **Benefits**

* Faster UI updates
* Less direct DOM manipulation
* Predictable and efficient re-renders
* Smooth performance even in large apps
