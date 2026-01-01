# What is Event-Driven Architecture in Node.js?

**Event-driven architecture** is a programming model where the flow of the application is determined by **events** (actions) and **event handlers** (functions that respond to those events).

Node.js uses this architecture at its core to efficiently handle asynchronous operations without blocking the main thread.

---

# Key Idea

Node.js follows:
- **Events** → something happens (request received, file finished reading, timer ended)
- **Event emitters** → objects that emit events
- **Event listeners/handlers** → functions that run in response to events

Node executes code **only when an event occurs**, instead of waiting.

---

# Why Node.js Uses Event-Driven Architecture?

Because Node.js is **single-threaded**, it cannot block the main thread.

Event-driven architecture allows:
- non-blocking operations  
- high scalability  
- thousands of concurrent requests  
- efficient I/O handling (file system, network, database)

This is why Node.js is ideal for real-time applications.

---

# How It Works (Step-by-Step)

### 1. An event occurs  
(e.g., HTTP request, file read completes)

### 2. Node emits the event  
Using the internal **EventEmitter** system.

### 3. A callback function (listener) is triggered  
This listener handles the response.

### 4. Meanwhile, Node’s event loop continues  
It doesn’t wait; it handles other events.

---

# Example Using EventEmitter

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

// listener
emitter.on('greet', () => {
  console.log('Hello, User!');
});

// emit event
emitter.emit('greet');
```

### Output:
```
Hello, User!
```

Here:
- `'greet'` is an event  
- `.on()` registers a listener  
- `.emit()` triggers the event  

---

# Real-World Examples in Node.js

### 1. HTTP Server
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello!");
});
```
`createServer` internally listens for `"request"` events.

---

### 2. File System Operations
```js
fs.readFile("data.txt", () => {
  console.log("File read completed!");
});
```
`readFile` emits an event when the operation finishes.

---

### 3. Streams
Streams emit events like:
- `"data"`
- `"end"`
- `"error"`

---

### 4. Real-time apps (WebSockets)
Every message is an event.

---

# Why is Event-Driven Architecture Useful?

- Handles massive concurrency on a single thread  
- Makes Node.js non-blocking  
- Ideal for I/O-heavy applications  
- Great for:
  - chat apps  
  - gaming servers  
  - live dashboards  
  - file uploads  
  - streaming apps  

---

# Interview-Ready Summary

**Event-driven architecture in Node.js means the application runs based on events and callbacks. Instead of blocking the thread, Node listens for events (like requests, file operations) and triggers handlers asynchronously, making it highly scalable and non-blocking.**
