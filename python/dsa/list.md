# list.md

# 1. Introduction

A **list** in Python is a **dynamic, mutable sequence** used to store an ordered collection of items.
It supports indexing, slicing, insertion, deletion, iteration, and can hold elements of **mixed data types**.

Internally, Python lists are implemented as **dynamic arrays** (contiguous memory storing references).

---

# 2. Properties & Characteristics

| Property          | Explanation                                                    |
| ----------------- | -------------------------------------------------------------- |
| Mutable           | Elements can be changed after creation (`lst[0] = 10`)         |
| Ordered           | Maintains element insertion order                              |
| Allows duplicates | Yes (`[1, 1, 1]` is valid)                                     |
| Indexing          | Supports positive & negative indexing                          |
| Hashability       | Lists themselves are **not hashable**; cannot be dict/set keys |
| Heterogeneous     | Can store any Python objects                                   |

---

# 3. Syntax & Initialization

```python
lst = []                     # empty list
lst = [1, 2, 3]              # literal
lst = list(range(5))         # from range → [0, 1, 2, 3, 4]
lst = list("abc")            # from iterable → ['a', 'b', 'c']
lst = [x for x in range(5)]  # list comprehension
```

---

# 4. Iteration Techniques

### Basic for-loop

```python
for x in lst:
    print(x)
```

### While loop

```python
i = 0
while i < len(lst):
    print(lst[i])
    i += 1
```

### enumerate()

```python
for idx, val in enumerate(lst):
    print(idx, val)
```

### List comprehension

```python
squares = [x*x for x in lst]
```

### Iterating indices

```python
for i in range(len(lst)):
    print(i, lst[i])
```

---

# 5. Common Operations (with code + note + time complexity)

### Accessing

```python
x = lst[2]
```

Note: Direct index lookup.
**Time: O(1)**

### Slicing

```python
part = lst[1:4]
```

Note: Creates a new list.
**Time: O(k)** (k = slice size)

### Updating

```python
lst[1] = 100
```

Note: Direct replacement.
**Time: O(1)**

### Adding elements

#### append()

```python
lst.append(10)
```

Note: Adds to end (amortized).
**Time: O(1) amortized**

#### insert()

```python
lst.insert(2, 50)
```

Note: Shifts elements to make space.
**Time: O(n)**

#### extend()

```python
lst.extend([7, 8])
```

Note: Appends multiple items.
**Time: O(k)** (k = items added)

### Removing elements

#### pop()

```python
lst.pop()        # remove last
lst.pop(2)       # remove at index
```

Note: Removing middle requires shifting.
**Time: O(1)** (end), **O(n)** (middle)

#### remove()

```python
lst.remove(10)
```

Note: Searches first, then deletes.
**Time: O(n)**

### Searching

```python
index = lst.index(5)
found = 5 in lst
```

Note: Linear search.
**Time: O(n)**

### Sorting

```python
lst.sort()
new_lst = sorted(lst)
```

Note: TimSort under the hood.
**Time: O(n log n)**

### Counting

```python
c = lst.count(3)
```

Note: Full scan.
**Time: O(n)**

---

# 7. Internal Implementation Details

* Python lists are **dynamic arrays**, storing object references in contiguous memory.
* They **over-allocate memory** to reduce resizing operations.
* When capacity is exceeded, list grows by allocating a new larger block → copy old references.
* `append()` is **O(1) amortized** because occasional resizes cost O(n), but most appends cost O(1).
* Memory layout: list stores **references**, not actual objects.

---

# 8. When to Use This Data Structure

Use lists when you need:

* Fast random access (O(1) indexing).
* Ordered data with frequent iteration.
* Dynamic resizing at the end (append).

Avoid lists when:

* You need frequent insertions/deletions in middle → use `deque`.
* You need membership queries often → use `set`.

---

# 9. Time Complexity Summary

| Operation       | Complexity     |
| --------------- | -------------- |
| Access by index | O(1)           |
| Update by index | O(1)           |
| Append          | O(1) amortized |
| Insert (middle) | O(n)           |
| Delete (middle) | O(n)           |
| Search          | O(n)           |
| Slice           | O(k)           |
| Sort            | O(n log n)     |

---

# 10. Interview Concepts

### Why is append O(1) amortized?

Because Python over-allocates capacity; most appends require no resizing. During rare resizing, it becomes O(n), but averaged over many operations, cost is O(1).

### Difference between list vs tuple?

* List: mutable, dynamic, slower, more memory-heavy.
* Tuple: immutable, hashable (if elements are), faster, used for fixed collections.

### How memory allocation works?

List allocates extra capacity to allow future appends without reallocation. When full, Python reallocates a larger block and copies references.

### Why inserting in middle is slow?

Elements must be shifted to make space → O(n).

### Shallow vs deep copy?

* **Shallow copy:** copies references (`lst.copy()`).
* **Deep copy:** copies objects recursively (`copy.deepcopy()`).

---

# 11. Theoretical Interview Questions (with answers)

### Q1: Why are Python lists called dynamic arrays?

Because they grow automatically using over-allocation without requiring manual resizing.

### Q2: Why is inserting at index i expensive?

Because elements from i → end must shift one position, costing O(n).

### Q3: Why are lists not hashable?

They are mutable; their content can change, violating hash consistency.

### Q4: When would you choose a list over a tuple?

When data needs modification, dynamic resizing, or frequent appends.

### Q5: Why does slicing create a new list?

Because Python must copy the selected references into a new contiguous block.
