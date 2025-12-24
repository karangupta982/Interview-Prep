## What is a Load Balancer and Why Is It Used?

![Image](https://images.wondershare.com/edrawmax/templates/network-diagram-for-load-balancing.png)

![Image](https://media.geeksforgeeks.org/wp-content/uploads/20230425202146/Client-Side-Load-Balacer.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AGb7hi5pqKmYYxEIUCJylHw.gif)

![Image](https://i.sstatic.net/6qeu7.jpg)


A **load balancer** is a system component that **distributes incoming client requests across multiple backend servers** to ensure **high availability, scalability, and reliability** of an application.

Instead of clients directly hitting a single server, all traffic goes through the load balancer, which decides **which server should handle each request**.

---

## Why Do We Need a Load Balancer?

In real-world systems, a single server cannot:

* Handle high traffic reliably
* Scale with increasing users
* Tolerate failures gracefully

A load balancer solves these problems.

### 1. Scalability

* Distributes traffic across multiple servers
* Allows **horizontal scaling** (add more servers, not bigger ones)
* Enables systems to handle spikes in traffic

### 2. High Availability

* If one server goes down, traffic is routed to healthy servers
* Prevents **single point of failure**
* Improves uptime (99.9%+ availability targets)

### 3. Performance Improvement

* Prevents any single server from being overloaded
* Reduces response time
* Can route requests based on server load or latency

### 4. Fault Tolerance

* Performs **health checks** on backend servers
* Automatically removes unhealthy servers from rotation
* Ensures graceful degradation instead of total outage

---

## How a Load Balancer Works (High Level)

1. Client sends a request
2. Request hits the load balancer
3. Load balancer selects a backend server based on a strategy
4. Server processes the request and sends response back

Client never needs to know:

* How many servers exist
* Which server handled the request

---

## Common Load Balancing Strategies (Interview-Relevant)

* **Round Robin**
  Requests are distributed sequentially across servers.

* **Least Connections**
  Routes request to the server with the fewest active connections.

* **IP Hashing**
  Same client IP goes to the same server (useful for stateful systems).

* **Weighted Distribution**
  More traffic to stronger servers.

---

## Types of Load Balancers

### 1. Layer 4 Load Balancer (Transport Layer)

* Operates on IP and port
* Faster, less intelligent
* No visibility into HTTP headers

Example use: TCP/UDP traffic

### 2. Layer 7 Load Balancer (Application Layer)

* Operates on HTTP/HTTPS
* Can route based on:

  * URL path
  * Headers
  * Cookies
* Supports SSL termination

Example use: Modern web applications and APIs

---

## Where Load Balancers Sit in System Design

Typical flow:

```
Client → Load Balancer → App Servers → Database / Cache
```

In large systems:

* External load balancer (user traffic)
* Internal load balancers (service-to-service communication)

---

## Important Interview Insight

Most scalable systems:

* Keep **application servers stateless**
* Use load balancers to freely route requests
* Store state in external systems (DB, cache)

This design allows:

* Easy scaling
* Rolling deployments
* Zero-downtime releases
