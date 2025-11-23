# **Functions in TypeScript**

TypeScript enhances functions by enabling type annotations for parameters, return values, optional parameters, default parameters, and more. This ensures predictable behavior and improves code reliability.

---

## **1. Function Parameter Types**

Each parameter should have an explicit type.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

If incorrect types are passed, TypeScript throws a compile-time error.

---

## **2. Return Type Annotations**

Return types can be inferred, but defining them explicitly improves clarity.

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

---

## **3. Optional Parameters**

Use `?` to mark a parameter as optional.

```ts
function logMessage(message: string, user?: string) {
  return user ? `${user}: ${message}` : message;
}

logMessage("Task completed");
logMessage("Task completed", "Karan");
```

Optional parameters must appear **after** required ones.

---

## **4. Default Parameters**

Provides a default value if no argument is passed.

```ts
function multiply(a: number, b: number = 2): number {
  return a * b;
}

multiply(10); // 20
multiply(10, 5); // 50
```

---

## **5. Function Type Aliases**

Define reusable function types.

```ts
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (x, y) => x - y;
```

---

## **6. Arrow Functions**

Arrow functions support full type annotations.

```ts
const divide = (a: number, b: number): number => {
  return a / b;
};
```

Inference works if parameters are known from context:

```ts
const numbers = [1, 2, 3];

numbers.map((num) => num * 2); 
// num inferred as number
```

---

## **7. Void Return Type**

Use `void` when a function does not return any value.

```ts
function printMessage(msg: string): void {
  console.log(msg);
}
```

---

## **8. Never Return Type**

Used when a function never returns (e.g., always throws).

```ts
function throwError(): never {
  throw new Error("Unexpected error");
}
```

---

## **9. Rest Parameters**

Allows functions to accept multiple arguments.

```ts
function sumAll(...nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

sumAll(1, 2, 3, 4); // 10
```

---

## **10. Function Overloading**

Allows multiple parameter signatures for one function.

Example:

```ts
function format(input: string): string;
function format(input: number): string;
function format(input: string | number): string {
  return input.toString();
}

format("hello");
format(100);
```

Overloading ensures precise typing for different input cases.

---

## **11. Anonymous Functions**

TypeScript uses contextual typing to infer types.

```ts
const colors = ["red", "blue", "green"];

colors.forEach((color) => {
  color.toUpperCase(); 
});
```

---

## **12. Callback Functions**

Callbacks receive type inference automatically.

```ts
function processValue(value: number, callback: (n: number) => void) {
  callback(value);
}

processValue(10, (v) => console.log(v));
```

---

## **Summary**

TypeScript enhances functions by providing:

* Strong parameter and return type safety
* Optional, default, and rest parameters
* Reusable function types
* Arrow functions with inference
* Overloading for multiple signatures

Understanding these concepts ensures predictable and maintainable code.
