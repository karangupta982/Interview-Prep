# 1. Introduction

**String sorting** means arranging strings or characters based on **lexicographical (dictionary) order**, length, frequency, or custom rules.

Python sorts strings based on **Unicode (ASCII-compatible) values** by default.

---

# 2. Default String Sorting (Lexicographical)

### Example

```python
words = ["banana", "apple", "cherry"]
words.sort()
```

**Output**

```python
['apple', 'banana', 'cherry']
```

### How it works

* Character-by-character comparison
* Uses Unicode values
* Shorter prefix comes first

**Time Complexity:** `O(n log n * k)`
(n = number of strings, k = average string length)

---

# 3. Sorting Characters in a String

### Using `sorted()`

```python
s = "dcba"
res = "".join(sorted(s))
```

**Output**

```python
'abcd'
```

* `sorted()` returns a list
* `join()` converts it back to string

**Time:** O(n log n)

---

# 4. Case Sensitivity in String Sorting

```python
words = ["apple", "Banana", "cherry"]
print(sorted(words))
```

**Output**

```python
['Banana', 'apple', 'cherry']
```

Reason:

* Uppercase letters come before lowercase in Unicode.

### Case-insensitive sort

```python
sorted(words, key=str.lower)
```

---

# 5. Sorting Strings by Length

```python
words.sort(key=len)
```

Descending:

```python
words.sort(key=len, reverse=True)
```

**Time:** O(n log n)

---

# 6. Sorting Strings by Custom Key

### Sort by last character

```python
words.sort(key=lambda x: x[-1])
```

### Sort by number of vowels

```python
def vowel_count(s):
    return sum(ch in "aeiou" for ch in s)

words.sort(key=vowel_count)
```

---

# 7. Sorting Strings by Frequency (Common Interview)

### Sort characters by frequency

```python
from collections import Counter

s = "tree"
freq = Counter(s)

res = "".join(sorted(s, key=lambda x: freq[x], reverse=True))
```

**Output**

```python
'eetr'
```

---

# 8. Anagram Sorting (Interview Favorite)

### Sort characters inside words

```python
words = ["eat", "tea", "tan"]
res = ["".join(sorted(w)) for w in words]
```

### Group anagrams

```python
from collections import defaultdict

groups = defaultdict(list)
for word in words:
    key = "".join(sorted(word))
    groups[key].append(word)
```

---

# 9. Sorting Strings with Numbers

```python
arr = ["file2", "file10", "file1"]
print(sorted(arr))
```

**Output (lexicographical)**

```python
['file1', 'file10', 'file2']
```

### Natural sorting (interview-level)

```python
import re
sorted(arr, key=lambda x: int(re.search(r'\d+', x).group()))
```

---

# 10. When to Use Which Approach

| Scenario           | Technique               |
| ------------------ | ----------------------- |
| Alphabetical order | Default `sort()`        |
| Case-insensitive   | `key=str.lower`         |
| Length-based       | `key=len`               |
| Frequency-based    | `Counter + key`         |
| Anagrams           | `sorted(string)` as key |
| Numeric suffix     | Custom key / regex      |

---

# 11. Interview Concepts

### Why is string sorting slower than integer sorting?

Because each comparison may involve multiple characters → O(k) per comparison.

### Why is `sorted()` preferred for strings?

It is stable, optimized (TimSort), and works on any iterable.

### Why does Python use Unicode order?

To support international characters consistently.

### How to optimize string sorting?

* Use `key` instead of custom comparators
* Precompute keys

---

# 12. Theoretical Interview Questions (with answers)

### Q1: What is lexicographical order?

Dictionary-like ordering based on character comparison.

### Q2: Why does `"Zebra"` come before `"apple"`?

Uppercase letters have smaller Unicode values.

### Q3: How to sort strings ignoring case?

Use `key=str.lower`.

### Q4: How to sort strings by frequency?

Use `Counter` with custom key.

### Q5: Why does string sorting take `O(n log n * k)` time?

Each comparison may scan up to `k` characters.
