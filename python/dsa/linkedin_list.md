# linked_list.md

# 1. Introduction

A **linked list** is a **linear data structure** where elements (nodes) are linked using pointers instead of contiguous memory.
Each node stores:

* **data**
* **next pointer** (reference to next node)

Python does **not** have a built-in linked list → it is implemented manually using classes.

Types:

* **Singly Linked List (SLL)** → next pointer only
* **Doubly Linked List (DLL)** → next + prev pointer
* **Circular Linked List (optional)**

---

# 2. Properties & Characteristics

| Property                | Explanation                                |
| ----------------------- | ------------------------------------------ |
| Dynamic size            | No preallocation; grows/shrinks easily     |
| Non-contiguous memory   | Nodes stored anywhere; linked via pointers |
| No random access        | Must traverse to reach index → O(n)        |
| Fast insertion/deletion | If position known → O(1)                   |
| Slow search             | O(n)                                       |
| Python implementation   | Using classes & Node objects               |

---

# 3. Syntax & Initialization

### Node class

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
```

### Creating a linked list manually

```python
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
```

### LinkedList wrapper class

```python
class LinkedList:
    def __init__(self):
        self.head = None
```

---

# 4. Iteration Techniques

### Traverse the list

```python
cur = head
while cur:
    print(cur.data)
    cur = cur.next
```

### Length of a linked list

```python
count = 0
cur = head
while cur:
    count += 1
    cur = cur.next
```

### Using generator

```python
def iterate(head):
    cur = head
    while cur:
        yield cur.data
        cur = cur.next
```

---

# 5. Common Operations

(With code + note + time complexity)

---

## Insert at beginning

```python
node = Node(10)
node.next = head
head = node
```

Note: Direct pointer change.
**Time: O(1)**

---

## Insert at end

```python
cur = head
while cur.next:
    cur = cur.next
cur.next = Node(10)
```

Note: Requires traversal (unless tail stored).
**Time: O(n)**

---

## Insert at index

```python
cur = head
for _ in range(index - 1):
    cur = cur.next
node = Node(10)
node.next = cur.next
cur.next = node
```

Note: Requires traversal.
**Time: O(n)**

---

## Search element

```python
cur = head
while cur:
    if cur.data == target:
        break
    cur = cur.next
```

Note: Linear search.
**Time: O(n)**

---

## Delete at beginning

```python
head = head.next
```

Note: Drop first node.
**Time: O(1)**

---

## Delete at end

```python
cur = head
while cur.next.next:
    cur = cur.next
cur.next = None
```

Note: Requires traversal.
**Time: O(n)**

---

## Delete by value

```python
cur = head
if head.data == x:
    head = head.next
else:
    while cur.next and cur.next.data != x:
        cur = cur.next
    if cur.next:
        cur.next = cur.next.next
```

Note: Must search first.
**Time: O(n)**

---

# 7. Internal Implementation Details

* Each node stores **data + pointer**.
* Nodes are stored **non-contiguously**, unlike arrays/lists.
* Performance of LL depends on pointer chasing → slower cache locality.
* Useful when insertions/deletions are frequent.
* Searching/indexing always takes O(n).

---

# 8. When to Use This Data Structure

Use Linked List when:

* You need many insertions/deletions at known positions (especially head).
* Memory is fragmented / dynamic.
* You implement stacks, queues, adjacency lists, hash table chaining.

Avoid when:

* You need fast search or indexing.
* You need good locality of reference → arrays/lists are better.

---

# 9. Time Complexity Summary

| Operation       | Complexity                    |
| --------------- | ----------------------------- |
| Access by index | O(n)                          |
| Search          | O(n)                          |
| Insert at head  | O(1)                          |
| Insert at tail  | O(n) unless tail pointer kept |
| Delete at head  | O(1)                          |
| Delete at tail  | O(n)                          |
| Iterate         | O(n)                          |

---

# 10. Interview Concepts

### Why linked lists have O(1) insertion but O(n) search?

Insert only requires pointer changes; searching requires traversal.

### Why don't Python lists behave like linked lists?

Python lists are **dynamic arrays**, not LLs → fast indexing, slow mid-insertion.

### Why are linked lists bad for caching?

Nodes are scattered in memory → poor locality → slower.

### Difference between array and linked list?

Array = contiguous, O(1) access.
Linked list = scattered, O(n) access, but O(1) insert/delete.

### Why does reverse linked list appear often in interviews?

Tests pointer manipulation and understanding of LL structure.

---

# 11. Theoretical Interview Questions (with answers)

### Q1: Why does linked list deletion take O(1)?

Because removal only updates pointers; no shifting.

### Q2: Why is indexing O(n)?

Must traverse from head to reach any position.

### Q3: What is the advantage of LL over arrays?

Efficient insert/delete, flexible size.

### Q4: Why do LL operations have poor cache performance?

Non-contiguous nodes cause more cache misses.

### Q5: What is a sentinel node?

A dummy head/tail node used to simplify boundary conditions.
