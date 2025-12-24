## 1. Stateless Systems

A stateless system **does not store any client-specific state on the server** between requests.
Each request is **independent and self-contained**.

### Characteristics

* Every request contains all the information needed to process it
* Server does not remember previous interactions
* Easy to scale horizontally
* Failure of one server does not affect others

### Example

* REST APIs
* HTTP requests with JWT authentication
* Microservices behind a load balancer

### How it works

* Client sends credentials / tokens with every request
* Server validates and processes the request
* No session data is stored in server memory

### Advantages

* High scalability
* Simple load balancing
* Better fault tolerance
* Easy deployment and rollback

### Disadvantages

* Larger request size
* Client bears responsibility for state
* Repeated validation overhead

---

## 2. Stateful Systems

A stateful system **stores client-specific data on the server** across multiple requests.

### Characteristics

* Server remembers previous requests
* Requests depend on prior interactions
* Scaling is more complex
* Server failures can impact user sessions

### Example

* Traditional web apps using server-side sessions
* In-memory session storage
* Multiplayer game servers

### How it works

* Client establishes a session
* Server stores session data (memory / DB)
* Subsequent requests rely on stored session state

### Advantages

* Simpler client logic
* Faster access to session data
* Useful for workflows requiring continuity

### Disadvantages

* Harder to scale horizontally
* Requires sticky sessions or shared session stores
* Lower fault tolerance

---

## 3. Real-World Design Choice (Important Interview Insight)

In practice, **most large-scale systems aim to be stateless at the application layer**, and push state to:

* Databases
* Distributed caches (Redis)
* Object storage

This allows:

* Horizontal scaling
* Better resilience
* Cloud-native deployments

Example:

* Authentication: Stateless JWT + Redis blacklist
* Sessions: External session store instead of server memory
