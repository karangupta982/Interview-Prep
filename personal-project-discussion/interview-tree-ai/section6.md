# SECTION 6 — Deployment (Vercel + Render)

---

## 29. What is the deployment architecture between Vercel (frontend) and Render (backend)?

The project uses a **two-service deployment model**:

### Frontend (Vercel)

* Hosts the React application.
* Provides global CDN-level performance.
* Integrates directly with Clerk frontend SDK.
* Sends authenticated API requests to the backend.

### Backend (Render)

* Hosts the FastAPI server.
* Exposes REST API endpoints under `/api/`.
* Receives webhooks from Clerk at `/webhooks/clerk`.
* Uses SQLAlchemy + SQLite (or Neon later) for storage.

### Communication Flow

```
User → Vercel (React) → Clerk Login → getToken()
React → Authorization: Bearer <token> → Render (FastAPI)
FastAPI → Validate JWT → Database → Response
```

This separation allows independent scaling, easier debugging, and clear ownership of responsibilities:

* Vercel handles UI and authentication.
* Render handles business logic and data.

---

## 30. Why must Clerk be configured with Render’s URL for webhook delivery?

Clerk’s webhook system needs a **public HTTPS URL** to send event notifications.

If the webhook URL points to:

* localhost
* an outdated Render URL
* a non-existent endpoint
* an endpoint without HTTPS

Clerk cannot deliver the webhook.

In your case, the correct webhook URL had to be:

```
https://interview-tree-ai.onrender.com/webhooks/clerk
```

Why this is required:

1. Clerk needs to notify the backend every time a new user signs up.
2. The backend uses this event to create an entry in `challenge_quotas`.
3. Without webhook delivery, new users would never receive quota rows.

Correct webhook configuration ensures backend initialization is automatic and reliable.

---

## 31. Why is ngrok needed for local webhook development?

Clerk can only send webhooks to **publicly accessible** URLs.

When you run FastAPI locally on:

```
http://localhost:8000
```

It is not reachable from the internet.
Clerk cannot deliver webhooks to localhost.

ngrok solves this by:

1. Creating a secure public tunnel:

   ```
   https://random-subdomain.ngrok.io → http://localhost:8000
   ```
2. Allowing Clerk to send webhooks to your local server.
3. Enabling real-time development and debugging of webhook logic.

For development, you set the webhook URL in Clerk to the ngrok address:

```
https://<ngrok-id>.ngrok.io/webhooks/clerk
```

This allows you to test user signup flows locally before deploying.

---

## 32. What caused CORS or token issues between Vercel and Render, and how did you fix them?

Several cross-origin and authentication issues can occur when deploying React (Vercel) and FastAPI (Render) separately.

### Issue 1: Browser blocked requests because of CORS

Browser saw this as a cross-origin request:

```
https://interview-tree-ai.vercel.app  →  https://interview-tree-ai.onrender.com
```

FastAPI needs to allow this by enabling CORS middleware:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

This allowed React to call FastAPI successfully.

---

### Issue 2: `JWT template not found` errors

This happened because:

1. The frontend used `getToken()` without specifying a template.
2. Clerk only issues backend-compatible tokens using a named template.

Fix:

```js
getToken({ template: "backend" })
```

---

### Issue 3: Missing or invalid Authorization header

FastAPI logs showed:

```
AUTH HEADER: None
```

This caused 500 errors because the backend expected a JWT.

Fix:

* Ensured `Authorization: Bearer <token>` is included in all API calls.
* Ensured that Clerk was correctly configured to generate backend tokens.

---

### Issue 4: SQLite data loss

Render redeployments re-created tables, causing quota rows to disappear.

This wasn’t a CORS issue but caused confusing 500 responses.
Fix was simple:

* Create new users after deploy, or
* Switch to persistent PostgreSQL (Neon) later.
