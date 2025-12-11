# **SECTION 2 — Clerk JWT & Authentication System**

---

## **6. How does Clerk generate JWTs for your backend?**

**Answer:**
Clerk generates backend-compatible JWTs through **JWT Templates**.

A JWT template defines:

* The **audience (`aud`)** → who the token is meant for
* The **issuer (`iss`)** → Clerk domain
* The **expiration time**
* The **claims** you want inside the token (such as `user_id`)
* The **signing method (RS256)**

When the frontend calls:

```js
getToken({ template: "backend" })
```

Clerk builds a JWT using the template and signs it using their RSA private key.
Your FastAPI backend then verifies the JWT with Clerk’s public JWKS endpoint.

This JWT establishes the identity of the user interacting with your backend.

---

## **7. How did you configure Clerk’s JWT template for your FastAPI backend?**

**Answer:**
I created a custom JWT template named `"backend"` with the following setup:

### **Template Type**

```
Blank
```

### **Claims**

I inserted the user's Clerk ID into the token:

```json
{
  "user_id": "{{user.id}}"
}
```

### **Signing Algorithm**

```
RS256
```

### **Issuer and JWKS URL**

Automatically provided by Clerk:

```
iss: https://<your-instance>.clerk.accounts.dev
jwks: https://<your-instance>.clerk.accounts.dev/.well-known/jwks.json
```

### **Audience**

```
backend
```

This ensures FastAPI can validate:

* The signature
* The issuer
* The audience
* The presence of a valid `user_id` claim

---

## **8. Why did your initial `getToken()` call fail with `"JWT template not found"`?**

**Answer:**
Because I had not created a JWT template named `"default"`. Clerk only generates backend tokens using templates that *explicitly exist*.

When I first wrote:

```js
getToken({ template: "default" })
```

Clerk responded with:

```
JWT template not found
```

The fix was:

1. Creating a template named `"backend"`
2. Requesting the token properly:

```js
getToken({ template: "backend" })
```

Once done, Clerk started issuing valid backend JWTs.

---

## **9. What is the purpose of adding custom claims like `"user_id": "{{user.id}}"` inside the JWT template?**

**Answer:**
FastAPI needs a way to **identify which user** is making the request.

Clerk’s default session token contains:

* `sub`
* `iss`
* `aud`
* `exp`

But it does NOT automatically include a top-level `"user_id"` claim.

To simplify backend logic, I added:

```json
"user_id": "{{user.id}}"
```

Now the backend can extract the user ID directly:

```python
user_id = payload["user_id"]
```

This makes quota checking, challenge generation, and rate limits easy to implement.

---

## **10. How does FastAPI extract and validate the JWT from the `Authorization` header?**

**Answer:**
Every API request includes:

```http
Authorization: Bearer <jwt>
```

FastAPI performs the following steps:

### **1. Extract the token**

```python
auth_header = request.headers.get("authorization")
token = auth_header.split(" ")[1]
```

### **2. Fetch Clerk’s public JWKS**

These keys are used to verify the RSA signature.

### **3. Decode JWT**

```python
jwt.decode(
    token,
    key=public_key,
    algorithms=["RS256"],
    audience="backend",
    issuer="https://<your-instance>.clerk.accounts.dev"
)
```

### **4. Extract claims**

```python
user_id = payload["user_id"]
```

If any of these checks fail:

* Wrong audience
* Wrong issuer
* Invalid signature
* Token expired

FastAPI returns **401 Unauthorized**.

---

## **11. Why does the frontend need to call `getToken({ template: "backend" })` instead of basic `getToken()`?**

**Answer:**
Because:

### ✔ `getToken()` (without template) returns *frontend* tokens

These tokens:

* Are meant for React only
* Cannot be verified by the backend
* Lack the required claims
* Often don’t include the signing signature needed for RS256 validation

### ✔ `getToken({ template: "backend" })` returns a **backend JWT**

These tokens:

* Contain `user_id`
* Have the correct audience `"backend"`
* Are signed with RS256 (verifiable by FastAPI)
* Follow your template rules

Without passing the template name, the backend **cannot trust** the token.

---

## **12. What was causing the 500 Internal Server Error when calling `/api/quota`?**

**Answer:**
The issue was caused by **missing or invalid JWTs**.

Before fixing the template and `getToken()` call:

* Frontend sent `Authorization: Bearer null`
* FastAPI tried to extract `user_id` from a `NoneType`
* This caused:

```
AttributeError: 'NoneType' has no attribute 'get'
```

Which resulted in:

```
500 Internal Server Error
```

The fix:

1. Create `"backend"` JWT template
2. Add `"user_id"` claim
3. Use:

```js
getToken({ template: "backend" })
```

After this, `/api/quota` worked perfectly.
