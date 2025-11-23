# **Type Inference in TypeScript**

Type inference is TypeScript’s ability to automatically determine the type of a variable based on the assigned value. This eliminates the need for unnecessary type annotations and keeps code clean while maintaining type safety.

Type inference helps developers write less code while still benefiting from compile-time error checking.

---

## **1. Basic Variable Inference**

When a value is assigned to a variable, TypeScript infers its type automatically.

```ts
let message = "Hello TypeScript"; 
// inferred as string
```

```ts`
message = "Welcome";   // valid
// message = 10;       // Error: Type 'number' is not assignable to type 'string'
```

---

## **2. Number Inference**

```ts
let count = 100;
// inferred as number
```

TypeScript ensures correct type usage throughout the program.

---

## **3. Boolean Inference**

```ts
let isActive = true;
// inferred as boolean
```

---

## **4. Function Return Type Inference**

If the return type is obvious, TypeScript infers it.

```ts
function add(a: number, b: number) {
  return a + b; 
  // return type is number
}
```

Explicit annotation is optional but sometimes recommended for clarity in large codebases.

---

## **5. Parameter Types Are Not Inferred**

TypeScript does **not** infer function parameter types.
They **must** be explicitly typed.

```ts
function greet(name) {
  console.log(name.toUpperCase());
}
// Error: Parameter 'name' implicitly has an 'any' type.
```

Correct version:

```ts
function greet(name: string) {
  console.log(name.toUpperCase());
}
```

---

## **6. Inference in Arrays**

```ts
let scores = [10, 20, 30];
// inferred as number[]
```

Mixed-type arrays get inferred as a union type:

```ts
let mixed = [1, "hello", true];
// inferred as (string | number | boolean)[]
```

---

## **7. Inference in Objects**

```ts
let user = {
  name: "Karan",
  age: 22,
};
// inferred as { name: string; age: number }
```

Trying to assign incorrect types results in errors:

```ts
// user.age = "twenty"; // Error
```

---

## **8. Best Common Type Inference**

TypeScript tries to find a common type when multiple possibilities exist.

```ts
let data = [1, 2, null];
// inferred as (number | null)[]
```

---

## **9. Contextual Typing**

TypeScript infers types based on context, such as event handlers or callbacks.

### Example 1: Event handler

```ts
window.addEventListener("click", (event) => {
  event.clientX; 
  // event is inferred as MouseEvent
});
```

### Example 2: Callback

```ts
["a", "b", "c"].forEach((item) => {
  item.toUpperCase(); 
  // item is inferred as string
});
```

---

## **10. When to Use Explicit Types Instead of Inference**

Although inference is powerful, explicit types are better when:

* The type is complex or not obvious
* Public APIs and exported functions
* Large codebases where clarity matters
* When returning `Promise` or handling async code

Example:

```ts
function fetchData(): Promise<string> {
  return Promise.resolve("data");
}
```

---

## **Summary**

TypeScript’s type inference:

* Reduces the need for repetitive type annotations
* Keeps code readable while maintaining safety
* Helps catch errors early
* Works with variables, functions, objects, and arrays

Understanding how inference works is essential for writing clean and efficient TypeScript code.
