### 1. Using `reverse()` method (in-place)

This is the **best and most efficient** way if you want to modify the original list.

```python
nums = [1, 2, 3, 4, 5]
nums.reverse()
print(nums)
```

Output:

```text
[5, 4, 3, 2, 1]
```

* Changes the original list
* Time complexity: O(n)
* Space complexity: O(1)

---

### 2. Using slicing (creates a new list)

This is very common and clean.

```python
nums = [1, 2, 3, 4, 5]
reversed_nums = nums[::-1]
print(reversed_nums)
```

* Original list remains unchanged
* Time complexity: O(n)
* Space complexity: O(n)

---

### 3. Using `reversed()` function

Returns an iterator, not a list.

```python
nums = [1, 2, 3, 4, 5]
reversed_nums = list(reversed(nums))
print(reversed_nums)
```

* Original list unchanged
* Useful in loops
* Time complexity: O(n)

---

### 4. Using a loop (manual approach – good for understanding)

Not recommended in real code, but useful for interviews.

```python
nums = [1, 2, 3, 4, 5]
result = []

for i in range(len(nums) - 1, -1, -1):
    result.append(nums[i])

print(result)
```

---

### Which one should you use?

* **Modify same list** → `reverse()`
* **Need a new list** → slicing `[::-1]`
* **Iterating in reverse** → `reversed()`

---

## 1. Using slicing 

Reverse elements **from index `l` to `r` (inclusive)`**.

```python
nums = [1, 2, 3, 4, 5, 6, 7]

l, r = 2, 5   # reverse from index 2 to 5

nums[l:r+1] = nums[l:r+1][::-1]
print(nums)
```

Output:

```text
[1, 2, 6, 5, 4, 3, 7]
```

* Modifies the original list
* Easy to read
* Common in real code

---

## 2. Using two-pointer technique (best for interviews)

This is the **in-place algorithm** interviewers like.

```python
nums = [1, 2, 3, 4, 5, 6, 7]

l, r = 2, 5

while l < r:
    nums[l], nums[r] = nums[r], nums[l]
    l += 1
    r -= 1

print(nums)
```

* Time complexity: O(n)
* Space complexity: O(1)
* Shows strong understanding

---

## 3. Using `reversed()` (less common but valid)

```python
nums = [1, 2, 3, 4, 5, 6, 7]

l, r = 2, 5
nums[l:r+1] = reversed(nums[l:r+1])

print(nums)
```

---

## When to use which?

* **Quick solution** → slicing
* **Interview / DSA problems** → two pointers
* **Readable Pythonic code** → slicing or `reversed()`
