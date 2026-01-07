# JSON in Python — how it *actually* works and *why* you use it

Think of **JSON** as:

> a simple, human-readable way to **persist Python data across program runs**

Your program ends → memory is wiped →
JSON lets you **save state** and **restore it later**.

---

## 1. Mental model (important for interviews)

* **RAM** → temporary (variables die when program exits)
* **Files (JSON)** → permanent storage
* `json.dump()` → **Python → disk**
* `json.load()` → **disk → Python**

That’s it.

---

## 2. `json.dump()` — save Python data to a file

```python
import json

data = {
    "username": "karan",
    "age": 21,
    "skills": ["python", "fastapi", "docker"]
}

with open("user.json", "w") as f:
    json.dump(data, f)
```

### What’s happening internally

1. Python object → converted to JSON text
2. JSON text → written to file
3. File stays after program ends

**Resulting file (`user.json`)**

```json
{
  "username": "karan",
  "age": 21,
  "skills": ["python", "fastapi", "docker"]
}
```

### Interview insight

> `json.dump()` is used when you want **persistent storage**, not just printing.

---

## 3. `json.load()` — read JSON back into Python

```python
with open("user.json") as f:
    user = json.load(f)

print(user["username"])  # karan
```

### What you get

* JSON object → Python `dict`
* JSON array → Python `list`

You can now use the data like **normal Python variables**.

---

## 4. `dump` vs `dumps` (interview classic)

| Function       | Does what                    |
| -------------- | ---------------------------- |
| `json.dump()`  | Writes JSON **to a file**    |
| `json.dumps()` | Returns JSON **as a string** |

```python
json_string = json.dumps(data)
```

Use `dumps()` when:

* Sending data over HTTP
* Logging
* Storing in DB fields

---

## 5. `load` vs `loads`

| Function       | Does what                    |
| -------------- | ---------------------------- |
| `json.load()`  | Reads JSON **from a file**   |
| `json.loads()` | Reads JSON **from a string** |

---

## 6. Saving user-generated data (real use case)

### First run (user enters name)

```python
import json

username = input("What is your name? ")

with open("user.json", "w") as f:
    json.dump(username, f)
```

---

### Second run (remember user)

```python
import json

with open("user.json") as f:
    username = json.load(f)

print(f"Welcome back, {username}")
```

This is **state persistence**, a core backend concept.

---

## 7. Real interview-level example (best one)

```python
import json

filename = "user.json"

try:
    with open(filename) as f:
        username = json.load(f)
        print(f"Welcome back, {username}")
except FileNotFoundError:
    username = input("Enter your name: ")
    with open(filename, "w") as f:
        json.dump(username, f)
    print("We'll remember you next time!")
```

### What interviewers see here

* File handling ✔
* Exception handling ✔
* Persistent storage ✔
* Clean logic ✔

---

## 8. What JSON can & cannot store (important)

### Works

```python
dict, list, str, int, float, bool, None
```

### Doesn’t work

```python
set
custom objects
functions
classes
```

If asked:

> “Why not?”

Because JSON is **language-agnostic**, not Python-specific.

---

## 9. Pretty JSON (for configs)

```python
json.dump(data, f, indent=4)
```

Used in:

* Config files
* `.json` settings
* Dev tools

---

## 10. Common mistakes (interview traps)

❌ Using `dump` instead of `dumps`
❌ Forgetting `with open()`
❌ Writing Python-only types
❌ Assuming JSON supports comments
❌ Using JSON as a database (it’s not)

---

## 11. When SHOULD you use JSON?

✔ Small data
✔ Config files
✔ User preferences
✔ Tokens / IDs
✔ Prototypes

## When NOT?

❌ Large datasets
❌ Concurrent writes
❌ Complex relations

---

## 12. One-line interview answers

* **`json.dump()`** → saves Python data to disk
* **`json.load()`** → restores it back to Python
* JSON = persistent, human-readable storage
