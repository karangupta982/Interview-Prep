# set.md

# 1. Introduction

A **set** in Python is an **unordered, mutable collection of unique elements**.
It is implemented using a **hash table**, giving **O(1)** average-time insertion, deletion, and membership tests.

Sets automatically remove duplicates and are ideal for fast lookups, membership checks, and mathematical set operations.

---

# 2. Properties & Characteristics

| Property                  | Explanation                                 |
| ------------------------- | ------------------------------------------- |
| Mutable                   | Elements can be added/removed               |
| Unordered                 | No indexing, no fixed order                 |
| Unique elements           | Duplicates automatically removed            |
| Elements must be hashable | int, str, tuple… but **not lists or dicts** |
| Fast membership checking  | `x in s` is O(1)                            |
| Backed by hash table      | Similar to dict keys                        |

---

# 3. Syntax & Initialization

```python
s = set()                        # empty set
s = {1, 2, 3}                    # literal (cannot use {} for empty set)
s = set([1, 2, 3, 3])            # duplicates removed
s = set("abc")                   # {'a', 'b', 'c'}
s = {x for x in range(5)}        # comprehension
```

---

# 4. Iteration Techniques

### Iterate elements

```python
for x in s:
    print(x)
```

### Enumerate (order arbitrary)

```python
for idx, val in enumerate(s):
    print(idx, val)
```

### Comprehension

```python
squares = {x*x for x in s}
```

### Convert to sorted order (if needed)

```python
for x in sorted(s):
    print(x)
```

---

# 5. Common Operations

(Code + short note + time complexity)

### Adding elements

```python
s.add(10)
```

Note: Adds if not present.
**Time: O(1)**

### Removing elements

#### remove()

```python
s.remove(10)
```

Note: Raises KeyError if missing.
**Time: O(1)**

#### discard()

```python
s.discard(10)
```

Note: Safe remove; no error if missing.
**Time: O(1)**

#### pop()

```python
x = s.pop()
```

Note: Removes an arbitrary element.
**Time: O(1)**

### Membership check

```python
5 in s
```

Note: Very fast due to hashing.
**Time: O(1)**

### Set operations

#### Union

```python
s3 = s1 | s2
```

Note: Combines unique elements.
**Time: O(n + m)**

#### Intersection

```python
s3 = s1 & s2
```

Note: Common elements.
**Time: O(min(n, m))**

#### Difference

```python
s3 = s1 - s2
```

Note: Elements in s1 but not s2.
**Time: O(n)**

#### Symmetric difference

```python
s3 = s1 ^ s2
```

Note: Elements in one set but not both.
**Time: O(n + m)**

### Clearing

```python
s.clear()
```

**Time: O(n)**

---

# 7. Internal Implementation Details

* Python sets use a **hash table** internally.
* Elements must be **hashable**, so Python can map them to slots.
* No order is preserved (though CPython may appear stable, it's not guaranteed by spec).
* Insert/delete/lookup are **O(1)** average but can degrade with many collisions.
* Set resizing happens automatically as load factor grows.

---

# 8. When to Use This Data Structure

Use a set when:

* You need fast membership checking (`x in s`).
* You want to remove duplicates.
* You perform many union/intersection operations.
* Order does not matter.

Avoid sets when:

* You need indexing → use list/tuple.
* You need ordered unique items → consider `collections.OrderedDict` keys, or `dict.fromkeys()` trick.
* Elements are unhashable (lists, dicts).

---

# 9. Time Complexity Summary

| Operation         | Complexity   |
| ----------------- | ------------ |
| Add               | O(1)         |
| Remove            | O(1)         |
| Membership (`in`) | O(1)         |
| Pop               | O(1)         |
| Iteration         | O(n)         |
| Union             | O(n + m)     |
| Intersection      | O(min(n, m)) |
| Difference        | O(n)         |

---

# 10. Interview Concepts

### Why are sets so fast?

Because they use hash tables; lookup, insert, delete are all O(1) average.

### Why must set elements be hashable?

Set uses the element's hash to determine where to store it. If the element is mutable, hash can change → inconsistency.

### Why can’t sets be indexed?

They are unordered; the hash table does not maintain positional order.

### Difference between list vs set?

* List: ordered, allows duplicates, slower membership tests (O(n)).
* Set: unordered, unique elements, very fast membership tests (O(1)).

### What happens if two items have the same hash?

A collision occurs → Python uses probing to find another empty slot.

---

# 11. Theoretical Interview Questions (with answers)

### Q1: Why does `set([1, 2, 1, 3])` return `{1, 2, 3}`?

Because sets automatically remove duplicates.

### Q2: What data structure backs a Python set?

A hash table with open addressing.

### Q3: Why can't we add a list to a set?

Lists are mutable → not hashable → cannot be used in hash tables.

### Q4: Why are set operations like union faster than manual list loops?

They are implemented in C using optimized hash table logic.

### Q5: Does Python guarantee order of set elements?

No. Sets are fundamentally unordered, even if CPython sometimes keeps insertion-like behavior.
