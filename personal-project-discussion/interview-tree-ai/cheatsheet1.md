## 1. What is the architecture of your project?

Frontend (React on Vercel)
Backend (FastAPI on Render)
Authentication (Clerk)
Database (SQLite now, Neon/Postgres later)

Flow:
React → Clerk Login → getToken(template="backend") → FastAPI → JWT verification → DB → Response.

---

## 2. Why FastAPI instead of Django or Node?

FastAPI is lightweight, async, high-performance, and integrates seamlessly with Python’s AI ecosystem.
It provides automatic data validation, clean routing, and better suitability for an API-first SaaS backend.

---

## 3. How does Clerk authentication work in your app?

Clerk handles all frontend auth UI.
React calls `getToken({ template: "backend" })`.
Clerk issues an RS256-signed JWT with custom claim `"user_id": "{{user.id}}"`.
FastAPI verifies the JWT, extracts user_id, and authorizes requests.

---

## 4. Why did getToken initially fail?

Because there was no JWT template named `"default"`.
I created a template named `"backend"` and then used:
`getToken({ template: "backend" })`.

---

## 5. What does your Clerk webhook do?

Clerk sends a `user.created` webhook to FastAPI.
FastAPI verifies the signature and creates a quota row for the new user in the database.
This initializes the user with default credits (for example, 20).

---

## 6. Why did quotas return None earlier?

Users who signed up before the webhook was configured never triggered quota creation.
SQLite resets on every Render deploy also removed existing rows.
Backend returned None because no matching user row existed.

---

## 7. What is the daily quota reset logic?

On every `/api/quota` request:
If current_time – last_reset_date ≥ 24 hours:
Reset quota to default and update last_reset_date.

Reset happens on-demand, not with a background job.

---

## 8. Why must FastAPI return serialized JSON instead of raw SQLAlchemy models?

SQLAlchemy objects and Python datetime values are not JSON-serializable.
To avoid missing fields and parsing issues on React side, JSON must be returned manually:

```
{
  "user_id": ...,
  "quota_remaining": ...,
  "last_reset_date": <ISO string>
}
```

---

## 9. Why was the React UI showing 0 quota incorrectly?

Three issues:

1. Using `||` instead of `??`
   `0 || 0` → 0 (incorrect fallback)
2. Backend not serializing JSON properly.
3. Wrong property name (`last_reset_data` instead of `last_reset_date`).

After fixing these, UI displayed correct quota.

---

## 10. How did you debug missing webhooks?

1. Checked Clerk dashboard → webhook attempts.
2. Added print logs in FastAPI.
3. Verified URL and secret.
4. Ensured FastAPI route prefix matched Clerk configuration.
5. Verified Render logs to confirm requests reached backend.

---

## 11. Why is ngrok used in development?

Clerk cannot send webhooks to localhost.
ngrok exposes local FastAPI via HTTPS so Clerk can deliver events.

---

## 12. What caused CORS or token errors between Vercel and Render?

Missing CORS middleware, incorrect JWT template, or missing Authorization header.
Fixed by enabling CORS and ensuring JWT is generated via template `"backend"`.

---

## 13. How does the `useApi()` hook work?

It retrieves the Clerk backend token, attaches it to the Authorization header, and sends authenticated requests to FastAPI.
This ensures every request is tied to the logged-in user.

---

## 14. What are the main backend endpoints?

`/api/quota`
Fetch and reset user quota.

`/api/generate-challenge`
Decreases quota, generates AI question, returns challenge.

`/webhooks/clerk`
Creates new quota when a user is created.

---

## 15. What key lesson did you learn from this project?

Authentication systems require correct coordination between:

* Frontend tokens
* JWT templates
* Backend verification
* Database consistency
* Webhooks

Small mismatches (naming, serialization, tokens) can cause large behavior differences.
Systematic debugging and logs are essential for distributed architectures.
