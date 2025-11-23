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
