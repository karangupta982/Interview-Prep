# ReactJS Complete Notes & Interview Preparation

A fully structured, complete, and interview-ready collection of React.js notes.  
This repository covers everything from basics → advanced → ecosystem topics required for frontend interviews.

---

# Table of Contents

## 1. Basic Fundamentals
- What is React?
- SPA vs MPA
- Virtual DOM
- JSX
- Components
- Props vs State
- Controlled vs Uncontrolled Components
- Rendering lists & keys
- Conditional rendering
- Event handling
- Lifting State Up
- Prop Drilling
- Component lifecycle (Class-based, optional)
- What is component re-render?
- Component unmount – meaning & use cases
- Basic Hooks
  - useState
  - useEffect (all variations)
  - useRef (persistent values + DOM reference)

---

## 2. Intermediate Concepts
- Forms in React
- Fragments
- Error Boundaries
- Context API (useContext)
- Custom Hooks
- React.memo
- useCallback
- useMemo
- useLayoutEffect vs useEffect
- React Portals
- Performance Optimization
  - Lazy loading (React.lazy)
  - Suspense
  - Code splitting
- Using refs for:
  - Focus
  - Timers
  - External libraries
- JSON.stringify & JSON.parse
- LocalStorage vs SessionStorage vs Cookies
- REST API
  - Fetch
  - Axios
  - When to call APIs (rules with useEffect)

---

## 3. State Management (Advanced)

### Redux Toolkit
- Why Redux is needed  
- Store  
- Slice  
- Reducer  
- Actions  
- Dispatch flow  
- Selectors  
- Async Thunks  
- RTK Query (basics)

#### Dispatch Flow Example
UI click → dispatch → store → reducer updates state → connected components re-render.

---

### Context API vs Redux
- When to use Context  
- When Redux is better  
- Limitations of Context  

---

## 4. Advanced React
- Reconciliation Algorithm
- Fiber Architecture
- Strict Mode
- Automatic Batching
- Why keys are important
- Diffing Algorithm
- Higher Order Components (HOC)
- Render Props Pattern
- Compound Components Pattern
- Portal use cases
- Cleanup functions & unmounting in depth
- React Profiler
- Optimizing page load time
- Code splitting strategies
- Bundle analyzers

---

## 5. React + Web Concepts (Important for Interviews)
- DOM vs Virtual DOM
- Browser rendering pipeline
- Debouncing & Throttling
- Event Loop (microtasks vs macrotasks)
- CORS
- Authentication basics (cookies, tokens)
- SEO & React
- Hydration in React
- CSR vs SSR vs SSG vs ISR
- Server Components (React 19 / Next.js)
- GraphQL
  - What is GraphQL?
  - REST vs GraphQL
  - Queries & Mutations

---

## 6. React + Next.js Topics (Job Focused)
- File-based routing
- Pre-rendering concepts
- API routes
- Server components
- Client components
- getServerSideProps()
- getStaticProps()
- Middleware
- Image optimization
- Deployment basics
- Edge functions

---

## 7. Practical Topics You Should Add
- How to reduce page reload time
  - Caching
  - Code splitting
  - Lazy loading
  - CDN usage
  - Memoization
- How React handles re-renders internally
- Why keys matter in lists
- Why arrow functions are preferred in callbacks (lexical scope + no re-binding)
- Async/await refresher
- Promises
- TypeScript with React (basics)
- Folder structure best practices for large apps

