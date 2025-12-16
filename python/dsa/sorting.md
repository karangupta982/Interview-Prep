# 1. Introduction

A **string** in Python is an **immutable sequence of Unicode characters**.
Strings are used to represent text data and support indexing, slicing, iteration, and many built-in operations.

Internally, Python strings are stored as **contiguous memory blocks** of characters (Unicode-aware).

---

# 2. Properties & Characteristics

| Property        | Explanation                           |
| --------------- | ------------------------------------- |
| Immutable       | Cannot be modified after creation     |
| Ordered         | Characters have fixed positions       |
| Indexing        | Supports positive & negative indexing |
| Iterable        | Can be looped character by character  |
| Hashable        | Can be used as dictionary keys        |
| Unicode support | Handles all international characters  |

---

# 3. Syntax & Initialization

```python
s = ""                      # empty string
s = "hello"                 # string literal
s = 'hello'                 # single quotes
s = """hello"""             # multiline string
s = str(123)                # conversion
s = "hello" * 3             # repetition → 'hellohellohello'
```

---

# 4. Iteration Techniques

### Basic for-loop

```python
for ch in s:
    print(ch)
```

### While loop

```python
i = 0
while i < len(s):
    print(s[i])
    i += 1
```

### enumerate()

```python
for idx, ch in enumerate(s):
    print(idx, ch)
```

### List comprehension

```python
chars = [ch for ch in s]
```

### Iterating indices

```python
for i in range(len(s)):
    print(i, s[i])
```

---

# 5. Common Operations

(Code + short note + time complexity)

---

### Accessing

```python
ch = s[2]
```

Note: Direct index lookup.
**Time: O(1)**

---

### Slicing

```python
sub = s[1:4]
```

Note: Creates a new string.
**Time: O(k)**

---

### Concatenation

```python
s2 = s + "world"
```

Note: New string created.
**Time: O(n + m)**

---

### Updating (not allowed directly)

```python
# s[0] = 'H' ❌ (TypeError)
s = "H" + s[1:]
```

Note: Strings are immutable.
**Time: O(n)**

---

### Searching

```python
idx = s.find("lo")
exists = "lo" in s
```

Note: Linear scan.
**Time: O(n)**

---

### Replace

```python
s2 = s.replace("l", "x")
```

Note: Returns new string.
**Time: O(n)**

---

### Split

```python
parts = s.split(" ")
```

Note: Splits into list of strings.
**Time: O(n)**

---

### Join

```python
s2 = "-".join(["a", "b", "c"])
```

Note: Efficient string building.
**Time: O(n)**

---

### Case conversion

```python
s.upper()
s.lower()
s.title()
```

**Time: O(n)**

---

### Strip whitespace

```python
s.strip()
s.lstrip()
s.rstrip()
```

**Time: O(n)**

---

# 7. Internal Implementation Details

* Strings are stored as **immutable contiguous arrays** of Unicode characters.
* Any modification creates a **new string**.
* Python optimizes small strings via **string interning**.
* Immutability allows strings to be **hashable** and safe as dict keys.
* Excessive concatenation in loops is inefficient → use `join()`.

---

# 8. When to Use This Data Structure

Use strings when:

* Handling text data.
* Keys in dictionaries.
* Pattern matching, parsing, serialization.

Avoid when:

* Frequent modifications → convert to list first.
* Large string concatenation in loops → use list + join.

---

# 9. Time Complexity Summary

| Operation     | Complexity |
| ------------- | ---------- |
| Index access  | O(1)       |
| Slice         | O(k)       |
| Concatenation | O(n + m)   |
| Search        | O(n)       |
| Replace       | O(n)       |
| Split         | O(n)       |
| Join          | O(n)       |

---

# 10. Interview Concepts

### Why are strings immutable?

Immutability allows safe sharing, hashing, caching, and performance optimizations.

### Why is join faster than concatenation?

`join()` allocates memory once; `+` creates many intermediate strings.

### Why are strings hashable?

Their value never changes, ensuring consistent hash values.

### How does slicing work internally?

Python copies selected characters into a new memory block.

### Why is string search O(n)?

Characters must be scanned sequentially.

---

# 11. Theoretical Interview Questions (with answers)

### Q1: Why can't strings be modified in place?

Because they are immutable; any change requires creating a new string.

### Q2: Why does `s += "a"` inside a loop perform poorly?

Each operation creates a new string → O(n²) overall.

### Q3: Why is `"a" in s` faster than manual looping?

Implemented in optimized C code.

### Q4: Why are strings preferred over char arrays in Python?

Built-in safety, Unicode support, rich API.

### Q5: How does Python store Unicode strings efficiently?

Uses flexible internal representation (1, 2, or 4 bytes per character).
