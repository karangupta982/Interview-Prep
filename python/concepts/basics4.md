# Python Notes: Reading from Files

## 1. Why Read Files?

* Files store large amounts of data (text, logs, datasets, etc.)
* Used in:

  * Data analysis
  * Text processing
  * File transformation
* Python reads file data **as strings**

---

## 2. Opening a File

```python
with open('filename.txt') as file_object:
    ...
```

### Key Points

* `open()` returns a **file object**
* `with` automatically:

  * Opens the file
  * Closes the file after the block ends
* Safer than using `open()` + `close()`

**Why `with` is important**

* Prevents file corruption
* Prevents memory/resource leaks
* Avoids working with closed files accidentally

---

## 3. Reading an Entire File

```python
with open('pi_digits.txt') as file_object:
    contents = file_object.read()
    print(contents)
```

### Behavior

* `read()` → reads **entire file as one string**
* Adds an extra blank line due to trailing newline

### Removing Extra Whitespace

```python
print(contents.rstrip())
```

* `rstrip()` removes whitespace from **right side**
* Useful for clean output

---

## 4. File Paths

### Relative File Path

```python
with open('text_files/filename.txt') as file_object:
```

* Path relative to the **current program’s directory**

### Absolute File Path

```python
file_path = '/home/user/other_files/text_files/file.txt'
with open(file_path) as file_object:
```

* Full path from root
* Works regardless of program location

### Windows Path Issue

```python
"C:\\path\\to\\file.txt"
```

* Backslash `\` is an escape character
* Use:

  * Double backslashes `\\`
  * OR forward slashes `/` (recommended)

---

## 5. Reading File Line by Line

```python
with open(filename) as file_object:
    for line in file_object:
        print(line)
```

### Issue

* Extra blank lines appear
* Cause:

  * Each line already has `\n`
  * `print()` adds another newline

### Solution

```python
print(line.rstrip())
```

---

## 6. Storing File Lines in a List

```python
with open(filename) as file_object:
    lines = file_object.readlines()
```

### Key Points

* `readlines()` → returns a **list of lines**
* File content remains accessible **after** `with` block
* Useful for:

  * Post-processing
  * Multiple passes over data

---

## 7. Working with File Data

### Building a Single String

```python
pi_string = ''
for line in lines:
    pi_string += line.rstrip()
```

* Combines all lines
* Removes newline characters

### Removing All Surrounding Whitespace

```python
pi_string += line.strip()
```

| Method     | Removes                      |
| ---------- | ---------------------------- |
| `rstrip()` | Right-side whitespace        |
| `strip()`  | Both left & right whitespace |

---

## 8. String Length

```python
len(pi_string)
```

* Includes:

  * Digits
  * Decimal point
  * Leading numbers

---

## 9. Reading Large Files

```python
filename = 'pi_million_digits.txt'
```

* Same code works for **small or huge files**
* Limited only by **system memory**
* Python has **no fixed data size limit**

### Printing Partial Data

```python
print(pi_string[:52])
```

* Useful for previews
* Avoids flooding terminal

---

## 10. Important Notes

* File data is always read as **string**
* Convert manually if needed:

```python
int(value)
float(value)
```

---

## 11. Summary Table

| Operation          | Method                    |
| ------------------ | ------------------------- |
| Read entire file   | `read()`                  |
| Read line by line  | `for line in file_object` |
| Store lines        | `readlines()`             |
| Remove newline     | `rstrip()`                |
| Remove all spaces  | `strip()`                 |
| Safe file handling | `with open()`             |

---

## 12. Interview / Exam Takeaways

* Prefer `with open()` over manual close
* Understand difference between:

  * `read()`
  * `readlines()`
  * Iterating over file object
* Know relative vs absolute paths
* Be careful with Windows paths
* File data is **string by default**
