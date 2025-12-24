## Fault Tolerance: Definition & System Design Approach

![Image](https://www.researchgate.net/publication/220195544/figure/fig2/AS%3A928174934331393%401598305557123/Fault-tolerant-architecture.ppm)

![Image](https://media.geeksforgeeks.org/wp-content/uploads/20230709153949/IMG-20230709-WA0007.jpg)

![Image](https://miro.medium.com/1%2AA_Ur-wfq9llS-yywgk5r0Q.png)

![Image](https://docs.oracle.com/cd/E19225-01/820-5819/images/identityMgr_high_availability.gif)

**Interview-style answer:**

**Fault tolerance** is the ability of a system to **continue operating correctly even when one or more components fail**.
Failures are expected, not exceptional—good system design **assumes things will break** and plans for it.

---

## What Is a Fault in System Design?

A fault can be:

* Server crash
* Network partition
* Disk failure
* Database replica lag
* Timeout from a downstream service
* Deployment bugs

Fault tolerance is about **limiting the blast radius** of these failures.

---

## Core Principles of Fault-Tolerant Design

### 1. Eliminate Single Points of Failure

* Never rely on one server, one DB instance, or one AZ
* Use replication and redundancy

Example:

```
Client → Load Balancer → Multiple App Servers
```

If one server fails, traffic is rerouted automatically.

---

### 2. Redundancy at Every Layer

* Multiple app instances
* Database replicas
* Replicated caches
* Multiple availability zones

Redundancy ensures **failover**, not prevention.

---

### 3. Fail Fast, Not Slow

* Use timeouts on network calls
* Avoid indefinite waiting
* Return errors quickly so systems can recover

This prevents **thread exhaustion** and cascading failures.

---

### 4. Graceful Degradation

When part of the system fails:

* Core functionality still works
* Non-critical features are disabled

Example:

* Recommendations fail → show static feed
* Analytics fail → don’t block user requests

---

### 5. Isolation (Blast Radius Control)

* Separate services
* Separate resource pools
* Use bulkheads (thread pools per service)

A failure in one service should not crash the entire system.

---

## Key Fault Tolerance Patterns (Interview-Focused)

### 1. Health Checks + Load Balancer

* Periodic health checks
* Remove unhealthy instances automatically
* Zero manual intervention

---

### 2. Replication & Failover

* Primary-replica databases
* Automatic leader election
* Read from replicas, write to primary

---

### 3. Retries (With Backoff)

* Retry transient failures
* Use exponential backoff
* Add jitter to avoid retry storms

Bad practice:

* Infinite retries

---

### 4. Circuit Breaker

* Stop calling a failing service temporarily
* Prevents cascading failures
* Automatically recover when service is healthy

States:

* Closed → Open → Half-open

---

### 5. Idempotency

* Safe retries without side effects
* Especially important for payments and order creation

---

### 6. Asynchronous Processing

* Use queues for non-critical tasks
* Decouple request lifecycle
* Prevent user-facing latency spikes

---

## Designing a Fault-Tolerant System (Step-by-Step)

**In an interview, I would approach it like this:**

### Step 1: Identify Critical Components

* API layer
* Database
* Cache
* External services

### Step 2: Define Failure Scenarios

* What happens if this component fails?
* How quickly do we detect failure?
* How do we recover?

### Step 3: Apply Redundancy + Isolation

* Multiple instances
* Multiple AZs
* Independent failure domains

### Step 4: Add Control Mechanisms

* Timeouts
* Retries with limits
* Circuit breakers

### Step 5: Monitor & Automate Recovery

* Metrics (latency, error rate)
* Alerts
* Auto-scaling and auto-healing

---

## Fault Tolerance vs High Availability (Common Interview Trap)

* **Fault tolerance**: System continues working despite failures
* **High availability**: System minimizes downtime

They are related, but not identical.

---

Although **Fault Tolerance (FT)** and **High Availability (HA)** are closely related, they are **not the same**.
The core difference lies in **how the system behaves when failures occur**.

---

## Fault Tolerance

**Definition:**
Fault tolerance is the ability of a system to **continue operating correctly without interruption** even when one or more components fail.

### Key Characteristics

* No service disruption
* Automatic, immediate failover
* Redundancy at every critical component
* Typically **active–active** setups

### Example

* Aircraft control systems
* Financial trading systems
* Mission-critical infrastructure

If a server fails:

* Users **do not notice** the failure

### Cost & Complexity

* High infrastructure cost
* Complex design and testing
* Harder to implement correctly

---

## High Availability

**Definition:**
High availability focuses on **minimizing downtime**, not necessarily eliminating it completely.

### Key Characteristics

* Short, acceptable downtime is allowed
* Failover may take seconds or minutes
* Often **active–passive** setups
* Designed to meet SLA targets (e.g., 99.9%)

### Example

* Web applications
* E-commerce platforms
* SaaS products

If a server fails:

* Brief disruption may occur
* System recovers quickly

---

## Key Differences (Interview-Friendly Table)

| Aspect         | Fault Tolerance          | High Availability              |
| -------------- | ------------------------ | ------------------------------ |
| Goal           | Zero downtime            | Minimal downtime               |
| Failure impact | No visible impact        | Short disruption               |
| Recovery       | Instant                  | Fast but not instant           |
| Architecture   | Active–active            | Active–passive / active–active |
| Complexity     | Very high                | Moderate                       |
| Cost           | Very high                | Lower than FT                  |
| Typical use    | Mission-critical systems | Business applications          |

---

## Design Perspective (Important Interview Insight)

* **Fault tolerance** is about *surviving failures without stopping*.
* **High availability** is about *recovering quickly after failures*.

Most real-world systems:

* Aim for **high availability**
* Accept limited downtime
* Apply **partial fault tolerance** to critical paths

True fault tolerance everywhere is usually **not cost-effective**.

---

## One-Line Interview Summary

> Fault tolerance ensures continuous operation despite failures, while high availability focuses on minimizing downtime and recovering quickly when failures occur.
