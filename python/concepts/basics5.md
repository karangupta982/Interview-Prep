# Python Notes: Writing to Files

## 1. Why Write to Files?

* Persist data after program execution
* Share output with others
* Reuse data later by reading it back
* Useful for logs, reports, datasets, results

---

## 2. Opening a File for Writing

```python
with open('programming.txt', 'w') as file_object:
    file_object.write("I love programming.")
```

### File Modes

| Mode   | Meaning                 |
| ------ | ----------------------- |
| `'r'`  | Read (default)          |
| `'w'`  | Write (overwrites file) |
| `'a'`  | Append (adds to file)   |
| `'r+'` | Read + Write            |

**Important**

* `'w'` **creates the file if it doesn’t exist**
* `'w'` **erases existing content** if file already exists
* Use `with` → file closes automatically

---

## 3. `write()` Method

```python
file_object.write("text")
```

**Key Rules**

* Writes **only strings**
* Does **not** add newline automatically
* Returns number of characters written (usually ignored)

### Writing Numbers

```python
file_object.write(str(100))
```

---

## 4. Writing Multiple Lines

```python
file_object.write("Line 1\n")
file_object.write("Line 2\n")
```

**Why `\n` is required**

* `write()` does not insert newlines
* Without `\n`, text appears on the same line

❌ Bad output:

```
Line1Line2
```

✅ Correct output:

```
Line1
Line2
```

---

## 5. Formatting Output

You can use:

* `\n` → new line
* `\t` → tab
* Spaces and blank lines

Same formatting rules as `print()`, but **manual**

---

## 6. Appending to a File

```python
with open('programming.txt', 'a') as file_object:
    file_object.write("New line\n")
```

**Behavior**

* Adds content **at the end**
* Does **not erase existing data**
* Creates file if it doesn’t exist

---

## 7. Write vs Append (Very Important)

| Mode  | Existing Content | New Data      |
| ----- | ---------------- | ------------- |
| `'w'` | Deleted          | Written fresh |
| `'a'` | Preserved        | Added at end  |

---

## 8. Common Pitfalls

* Forgetting `\n` → messy output
* Using `'w'` accidentally → data loss
* Writing non-string values → error
* Not using `with` → file may stay open

---

## 9. Best Practices

* Use `with open()` always
* Prefer `'a'` for logs
* Convert numbers using `str()`
* Explicitly control formatting
* Use meaningful filenames

---

## 10. Interview / Exam Takeaways

* Python writes **strings only**
* `'w'` overwrites, `'a'` appends
* `write()` ≠ `print()`
* Newlines must be added manually
* Files close automatically with `with`
