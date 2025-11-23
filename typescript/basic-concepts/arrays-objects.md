# **Arrays and Objects in TypeScript**

Arrays and objects are fundamental data structures, and TypeScript enhances them by allowing strict type definitions. This ensures that elements and properties follow a predictable structure, reducing runtime errors.

---

# **1. Arrays in TypeScript**

An array can store elements of a specific type or a combination of types using unions.

---

## **1.1 Basic Typed Arrays**

### Using `type[]` syntax:

```ts
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Karan", "Ravi"];
```

### Using the generic `Array<Type>` syntax:

```ts
let scores: Array<number> = [80, 90, 100];
```

---

## **1.2 Readonly Arrays**

Prevents modifying the array.

```ts
let ids: readonly number[] = [1, 2, 3];
// ids.push(4); // Error
```

---

## **1.3 Array with Union Types**

Allows multiple types.

```ts
let mixed: (string | number | boolean)[] = ["Hello", 10, true];
```

---

## **1.4 Array of Objects**

```ts
let users: { name: string; age: number }[] = [
  { name: "Karan", age: 22 },
  { name: "Ravi", age: 25 },
];
```

---

## **1.5 Tuple Arrays**

Used when each array element is a tuple.

```ts
let pairs: [string, number][] = [
  ["A", 1],
  ["B", 2],
];
```
