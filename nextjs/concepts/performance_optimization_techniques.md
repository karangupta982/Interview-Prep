I will assume **Next.js App Router**, because that is what is used in modern projects and interviews.

---

# Performance Optimization Techniques in Next.js (With Code + Explanation)

---

## 1. Use Server Components by Default

### Concept

In App Router:

* Every component is a **Server Component by default**
* Server Components:

  * Run on the server
  * Send only HTML
  * Send zero JavaScript to the browser

This alone is the **biggest performance optimization** in Next.js.

---

### Example: Server Component (Default)

```tsx
// app/page.tsx

export default async function Page() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### What is happening here

* No `"use client"` → this is a Server Component
* Data is fetched on the server
* HTML is generated on the server
* Browser receives ready HTML
* No JavaScript is sent for this component

### Why this improves performance

* Smaller JS bundle
* Faster load
* No hydration cost

---

## 2. Isolate Client Components (Minimize Hydration)

### Concept

* Client Components are needed only for:

  * State
  * Events
  * Browser APIs
* If you mark a large component as client, you send unnecessary JS

---

### Bad Example (Hurts Performance)

```tsx
"use client";

export default function Page() {
  return (
    <>
      <h1>Feed</h1>
      <LikeButton />
      <PostList />
    </>
  );
}
```

Problem:

* Entire page becomes client-rendered
* Unnecessary JavaScript sent

---

### Good Example (Optimized)

```tsx
// app/page.tsx (Server Component)

import LikeButton from "./LikeButton";

export default function Page() {
  return (
    <>
      <h1>Feed</h1>
      <LikeButton />
    </>
  );
}
```

```tsx
// app/LikeButton.tsx (Client Component)

"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      Likes: {likes}
    </button>
  );
}
```

### What is happening

* Page remains server-rendered
* Only `LikeButton` sends JS
* Partial hydration happens

### Performance benefit

* Minimal JS
* Faster Time to Interactive

---

## 3. Fetch Data on the Server (Avoid useEffect)

### Concept

Fetching data in `useEffect`:

* Happens after page loads
* Causes loading states
* Hurts SEO

---

### Bad Example (Client Fetch)

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return <div>{posts.length}</div>;
}
```

---

### Good Example (Server Fetch)

```tsx
export default async function Page() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return <div>{posts.length}</div>;
}
```

### Why this is faster

* Data included in initial HTML
* No loading spinner
* Better SEO
* Less client JS

---

## 4. Prefer SSG (Static Rendering) Whenever Possible

### Concept

Static pages:

* Generated at build time
* Served via CDN
* Extremely fast

---

### Example: Static Page (Default Cached Fetch)

```tsx
export default async function BlogPage() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return <div>{posts.length} posts</div>;
}
```

### Explanation

* `fetch` is cached by default
* Page becomes static
* Same HTML served to all users

---

## 5. Use ISR for Periodically Changing Data

### Concept

ISR allows:

* Static pages
* Automatic background updates

---

### Example: ISR Page

```tsx
export default async function NewsPage() {
  const res = await fetch("https://api.example.com/news", {
    next: { revalidate: 60 }
  });

  const news = await res.json();

  return <div>{news.length} news items</div>;
}
```

### What is happening

* Page generated statically
* Cached HTML served
* Every 60 seconds:

  * Next.js regenerates page in background
* Users never wait

---

## 6. Use SSR Only When Necessary

### Concept

SSR is expensive because:

* Runs on every request
* Uses server resources

---

### Example: SSR Page

```tsx
export default async function ProfilePage() {
  const res = await fetch("https://api.example.com/profile", {
    cache: "no-store"
  });

  const profile = await res.json();

  return <h1>Hello {profile.name}</h1>;
}
```

### When to use this

* Auth-based pages
* User-specific data
* Real-time data

---

## 7. Enable Streaming with Suspense

### Concept

Streaming:

* Sends HTML in chunks
* Prevents slow data from blocking page

---

### Example: Streaming Page

```tsx
import { Suspense } from "react";
import Feed from "./Feed";

export default function Page() {
  return (
    <>
      <h1>Home</h1>

      <Suspense fallback={<p>Loading feed...</p>}>
        <Feed />
      </Suspense>
    </>
  );
}
```

```tsx
// app/Feed.tsx

export default async function Feed() {
  const res = await fetch("https://api.example.com/feed", {
    cache: "no-store"
  });
  const feed = await res.json();

  return <div>{feed.length} posts</div>;
}
```

### What is happening

* Header HTML sent immediately
* Feed loads later
* Browser replaces fallback with streamed HTML

---

## 8. Use Built-In Image Optimization

### Example

```tsx
import Image from "next/image";

export default function Banner() {
  return (
    <Image
      src="/banner.png"
      alt="Banner"
      width={800}
      height={400}
    />
  );
}
```

### What Next.js does automatically

* Responsive sizes
* Lazy loading
* WebP/AVIF conversion
* Prevents layout shift

---

## 9. Use Dynamic Imports for Heavy Client Code

### Concept

Load heavy code only when needed.

---

### Example

```tsx
"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./Chart"), {
  ssr: false
});

export default function Page() {
  return <Chart />;
}
```

### Why this helps

* Chart library not in initial bundle
* Faster first load
* Less JS execution

---

## 10. Avoid Large Global Client Providers

### Bad Example

```tsx
"use client";

export default function RootLayout({ children }) {
  return <AppContext>{children}</AppContext>;
}
```

Problem:

* Everything becomes client-rendered

---

### Good Example

```tsx
export default function RootLayout({ children }) {
  return <html><body>{children}</body></html>;
}
```

```tsx
"use client";

export function SmallProvider({ children }) {
  return <Context.Provider>{children}</Context.Provider>;
}
```

Wrap only where needed.

---

## 11. Use Server Actions Instead of API Calls

### Example

```tsx
"use server";

export async function submitForm(data: FormData) {
  await saveToDatabase(data);
}
```

```tsx
export default function Page() {
  return (
    <form action={submitForm}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Performance benefit

* No client fetch
* No API route
* Direct server execution

---

## 12. Optimize Fonts in Next.js

### Why Fonts Matter for Performance

Fonts can:

* Block text rendering
* Cause layout shifts
* Increase Largest Contentful Paint (LCP)

Traditional font loading:

* Fonts loaded from external CDN
* Browser waits before rendering text
* Causes FOIT or FOUT

---

## How Next.js Optimizes Fonts

Next.js provides **built-in font optimization** using `next/font`.

Key benefits:

* Fonts are self-hosted
* Automatic `@font-face` generation
* Fonts are preloaded
* No external network request
* Eliminates layout shift

---

### Example: Optimized Google Font

```tsx
// app/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```

---

### What Is Happening Internally

* Font is downloaded at build time
* Font files are served from your own domain
* Browser preloads font automatically
* Text renders immediately
* Layout remains stable

---

### Performance Benefit

* Faster LCP
* No layout shift
* No external font dependency

---

## 13. Optimize Static Assets (CSS, Images, JS)

### What Are Assets

Assets include:

* CSS files
* Images
* Fonts
* JavaScript bundles

---

### How Next.js Optimizes Assets Automatically

* Minifies CSS and JS
* Tree-shakes unused code
* Compresses assets
* Adds cache headers

You don’t need to configure this manually.

---

### Best Practices for Assets

* Avoid large global CSS files
* Prefer component-scoped styles
* Remove unused CSS
* Avoid importing unused libraries

---

## 14. Reduce Third-Party Scripts

### Why Third-Party Scripts Hurt Performance

Third-party scripts:

* Block rendering
* Increase JS execution time
* Delay interactivity
* Hurt Core Web Vitals

Examples:

* Analytics
* Chat widgets
* Ads
* Tracking pixels

---

## How to Optimize Third-Party Scripts in Next.js

Next.js provides the `next/script` component.

---

### Example: Script Loading Strategies

```tsx
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script
        src="https://analytics.example.com/script.js"
        strategy="afterInteractive"
      />
    </>
  );
}
```

---

### Script Strategies Explained

| Strategy            | When Script Loads         |
| ------------------- | ------------------------- |
| `beforeInteractive` | Before page renders       |
| `afterInteractive`  | After page is interactive |
| `lazyOnload`        | During idle time          |

---

### Best Practice

* Avoid `beforeInteractive` unless critical
* Use `afterInteractive` or `lazyOnload`

---

## 15. Use CDN for Static Content

### Why CDN Matters

CDN:

* Serves content from nearest location
* Reduces latency
* Improves global performance

---

## How Next.js Uses CDN

* Static assets served via CDN automatically
* Images cached and served globally
* Static pages cached at edge

If deployed on Vercel, CDN is automatic.

---

### What Gets Cached on CDN

* Static HTML
* Images
* Fonts
* JS bundles
* CSS

---

## 16. Edge Rendering in Next.js

### What Is Edge Rendering

> **Edge rendering means executing code closer to the user instead of a central server.**

---

### When to Use Edge Rendering

* Authentication checks
* A/B testing
* Redirects
* Lightweight personalization

---

### Example: Edge Runtime

```ts
export const runtime = "edge";

export default async function Page() {
  return <h1>Rendered at the edge</h1>;
}
```

---

### Performance Benefit

* Reduced network latency
* Faster response time
* Better global performance

---

## 17. Caching and Revalidation (Performance Backbone)

### Default Caching

* `fetch()` is cached by default
* Enables SSG automatically

---

### Revalidation Options

```ts
fetch(url, { next: { revalidate: 300 } });
```

Or globally:

```ts
export const revalidate = 300;
```

---

### Performance Benefit

* Avoids recomputation
* Reduces server load
* Improves scalability

---

## 18. Avoid Unnecessary Middleware

### Middleware Runs on Every Request

* Adds latency
* Runs before routing

---

### Best Practice

* Keep middleware minimal
* Avoid heavy logic
* Use only when required

---

## 19. Measure and Monitor Performance

### Tools to Use

* Lighthouse
* Web Vitals
* Browser DevTools
* Vercel Analytics

---

## 20. Prefetch using Link tag

* Nextjs preloads route data and scripts on hover or when visible

---

## Final Performance Optimization Checklist

* Use Server Components by default
* Minimize Client Components
* Prefer SSG and ISR
* Enable streaming
* Optimize images and fonts
* Reduce third-party scripts
* Use CDN and Edge wisely
* Cache aggressively
* Avoid unnecessary middleware

---

## Interview-Ready Final Answer

> “Next.js performance optimization involves minimizing client-side JavaScript, leveraging Server Components, choosing the correct rendering strategy, optimizing images and fonts, reducing third-party scripts, using CDN and Edge rendering, and caching content effectively.”

---

## One-Line Memory Rule

> **Performance in Next.js improves when the server does more work and the browser does less.**

---

## Final Memory Model (Very Important)

* Server Components reduce JS
* Client Components add interactivity
* SSG and ISR are fastest
* SSR only when required
* Streaming improves perceived speed
* Hydration is the real cost

---

## Interview-Ready Final Answer

> “Next.js performance is optimized by minimizing client-side JavaScript, using Server Components by default, choosing the correct rendering strategy, leveraging streaming and caching, and optimizing assets like images and data fetching.”
