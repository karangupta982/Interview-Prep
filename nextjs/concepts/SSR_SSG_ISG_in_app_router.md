# How SSG, SSR, and ISR Work in the App Router (Next.js)

## First: The Biggest Mental Shift (VERY IMPORTANT)

### Pages Router

* You **tell Next.js what to do** using special functions
  (`getStaticProps`, `getServerSideProps`, `getStaticPaths`)

### App Router

* You **don’t use those functions at all**
* Next.js decides rendering **based on how you fetch data**

> **In App Router, data-fetching behavior controls rendering strategy**

This is the key idea.

---

# Rendering Is Controlled by `fetch()` Behavior

In the App Router:

* Components are **Server Components by default**
* You fetch data **directly inside components**
* Next.js analyzes the fetch and decides:

  * Static
  * Dynamic (SSR)
  * Revalidated (ISR)

---

# 1. Static Site Generation (SSG) in App Router

## What SSG Means in App Router

> **If data can be determined at build time, Next.js generates static HTML.**

### Default Behavior

* `fetch()` is **cached by default**
* Cached fetch = **SSG**

---

## Example: SSG Page

```ts
// app/blog/page.tsx

export default async function BlogPage() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return (
    <ul>
      {posts.map((p: any) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}
```

### What Happens Internally

1. You run `npm run build`
2. Next.js runs this component on the server
3. `fetch()` result is cached
4. HTML is generated
5. HTML is reused for every user

✅ Fast
✅ SEO-friendly
✅ CDN-ready

---

## Interview Line

> “In the App Router, static generation happens automatically when data fetching is cached.”

---

# 2. Server-Side Rendering (SSR) in App Router

## What SSR Means in App Router

> **If data must be fresh on every request, Next.js renders the page per request.**

---

## How to Force SSR

You do this by disabling caching:

```ts
fetch(url, { cache: "no-store" })
```

---

## Example: SSR Page

```ts
// app/profile/page.tsx

export default async function ProfilePage() {
  const res = await fetch("https://api.example.com/profile", {
    cache: "no-store"
  });
  const profile = await res.json();

  return <h1>Welcome {profile.name}</h1>;
}
```

---

## What Happens Internally

1. User requests page
2. Server executes component
3. Fetch runs **every time**
4. Fresh HTML is generated
5. Sent to browser

✅ Always fresh data
❌ Slower than SSG
❌ Higher server cost

---

## Interview Line

> “In App Router, SSR is achieved by disabling fetch caching using `cache: 'no-store'`.”

---

# 3. Incremental Static Regeneration (ISR) in App Router

## What ISR Means in App Router

> **The page is static, but it revalidates itself after a certain time.**

---

## How to Enable ISR

You use the `revalidate` option in `fetch()`:

```ts
fetch(url, { next: { revalidate: 60 } })
```

---

## Example: ISR Page

```ts
// app/news/page.tsx

export default async function NewsPage() {
  const res = await fetch("https://api.example.com/news", {
    next: { revalidate: 60 } // seconds
  });
  const news = await res.json();

  return (
    <ul>
      {news.map((n: any) => (
        <li key={n.id}>{n.title}</li>
      ))}
    </ul>
  );
}
```

---

## What Happens Internally

1. Page is generated at build time
2. HTML is cached
3. After 60 seconds:

   * Next.js regenerates page in background
4. Users get updated content

✅ Fast like static
✅ Data stays fresh
✅ No full rebuild

---

## Interview Line

> “ISR in App Router is enabled using the `revalidate` option in fetch, allowing background regeneration.”

---

# Dynamic Routes in App Router (SSG / SSR / ISR)

## Example Folder

```
app/blog/[slug]/page.tsx
```

---

## SSG Dynamic Route Example

```ts
export async function generateStaticParams() {
  return [
    { slug: "react" },
    { slug: "nextjs" }
  ];
}

export default async function BlogPost({ params }) {
  const post = await fetch(
    `https://api.com/blog/${params.slug}`
  ).then(res => res.json());

  return <h1>{post.title}</h1>;
}
```

### What `generateStaticParams` Does

> It replaces `getStaticPaths`

* Tells Next.js which dynamic routes to pre-build
* Runs at build time
* Required for static dynamic routes

---

# Summary Table (VERY IMPORTANT)

| Concept       | Pages Router         | App Router             |
| ------------- | -------------------- | ---------------------- |
| SSG           | `getStaticProps`     | cached `fetch()`       |
| SSR           | `getServerSideProps` | `cache: "no-store"`    |
| ISR           | `revalidate` in GSP  | `next.revalidate`      |
| Dynamic paths | `getStaticPaths`     | `generateStaticParams` |
| Data fetching | Outside component    | Inside component       |

---

# Final Interview-Ready Explanation (Say This)

> “In the App Router, rendering strategy is determined by data-fetching behavior. Cached fetches result in static generation, disabling cache enables server-side rendering, and revalidation enables incremental static regeneration. Dynamic routes use `generateStaticParams` instead of `getStaticPaths`.”

---

# One-Sentence Memory Hook

> **Pages Router uses functions to control rendering; App Router uses fetch behavior.**
