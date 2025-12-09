# dict.md

# 1. Introduction

A **dictionary** in Python is an **unordered, mutable, hash-based key–value mapping**.
It provides **O(1) average-time** lookup, insertion, and deletion using **hash tables**.

Dictionaries store mappings like:

```python
{"name": "Alice", "age": 25}
```

Keys must be **hashable** (immutable types like str, int, tuple).
Values can be any Python object.

---

# 2. Properties & Characteristics

| Property                                            | Explanation                                |
| --------------------------------------------------- | ------------------------------------------ |
| Mutable                                             | Keys/values can be added, updated, removed |
| Unordered (but insertion-ordered since Python 3.7+) | Preserves insertion order                  |
| Unique keys                                         | No duplicate keys allowed                  |
| Hash-based                                          | Fast O(1) lookups using hashing            |
| Key requirements                                    | Keys must be **hashable**                  |
| Value flexibility                                   | Values may be of any type                  |
| Memory-heavy                                        | Hash tables require overhead               |

---

# 3. Syntax & Initialization

```python
d = {}                                   # empty dict
d = {"a": 1, "b": 2}                      # literal
d = dict(a=1, b=2)                        # using keywords
d = dict([("a", 1), ("b", 2)])            # from tuples
d = {x: x*x for x in range(5)}            # comprehension
d = dict.fromkeys(["a", "b"], 0)          # default values
len = len(d)                              # size
isEmpty = not d                          # empty?
```

---

# 4. Iteration Techniques

### Iterate keys (default)

```python
for key in d:
    print(key)
```

### Iterate values

```python
for val in d.values():
    print(val)
```

### Iterate key–value pairs

```python
for key, val in d.items():
    print(key, val)
```

### Iterate sorted keys

```python
for key in sorted(d):
    print(key, d[key])
```

### Comprehension

```python
squares = {k: v*v for k, v in d.items()}
```

---

# 5. Common Operations (code + note + time complexity)

### Accessing

```python
x = d["a"]
```

Note: Direct key lookup using hashing.
**Time: O(1) average**

### Safe access (avoid KeyError)

```python
x = d.get("a", default_value)
```

Note: Returns default if key missing.
**Time: O(1)**

### Adding / Updating values

```python
d["a"] = 10
```

Note: Insert new key or update existing.
**Time: O(1) average**

### Removing items

#### pop()

```python
val = d.pop("a")
```

Note: Removes key and returns value.
**Time: O(1)**

#### popitem()

```python
key, val = d.popitem()
```

Note: Removes last inserted item.
**Time: O(1)**

#### del

```python
del d["a"]
```

**Time: O(1)**

### Searching

```python
exists = "a" in d
```

Note: Uses hash table.
**Time: O(1)**

### Iterating

```python
for k, v in d.items():
    ...
```

Note: Sequential scan.
**Time: O(n)**

### Merging dictionaries

```python
d3 = {**d1, **d2}
# or
d1.update(d2)
```

Note: Copies from second dict into first.
**Time: O(k)** (k = items added)

---

# 7. Internal Implementation Details

* Python dictionaries use **open addressing hash tables** with **quadratic probing**.
* Dictionary growth happens by allocating a larger table and rehashing keys.
* Keys are looked up by computing a **hash(key)** and probing until a slot is found.
* Since Python 3.7+, dicts preserve **insertion order** for stable data iteration.
* Dictionaries resize to maintain good load factor (~⅔ full).
* Average-time operations are **O(1)** due to hashing; worst-case is **O(n)** (rare).

---

# 8. When to Use This Data Structure

Use dictionaries when:

* You need fast key-based lookup (O(1)).
* Data has a natural key → value relationship.
* You want to count, group, or map items efficiently.
* Order of insertion matters.

Avoid dictionaries when:

* You need sorted keys → use `OrderedDict` (older versions) or `dict + sorted()` when needed.
* Keys are unhashable (lists, dicts, sets).
* You need very memory-efficient storage → dicts carry overhead.

---

# 9. Time Complexity Summary

| Operation       | Complexity   |
| --------------- | ------------ |
| Access (by key) | O(1) average |
| Insert          | O(1) average |
| Update          | O(1) average |
| Delete          | O(1) average |
| Search          | O(1) average |
| Iteration       | O(n)         |
| Resize (rare)   | O(n)         |

---

# 10. Interview Concepts

### Why are dictionary operations O(1)?

Because they use hashing: compute hash, map to index, and store/fetch in constant time (average case).

### Why must keys be hashable?

Hashing requires a consistent hash value. Mutable objects may change → hash breaks → wrong lookup.

### Why does Python dict preserve insertion order now?

Python 3.7+ guarantees it due to a redesigned compact hash table layout which preserves order without extra cost.

### What happens when two keys have the same hash?

A collision occurs → Python uses open addressing and probing to find the next available slot.

### Why is dict memory usage high?

Hash tables need spare capacity to maintain fast operations; this overhead increases memory usage.

---

# 11. Theoretical Interview Questions (with answers)

### Q1: What is the underlying data structure for dict?

A hash table using open addressing with a compact array layout.

### Q2: What causes worst-case O(n) lookup?

When many collisions occur or when non-random malicious inputs force many probes.

### Q3: Why should custom classes implement **hash** and **eq**?

To allow proper hashing behavior and equality checks when used as keys.

### Q4: How does Python handle dictionary resizing?

It allocates a larger table, rehashes existing keys, and redistributes them to maintain load factor.

### Q5: Why can't lists be dictionary keys?

Lists are mutable → hash value would change → breaks dictionary invariants.

