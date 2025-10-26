## **Control Flow & Loops**

**Topics:**
* 1-d,2-d array
* Input handling
* if, else if, else, switch
* for, while, do-while
* for...of, for...in loops
* Break & Continue

### Input handling
#### input handling in JavaScript depends on where your code is running:

##### In the browser (client-side JavaScript), or
##### In Node.js (server-side JavaScript).


```javascript

let arr = [];

for (let row = 0; row < 4; row++) {
  arr[row] = new Array(5);
}

console.log(arr[2][3]); //undefined (but accessible)

// or
let rows = 3, cols = 3;

let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
console.log(matrix);

// example
let arr = Array.from({ length: 4 }, () => Array(5).fill(0));
console.log(arr[2][3]); // 0

// iterating over 2d array
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


// Input handling in Browser (client-side)
let name = prompt("Enter your name:");
console.log("Hello, " + name);

// Input handling in Node.js (server-side)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(name) {
  console.log(`Hello, ${name}!`);
  rl.close();
});




// Conditional Statements
let marks = 85;

if (marks >= 90) console.log("A Grade");
else if (marks >= 75) console.log("B Grade");
else console.log("C Grade");

// Switch
let day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Normal day");
}

// Loops
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
}

// for...of (arrays)
let fruits = ["Apple", "Mango", "Banana"];
for (let fruit of fruits) console.log(fruit);

// for...in (objects)
let user = { name: "Karan", age: 22 };
for (let key in user) console.log(`${key}: ${user[key]}`);
```
