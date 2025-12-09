# Python Data Structures (Short Summary Table)

| Data Structure                  | Very Short Description                                        |
| ------------------------------- | ------------------------------------------------------------- |
| **list**                        | Ordered, mutable sequence.                                    |
| **tuple**                       | Ordered, immutable sequence.                                  |
| **dict**                        | Key–value hash map (insertion ordered).                       |
| **set**                         | Unordered collection of unique elements.                      |
| **frozenset**                   | Immutable version of set.                                     |
| **stack (list/deque)**          | LIFO structure (push/pop from end).                           |
| **queue (deque/Queue)**         | FIFO structure (enqueue/dequeue).                             |
| **deque**                       | Double-ended queue with O(1) append/pop on both ends.         |
| **priority queue (heapq)**      | Min-heap based priority queue.                                |
| **min-heap**                    | Smallest element always on top (heapq).                       |
| **max-heap**                    | Largest element on top (via negation trick).                  |
| **linked list (custom)**        | Node-based sequential structure.                              |
| **doubly linked list (custom)** | Linked list with prev/next pointers.                          |
| **tree (custom)**               | Hierarchical node structure.                                  |
| **binary tree**                 | Each node has at most two children.                           |
| **binary search tree (BST)**    | Sorted binary tree for fast search.                           |
| **trie (prefix tree)**          | Efficient structure for string prefixes.                      |
| **graph**                       | Nodes connected by edges; adjacency list/matrix.              |
| **hash map / hash table**       | Fast key lookup using hashing (dict internals).               |
| **Counter**                     | Dictionary subclass for frequency counting.                   |
| **defaultdict**                 | Dict with default factory for missing keys.                   |
| **OrderedDict**                 | Dictionary maintaining insert order (historically important). |
| **NamedTuple**                  | Lightweight tuple with named fields.                          |
| **dataclass**                   | Auto-generated class for structured data.                     |
| **PriorityQueue (queue)**       | Thread-safe priority queue.                                   |
| **array.array**                 | Compact, typed array (C-like).                                |

---

# Optional / Advanced Python Implementations

| Data Structure                | Very Short Description                    |
| ----------------------------- | ----------------------------------------- |
| **Segment Tree**              | Range queries (sum/min/max).              |
| **Fenwick Tree (BIT)**        | Efficient prefix sums.                    |
| **Union-Find (DSU)**          | Tracks connected components.              |
| **AVL Tree / Red-Black Tree** | Self-balancing BST variants.              |
| **LRU Cache**                 | Cache eviction, often via OrderedDict.    |
| **Matrix**                    | 2D arrays for DP/graph problems.          |
| **Sparse Matrix**             | Space-efficient matrix with mostly zeros. |
| **Interval Tree**             | Efficient overlapping interval queries.   |
| **Bloom Filter**              | Probabilistic membership test.            |
| **Suffix Array**              | Fast string pattern processing.           |
| **Suffix Tree**               | Tree for substring operations.            |
