# tuple.md

# 1. Introduction

A **tuple** in Python is an **immutable, ordered sequence** used to store fixed collections of items.
It supports indexing, slicing, iteration, and can hold heterogeneous types, but **cannot be modified after creation**.

Tuples are often used for **read-only data**, function returns, dictionary keys, and memory-efficient storage.

---

# 2. Properties & Characteristics

| Property          | Explanation                                                 |
| ----------------- | ----------------------------------------------------------- |
| Immutable         | Cannot add, remove, or change elements                      |
| Ordered           | Maintains insertion order                                   |
| Allows duplicates | Yes                                                         |
| Indexing          | Supports positive & negative indexing                       |
| Hashability       | Tuples are hashable **if all elements inside are hashable** |
| Heterogeneous     | Can store any Python objects                                |
| Faster than lists | Due to immutability and simplified internal structure       |

---

# 3. Syntax & Initialization

```python
t = ()                        # empty tuple
t = (1, 2, 3)                 # literal
t = tuple([1, 2, 3])          # from iterable
t = tuple("abc")              # from string
t = (5,)                      # single-element tuple (note the comma)
t = (1, 2, (3, 4))            # nested tuple
```

---

# 4. Iteration Techniques

### Basic for-loop

```python
for x in t:
    print(x)
```

### While loop

```python
i = 0
while i < len(t):
    print(t[i])
    i += 1
```

### enumerate()

```python
for idx, val in enumerate(t):
    print(idx, val)
```

### Tuple comprehension equivalent

Tuples do **not** have comprehensions;
using `(...)` creates a *generator**, so convert to tuple:

```python
t2 = tuple(x*x for x in t)
```

### Iterating indices

```python
for i in range(len(t)):
    print(i, t[i])
```

---

# 5. Common Operations

(Tuples are immutable, so operations are mostly access-based.)

### Accessing

```python
x = t[2]
```

Note: Direct index lookup.
**Time: O(1)**

### Slicing

```python
part = t[1:4]
```

Note: Creates a new tuple.
**Time: O(k)**

### Searching

```python
index = t.index(5)
found = 5 in t
```

Note: Linear search.
**Time: O(n)**

### Counting

```python
c = t.count(3)
```

Note: Counts occurrences.
**Time: O(n)**

### Concatenation

```python
t3 = t + (7, 8)
```

Note: Creates a new tuple.
**Time: O(n + k)**

### Repetition

```python
t2 = t * 3
```

Note: Creates repeated tuple.
**Time: O(n * r)**

---

# 7. Internal Implementation Details

* Tuples are stored as **compact, fixed-size arrays** of references.
* Because they are **immutable**, Python can optimize storage and performance.
* No over-allocation (unlike lists).
* Suitable for use as **dictionary keys** if all contained elements are hashable.
* Immutability makes them more memory-efficient and sometimes faster.

---

# 8. When to Use This Data Structure

Use tuples when:

* Data should not change (`(x, y)` coordinates, config values).
* You want a lightweight read-only sequence.
* You need a key for a dictionary or set.
* Returning multiple values from a function.

Avoid tuples when:

* You need dynamic insertion/deletion → use list.
* You need frequent updates.

---

# 9. Time Complexity Summary

| Operation       | Complexity |
| --------------- | ---------- |
| Access by index | O(1)       |
| Slice           | O(k)       |
| Search          | O(n)       |
| Count           | O(n)       |
| Concatenation   | O(n + k)   |
| Iteration       | O(n)       |

---

# 10. Interview Concepts

### Why are tuples immutable?

Immutability allows Python to optimize memory layout, improve speed, and ensure hash consistency.

### Difference between list and tuple?

* List: mutable, dynamic, slower, more memory.
* Tuple: immutable, faster, memory-efficient, usable as dict keys.

### How memory allocation works for tuples?

Python allocates one fixed block for all tuple elements; no resizing or over-allocation.

### Why are tuples faster than lists?

Less overhead due to immutability → simpler C structures → faster access and iteration.

### When should you use a tuple instead of a list?

Use tuple when the data is fixed, read-only, or should act as a key in a mapping.

---

# 11. Theoretical Interview Questions (with answers)

### Q1: Why are tuples hashable but lists are not?

Because tuples are immutable; their content cannot change. Lists can change, breaking hashing guarantees.

### Q2: Why is tuple concatenation expensive?

It creates a completely new tuple and copies all elements → O(n + k).

### Q3: Why can a tuple contain a list but still be unhashable?

A tuple is hashable only if **all its elements are hashable**. A list inside a tuple breaks hashability.

### Q4: Why does Python choose tuples for function return values?

Lightweight, immutable, and designed for grouping fixed, structured data.

### Q5: Is tuple copying faster than list copying? Why?

Yes. Tuples don't need deep copying of structure since their size and layout never change.
