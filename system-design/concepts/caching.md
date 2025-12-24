## What is Caching and Why Is It Important in System Design?

**Interview-style answer:**

**Caching** is the technique of **storing frequently accessed data in a fast storage layer** so that future requests can be served **faster and with less load on the primary data source**.

In system design, caching is one of the **most impactful performance and scalability optimizations**.

---

## Why Caching Is Important

### 1. Reduces Latency

* Cache (memory) is orders of magnitude faster than disk or network calls
* Improves user-perceived performance

Example:

* Memory access: microseconds
* Database call: milliseconds

---

### 2. Improves Scalability

* Offloads reads from the database
* Handles high read traffic without scaling DB linearly
* Prevents database bottlenecks

---

### 3. Reduces Cost

* Fewer DB queries
* Less compute usage
* Lower infrastructure cost at scale

---

### 4. Improves Reliability

* Cache can serve data even if DB is slow or temporarily unavailable
* Helps absorb traffic spikes (flash sales, viral content)

---

## Where Caching Is Used (Common Layers)

### 1. Client-Side Cache

* Browser cache
* HTTP cache headers
* CDN caching

---

### 2. Application-Level Cache

* In-memory cache
* Distributed cache (e.g., Redis)

Use cases:

* User profiles
* Product catalog
* Feature flags

---

### 3. Database Cache

* Query cache
* Buffer pool

Transparent but limited control.

---

## Cache Invalidation (Very Important Interview Topic)

> “There are only two hard problems in computer science: cache invalidation and naming things.”

### Common Techniques:

* TTL (time-based expiration)
* Explicit invalidation on updates
* Versioned keys

Wrong invalidation leads to:

* Stale data
* Data inconsistency

---

## Cache Design Considerations

* What to cache?
* Cache size limits
* Eviction policy (LRU, LFU)
* Consistency vs performance
* Handling cache stampede
