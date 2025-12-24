System design is the process of **architecting a software system** that satisfies **functional requirements** (what the system should do) and **non-functional requirements** (how well it should do it), such as **scalability, reliability, availability, performance, security, and maintainability**.

In an interview, I’d describe system design in **three layers**:

---

### 1. Problem → Requirements

System design starts by **understanding the problem**, not drawing boxes.

* Functional requirements
  Example: “Users should be able to post content, like it, and view a feed.”

* Non-functional requirements

  * Scale (users, QPS, data size)
  * Latency (p95 response time)
  * Availability (99.9% vs 99.99%)
  * Consistency vs availability trade-offs

A good system design is **requirement-driven**, not technology-driven.

---

### 2. High-Level Architecture

Once requirements are clear, we define **how the system is structured**.

Typical components:

* Clients (web, mobile)
* Load balancers
* Application servers (stateless)
* Databases (SQL / NoSQL)
* Caches
* Message queues
* External services

At this level, the goal is to answer:

* How requests flow through the system
* How we scale horizontally
* Where failures can happen and how we handle them

---

### 3. Deep Dive & Trade-offs

This is where design becomes engineering.

Examples:

* Why caching is needed and what to cache
* Why read replicas vs sharding
* SQL vs NoSQL decisions
* Synchronous vs asynchronous communication
* Strong vs eventual consistency

Interviewers care **more about your reasoning** than the final diagram.

---

## My Take (What Interviewers Actually Look For)

In my view, system design is **not about memorizing architectures** like “Netflix uses this” or “Uber uses that”.

It’s about showing that:

* You can **think at scale**
* You understand **bottlenecks**
* You can **reason about trade-offs**
* You design for **change and failure**, not just happy paths

A strong candidate:

* Asks clarifying questions first
* Makes assumptions explicit
* Justifies every major decision
* Knows what they are *not* solving yet

---

## One-Line Definition (Strong Interview Close)

> System design is the discipline of making **informed architectural decisions** to build software systems that work **reliably and efficiently at scale**, while balancing real-world trade-offs.
