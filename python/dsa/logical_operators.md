# logical_and_bitwise_operators.md

# 1. Introduction

Python provides two categories of operators that often confuse beginners:

1. **Logical operators** → work with Boolean expressions (`True` / `False`).
2. **Bitwise operators** → work on integers at the bit level (0s and 1s).

Python does **not** support `&&` and `||`; instead it uses `and`, `or`.

---

# 2. Logical Operators (Boolean-level)

Logical operators evaluate **truth values** and short-circuit (stop early if result is known).

| Operator | Meaning                      | Example          | Result  |
| -------- | ---------------------------- | ---------------- | ------- |
| `and`    | True if both are True        | `True and False` | `False` |
| `or`     | True if at least one is True | `True or False`  | `True`  |
| `not`    | Negation                     | `not True`       | `False` |

### Examples

```python
x = 5
y = 10

print(x > 0 and y > 0)    # True
print(x > 0 or y < 0)     # True
print(not (x == y))       # True
```

### Short-circuit behavior

```python
False and expr  → expr is NOT evaluated  
True or expr    → expr is NOT evaluated  
```

---

# 3. Bitwise Operators (Integer-level)

Bitwise operators operate on **binary representation** of integers.

| Operator | Meaning     | Example    | Result |    |     |
| -------- | ----------- | ---------- | ------ | -- | --- |
| `&`      | Bitwise AND | `5 & 3`    | `1`    |    |     |
| `        | `           | Bitwise OR | `5     | 3` | `7` |
| `^`      | Bitwise XOR | `5 ^ 3`    | `6`    |    |     |
| `~`      | Bitwise NOT | `~5`       | `-6`   |    |     |
| `<<`     | Left shift  | `5 << 1`   | `10`   |    |     |
| `>>`     | Right shift | `5 >> 1`   | `2`    |    |     |

### Example breakdown

```python
5 & 3
# 5 = 101 (binary)
# 3 = 011
# AND = 001 → 1
```

---

# 4. Difference Between Logical and Bitwise Operators

| Operator Type                | Works On                        | Example                | Meaning       |                  |
| ---------------------------- | ------------------------------- | ---------------------- | ------------- | ---------------- |
| Logical (`and`, `or`, `not`) | Booleans or truthy/falsy values | `x > 0 and y > 0`      | Boolean logic |                  |
| Bitwise (`&`, `              | `, ^`, etc.)                    | Integers (binary form) | `5 & 3`       | Bit manipulation |

### Key difference

```python
True & False   # returns 0 or 1 (bitwise)
True and False # returns Boolean
```

---

# 5. Why Python Doesn't Use && and ||

In languages like C, C++, Java:

```
&&  → logical AND  
||  → logical OR
```

Python replaces them with:

```
and → logical AND  
or  → logical OR
```

Because Python prefers English-like keywords.

---

# 6. `&` vs `and` (very important)

### `and` → logical operator

```python
print((5 > 2) and (3 < 4))  # True
```

### `&` → bitwise operator

```python
print(5 & 3)  # 1
```

#### Common mistake

```python
# Wrong (C-style)
if (x > 0) & (y > 0):   # works but slower, unnecessary
```

Use:

```python
if x > 0 and y > 0:
```

---

# 7. `|` vs `or`

### `or` → logical

```python
print((5 > 10) or (3 < 4))  # True
```

### `|` → bitwise

```python
print(5 | 3)  # 7
```

---

# 8. Truthy / Falsy Behavior in Logical Operators

Logical operators return **actual operands**, not just True/False.

```python
print(0 or 5)        # 5
print("" or "hello") # "hello"
print([] and 10)     # [] (empty list)
```

Rules:

* `and` returns the **first falsy** value, or last value if all truthy.
* `or` returns the **first truthy** value.

---

# 9. Bitwise Operator Use Cases

### Common DSA / CP patterns

* Checking if a number is odd

  ```python
  if n & 1:
      print("odd")
  ```
* Swapping without temp

  ```python
  a ^= b
  b ^= a
  a ^= b
  ```
* Fast multiplication/division by powers of 2

  ```python
  n << 1  # n * 2
  n >> 1  # n / 2
  ```
* Setting, clearing, toggling bits

  ```python
  x |= (1 << k)   # set kth bit
  x &= ~(1 << k)  # clear kth bit
  x ^= (1 << k)   # toggle kth bit
  ```

---

# 10. Interview Questions (with answers)

### Q1: Why doesn't Python have && and ||?

Python uses English keywords `and` and `or` for readability.

### Q2: What is the difference between & and and?

* `and` works on Boolean expressions, short-circuits.
* `&` performs bitwise AND on integers.

### Q3: What does ~n do?

Returns bitwise NOT:
`~n = -(n + 1)` in Python (due to two’s complement representation).

### Q4: Why does `and` return a non-boolean value sometimes?

Because Python evaluates truthiness and returns the actual operand, not True/False.

### Q5: What is << used for?

Binary left shift → fast multiply by powers of 2.

