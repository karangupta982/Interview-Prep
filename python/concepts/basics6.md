# Python Notes: File Detection & File Operations

## 1. Creating a File in Python

### Using `open()`

```python
with open("file.txt", "w"):
    pass
```

* Creates file if it doesn’t exist
* **Overwrites file** if it exists

### Exclusive Creation (`x`)

```python
with open("file.txt", "x"):
    pass
```

* Creates file **only if it does not exist**
* Raises `FileExistsError` if file already exists

### Using `os`

```python
import os
os.mknod("file.txt")
```

* Creates an empty file (OS-dependent)

### Using `pathlib`

```python
from pathlib import Path
Path("file.txt").touch()
```

* Modern, cross-platform way to create files

---

## 2. File Modes (Very Important)

| Mode   | Meaning                       |
| ------ | ----------------------------- |
| `'r'`  | Read (file must exist)        |
| `'w'`  | Write (overwrite / create)    |
| `'a'`  | Append (create if not exists) |
| `'x'`  | Create only if not exists     |
| `'r+'` | Read + Write                  |

---

## 3. File Existence & Type Checking

```python
import os

os.path.exists(path)
os.path.isfile(path)
os.path.isdir(path)
os.path.getsize(path)
```

**Usage**

* Detect file vs directory
* Prevent overwriting files
* Validate paths before operations

---

## 4. Reading a File

```python
with open("temp.txt") as file:
    content = file.read()
```

**Key Points**

* `with` closes file automatically
* `read()` reads entire file as a string
* File content is always **string**

### Safe Reading

```python
try:
    with open("temp.txt") as file:
        print(file.read())
except FileNotFoundError:
    print("File not found")
```

---

## 5. Writing to a File

```python
with open("temp.txt", "w") as file:
    file.write("Hello\nWorld")
```

**Important**

* Only strings can be written
* `'w'` erases existing content
* Newlines must be added manually (`\n`)

---

## 6. Appending to a File

```python
with open("temp.txt", "a") as file:
    file.write("More text\n")
```

* Preserves existing data
* Adds content at the end

---

## 7. Copying Files (`shutil`)

```python
import shutil
```

| Function             | Behavior                                |
| -------------------- | --------------------------------------- |
| `copyfile(src, dst)` | Copies content only                     |
| `copy(src, dst)`     | Copies content + permissions            |
| `copy2(src, dst)`    | Copies content + permissions + metadata |

---

## 8. Moving Files

```python
import os
os.replace(source, destination)
```

**Notes**

* Overwrites destination if exists
* Use `os.path.exists()` to prevent overwrite

---

## 9. Deleting Files & Directories

### Delete File

```python
os.remove(path)
```

### Delete Empty Directory

```python
os.rmdir(path)
```

### Delete Directory with Files

```python
import shutil
shutil.rmtree(path)
```

---

## 10. Exception Handling in File Operations

| Exception           | Cause             |
| ------------------- | ----------------- |
| `FileNotFoundError` | File not found    |
| `PermissionError`   | No permission     |
| `OSError`           | Invalid operation |

Always wrap delete/move operations in `try-except`.

---

## 11. Best Practices

* Use `with open()` always
* Check existence before delete/move
* Prefer `pathlib` for modern code
* Avoid `'w'` unless overwrite is intended
* Handle exceptions explicitly

---

## 12. Interview / Exam Takeaways

* `'x'` mode prevents accidental overwrite
* `os.path.exists()` ≠ `isfile()` ≠ `isdir()`
* `shutil` is used for advanced file operations
* File I/O errors are **runtime errors**
* Always close files (use `with`)
