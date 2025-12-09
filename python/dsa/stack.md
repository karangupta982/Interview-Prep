# stack.md

# 1. Introduction

A **stack** is a **LIFO (Last-In, First-Out)** data structure where the most recently added element is the first one removed.
Common operations: **push**, **pop**, **peek**, **isEmpty**.

Python does not have a built-in stack type, but **list** and **collections.deque** are commonly used.

Stacks are widely used in recursion, parsing, backtracking, expression evaluation, undo operations, etc.

---

# 2. Properties & Characteristics

| Property                     | Explanation                    |
| ---------------------------- | ------------------------------ |
| LIFO order                   | Last added → first removed     |
| Supports push/pop operations | Efficiently                    |
| No random access needed      | Only top element is accessible |
| Dynamic                      | Grows/shrinks as needed        |
| Python implementation        | List (simple), Deque (optimal) |

---

# 3. Syntax & Initialization

### Using list (simple but slower for large stacks)

```python
stack = []
```

### Using deque (recommended, faster & memory efficient)

```python
from collections import deque
stack = deque()
```

---

# 4. Iteration Techniques

### Iterate elements (top → bottom)

```python
for x in reversed(stack):
    print(x)
```

### Iterate bottom → top

```python
for x in stack:
    print(x)
```

### While popping

```python
while stack:
    print(stack.pop())
```

---

# 5. Common Operations

(With code + note + time complexity)

### Push

```python
stack.append(10)
```

Note: Adds element to top.
**Time: O(1) amortized**

### Pop

```python
x = stack.pop()
```

Note: Removes top element; raises error if empty.
**Time: O(1)**

### Peek (view top)

```python
top = stack[-1]
```

Note: Does not remove element.
**Time: O(1)**

### Check empty

```python
is_empty = len(stack) == 0
```

**Time: O(1)**

### Size

```python
size = len(stack)
```

**Time: O(1)**

### Clear

```python
stack.clear()
```

**Time: O(n)**

---

# 7. Internal Implementation Details

### Using list:

* Dynamic array.
* `append()` and `pop()` at end are **O(1)** amortized.
* Not optimal for very large stacks due to resizing + memory overhead.

### Using deque:

* Doubly-linked list optimized for **append/pop from both ends**.
* Operations are **O(1)** guaranteed.
* Better for stack usage patterns.

---

# 8. When to Use This Data Structure

Use a stack when:

* Order is LIFO.
* Only want to access the last added element.
* Needed for recursion elimination.
* Parsing expressions or evaluating brackets.
* DFS traversal (graph/tree).

Avoid when:

* You require random access → use list.
* You need FIFO order → use queue/deque.

---

# 9. Time Complexity Summary

| Operation   | Complexity |
| ----------- | ---------- |
| Push        | O(1)       |
| Pop         | O(1)       |
| Peek        | O(1)       |
| Check empty | O(1)       |
| Iterate     | O(n)       |

---

# 10. Interview Concepts

### Why use deque instead of list?

Deque guarantees O(1) push/pop; list may resize or shift memory.

### Is stack thread-safe?

No, but `queue.LifoQueue` provides a thread-safe stack.

### Can stack overflow occur in Python?

Not in data structure usage, but **recursion depth** can overflow (`RecursionError`).

### Difference between stack vs queue?

Stack = LIFO, Queue = FIFO.

### Why is stack preferred in DFS?

Because DFS explores last added path first.

---

# 11. Theoretical Interview Questions (with answers)

### Q1: What is LIFO and why is it used?

LIFO means last inserted → first removed. Useful in undo operations, expression evaluation, DFS.

### Q2: Why are stack operations O(1)?

Because push/pop happen at one fixed end.

### Q3: Why is list.pop(0) not used in stacks?

Because pop(0) is O(n) due to shifting — wrong end for stack.

### Q4: When should you choose deque over list?

For large or performance-critical stack operations.

### Q5: How to implement a stack using two queues?

Push in O(n) or pop in O(n) by maintaining queue order (classic interview problem).

