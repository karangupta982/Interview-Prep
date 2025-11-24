# **SPA vs MPA**

## **SPA (Single Page Application)**

A SPA loads **one HTML file** initially and updates the content dynamically using JavaScript without reloading the page.

### **How it works**

* Initial load: `/index.html`
* After that, only data (JSON) is fetched
* UI updates happen on the client side (CSR)

### **Pros**

* Fast navigation (no full reloads)
* Better user experience
* Reduced server load
* Smooth transitions

### **Cons**

* Initial load can be heavy
* SEO challenges (client-side rendering)
* Requires JavaScript to be enabled

### **Examples**

React, Vue, Angular apps
Gmail, Twitter, Instagram

---

## **MPA (Multi Page Application)**

Each page load sends a new request to the server, which returns a fresh HTML file.

### **How it works**

* Navigation → full page reload
* Server renders a new page each time

### **Pros**

* Better SEO (HTML served by server)
* Simpler architecture
* Good for large, content-heavy websites

### **Cons**

* Slower navigation (full reloads)
* More server load
* Repeated loading of common resources

### **Examples**

E-commerce sites, blogs, banking portals

---

## **Core Differences**

| SPA                         | MPA                         |
| --------------------------- | --------------------------- |
| Loads once                  | Loads every page            |
| Faster user experience      | Slower page transitions     |
| CSR (Client-side rendering) | SSR (Server-side rendering) |
| JavaScript-heavy            | Server-heavy                |
| Harder SEO                  | Easy SEO                    |

---

## **Which one to use?**

* **SPA** → Apps with high interactivity
  (Chats, dashboards, social platforms)
* **MPA** → Content-heavy sites
  (Blogs, news sites, e-commerce pages)
