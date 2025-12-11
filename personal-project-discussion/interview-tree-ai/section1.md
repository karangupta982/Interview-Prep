# **SECTION 1 — Architecture & Core Concepts**

---

## **1. What is the overall architecture of your FastAPI + React + Clerk project?**

**Answer:**
The project follows a **distributed full-stack architecture** consisting of:

### **Frontend (Vercel)**

* Built in React.
* Handles client-side UI, routing, and rendering.
* Uses Clerk React SDK for authentication.
* Sends authenticated API requests to the backend using a JWT issued by Clerk.

### **Backend (FastAPI on Render)**

* Provides secure API endpoints.
* Verifies Clerk JWT in each request.
* Contains business logic for generating coding challenges.
* Manages user quotas using SQLAlchemy and a relational database.

### **Database (SQLite now, Neon later)**

* Stores:

  * User quotas
  * Challenge history
  * Reset timestamps

### **Clerk Authentication**

* Manages login, signup, and frontend session management.
* Issues JWT tokens for backend authorization.
* Sends `user.created` webhooks to FastAPI to initialize user quota.

### **Clerk → Backend Webhook**

* When a new user signs up, Clerk triggers a webhook.
* The FastAPI webhook endpoint creates a default quota for that user.

### **Process Flow**

```
React → Clerk Login → getToken() → FastAPI → JWT Verification → DB Quota → Generate Challenge
```

This architecture cleanly separates concerns between:

* Authentication (Clerk)
* UI (React)
* Business Logic (FastAPI)
* Persistence (DB)

---

## **2. Why did you choose FastAPI instead of Django or Node.js for this project?**

**Answer:**

I chose **FastAPI** because it provides:

### ✔ **High performance**

* FastAPI is built on ASGI and uses `uvicorn`, giving performance close to Node.js and Go.

### ✔ **Automatic data validation**

* Pydantic models make validation extremely easy.
* Ensures safe and structured input/output.

### ✔ **Better for AI/ML workloads**

* Integrates well with Python’s AI ecosystem.
* Ideal when integrating LLMs or AI agents in the future.

### ✔ **Simple async support**

* Async functions are first-class in FastAPI.
* Clean and modern API design.

### ✔ **Lightweight compared to Django**

* Django is too heavy when you don’t need an ORM, template system, or admin panel.

### ✔ **Excellent developer experience**

* Built-in Swagger docs
* Automatic OpenAPI generation
* Faster development turnaround

For a SaaS-style API backend, FastAPI is a perfect fit.

---

## **3. How do templates, routers, and dependency injection work in FastAPI?**

**Answer:**

### ✔ **Routers**

Routers allow you to split your backend into modular files:

Example:

```python
app.include_router(challenge.router, prefix="/api")
app.include_router(webhooks.router, prefix="/webhooks")
```

This keeps the code readable and organized.

### ✔ **Dependency Injection**

FastAPI automatically injects dependencies such as:

* Database sessions
* Authentication logic
* Common utilities (e.g., rate limiters)

Example:

```python
@router.get("/quota")
async def get_quota(db: Session = Depends(get_db)):
```

FastAPI handles creating and closing the DB session for each request.

### ✔ **Templates**

FastAPI supports Jinja2 templates for server-side rendering, similar to Django, but you are NOT using templates in this project — because your frontend is React.

Templates matter only if:

* You serve HTML pages directly from FastAPI.

In your project, you only use **routers + API responses**, not HTML templates.

---

## **4. How does the project handle authentication and authorization using Clerk?**

**Answer:**

The authentication flow is:

### **Step 1 — User logs in via Clerk (frontend)**

Clerk manages:

* OAuth (Google)
* Email/password
* Sessions
* UI components (login, profile, navbar)

### **Step 2 — React requests a backend token**

Using:

```js
const token = await getToken({ template: "backend" })
```

Clerk issues a signed JWT containing:

* `user_id`
* `sub`
* `iss`
* `aud`

### **Step 3 — React sends token to FastAPI**

```http
Authorization: Bearer <jwt>
```

### **Step 4 — FastAPI verifies the JWT**

FastAPI:

* Validates issuer
* Validates signature via Clerk JWKS
* Confirms audience ("backend")
* Extracts `user_id`

### **Step 5 — Backend authorizes user**

Every request is tied to a specific user via `user_id`.

This flow ensures:

* No session management on backend
* Fully stateless auth
* Secure JWT verification
* Works across Vercel + Render

---

## **5. What are webhooks, and how does your backend respond to Clerk webhooks?**

**Answer:**

A **webhook** is a server-to-server POST request sent automatically when an event occurs.

In this project:

### 👉 Clerk sends a webhook when a new user is created:

Event type:

```
user.created
```

### 👉 Your FastAPI backend has an endpoint:

```
POST /webhooks/clerk
```

### Backend steps:

1. Receive webhook payload
2. Verify signature using:

```python
wh = Webhook(webhook_secret)
wh.verify(payload, headers)
```

3. Parse user data (`user_id`)
4. Create a default quota for the user:

```python
create_challenge_quota(db, user_id)
```

5. Respond with:

```json
{ "status": "success" }
```

### Why is webhook needed?

Because the backend must attach backend-specific metadata to a new user — here, the initial challenge quota.

Clerk does NOT store custom user fields like quota, so you must store them in your own database via webhook.