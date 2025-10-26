## **Objects**

**Topics:**

* Object Creation
* Access & Modify Properties
* Object Destructuring
* Spread & Rest
* Object Methods

```javascript
let person = {
  name: "Karan",
  age: 22,
  city: "Bhopal",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.greet();

// Destructuring
const { name, city } = person;
console.log(name, city);

// Spread
person = { ...person, country: "India" };
// const newPerson = { ...person, country: "India" };
// console.log(newPerson);
console.log(person);

// Object.keys / values / entries
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// for...in loop
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for...of loop (for arrays)
const arr = [1, 2, 3, 4, 5];
for (let num of arr) {
  console.log(num);
}

```
