# Python Notes

## 1. Multiple Assignment

```python
name, age, student = "karan", 21, True
```

* Assign multiple variables in one line
* Improves readability and reduces code length

### Same Value Assignment

```python
mango = apple = banana = orange = 10
```

* All variables reference the same value

---

## 2. String Methods (Important)

```python
name = "bro What Are YOU DOING"
```

| Method               | Purpose                                |
| -------------------- | -------------------------------------- |
| `len(s)`             | Length of string                       |
| `s.find("B")`        | Index of character (`-1` if not found) |
| `s.isdigit()`        | True if only digits                    |
| `s.isalpha()`        | True if only letters (no spaces)       |
| `s.count("o")`       | Count occurrences                      |
| `s * 3`              | String repetition                      |

**Important**

* All string methods return **new strings**
* Strings are **immutable**

---

## 3. Typecasting Behavior

```python
z = "3"
print(z * 3)        # '333'
print(int(z) * 3)   # 9
```

* `str * int` → repetition
* Convert explicitly for arithmetic

---

## 4. Input Handling

```python
age = int(input("Enter age: "))
```

**Key points**

* `input()` always returns `str`
* Must typecast before calculations
* `.split()` can take multiple inputs

```python
a, b, c = input().split(" ")
```

---

## 5. Math Operations

```python
import math
```

| Function          | Purpose        |
| ----------------- | -------------- |
| `round(x)`        | Round value    |
| `math.ceil(x)`    | Round up       |
| `math.floor(x)`   | Round down     |
| `abs(x)`          | Absolute value |
| `pow(x, y)`       | Power          |
| `math.sqrt(x)`    | Square root    |
| `max()` / `min()` | Max / Min      |

---

## 6. String Slicing

```python
name[start:stop:step]
```

* `start` → inclusive
* `stop` → exclusive
* `step` → jump size

### Examples

```python
name[:5]
name[::-1]   # reverse string
```

---

## 7. `slice()` Object

```python
s = slice(7, -4)
website[s]
```

* Reusable slicing logic
* Useful when slicing multiple strings similarly
* Does **not modify** original data

---

## 8. Conditional Statements

```python
if age < 18:
    ...
elif age < 35:
    ...
else:
    ...
```

### Logical Operators

* `and` → both true
* `or` → any true

---

## 9. Loops

### `for` Loop

```python
for i in range(start, stop, step):
```

* Stop is always **exclusive**
* Used when number of iterations is known

### `while` Loop

```python
while condition:
```

* Risk of infinite loop if not handled

---

## 10. Loop Control Statements

| Keyword    | Use            |
| ---------- | -------------- |
| `break`    | Exit loop      |
| `continue` | Skip iteration |
| `pass`     | Placeholder    |

---

## 11. Nested Loops

```python
for i in range(rows):
    for j in range(cols):
        print("*", end="")
```

* Used for grids, patterns, matrices

---

## 12. Lists

```python
food = ["dosa", "idli", "pizza"]
```

**Properties**

* Ordered
* Mutable
* Indexed
* Can store mixed types
* Can be nested

### Common Methods

```python
append()
remove()
pop()
insert()
sort()
clear()
```

---

## 13. 2D Lists

```python
food = [drinks, dinner, dessert]
food[1][1]
```

* List inside a list
* Used for matrices and tables

---

## 14. Tuples

```python
student = ("bro", 21, "male")
```

**Key points**

* Ordered
* Immutable
* Faster than lists
* Used for fixed data

### Methods

```python
count()
index()
```

### When to Use Tuple

* Returning multiple values
* Coordinates
* Constants
* Performance-critical code

---

## 15. Sets

```python
utensils = {"fork", "spoon"}
```

**Characteristics**

* Unordered
* No duplicates
* Mutable (add/remove allowed)
* No indexing

### Common Methods

```python
add()
remove()
update()
union()
difference()
clear()
```

---

## 16. Python vs C++ Set

| Language | Behavior               |
| -------- | ---------------------- |
| C++      | Ordered (BST based)    |
| Python   | Unordered (Hash based) |

---

## 17. Important Python Facts

* No `++` or `--` operators
* Use `+=` instead
* Strings & tuples are immutable
* Lists & sets are mutable
* Python uses hash tables heavily
