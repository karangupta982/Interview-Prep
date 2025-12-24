## What Is Sharding in Database Design?


**Sharding** is a database design technique where **large datasets are partitioned into smaller, independent pieces called shards**, and each shard is stored on a **different database instance**.

The primary goal of sharding is to **scale databases horizontally** when a single database can no longer handle the data size or traffic.

---

## Why Sharding Is Needed

A single database has physical limits:

* CPU
* Memory
* Disk I/O
* Network bandwidth

Vertical scaling (bigger machine) has limits and high cost.
Sharding enables **horizontal scaling** by distributing data and load.

---

## Types of Sharding

### 1. Horizontal Sharding (Most Common)

* Split rows across shards
* Same schema on all shards

Example:

* Users with ID 1–1M → Shard A
* Users with ID 1M+ → Shard B

This is what people usually mean by sharding.

---

### 2. Vertical Sharding

* Split columns across different databases
* Each shard stores a subset of fields

Example:

* User profile table in one DB
* User activity table in another DB

Used for **isolation**, not scaling large tables.

---

## Sharding Strategies (Key Interview Topic)

### 1. Range-Based Sharding

* Shard by ID ranges or time ranges

Pros:

* Simple
* Efficient range queries

Cons:

* Hot shards if traffic is uneven

---

### 2. Hash-Based Sharding

* Hash(shard_key) → shard

Pros:

* Even data distribution

Cons:

* Poor range queries
* Harder resharding

---

### 3. Consistent Hashing

* Minimizes data movement when shards are added/removed

Pros:

* Good for dynamic scaling

Cons:

* More complex logic

---

### 4. Directory-Based Sharding

* Lookup service maps keys to shards

Pros:

* Flexible
* Easy resharding

Cons:

* Extra hop
* Directory becomes critical component

---

## Choosing a Shard Key (Very Important)

A good shard key:

* Distributes data evenly
* Avoids hot shards
* Matches access patterns
* Is immutable

Bad shard keys:

* Country
* Status
* Boolean fields

---

## Challenges of Sharding

* Cross-shard joins are expensive
* Transactions across shards are complex
* Rebalancing shards is hard
* Operational complexity increases

Because of this, sharding is usually:

* A **last resort**
* Introduced only after indexing, caching, and read replicas

---

## Sharding vs Replication (Common Interview Trap)

* **Replication** improves availability and read scalability
* **Sharding** improves write scalability and storage limits

They solve different problems and are often used together.
