# Strings and String Methods

**Topics:**

* What is a String in JavaScript
* Creating Strings (literal vs constructor)
* Common Properties (`length`)
* String Methods
* Template Literals
* String Iteration
* Conversion (split, join, etc.)

---

```javascript
// Strings are sequences of characters used to represent text.
let name = "Karan";
let city = 'Bhopal';
let info = `My name is ${name} and I live in ${city}.`;

console.log(info);

// 1. String length
console.log(name.length);

// 2. Accessing characters
console.log(name[0]); // K
console.log(name.charAt(2)); // r

// 3. Changing case
console.log(name.toUpperCase());
console.log(city.toLowerCase());

// 4. Searching
let sentence = "JavaScript is powerful";
console.log(sentence.indexOf("is"));       // 11
console.log(sentence.includes("powerful")); // true
console.log(sentence.startsWith("Java"));   // true
console.log(sentence.endsWith("ful"));      // true

// 5. Extracting parts of a string
console.log(sentence.slice(0, 10));   // JavaScript
console.log(sentence.substring(4, 10)); // Script
console.log(sentence.substr(4, 6));     // Script (deprecated but seen in old code)

// 6. Replacing text
let msg = "I love JavaScript";
let newMsg = msg.replace("JavaScript", "React");
console.log(newMsg);

// 7. Splitting and joining
let text = "apple,banana,grape";
let fruits = text.split(",");
console.log(fruits);
console.log(fruits.join(" | "));

// 8. Trimming spaces
let userInput = "   Hello World   ";
console.log(userInput.trim());

// 9. Repeating
console.log("Hi ".repeat(3));

// 10. Template literals (multiline strings)
let bio = `
Name: ${name}
City: ${city}
Skills: JavaScript, React, Node
`;
console.log(bio);
```

---

### Interview Focus Points

1. Difference between `slice()`, `substring()`, and `substr()`.
2. Why are strings immutable in JavaScript?
once a string is created, it cannot be changed — you can’t modify, delete, or replace any of its individual characters directly.

```javascript
let str = "hello";
str[0] = "H";   // trying to change the first letter
console.log(str); // "hello" — unchanged
```
Even though it looks like you’re modifying the first character, JavaScript does nothing.
The string remains the same because strings cannot be altered in place.

When you manipulate a string, JavaScript creates a new string in memory.

```javascript
let name = "karan";
name = name.toUpperCase();  // creates a new string "KARAN"
console.log(name);          // "KARAN"
```
The original "karan" string still exists separately in memory.

```javascript
let a = "abc";
let b = a;       // both point to the same string
a = a + "d";     // new string "abcd" is created
console.log(a);  // "abcd"
console.log(b);  // "abc" — unaffected
```
---

### Example Interview Practice

```javascript
// 1. Reverse a string
let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed);

// 2. Count occurrences
function countChar(s, ch) {
  return s.split(ch).length - 1;
}
console.log(countChar("banana", "a"));

// 3. Check palindrome
function isPalindrome(s) {
  let reversed = s.split("").reverse().join("");
  return s === reversed;
}
console.log(isPalindrome("madam"));

// 4. Anagram check
function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(isAnagram("listen", "silent"));
```
