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
