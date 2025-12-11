# SECTION 3 — Webhooks & Quota System

---

## 13. How does the Clerk `user.created` webhook work in your system?

When a new user signs up using Clerk, Clerk automatically sends a POST request to your backend webhook endpoint:

```
POST /webhooks/clerk
```

This request contains a signed JSON payload with the user's details.

Your FastAPI backend performs the following steps:

1. Reads the request body.
2. Verifies the webhook signature using the secret `CLERK_WEBHOOK_SECRET`.
3. Parses the JSON payload.
4. Checks the event type. If it is `user.created`, it extracts the `user_id`.
5. Creates a new challenge quota record for that user in your database.

The webhook ensures that every new user is automatically initialized with default credits (for example, 20 challenge generations per day).

---

## 14. Why did the webhook initially not fire when deployed on Render?

There were several reasons this can happen:

1. The webhook URL in Clerk was pointing to localhost or the wrong production URL.
2. Render backend was not yet deployed or running at the time of webhook setup.
3. Clerk requires publicly accessible HTTPS URLs; localhost cannot receive webhooks.
4. Missing or incorrect `CLERK_WEBHOOK_SECRET` in environment variables.
5. The webhook route prefix on FastAPI (`/webhooks/clerk`) did not match the configured endpoint.

After correcting the URL, exposing the backend publicly via Render, and setting the correct secret, the webhook began firing successfully.

---

## 15. What debugging steps did you perform when webhook logs didn’t show print statements?

Several checks were performed:

1. Verified that the backend was actually receiving the request using Render logs.
2. Added a top-level print statement inside the route to ensure the route was executed.
3. Confirmed that the Clerk dashboard showed the webhook delivery attempt.
4. Verified that the webhook secret in Render matched the one shown in Clerk.
5. Validated that the route had the correct prefix (`/webhooks/clerk`).
6. Printed request headers and body to ensure the payload was reaching FastAPI.
7. Tested the endpoint manually using a dummy POST request to ensure it was reachable.

These steps confirmed that the route was receiving requests, but signature verification failed until the correct secret was added.

---

## 16. How does the webhook create a default quota for every new user?

Inside the webhook handler, after verifying the signature, the backend retrieves the user ID:

```python
user_id = data["data"]["id"]
```

Then it calls:

```python
create_challenge_quota(db, user_id)
```

The function inserts a new row into the `challenge_quotas` table:

* `user_id`: Clerk user ID
* `quota_remaining`: default quota (such as 20)
* `last_reset_date`: current timestamp

This ensures every user starts with a fixed number of available challenge generations.

---

## 17. Why was the quota `None` even though users were visible in the Clerk dashboard?

This happened because:

1. Users were created before the webhook system was configured.
2. Clerk only triggers `user.created` at the moment of creation, not retroactively.
3. Therefore, those users never triggered a webhook event.
4. Since the webhook never fired, no quota rows were created in your database.

When you logged in with an old user account, the backend checked the `challenge_quotas` table using:

```sql
SELECT * FROM challenge_quotas WHERE user_id = <user_id>
```

Since the user never had a quota entry, the result was `None`.

The fix was:

* Logging in with a new user after the webhook was configured.
* Or adding fallback logic to auto-create a quota if one does not exist.

---

## 18. Why does the backend sometimes return quota = 0 even though the database has correct values?

There were three reasons for this behavior:

1. The frontend used the expression `quota?.quota_remaining || 0`.
   In JavaScript, `0` is falsy, so even a correct quota of `0` would display incorrectly.
   The correct operator should be `??`, as in:

   ```js
   quota?.quota_remaining ?? 0
   ```

2. The backend returned a raw SQLAlchemy object instead of a serialized dictionary.
   React sometimes received incomplete or incorrectly formatted data.

3. A mismatch in property names occurred:
   The backend returned `last_reset_date`, but the frontend looked for `last_reset_data`.
   Because of this mismatch, some logic failed and default values were displayed.

After correcting the JSON serialization and updating the React logic, the correct quota values began appearing consistently.

