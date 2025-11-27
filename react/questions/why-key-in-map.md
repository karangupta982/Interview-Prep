# Why do we use `key` or `index` while using `.map()` in React?

### 1. What is a Key?

A **key** is a special attribute React uses to **identify each element** in a list.

```jsx
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}
```

---

# Why are keys required?

React uses keys to:

## 1. Efficiently Update the UI (Reconciliation)

When an array changes, React compares the old list with the new list (diffing).
Keys help React **know which item is which**, so it updates only the changed items.

Without keys → React gets confused and may cause wrong updates.

---

# Why not use Index as Key?

You *can* use the index, but it is not recommended **when the list can change**.

### Using index causes issues when:

* Items can be added
* Items can be removed
* Items can be sorted or reordered

Because indexes change, React ends up thinking that:

* a different item is the same item
* leading to **wrong DOM updates**, **unexpected UI bugs**, or **losing input focus**

---

# When is index okay?

Using index as a key is fine when:

* The list is static (never changes)
* No reordering
* No insertions/deletions
* Items do not have unique IDs

---

# Summary (Interview Safe)

**We use keys so React can uniquely identify list items and update the DOM efficiently.
Using index as a key is only safe for static lists. For dynamic lists, use a stable unique ID.**
