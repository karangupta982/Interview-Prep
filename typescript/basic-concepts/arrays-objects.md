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

---

# **2. Objects in TypeScript**

Objects can be strongly typed using inline annotations, type aliases, or interfaces.

---

## **2.1 Inline Object Types**

```ts
let user: { name: string; age: number } = {
  name: "Karan",
  age: 22,
};
```

---

## **2.2 Optional Object Properties**

Use `?` to mark optional fields.

```ts
let employee: {
  name: string;
  department?: string; 
} = {
  name: "Rahul",
};
```

---

## **2.3 Readonly Properties**

Prevents modifying a property after initialization.

```ts
let product: {
  readonly id: number;
  name: string;
} = {
  id: 1,
  name: "Book",
};

// product.id = 2; // Error
```

---

## **2.4 Object Type with Union or Literal Types**

```ts
type Status = "active" | "inactive";

let account: {
  username: string;
  status: Status;
} = {
  username: "karan",
  status: "active",
};
```

---

## **2.5 Object with Index Signatures**

Used when property names are unknown at compile time.

```ts
let salaries: {
  [employee: string]: number;
} = {
  karan: 50000,
  ravi: 60000,
};
```

---

## **2.6 Nested Objects**

Objects can contain other typed objects.

```ts
let profile: {
  name: string;
  address: {
    city: string;
    pin: number;
  };
} = {
  name: "Karan",
  address: {
    city: "Bhopal",
    pin: 462001,
  },
};
```

---

## **2.7 Combining Arrays and Objects**

```ts
let students: { id: number; name: string; passed: boolean }[] = [
  { id: 1, name: "Karan", passed: true },
  { id: 2, name: "Ravi", passed: false },
];
```

---

# **3. Summary**

Arrays and objects become more reliable and maintainable with TypeScript due to:

* Strict type rules
* Optional and readonly properties
* Support for unions, literals, and nested structures
* Clear contracts for complex data

Understanding typed arrays and objects is essential before moving into more advanced TypeScript concepts like interfaces and generics.
