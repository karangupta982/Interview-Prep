# ReactJS Concepts and Interview Preparation

This repository is a **complete reference guide for mastering ReactJS** — from fundamentals to advanced topics and interview preparation.
It includes theoretical notes, code snippets, and structured examples to help you learn React systematically and prepare for technical interviews.

---

## Table of Contents

1. [Introduction to React](#1-introduction-to-react)
2. [Folder Structure](#2-folder-structure)
3. [Core Concepts](#3-core-concepts)
4. [Hooks](#4-hooks)
5. [Lifecycle and Re-rendering](#5-lifecycle-and-re-rendering)
6. [React Context API](#6-react-context-api)
7. [Redux Toolkit](#7-redux-toolkit)
8. [React Router](#8-react-router)
9. [Handling API Calls and Async Logic](#9-handling-api-calls-and-async-logic)
10. [Performance Optimization](#10-performance-optimization)
11. [Advanced Topics](#11-advanced-topics)
12. [React Interview Questions](#12-react-interview-questions)
13. [Best Practices](#13-best-practices)
14. [Common Mistakes and Debugging](#14-common-mistakes-and-debugging)
15. [Additional Resources](#15-additional-resources)

---

## 1. Introduction to React

React is a **JavaScript library for building user interfaces**, based on:

* **Component-based architecture**
* **Declarative programming**
* **Virtual DOM**
* **Unidirectional data flow**

React enables you to build **reusable UI components** and handle state effectively, ensuring fast, predictable updates.

---

## 2. Folder Structure

A recommended structure to keep this repository clean and scalable:

```
reactjs/
│
├── README.md                   # Documentation for the entire repo
│
├── 01_Core_Concepts/            # Basic React fundamentals
│   ├── components.md
│   ├── jsx.md
│   ├── props_state.md
│   ├── conditional_rendering.md
│   └── examples/
│       └── basic_counter.jsx
│
├── 02_Hooks/
│   ├── useState.md
│   ├── useEffect.md
│   ├── useContext.md
│   ├── useRef.md
│   ├── useMemo_useCallback.md
│   ├── useReducer.md
│   ├── custom_hooks.md
│   └── examples/
│       └── timer_with_useEffect.jsx
│
├── 03_Context_API/
│   ├── context_intro.md
│   ├── context_vs_props.md
│   ├── context_example.md
│   └── examples/
│       └── theme_context_example.jsx
│
├── 04_Redux_Toolkit/
│   ├── redux_intro.md
│   ├── store_reducer_flow.md
│   ├── async_thunk.md
│   ├── redux_vs_context.md
│   └── examples/
│       └── counter_slice_example.jsx
│
├── 05_Router/
│   ├── router_intro.md
│   ├── nested_routes.md
│   ├── protected_routes.md
│   └── examples/
│       └── routing_example.jsx
│
├── 06_Advanced_Topics/
│   ├── hoc.md
│   ├── render_props.md
│   ├── portals.md
│   ├── error_boundaries.md
│   ├── controlled_uncontrolled.md
│   ├── ssr_intro.md
│   └── examples/
│       └── hoc_loading_example.jsx
│
├── 07_Performance_Optimization/
│   ├── react_memo.md
│   ├── useMemo_vs_useCallback.md
│   ├── lazy_loading.md
│   ├── profiling.md
│   └── examples/
│       └── memoized_list_example.jsx
│
├── 08_Interview_Preparation/
│   ├── react_basic_questions.md
│   ├── hooks_questions.md
│   ├── advanced_concepts_questions.md
│   ├── performance_questions.md
│   ├── react_project_based_questions.md
│   └── revision_notes.md
│
└── 09_Practice_Projects/
    ├── todo_app/
    ├── counter_app/
    ├── authentication_system/
    ├── crud_operations/
    └── notes_app/
```

### Folder Purpose Summary

| Folder                         | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| `01_Core_Concepts/`            | Fundamental topics like JSX, components, props, and state.   |
| `02_Hooks/`                    | Detailed explanation of all React hooks with examples.       |
| `03_Context_API/`              | Global state handling using React Context.                   |
| `04_Redux_Toolkit/`            | Scalable state management and async logic.                   |
| `05_Router/`                   | Routing, navigation, and protected routes.                   |
| `06_Advanced_Topics/`          | Higher order components, portals, SSR, and error boundaries. |
| `07_Performance_Optimization/` | Memoization, lazy loading, and re-render optimization.       |
| `08_Interview_Preparation/`    | Conceptual, coding, and practical interview questions.       |
| `09_Practice_Projects/`        | Small and medium-scale React project implementations.        |

---

## 3. Core Concepts

Includes:

* Components (Functional and Class)
* JSX and Virtual DOM
* Props and State
* Conditional Rendering
* Lifting State Up
* Prop Drilling

Each topic contains explanation + examples in separate markdown files.

---

## 4. Hooks

Explains all React hooks in-depth:

* How and when to use
* Real-world examples
* Common interview patterns
* Pitfalls and performance notes

Example hooks covered:
`useState`, `useEffect`, `useContext`, `useRef`, `useMemo`, `useCallback`, `useReducer`, and custom hooks.
