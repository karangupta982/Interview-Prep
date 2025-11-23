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
