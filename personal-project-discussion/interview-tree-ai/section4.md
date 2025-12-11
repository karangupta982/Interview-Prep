# SECTION 4 — Database & Reset Logic

---

## 19. Why does Render recreate the SQLite tables on redeploy?

Render uses an **ephemeral filesystem** for non-persistent deployments.
This means:

* SQLite files are stored directly in the container’s local disk.
* When Render rebuilds or redeploys the service, the container is recreated.
* The SQLite file is deleted and a fresh one is generated.
* FastAPI + SQLAlchemy run the table creation logic again, so tables get recreated.

This results in:

* Previous data disappearing on every deploy
* Existing user quotas being lost
* New tables being initialized every time

This behavior is expected with SQLite on cloud platforms.

To ensure persistence, you would eventually need:

* PostgreSQL (Neon, Supabase, Railway, etc.)

---

## 20. What is the logic for resetting the user’s daily challenge quota?

The system uses the following process:

1. Each user has a `last_reset_date` stored in the database.
2. Whenever the user fetches `/api/quota`, backend checks:

   * How long it has been since the last reset.
3. If 24 hours have passed:

   * Reset `quota_remaining` back to default (such as 20 or 50).
   * Update `last_reset_date` to now.
4. Return the updated quota to the frontend.

The logic is often implemented as:

```python
if datetime.now() - quota.last_reset_date >= timedelta(hours=24):
    quota.quota_remaining = DEFAULT_AMOUNT
    quota.last_reset_date = datetime.now()
    db.commit()
```

Resetting happens automatically on **NEXT REQUEST**, not through background jobs.
This keeps the system simple and efficient for small-scale SaaS.

---

## 21. How does the backend handle missing quota rows (no record found)?

When the user logs in, the backend attempts to fetch quota with:

```sql
SELECT * FROM challenge_quotas WHERE user_id = <id>
```

If `None` is returned, possible reasons:

* User signed up before webhook was configured.
* SQLite database was wiped due to redeploy.
* Webhook failed or signature verification failed.

In this scenario, the backend returns:

```json
{
  "user_id": "<id>",
  "quota_remaining": 0,
  "last_reset_date": now
}
```

This stops the app from crashing.

A more robust pattern would be:

* Auto-create a new quota if none exists
* Or prompt the user that their account is not yet initialized

Later, you may implement:

```python
if quota is None:
    quota = create_challenge_quota(db, user_id)
```

This ensures every user always has a quota.

---

## 22. Why is it often necessary to auto-create a quota on first GET instead of relying only on webhooks?

Because webhooks are **not guaranteed** to run under all circumstances.

Cases where webhook may fail:

* Incorrect Clerk webhook URL
* Wrong webhook signing secret
* Instance was offline at time of delivery
* SQLite reset on deploy deleted previous quota rows
* Clerk retries exceeded
* Network errors

If your backend relies only on:

```
user.created webhook → create quota
```

then users who joined earlier or during outages will have no quotas and your API will return `None`.

To fix this, production systems implement fallback logic:

### Auto-create quota if not found

```python
if quota is None:
    quota = create_challenge_quota(db, user_id)
```

This guarantees:

* Every user always has a quota
* The app never breaks because of webhook issues
* Database stays consistent even if SQLite resets

Webhooks should be the primary method,
but GET fallback makes the system fault-tolerant.
