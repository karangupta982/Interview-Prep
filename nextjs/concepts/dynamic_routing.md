Below is a **clear, interview-ready explanation** of **how dynamic routing works in Next.js**, explained in a way you can **teach someone else**.

---

# How Dynamic Routing Works in Next.js

## What Is Dynamic Routing?

> **Dynamic routing allows us to create routes where part of the URL is variable**, and that variable is mapped to a parameter we can read inside the page.

Example URLs:

```
/blog/1
/blog/nextjs-routing
/user/karan
```

Here, `1`, `nextjs-routing`, and `karan` are **dynamic values**.

---

## Core Idea (Very Important)

> **Next.js uses the file/folder name to define dynamic routes.**

Dynamic parts are written using **square brackets `[ ]`**.

---

## Dynamic Routing in Pages Router (`/pages`)

### Basic Dynamic Route

Folder structure:

```
/pages/blog/[slug].js
```

This matches:

```
/blog/hello-world
/blog/react-notes
/blog/123
```

Here:

* `slug` is the dynamic parameter

---

### Accessing the Dynamic Value

Inside `[slug].js`:

```js
import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Blog: {slug}</h1>;
}
```

So:

```
/blog/hello-world → slug = "hello-world"
```

---

## Data Fetching with Dynamic Routes (Pages Router)

### Static Generation with Dynamic Routes

When using SSG, Next.js must know **which dynamic pages to generate**.

That’s where `getStaticPaths` is used.

```js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "hello-world" } },
      { params: { slug: "nextjs" } }
    ],
    fallback: false
  };
}
```

Then:

```js
export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug
    }
  };
}
```

---

### Server-Side Rendering with Dynamic Routes

```js
export async function getServerSideProps({ params }) {
  return {
    props: {
      slug: params.slug
    }
  };
}
```

* Runs on **every request**
* Always fresh data

---

## Catch-All Dynamic Routes (Pages Router)

### Syntax

```
/pages/blog/[...slug].js
```

Matches:

```
/blog/2024/nextjs/routing
```

Value received:

```js
slug = ["2024", "nextjs", "routing"]
```

---

## Optional Catch-All Routes

```
/pages/blog/[[...slug]].js
```

Matches:

```
/blog
/blog/2024
/blog/2024/nextjs
```

---

# Dynamic Routing in App Router (`/app`) – Modern Way

## Folder-Based Dynamic Routing

Folder structure:

```
/app/blog/[slug]/page.tsx
```

Matches:

```
/blog/hello-world
```

---

## Accessing Params (App Router)

```ts
export default function Blog({ params }) {
  return <h1>Blog: {params.slug}</h1>;
}
```

No router hooks needed.

---

## Async Server Components (Big Advantage)

In App Router, components can be `async`:

```ts
export default async function Blog({ params }) {
  const data = await fetch(`https://api.com/blog/${params.slug}`);
  const post = await data.json();

  return <h1>{post.title}</h1>;
}
```

* Runs on the **server**
* SEO friendly
* Less client-side JavaScript

---

## Catch-All Routes (App Router)

```
/app/blog/[...slug]/page.tsx
```

Params:

```ts
params.slug = ["2024", "nextjs", "routing"]
```

---

## Optional Catch-All (App Router)

```
/app/blog/[[...slug]]/page.tsx
```

---

## Pages Router vs App Router (Dynamic Routing)

| Feature           | Pages Router  | App Router        |
| ----------------- | ------------- | ----------------- |
| Dynamic syntax    | `[slug].js`   | `[slug]/page.tsx` |
| Params access     | `useRouter()` | `params` prop     |
| Async components  | ❌ No          | ✅ Yes             |
| Server Components | ❌ No          | ✅ Yes             |
| Cleaner code      | ❌             | ✅                 |

---

## Very Important Interview Line (Memorize)

> “Next.js implements dynamic routing using file and folder names wrapped in square brackets, allowing URL parameters to be mapped directly to page components.”

---

## One-Line Short Answer (If Interviewer Interrupts)

> “Dynamic routing in Next.js works through file-based routing where variable parts of the URL are defined using square brackets and accessed as route parameters.”

---

## Common Interview Mistakes (Avoid These)

❌ “Dynamic routing uses regex”
❌ “We manually configure routes”

✅ **Correct**

* File-based
* Convention over configuration
