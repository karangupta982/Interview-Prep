# SECTION 7 — Debugging Process & Learnings

---

## 33. How did you debug the missing webhook issue?

When the webhook did not appear to fire, several debugging steps were used:

1. Checked Clerk’s developer dashboard to see whether webhook delivery was attempted.
2. Looked at Render logs to confirm whether the backend received any incoming POST requests.
3. Added an initial `print("Webhook hit")` at the very top of the webhook handler to confirm that the route was executing.
4. Verified that the webhook URL in Clerk matched the deployed backend URL exactly:

   ```
   https://interview-tree-ai.onrender.com/webhooks/clerk
   ```
5. Ensured the `.env` contained the correct value for `CLERK_WEBHOOK_SECRET`.
6. Confirmed that the endpoint prefix `/webhooks/clerk` was correctly included in FastAPI:

   ```python
   app.include_router(webhooks.router, prefix="/webhooks")
   ```
7. Also checked that the correct HTTP method (`POST`) was used.

Once the URL and secret were corrected, the webhook began firing correctly.

---

## 34. What technique did you use to confirm JWTs were reaching FastAPI?

I added temporary debugging print statements inside the authentication function:

```python
auth_header = request.headers.get("authorization")
print("AUTH HEADER:", auth_header)
```

This allowed me to verify:

* Whether the frontend was actually sending the JWT.
* Whether Clerk had successfully generated a backend token.
* Whether the Authorization header had the format:

  ```
  Bearer <jwt>
  ```

Once I saw the correct Authorization header in the backend logs, I knew the token was flowing properly from Vercel → Clerk → FastAPI.

---

## 35. How did you verify that FastAPI correctly extracted `user_id`?

After decoding the JWT, I printed the extracted claim:

```python
print("User ID:", user_id)
```

This debugging step confirmed:

* Clerk's JWT template correctly inserted `user_id`.
* FastAPI’s decoding logic was correct.
* The backend could reliably identify the authenticated user.

If the token did not contain `user_id`, the backend would have raised key errors.
So this print confirmed the decoding pipeline was working.

---

## 36. What caused incorrect quota display even after webhook success?

Several issues together caused the UI to show incorrect values:

1. The frontend used:

   ```js
   quota?.quota_remaining || 0
   ```

   The `||` operator treated valid values like `0` as falsy and defaulted incorrectly.

2. Backend returned SQLAlchemy model objects without serializing them into JSON.
   React could not read the fields reliably.

3. Property name mismatch:

   * Backend returned `last_reset_date`
   * Frontend looked for `last_reset_data`

4. The GET request sometimes returned `None` because:

   * Webhook had not created a quota row for earlier users.
   * SQLite had been reset on deploy.

After fixing serialization, using `??` instead of `||`, and correcting property names, the UI started displaying correct values.

---

## 37. How did you fix serialization issues for `last_reset_date`?

The issue occurred because FastAPI returned raw SQLAlchemy objects, which cannot be automatically converted to proper JSON.

To fix this, I explicitly serialized the response:

```python
return {
    "user_id": quota.user_id,
    "quota_remaining": quota.quota_remaining,
    "last_reset_date": quota.last_reset_date.isoformat()
}
```

Benefits of this fix:

* Ensures consistent JSON structure.
* React receives a proper ISO date string.
* Avoids issues with datetime serialization.
* Guaranteed all required fields are present regardless of ORM behavior.

This solved multiple frontend display issues.

---

## 38. Why was UI displaying 0 quota even though the backend created 20 quota?

The UI showed `0` because of a combination of frontend issues:

1. Wrong fallback operator:

   ```js
   quota?.quota_remaining || 0
   ```

   When quota was loading or undefined, UI defaulted to 0.

2. The backend’s raw SQLAlchemy object sometimes did not serialize properly, meaning React saw missing fields.

3. Incomplete JSON returned from the backend caused the frontend to interpret values incorrectly.

4. Incorrect field name (`last_reset_data`) prevented the reset logic from working, which influenced UI state.

After fixing:

* Correct JSON serialization
* Using nullish coalescing (`??`)
* Correct property names
* Ensuring the webhook created quota successfully

The correct number (20) began appearing consistently in the UI.
