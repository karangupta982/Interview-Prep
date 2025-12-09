# tree.md

# 1. Introduction

A **tree** is a **hierarchical, non-linear data structure** composed of nodes connected by edges.
It represents parent–child relationships (root → children → grandchildren).

Key components:

* **Root** → topmost node
* **Child / Parent** → direct connections
* **Leaf** → node with no children
* **Height / Depth** → distance-based measurements
* **Subtree** → any node and its descendants

Trees are used in file systems, compilers, databases, search engines, routers, XML/JSON representation, and more.

---

# 2. Properties & Characteristics

| Property                    | Explanation                              |
| --------------------------- | ---------------------------------------- |
| Hierarchical                | Not sequential; branching structure      |
| Connected & acyclic         | No loops, exactly one path between nodes |
| Rooted                      | Has a starting node (root)               |
| Recursive structure         | Subtrees are trees themselves            |
| No fixed number of children | Unlike binary trees                      |
| Python implementation       | Using classes                            |

---

# 3. Syntax & Initialization

### Basic Node Structure

```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.children = []    # list of child nodes
```

### Example Tree Construction

```python
root = TreeNode(1)
child1 = TreeNode(2)
child2 = TreeNode(3)

root.children.append(child1)
root.children.append(child2)

child1.children.append(TreeNode(4))
child1.children.append(TreeNode(5))
```

---

# 4. Iteration Techniques

## DFS (Depth-First Search)

### Preorder Traversal (root → children)

```python
def dfs_preorder(node):
    if not node:
        return
    print(node.data)
    for child in node.children:
        dfs_preorder(child)
```

### Postorder Traversal (children → root)

```python
def dfs_postorder(node):
    if not node:
        return
    for child in node.children:
        dfs_postorder(child)
    print(node.data)
```

---

## BFS (Breadth-First Search)

```python
from collections import deque

def bfs(root):
    q = deque([root])
    while q:
        node = q.popleft()
        print(node.data)
        for child in node.children:
            q.append(child)
```

---

# 5. Common Operations

(Code + note + time complexity)

---

## Count Nodes

```python
def count_nodes(node):
    if not node:
        return 0
    return 1 + sum(count_nodes(child) for child in node.children)
```

Note: Recursive count of all descendants.
**Time: O(n)**

---

## Search for a Value

```python
def search(node, target):
    if not node:
        return False
    if node.data == target:
        return True
    return any(search(child, target) for child in node.children)
```

Note: DFS-based.
**Time: O(n)**

---

## Height of Tree

```python
def height(node):
    if not node:
        return -1
    if not node.children:
        return 0
    return 1 + max(height(child) for child in node.children)
```

Note: Height = longest path from root to leaf.
**Time: O(n)**

---

## Insert a Child Node

```python
parent.children.append(TreeNode(value))
```

Note: Insert at end of children list.
**Time: O(1)**

---

## Delete Subtree (Remove Child)

```python
parent.children = [c for c in parent.children if c != target]
```

Note: Rebuilds child list without selected node.
**Time: O(k)** (k = number of children)

---

# 7. Internal Implementation Details

* Each node stores data + a list of children.
* Trees in Python require manual class-based implementation.
* Trees are recursive data structures → many operations are naturally recursive.
* Tree depth affects recursion depth; deep trees may hit recursion limits.
* Unlike arrays/lists, trees do not use contiguous memory.

---

# 8. When to Use This Data Structure

Use a tree when:

* Representing hierarchical data (DOM, directories).
* Organizing data with parent–child relationships.
* Performing prefix-based or structured searching.
* Implementing parsers, interpreters, compilers.

Avoid when:

* You require random access → use list/array.
* You need simple linear structure → list/linked list is simpler.

---

# 9. Time Complexity Summary

| Operation           | Complexity                    |
| ------------------- | ----------------------------- |
| Traversal (DFS/BFS) | O(n)                          |
| Search              | O(n)                          |
| Insert child        | O(1)                          |
| Delete child        | O(k) (k = number of children) |
| Compute height      | O(n)                          |

---

# 10. Interview Concepts

### Why are trees considered hierarchical?

Because nodes branch into subtrees, forming levels rather than a single linear chain.

### Why DFS vs BFS?

* **DFS** explores deep structures (use recursion/stack).
* **BFS** explores level-wise (uses queue).

### Why doesn't Python have a built-in tree?

Use-cases vary (n-ary, binary, trie), so Python keeps it flexible via classes.

### What is recursion depth and why does it matter?

Python limits recursion; deep trees can hit `RecursionError`.

### Difference between tree and graph?

Tree is an **acyclic connected graph** with a root; graph may contain cycles and no hierarchy.

---

# 11. Theoretical Interview Questions (with answers)

### Q1: Why is tree traversal O(n)?

Because each node must be visited exactly once.

### Q2: What is the difference between height and depth?

* **Height:** distance from node to its deepest leaf.
* **Depth:** distance from root to the node.

### Q3: Why can trees naturally be implemented using recursion?

Their structure is recursive; each subtree is a small tree.

### Q4: What is a leaf node?

A node with no children.

### Q5: Why are trees important in compilers?

Abstract Syntax Trees (AST) represent program structure.
