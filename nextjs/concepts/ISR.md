# What Is ISR (Incremental Static Regeneration)?

## Simple Definition

> **ISR is a Next.js feature that allows statically generated pages to be updated after deployment, without rebuilding the entire application.**

In short:

* Pages are **static**
* But they **can update themselves automatically**

---

## Why ISR Exists

### Problem with Static Site Generation (SSG)

With pure SSG:

* Pages are generated at build time
* After deployment, content becomes stale
* Any data change requires a **full rebuild and redeploy**

This is not practical for:

* News websites
* Blogs with frequent updates
* E-commerce product listings

---

## What ISR Solves

ISR allows:

* Static pages
* CDN caching
* Automatic regeneration in the background

You get:

* Performance of static sites
* Fresh data like dynamic sites

---

## How ISR Works (Conceptual Flow)

1. Page is generated at build time
2. HTML is cached and served to users
3. A revalidation timer is set
4. After the timer expires:

   * Next.js regenerates the page in the background
5. New users get the updated page
6. No downtime, no full rebuild

---

## ISR in Pages Router (Old Way)

### Using `getStaticProps`

```js
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 60 // seconds
  };
}
```

### What Happens

* Page is static
* Every 60 seconds, Next.js checks for updates
* Regeneration happens in background

---

## ISR in App Router (Modern Way)

ISR is controlled via `fetch()` options.

### Example

```ts
export default async function Page() {
  const res = await fetch("https://api.example.com/posts", {
    next: { revalidate: 60 }
  });

  const posts = await res.json();

  return <div>{posts.length} posts</div>;
}
```

---

## Important Detail

* First request after revalidation window:

  * Gets old content
  * Triggers background regeneration
* Next requests:

  * Get updated content

This ensures:

* No slow user requests
* No blocking

---

## ISR vs SSG vs SSR

| Feature         | SSG        | ISR                | SSR           |
| --------------- | ---------- | ------------------ | ------------- |
| HTML generation | Build time | Build + background | Every request |
| Performance     | Fast       | Very fast          | Slower        |
| Data freshness  | Fixed      | Semi-fresh         | Always fresh  |
| Server cost     | Low        | Low                | High          |

---

## When to Use ISR

* Blog posts
* Product listings
* News feeds
* Marketing pages
* Content that updates periodically

---

## When NOT to Use ISR

* Highly personalized pages
* Authentication-based dashboards
* Real-time data (chat, stock prices)

---

## SEO Impact

* Pages are statically rendered
* Search engines index HTML
* No SEO penalty
* Excellent for content websites

---

## Interview-Ready Answer

> “Incremental Static Regeneration allows Next.js to update static pages after deployment by regenerating them in the background at a specified interval, combining the performance of static sites with fresher data.”

---

## One-Line Summary

> **ISR lets static pages update themselves without rebuilding the entire app.**
