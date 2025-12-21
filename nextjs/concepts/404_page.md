# How to Create a 404 Page in Next.js

A **404 page** is shown when:

* A user visits a route that does not exist
* A dynamic route parameter is invalid
* Data for a page is not found

Next.js handles this **automatically**, but allows **customization**.

---

## 1. 404 Page in Pages Router (`/pages`)

### Default Behavior

* Next.js automatically shows a default 404 page
* No setup required

---

### Custom 404 Page (Pages Router)

To create a custom 404 page, create this file:

```
pages/404.js
```

### Example

```js
export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
```

### How It Works

* Next.js automatically detects `pages/404.js`
* It is served whenever a route is not found
* No routing configuration needed

---

### Returning 404 from Data Fetching (Pages Router)

If data is missing in `getStaticProps` or `getServerSideProps`, you can trigger a 404.

```js
export async function getStaticProps() {
  const data = null;

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { data }
  };
}
```

Next.js will:

* Show the 404 page
* Set correct HTTP status code

---

## 2. 404 Page in App Router (`/app`) – Modern Way

In the App Router, 404 handling is **more explicit and powerful**.

---

### Creating a Global 404 Page

Create this file:

```
app/not-found.tsx
```

### Example

```tsx
export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>This page could not be found.</p>
    </div>
  );
}
```

### How It Works

* Automatically used for all unmatched routes
* Server-rendered by default
* SEO-friendly

---

## 3. Triggering a 404 Programmatically (App Router)

In App Router, you **explicitly trigger a 404** using `notFound()`.

### Example with Dynamic Route

```
app/blog/[slug]/page.tsx
```

```tsx
import { notFound } from "next/navigation";

export default async function BlogPost({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  return <h1>{post.title}</h1>;
}
```

### What Happens

* Rendering stops immediately
* Next.js renders `app/not-found.tsx`
* HTTP 404 status is returned

---

## 4. Nested 404 Pages (App Router Feature)

You can define **route-specific 404 pages**.

Example:

```
app/blog/not-found.tsx
```

This 404 page will be used **only for `/blog/*` routes**.

---

## 5. Pages Router vs App Router (404 Handling)

| Feature            | Pages Router     | App Router          |
| ------------------ | ---------------- | ------------------- |
| Default 404        | Yes              | Yes                 |
| Custom global 404  | `pages/404.js`   | `app/not-found.tsx` |
| Programmatic 404   | `notFound: true` | `notFound()`        |
| Route-specific 404 | No               | Yes                 |
| Streaming support  | No               | Yes                 |

---

## 6. SEO and HTTP Status Code

Next.js:

* Returns proper **404 HTTP status**
* Prevents indexing of invalid pages
* Works correctly with search engines

You do not need to manually set status codes.

---

## 7. Interview-Ready Explanation (Say This)

> “In Next.js, a custom 404 page is created by adding `pages/404.js` in the Pages Router or `app/not-found.tsx` in the App Router. In the App Router, we can also programmatically trigger a 404 using the `notFound()` function, which stops rendering and displays the custom 404 page with the correct HTTP status.”

---

## 8. Common Mistakes (Avoid These)

* Manually redirecting to `/404`
* Using client-side routing for 404 logic
* Forgetting to handle missing data in dynamic routes

---

## One-Line Summary

> **Next.js provides built-in 404 handling, and custom 404 pages can be created declaratively without manual routing or status code management.**
