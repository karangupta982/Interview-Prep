# **Basic Types in TypeScript**

TypeScript introduces static typing to JavaScript by allowing developers to define the specific types of variables, function parameters, return values, and more. Understanding basic types is essential for writing predictable and error-free code.

---

## **1. Number**

Represents all numeric values, including integers and floating-point numbers.

```ts
let age: number = 21;
let price: number = 99.5;
```

---

## **2. String**

Represents textual data enclosed in single quotes, double quotes, or backticks.

```ts
let firstName: string = "Karan";
let city: string = "Bhopal";
```

---

## **3. Boolean**

Stores `true` or `false` values.

```ts
let isLoggedIn: boolean = true;
let isStudent: boolean = false;
```

---

## **4. Null and Undefined**

Both represent the absence of a value.

```ts
let emptyValue: null = null;
let notAssigned: undefined = undefined;
```

These are **subtypes** of all other types when `--strictNullChecks` is disabled.
With strict mode enabled, they must be used explicitly.

---

## **5. Any**

`any` disables all type checking for a value.
It should be used sparingly.

```ts
let data: any = 10;
data = "Hello";
data = true;
```

---

## **6. Unknown**

`unknown` is safer than `any` because it requires type checking before use.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

## **7. Never**

Represents a value that never occurs (e.g., functions that throw errors or never return).

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## **8. Void**

Used for functions that do not return any value.

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

---

## **9. Arrays**

Typed arrays ensure that only elements of a specific type are stored.

### Using `type[]` syntax:

```ts
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Karan", "Ravi"];
```

### Using `Array<Type>` generic syntax:

```ts
let scores: Array<number> = [80, 90];
```

---

## **10. Objects**

Objects can have typed structures.

```ts
let user: { name: string; age: number } = {
  name: "Karan",
  age: 22,
};
```

Optional properties:

```ts
let employee: { name: string; department?: string } = {
  name: "Rahul",
};
```

---

## **11. Tuple**

Represents a fixed-length array with specific types at each index.

```ts
let person: [string, number] = ["Karan", 22];
```

---

## **12. Enum**

Enums create a set of named constants.

```ts
enum Status {
  Active,
  Inactive,
  Pending,
}

let currentStatus: Status = Status.Active;
```

---

## **13. Union Types**

Allows a variable to store more than one type.

```ts
let result: number | string;
result = 100;
result = "pass";
```

---

## **14. Literal Types**

Defines exact allowed values.

```ts
let direction: "up" | "down" | "left" | "right";
direction = "up";
```

---

## **15. Type Inference**

TypeScript automatically infers types when possible.

```ts
let country = "India"; // inferred as string
// country = 91; // Error
```

---

## **Summary**

Basic types form the foundation of TypeScript. They ensure:

* Predictability
* Type safety
* Early error detection
* Clean and maintainable code

Mastering these types makes it easier to work with more advanced TypeScript features later.
