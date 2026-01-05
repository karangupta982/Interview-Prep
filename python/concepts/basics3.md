# Python Notes

## 1. Dictionary (`dict`)

```python
capitals = {"India":"New Delhi", "USA":"Washington DC"}
```

**Key points**

* Stores **key : value** pairs
* Keys are **unique**
* Mutable
* Fast lookup using **hashing**
* Unordered (no index-based access)

### Accessing Values

```python
capitals["India"]        # KeyError if not present
capitals.get("Germany") # Returns None (safe)
```

### Common Methods

```python
capitals.keys()
capitals.values()
capitals.items()
capitals.update({"Germany":"Berlin"})
capitals.clear()
```

### Iteration

```python
for key, value in capitals.items():
    print(key, value)
```

---

## 2. Index Operator `[]`

Used with:

* String
* List
* Tuple

```python
name = "Bro Code!"
name[0]        # 'B'
name[-1]       # '!'
```

**Important**

* Strings are immutable → `name[0] = 'b'` ❌

---

## 3. Functions

```python
def add(x, y):
    return x + y
```

**Key points**

* Code runs only when function is called
* `return` sends value back to caller
* Without `return`, function returns `None`

---

## 4. Keyword Arguments

```python
def hello(first, middle, last):
    print(first, middle, last)

hello(last="Code", first="Bro", middle="Dude")
```

**Advantages**

* Order doesn’t matter
* Improves readability

---

## 5. Nested Function Calls

```python
print(round(abs(float(input()))))
```

**Execution order**

* Innermost → outermost
* Returned value becomes input for next function

---

## 6. Variable Scope

```python
name = "Global"

def display():
    name = "Local"
    return name
```

**Rules**

* Local variables exist only inside functions
* Global and local variables can have same name
* Local variable has priority inside function

---

## 7. `*args` (Variable Length Arguments)

```python
def add(*args):
    total = 0
    for i in args:
        total += i
    return total
```

**Key points**

* Packs arguments into a **tuple**
* Name doesn’t matter, `*` does
* Used when number of arguments is unknown

---

## 8. `**kwargs` (Keyword Arguments)

```python
def hello(**kwargs):
    print(kwargs["first"], kwargs["last"])
```

**Key points**

* Packs arguments into a **dictionary**
* Access using keys
* Order not guaranteed

---

## 9. String Formatting (`str.format`)

```python
"Hello {}".format(name)
```

### Positional Formatting

```python
"{1} {0}".format("World", "Hello")
```

### Named Formatting

```python
"{name}".format(name="Bro")
```

### Alignment & Spacing

```python
"{:<10}"   # left
"{:>10}"   # right
"{:^10}"   # center
```

---

## 10. Number Formatting

```python
"{:.2f}".format(3.14159)   # 3.14
"{:,}".format(10000)       # 10,000
"{:b}".format(10)          # binary
"{:o}".format(10)          # octal
"{:X}".format(10)          # hex
"{:E}".format(1000)        # scientific
```

**Old-style formatting**

```python
"%.2f" % num
```

---

## 11. `random` Module

```python
import random
```

| Function        | Use            |
| --------------- | -------------- |
| `randint(a,b)`  | Random int     |
| `random()`      | Float (0–1)    |
| `choice(seq)`   | Random element |
| `shuffle(list)` | Shuffle list   |

---

## 12. Exception Handling

```python
try:
    ...
except ZeroDivisionError:
    ...
except ValueError:
    ...
except Exception:
    ...
else:
    ...
finally:
    ...
```

**Important**

* `else` runs only if no exception
* `finally` always executes
* Prevents program crash

---

## 13. Key Python Takeaways

* Dictionaries use hashing → fast lookup
* `*args` → tuple
* `**kwargs` → dictionary
* Python has **no compile-time errors**
* Exception handling is runtime-based
* Formatting gives fine control over output
