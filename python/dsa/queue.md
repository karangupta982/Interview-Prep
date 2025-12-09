# queue.md

# 1. Introduction

A **queue** is a **FIFO (First-In, First-Out)** data structure where the first inserted element is the first removed.
Primary operations: **enqueue**, **dequeue**, **peek**.

Python provides multiple ways to implement queues:

* **collections.deque** → fastest & recommended
* **queue.Queue** → thread-safe queue
* **list** → NOT recommended (slow for dequeue)

Queues are used in BFS, scheduling, buffering, streaming, OS processes, etc.

---

# 2. Properties & Characteristics

| Property                      | Explanation                 |
| ----------------------------- | --------------------------- |
| FIFO order                    | First added → first removed |
| Supports enqueue/dequeue      | Efficient operations        |
| No random index access needed | Only front/back used        |
| Dynamic                       | Grows and shrinks as needed |
| Python implementation         | `deque` or `queue.Queue`    |

---

# 3. Syntax & Initialization

### Using deque (recommended)

```python
from collections import deque
q = deque()
```

### Using queue.Queue (thread-safe)

```python
from queue import Queue
q = Queue()
```

### Using list (NOT recommended)

```python
q = []  # dequeue is O(n)
```

---

# 4. Iteration Techniques

### Iterate front → rear

```python
for x in q:
    print(x)
```

### While dequeuing

```python
while q:
    print(q.popleft())
```

### After converting to list

```python
for idx, val in enumerate(list(q)):
    print(idx, val)
```

### Comprehension (convert)

```python
items = [x for x in q]
```

---

# 5. Common Operations

(With code + note + time complexity)

### Enqueue (add to rear)

```python
q.append(10)      # deque
q.put(10)         # Queue
```

Note: Adds new element at back.
**Time: O(1)**

### Dequeue (remove from front)

```python
x = q.popleft()   # deque
x = q.get()       # Queue
```

Note: Removes front element.
**Time: O(1)**

### Peek (front element)

```python
front = q[0]      # deque only
```

Note: Thread-safe Queue does *not* support direct indexing.
**Time: O(1)**

### Check empty

```python
is_empty = len(q) == 0
```

**Time: O(1)**

### Size

```python
size = len(q)
# or for Queue:
size = q.qsize()
```

**Time: O(1)**

### Clear

```python
q.clear()   # deque only
```

**Time: O(n)**

---

# 7. Internal Implementation Details

### Using deque

* Implemented as a **doubly-linked block structure**.
* Allows **O(1)** append and popleft.
* Ideal for queue operations.

### Using queue.Queue

* Built for **thread synchronization**.
* Uses internal locks + condition variables.
* Slower than deque but **thread-safe**.

### Using list (incorrect)

* `pop(0)` is **O(n)** due to element shifting.
* Not suitable for queue implementation.

---

# 8. When to Use This Data Structure

Use a queue when:

* You need FIFO ordering.
* Implementing BFS (graph/tree).
* Handling streaming data, buffering, scheduling.
* Multi-threaded producer–consumer tasks (use `Queue`).

Avoid when:

* You need LIFO → use stack.
* You need indexing → use list or array.
* You need priority behavior → use heapq (priority queue).

---

# 9. Time Complexity Summary

| Operation   | Complexity |
| ----------- | ---------- |
| Enqueue     | O(1)       |
| Dequeue     | O(1)       |
| Peek        | O(1)       |
| Check empty | O(1)       |
| Iterate     | O(n)       |

---

# 10. Interview Concepts

### Why is deque preferred over list for queues?

Because `list.pop(0)` is O(n) while `deque.popleft()` is O(1).

### Difference between deque and Queue?

* `deque`: fast general-purpose queue (not thread-safe).
* `Queue`: thread-safe, used in producer–consumer scenarios.

### Why FIFO in queue structures?

Ensures fair processing — first item added is first served.

### Why does Queue not allow indexing?

Because queue semantics restrict access to only front/back.

### How is BFS implemented using a queue?

Push starting node → repeatedly dequeue and explore neighbors.

---

# 11. Theoretical Interview Questions (with answers)

### Q1: Why does list make a bad queue implementation?

Because removing from the front requires shifting all elements → O(n).

### Q2: What is the difference between popleft() and pop()?

`popleft()` removes from front (queue), `pop()` removes from back (stack).

### Q3: When should you use Queue instead of deque?

When multiple threads access the queue.

### Q4: How to implement queue using two stacks?

Push into stack1; to dequeue, transfer into stack2 when needed — classic interview problem.

### Q5: Can a queue be used to check if a binary tree is complete?

Yes — use BFS and track null node patterns.
