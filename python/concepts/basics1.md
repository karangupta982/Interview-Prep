# Python Notes

## 1. `print()` Function

```python
print("hello", 5, 6, sep="->", end="->END")
```

**Key points**

* `sep` → separator between values (default: space)
* `end` → what to print at the end (default: newline `\n`)
* Supports multiple arguments
    
---

## 2. Escape Characters in Strings

```python
print("I am a \"good boy\"")
print("Line1\nLine2\tTabbed")
```

**Common escape sequences**

* `\"` → double quote
* `\n` → new line
* `\t` → tab
* `\\` → backslash

---

## 3. Data Types in Python

```python
a = 10          # int
b = 3.14        # float
c = "Python"    # str
d = True        # bool
e = None        # NoneType
f = complex(2, 4)
```

**Important**

* Use `type(x)` to check type
* Use `isinstance(x, type)` for safe checks

---

## 4. Everything in Python is an Object

```python
print(type(5))        # <class 'int'>
print(type("hi"))     # <class 'str'>
```

All values, functions, and data structures are objects.

---

## 5. Integer Division

```python
print(5 // 2)   # 2
```

* `//` → floor division (integer result)

---

## 6. Input Always Returns String

```python
a = input("Enter number: ")
```

* `input()` always returns `str`
* Convert explicitly when doing math

```python
int(a)
float(a)
```

---

## 7. Typecasting

### Explicit Typecasting

```python
int("10")
float("3.5")
str(100)
```

### Implicit Typecasting

```python
c = 1.3
d = 4
print(c + d)   # 5.3
```

Python automatically converts `int` → `float` when needed.

---

## 8. Characters to ASCII

```python
ord('a')   # 97
ord('b')   # 98
```

* `int('a')` ❌ invalid
* `ord()` converts character → ASCII value

---

## 9. Conditional Statements

```python
if x > 10:
    print("yes")
else:
    print("no")
```

### Ternary Operator

```python
print("yes") if x > 10 else print("no")
```

---

## 10. Strings

### Creation

```python
name = "Dave"
city = str("London")
```

### String Properties

```python
type(name) == str
isinstance(name, str)
```

---

## 11. String Concatenation

```python
full_name = first + " " + second
```

---

## 12. Multi-line Strings

```python
text = '''
Hello
How are you?
'''
```

Used for:

* Large text
* Documentation
* Templates

---

## 13. String Methods (Important)

```python
text.lower()
text.upper()
text.title()
text.replace("old", "new")
len(text)
```

**Notes**

* Strings are **immutable**
* Methods return **new strings**

---

## 14. List, Tuple, Dictionary (Overview)

```python
lst = [1, 2.3, "apple"]
tpl = (1, 2, "banana")
dct = {"name": "Karan", "roll": "0101cs"}
```

**Key differences**

* List → mutable
* Tuple → immutable
* Dictionary → key-value pairs

---

## 15. Important Interview Notes

* Python uses **dynamic typing**
* Memory allocation handled automatically
* Strings are immutable
* `None` is a datatype (`NoneType`)
* Use `ord()` for character math
