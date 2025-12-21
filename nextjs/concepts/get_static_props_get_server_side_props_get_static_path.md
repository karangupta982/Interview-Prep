>  Important context first
> These functions belong to the **Pages Router (`/pages`)** in Next.js.
> They are **not used in the App Router**.

---

# Why These Functions Exist (Big Picture)

In traditional React:

* Data is fetched **in the browser**
* Rendering happens **after JavaScript loads**

In Next.js (Pages Router):

* Data can be fetched **before the page reaches the browser**
* HTML is generated **with data already present**

These three functions tell Next.js:

* **WHEN** to fetch data
* **WHERE** to fetch data (server/build)
* **HOW OFTEN** to generate the page

---

# 1. `getStaticProps` (Static Site Generation)

## What `getStaticProps` Does

> **`getStaticProps` fetches data at build time and generates static HTML.**

That HTML is:

* Pre-built
* Cached
* Reused for every user

---

## When `getStaticProps` Runs

* Runs **only at build time**
* Never runs in the browser
* Runs on the server

---

## How It Works (Step-by-Step)

1. You run `npm run build`
2. Next.js executes `getStaticProps`
3. Data is fetched (API / DB)
4. HTML is generated with that data
5. HTML is stored and served via CDN

---

## Code Example

```js
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts
    }
  };
}

export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map(p => <li key={p.id}>{p.title}</li>)}
    </ul>
  );
}
```

---

## Key Characteristics

* Very fast
* Best SEO
* No server load per request
* Data is **fixed until next build**

---

## Real-World Use Cases

* Blogs
* Documentation
* Landing pages
* Marketing websites

---

## Interview Line

> “`getStaticProps` is used to fetch data at build time and generate static pages that are fast, cacheable, and SEO-friendly.”

---

# 2. `getServerSideProps` (Server-Side Rendering)

## What `getServerSideProps` Does

> **`getServerSideProps` fetches data on every request and generates HTML dynamically.**

Each user request:

* Triggers server execution
* Returns fresh HTML

---

## When `getServerSideProps` Runs

* Runs **on every request**
* Runs on the server
* Never runs in the browser

---

## How It Works (Step-by-Step)

1. User requests a page
2. Server executes `getServerSideProps`
3. Data is fetched
4. HTML is generated
5. HTML is sent to the browser

---

## Code Example

```js
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/profile");
  const profile = await res.json();

  return {
    props: {
      profile
    }
  };
}

export default function Profile({ profile }) {
  return <h1>{profile.name}</h1>;
}
```

---

## Key Characteristics

* Always fresh data
* SEO friendly
* Slower than SSG
* Higher server cost

---

## Real-World Use Cases

* Dashboards
* Authenticated pages
* Personalized content
* Frequently changing data

---

## Interview Line

> “`getServerSideProps` is used when we need fresh data on every request, such as user-specific or real-time content.”

---

# 3. `getStaticPaths` (For Dynamic Routes with SSG)

## Why `getStaticPaths` Is Needed

Dynamic routes look like:

```
/blog/[slug].js
```

Question:

> How does Next.js know which slugs to generate at build time?

Answer:

> **Using `getStaticPaths`.**

---

## What `getStaticPaths` Does

> **It tells Next.js which dynamic routes should be statically generated.**

---

## When It Runs

* Runs at build time
* Runs on the server
* Used **only with `getStaticProps`**

---

## How It Works (Step-by-Step)

1. Next.js executes `getStaticPaths`
2. It returns a list of route parameters
3. Next.js generates HTML for each route
4. Pages are stored as static files

---

## Code Example

```js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "hello-world" } },
      { params: { slug: "nextjs-routing" } }
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

## `fallback` Explained (Important)

### `fallback: false`

* Only predefined paths exist
* Other routes → 404

### `fallback: true`

* Page is generated on first request
* Then cached

### `fallback: "blocking"`

* User waits
* Page is generated before response
* Best for SEO

---

## Real-World Use Cases

* Blog posts
* Product pages
* Documentation pages

---

## Interview Line

> “`getStaticPaths` defines which dynamic routes should be generated at build time when using static generation.”

---

# Relationship Between These Three (Very Important)

| Function             | Purpose                       |
| -------------------- | ----------------------------- |
| `getStaticProps`     | Fetch data at build time      |
| `getServerSideProps` | Fetch data on every request   |
| `getStaticPaths`     | Define dynamic routes for SSG |

---

# Golden Interview Summary (Say This)

> “Next.js provides `getStaticProps` for build-time data fetching, `getServerSideProps` for request-time data fetching, and `getStaticPaths` to define dynamic routes when using static generation.”

---

# Common Interview Mistakes (Avoid These)

❌ “These run in the browser”
❌ “They are used in App Router”
❌ “`getStaticPaths` works alone”

✅ Correct:

* Server only
* Pages Router only
* `getStaticPaths` works with `getStaticProps`

---

# What Problem Does `getStaticPaths` Solve?

### Scenario

You want to create a blog.

URLs look like this:

```
/blog/react-basics
/blog/nextjs-routing
/blog/ssr-vs-ssg
```

Your file:

```
/pages/blog/[slug].js
```

### Big Question

At **build time**, Next.js must generate HTML files.

But…

> **How does Next.js know which `slug` values exist?**

It cannot guess.

👉 **That’s why `getStaticPaths` exists.**

---

# Simple Definition (Memorize This)

> **`getStaticPaths` tells Next.js which dynamic routes should be pre-generated at build time.**

---

# Real-World Analogy (Very Helpful)

Imagine printing ID cards.

* You have a **template** → `[slug].js`
* You need a **list of people** → `getStaticPaths`
* You print **one card per person**

Without the list, you can’t print anything.

---

# Complete Working Example (Blog)

---

## Folder Structure

```
pages/
 └── blog/
     └── [slug].js
```

---

## Step 1: Data Source (Pretend Database)

```js
const posts = [
  { slug: "react-basics", title: "React Basics" },
  { slug: "nextjs-routing", title: "Next.js Routing" },
  { slug: "ssr-vs-ssg", title: "SSR vs SSG" }
];
```

---

## Step 2: `getStaticPaths` (MOST IMPORTANT PART)

```js
export async function getStaticPaths() {
  // 1. Fetch all possible dynamic values (slugs)
  const posts = [
    { slug: "react-basics" },
    { slug: "nextjs-routing" },
    { slug: "ssr-vs-ssg" }
  ];

  // 2. Convert data into the required format
  const paths = posts.map(post => ({
    params: {
      slug: post.slug // this matches [slug].js
    }
  }));

  // 3. Return paths to Next.js
  return {
    paths,
    fallback: false
  };
}
```

---

## What Exactly Is Happening Here?

### Line-by-Line Explanation

```js
export async function getStaticPaths() {
```

➡ This function runs **at build time**, not in the browser.

---

```js
const posts = [
  { slug: "react-basics" },
  { slug: "nextjs-routing" },
  { slug: "ssr-vs-ssg" }
];
```

➡ You fetch **all available dynamic values**
➡ In real apps, this comes from API or DB.

---

```js
const paths = posts.map(post => ({
  params: {
    slug: post.slug
  }
}));
```

➡ You are telling Next.js:

> “Create a page for `/blog/react-basics`, `/blog/nextjs-routing`, etc.”

➡ `slug` **must match the filename** `[slug].js`

---

```js
return {
  paths,
  fallback: false
};
```

➡ This tells Next.js:

* Only generate these pages
* Any other slug → **404**

---

## Step 3: `getStaticProps` (Gets Data for Each Page)

```js
export async function getStaticProps({ params }) {
  // params.slug comes from getStaticPaths
  const post = posts.find(p => p.slug === params.slug);

  return {
    props: {
      post
    }
  };
}
```

➡ For **each path**, Next.js:

* Passes `slug` into `getStaticProps`
* Generates one HTML file

---

## Step 4: Page Component

```js
export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
```

---

# What Happens During `npm run build`?

This is the **key mental model**:

```
1. Next.js runs getStaticPaths
2. Gets list of slugs
3. For each slug:
   - Runs getStaticProps
   - Generates HTML
4. Stores all pages as static files
```

Generated pages:

```
/blog/react-basics.html
/blog/nextjs-routing.html
/blog/ssr-vs-ssg.html
```

---

# What Is `fallback`? (IMPORTANT)

### `fallback: false`

* Only predefined paths exist
* Others → 404

---

### `fallback: true`

* Page not generated yet
* Shown loading
* Generated on first request

---

### `fallback: "blocking"` (Best for SEO)

* User waits
* Page generated before response
* Cached for future

---

# One-Line Interview Answer (Memorize)

> “`getStaticPaths` defines all possible dynamic routes that should be statically generated at build time.”

---

# Common Mistakes (Avoid These)

❌ Thinking it runs in the browser
❌ Using it without `getStaticProps`
❌ Forgetting `params` must match file name

---

# Final Mental Model (This Will Lock It In)

* `[slug].js` → template
* `getStaticPaths` → list of routes
* `getStaticProps` → data for each route
* Build → generates real HTML files
