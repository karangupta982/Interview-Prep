# What Is Hydration in Next.js?

## Simple Definition (Start With This)

> **Hydration is the process where React attaches event listeners and state to server-rendered HTML to make it interactive in the browser.**

In short:

* Server sends **ready HTML**
* Browser shows content immediately
* React then **“hydrates”** that HTML to enable interactivity

---

## Why Hydration Exists

In server-side rendering (SSR):

* HTML is generated on the server
* HTML alone is **not interactive**
* Buttons cannot be clicked
* Forms do not work
* State does not update

To fix this:

* JavaScript loads in the browser
* React connects to the existing HTML
* Event handlers and state logic are attached

That connection step is called **hydration**.

---

## Hydration Step-by-Step (Very Important)

### Step 1: Server Renders HTML

On the server:

```tsx
<button>Like</button>
```

This HTML is sent to the browser.

---

### Step 2: Browser Displays HTML

* User sees the button
* UI is visible
* Page looks complete

But:

* Clicking the button does nothing

---

### Step 3: JavaScript Loads

* React runtime loads
* Component code loads
* Hooks and logic become available

---

### Step 4: Hydration Happens

React:

* Compares server HTML with virtual DOM
* Attaches event listeners
* Syncs state

Now:

* Button is clickable
* State updates work
* Page becomes interactive

---

## Key Point (Interview Critical)

> **Hydration does not re-render the HTML.
> It reuses the existing HTML and makes it interactive.**

---

## Hydration in Next.js (Important Clarification)

### Pages Router

* Entire page hydrates
* All components send JavaScript

### App Router

* Only **Client Components hydrate**
* Server Components never hydrate
* This is called **partial hydration**

---

# What Are Hydration Issues?

## Definition

> **A hydration issue occurs when the HTML generated on the server does not match the HTML generated on the client during hydration.**

React expects:

* Same structure
* Same content
* Same attributes

If they differ:

* Hydration fails or partially fails

---

## What Happens When Hydration Fails?

* Console warnings:

  * “Hydration failed because the initial UI does not match”
* React discards server HTML
* Client re-renders everything
* Performance drops
* UI may flicker or break

---

## Why Hydration Issues Happen in Next.js

Hydration issues are **not bugs in Next.js**.
They happen due to **non-deterministic rendering**.

---

## Common Causes of Hydration Issues (Very Important)

---

### 1. Using Browser APIs on the Server

#### Problem

```tsx
export default function Page() {
  return <p>{window.innerWidth}</p>;
}
```

* Server does not have `window`
* Client does
* HTML differs

---

### Correct Approach

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return <p>{width}</p>;
}
```

---

### 2. Using Dynamic Values That Change Per Render

#### Problem

```tsx
<p>{Math.random()}</p>
```

* Server value ≠ Client value
* Hydration mismatch

---

### Solution

Generate such values only on the client.

---

### 3. Using Date and Time Incorrectly

#### Problem

```tsx
<p>{new Date().toLocaleTimeString()}</p>
```

* Server time ≠ Client time
* Different timezones

---

### Solution

* Format dates on the client
* Or pass a fixed timestamp from server

---

### 4. Conditional Rendering Based on Environment

#### Problem

```tsx
{typeof window !== "undefined" && <Component />}
```

* Server renders nothing
* Client renders component
* HTML mismatch

---

### Solution

Render consistently or use `useEffect`.

---

### 5. Mismatched HTML Structure

#### Problem

```tsx
<div>
  <p>Text</p>
</div>
```

Client renders:

```tsx
<div>
  <span>Text</span>
</div>
```

Even small tag differences break hydration.

---

### 6. Third-Party Libraries That Manipulate DOM

Libraries that:

* Modify DOM directly
* Depend on browser state
* Render differently on server

Common examples:

* Chart libraries
* Rich text editors
* UI libraries not SSR-safe

---

### Solution

Load them dynamically on the client only.

---

## Hydration Issues in App Router (Important Insight)

In App Router:

* Server Components never hydrate
* Hydration issues occur **only in Client Components**

This already reduces hydration problems significantly.

---

## How Next.js Helps Reduce Hydration Issues

* Server Components by default
* Partial hydration
* Explicit `"use client"` boundaries
* Streaming with Suspense
* Strict hydration warnings in development

---

## How to Prevent Hydration Issues (Checklist)

1. Avoid browser-only APIs in Server Components
2. Do not use random or time-based values during render
3. Keep server and client output deterministic
4. Isolate interactivity into Client Components
5. Use `useEffect` for browser-only logic
6. Dynamically import non-SSR-safe libraries
7. Prefer Server Components whenever possible

---

## Interview-Ready Explanation (Say This)

> “Hydration is the process where React attaches event listeners and state to server-rendered HTML to make it interactive. Hydration issues occur when the server-rendered HTML does not match what React renders on the client, often due to browser-only APIs, dynamic values, or non-deterministic rendering.”

---

## One-Line Memory Rule

> **Hydration fails when server HTML and client HTML are not identical.**

---

## Final Mental Model (Lock This In)

* SSR gives HTML
* Hydration gives interactivity
* Server Components avoid hydration
* Client Components must hydrate correctly
