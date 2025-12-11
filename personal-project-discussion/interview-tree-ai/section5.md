# SECTION 5 — Frontend (React) API & State Management

---

## 23. How does your React frontend call the backend using `useApi()`?

The frontend uses a custom hook called `useApi()` which wraps all API requests to ensure that every request includes the Clerk JWT token.

The flow works like this:

1. `useAuth()` from Clerk provides a function:

   ```js
   const { getToken } = useAuth()
   ```

2. Before making any API request, the frontend retrieves a backend-specific JWT:

   ```js
   const token = await getToken({ template: "backend" })
   ```

3. All API calls include the token in the Authorization header:

   ```js
   headers: {
       "Content-Type": "application/json",
       "Authorization": `Bearer ${token}`
   }
   ```

4. The final request is sent to your FastAPI backend hosted on Render:

   ```js
   fetch("https://interview-tree-ai.onrender.com/api/<endpoint>", options)
   ```

This ensures a consistent authentication mechanism throughout the app.
Every call automatically carries a valid JWT, so the backend can identify the user.

---

## 24. Why is `Authorization: Bearer <token>` required in every request?

The backend must know *who* is making the request.

Clerk manages authentication on the frontend, but the backend cannot access Clerk directly.
Therefore:

* The frontend must attach a signed token with every request.
* FastAPI verifies the token.
* If the token is valid, the backend extracts the `user_id`.

This allows the backend to:

* Fetch user-specific quotas.
* Enforce rate limits.
* Associate generated challenges with the correct user.
* Prevent unauthorized access.

Without the Authorization header, FastAPI will not know which user is interacting with it, causing quota lookups and challenge generation to fail.

---

## 25. What was the bug with using `quota?.quota_remaining || 0` in React?

The issue is that JavaScript treats `0` as a falsy value.

So the expression:

```js
quota?.quota_remaining || 0
```

behaves incorrectly:

* Correct behavior for 10 remaining:
  `10 || 0 → 10`
* Incorrect behavior for 0 remaining:
  `0 || 0 → 0` (this is fine)
* Big problem when quota data hasn't loaded yet:
  `undefined || 0 → 0`
* Big problem if quota was returned but structure was missing:
  `null || 0 → 0`

This caused the UI to always show `0` even when the backend returned values like `20`.

The correct operator is:

```js
quota?.quota_remaining ?? 0
```

The nullish coalescing operator `??` does not treat `0` as falsy, so:

* `0 ?? 0 → 0`
* `20 ?? 0 → 20`
* `undefined ?? 0 → 0`

This fixed the incorrect quota display.

---

## 26. Why is the nullish coalescing operator `??` better for displaying quota values?

The nullish coalescing operator checks only for:

* `null`
* `undefined`

It does not treat other falsy values (like `0`) as empty.

This makes it ideal for numeric data such as quotas.

Example:

```js
quota?.quota_remaining ?? 0
```

This expression:

* Displays actual numeric values (0, 10, etc.)
* Prevents accidental fallback to 0 when the value exists

It ensures the frontend reflects the backend data accurately.

---

## 27. What caused the reset time to not appear in the UI?

The issue was a naming mismatch.

Backend returned:

```json
"last_reset_date": "2025-12-06T17:13:05.882Z"
```

But the frontend checked:

```js
quota.last_reset_data
```

Since `last_reset_data` does not exist, the function:

```js
if (!quota?.last_reset_data) return null
```

always returned null.

Because of this:

* The reset date was never parsed.
* The “Next reset at:” message never appeared.

Fix:

```js
if (!quota?.last_reset_date) return null
const resetDate = new Date(quota.last_reset_date)
```

---

## 28. Why must FastAPI return serialized JSON instead of SQLAlchemy models?

When FastAPI returns raw SQLAlchemy objects, several problems occur:

1. Python datetime objects cannot be directly parsed by JavaScript.
2. SQLAlchemy objects sometimes include internal fields or cannot be JSON encoded.
3. React expects clean serialized JSON with keys that match its code.

When your backend returned:

```python
return quota
```

React sometimes received incomplete or missing fields, which caused:

* quota showing as `None`
* last_reset_date missing
* UI displaying `0` even though the database held correct values

The correct approach is:

```python
return {
    "user_id": quota.user_id,
    "quota_remaining": quota.quota_remaining,
    "last_reset_date": quota.last_reset_date.isoformat()
}
```

This ensures the frontend always receives predictable, valid JSON.
