# 🚀 Advanced JavaScript Programming Challenges

Welcome to the **Advanced JavaScript Programming Challenges** guide. This collection includes **50 in-depth, real-world-inspired problems** for developers who are ready to level up their mastery of JavaScript. These exercises go beyond syntax and basic logic: they test your understanding of **algorithms, data structures, performance optimization, functional and object-oriented programming, asynchronous design, state management, and architectural thinking**.

Every exercise has **clear requirements**, often with **multiple constraints**, to mirror real-world complexity. They require multi-step reasoning, structural decomposition, and creative problem solving. Ideal for those preparing for **technical interviews, open-source contributions, or complex frontend/backend roles**.

---

## 📚 Exercise Index

- [Introduction to JavaScript](../../README.md)
- [Basic Level Exercises](../basic/README.md)
- [Intermediate Level Exercises](../intermediate/README.md)

---

### 1. **Recursive Deep Cloning With Cyclic Reference Detection**

- Objective: Implement a `deepClone(obj)` function that accurately clones deeply nested structures.
- Constraints:

  - Must handle arrays, objects, maps, sets.
  - Should detect and handle circular references (use a WeakMap).
  - Should skip non-enumerable and symbol properties.

### 2. **Promise Timeout with AbortController**

- Wrap an existing Promise such that it rejects after N ms if it hasn’t resolved.
- Advanced: integrate `AbortController` to support actual cancellation when possible.

### 3. **Advanced Memoization with Multiple Parameter Keys**

- Create a `memoize(fn)` function that handles any number of arguments.
- Should serialize parameters smartly to cache based on value not reference.
- Should support cache expiration after T milliseconds.

### 4. **Rate-Limited Throttle Queue System**

- Build a throttle mechanism that supports a queue of tasks and only allows one to execute per interval.
- Each task should return a promise.

### 5. **Configurable Debouncer With Immediate Mode**

- Implement `debounce(fn, delay, { immediate: true })`.
- Immediate flag means the first call is executed instantly, next ones are debounced.

### 6. **Advanced EventEmitter with Once, RemoveAllListeners, Wildcards**

- Create an EventEmitter class.
- Supports:

  - `.on(event)`
  - `.once(event)`
  - `.off(event)`
  - `.emit(event)`
  - Wildcard events (e.g., `user:*` matches `user:login`, `user:logout`)

### 7. **Custom `bind`, `call`, and `apply` Polyfills with Context Preservation**

- Implement manual versions of `bind`, `call`, and `apply`.
- Should mimic exact behavior including argument handling and constructor binding.

### 8. **Resilient Retry Pattern with Exponential Backoff**

- Create a `retry(fn, attempts, delayStrategy)` function.
- Support exponential backoff: each retry waits twice as long.
- Stop on specific error types.

### 9. **Flexible Currying with Partial Application Support**

- Create a `curry(fn)` function that supports partial and full currying.
- For example: `sum(1)(2)(3)` or `sum(1,2)(3)`.

### 10. **Recursive Array Flattening with Depth Control**

- Flatten deeply nested arrays up to N levels (like `Array.prototype.flat(depth)`).
- Preserve type and structure in non-targeted elements.

### 11. **Robust CSV to JSON Parser**

- Build a parser that:

  - Handles quoted fields and escaped quotes
  - Converts into objects with inferred types
  - Can skip malformed lines or log warnings

### 12. **Bidirectional JSON ⇄ CSV Converter with Schema Inference**

- Create a two-way converter that:

  - Extracts a schema from JSON
  - Uses it to convert to CSV
  - Can reverse the operation maintaining types and keys

### 13. **Manual `instanceof` Replication Using Prototype Chain Walking**

- Create `myInstanceOf(obj, constructor)` that walks the prototype chain manually.
- Should return correct boolean for all JS types and custom classes.

### 14. **Concurrency Control with Async Pool Scheduler**

- Given a list of async tasks, run at most N concurrently.
- Wait until one finishes before starting another.
- Resolve with the results in original order.

### 15. **URL Parameter Parser with Nested Structure Support**

- Parse a URL string like `?user[name]=John&user[age]=30` into nested object.
- Handle arrays (`arr[]=1&arr[]=2`) and coercion of types ("true" → boolean).

### 16. **LRU Cache with Doubly Linked List**

- Build an LRU cache using a Map and a doubly linked list.
- `.get(key)` moves the item to the front.
- Remove least-used item if capacity exceeded.

### 17. **Observer Pattern with Dynamic Subscriptions**

- Create an observable object with `.subscribe()`, `.unsubscribe()`, `.notify()`.
- Allow observing property changes or method calls.

### 18. **DOM Depth Tree Analyzer**

- Given a root DOM node, calculate:

  - Max tree depth
  - Number of leaf nodes
  - Average children per node

- Use BFS/DFS algorithms.

### 19. **Async-Aware `map`, `filter`, and `reduce`**

- Implement `mapAsync`, `filterAsync`, and `reduceAsync`:

  - Accepts async callback
  - Ensures results are resolved in sequence

### 20. **Promise Pool Runner with Timeout Control**

- Execute async functions with concurrency limit and optional timeout for each.
- Return an array of settled results.

### 21. **Custom Map with Key Constraints and Invalidation Hooks**

- Objective: Build a custom Map-like class that:

  - Only allows keys of specific types (e.g., only strings or only symbols).
  - Supports key expiration (TTL in milliseconds).
  - Allows setting a callback that is executed when a key expires.

### 22. **Full HTML Parser to AST (Abstract Syntax Tree)**

- Write a parser that converts basic HTML markup into an abstract syntax tree.
- Should support:

  - Nested tags
  - Self-closing tags
  - Text nodes
  - Attribute parsing

### 23. **Dynamic Module Loader with Dependency Resolution**

- Build a function to dynamically load JavaScript modules with dependency resolution.
- Constraints:

  - Prevent cyclic dependencies
  - Load order must satisfy all dependencies
  - Support async loading via `import()`

### 24. **Secure Token Generator with Validation**

- Create a token generator function with options:

  - Set token length
  - Allow/disallow special characters
  - Create corresponding validator function with expiration time and signature check (HMAC/Hash).

### 25. **Finite State Machine (FSM) Class with Transitions and Guards**

- Build an FSM with:

  - Named states
  - Events and transitions
  - Optional guard functions to block/allow transitions
  - Observer callback on transition change

### 26. **Template Engine (Handlebars-like)**

- Create a basic string templating engine.
- Support:

  - Variables: `{{name}}`
  - Loops: `{{#each items}}`
  - Conditionals: `{{#if condition}}`
  - Escaping/unescaped modes

### 27. **Data Diff Tool for JSON Objects**

- Create a function `diffObjects(a, b)` that:

  - Returns all changes (added/removed/updated fields)
  - Supports deep diff
  - Optional formatting for logging or versioning

### 28. **IndexedDB Wrapper API with Schema and Migration Support**

- Build a wrapper around IndexedDB to:

  - Automatically handle DB versioning
  - Declare object stores and indexes via schema
  - Run migrations when schema changes

### 29. **Interactive Syntax Tree Visualizer**

- Parse JavaScript code into an AST (use Esprima or similar)
- Display the AST in a nested tree view
- Allow expanding/collapsing nodes

### 30. **Recursive DOM Serializer and Hydration System**

- Create a system that serializes DOM into minimal JSON and later "hydrates" it back into interactive elements.
- Should support:

  - Element types and attributes
  - Event bindings
  - Children and state rehydration

### 31. **Asynchronous Pub/Sub System**

- Build a pub/sub (publish-subscribe) engine that:

  - Works with async callbacks
  - Supports topic wildcards and hierarchical topics (`user.create`, `user.*`)
  - Allows batch publishing

### 32. **Graph Traversal Utilities (DFS, BFS, Shortest Path)**

- Implement core graph utilities:

  - DFS and BFS (both recursive and iterative)
  - Cycle detection
  - Shortest path (Dijkstra or A\*)

### 33. **Virtual Scroll List Renderer**

- Create a component that renders only visible items in a large list (10k+ rows).
- Requirements:

  - Maintain scroll position
  - Handle dynamic row height
  - Efficient rerendering

### 34. **In-Memory Document Database Engine**

- Design a JSON document store with:

  - Collection-like access
  - Filtering (`find`, `findOne`, `query`) using operators (\$gt, \$in, etc.)
  - Index simulation for fast access

### 35. **Observable Spreadsheet Cell Engine**

- Build a class where each cell can hold:

  - A value or formula (e.g., `=A1+B2`)
  - Reactive updates when referenced cells change
  - Circular dependency detection

### 36. **JavaScript Code Linter with Rule Engine**

- Build a linter that:

  - Parses JS source and applies rules (e.g., no var, semicolons required)
  - Allows custom rule definitions
  - Reports errors with line/col info

### 37. **Micro Frontend Loader with Lifecycle Hooks**

- Implement a loader that dynamically mounts micro frontends (via iframe or module).
- Support:

  - `init`, `mount`, `destroy` lifecycle
  - Shared context across apps
  - Error isolation

### 38. **Multi-User Chat Server (WebSocket API)**

- Design a backend (Node.js + WS) that supports:

  - Multiple chat rooms
  - Broadcasting messages
  - User join/leave notifications
  - Username uniqueness enforcement

### 39. **Live Code Previewer with Sandboxed Execution**

- Create a mini code editor that runs user input JavaScript in an iframe sandbox.
- Display console output inline.
- Support:

  - Error handling
  - Isolated execution (no access to parent context)

### 40. **Multi-Stage Pipeline Processor with Hooks**

- Design a pipeline system that:

  - Chains stages (functions)
  - Allows inserting hooks (`beforeStage`, `afterStage`)
  - Can abort or restart stages conditionally

### 41. **AI Command Parser (Mini Natural Language Interpreter)**

- Input: "Remind me to take medicine at 8 PM"
- Output: `{ action: 'remind', text: 'take medicine', time: '20:00' }`
- Build with:

  - Custom grammar rules
  - Tokenization and intent parsing

### 42. **WebAssembly Integration for Performance-Critical Task**

- Compile a basic C function (e.g., image filter) to WebAssembly
- Load it into JS
- Benchmark vs pure JS equivalent

### 43. **Command Line Interface (CLI) Framework**

- Build a framework for creating JS-based CLI tools
- Features:

  - Command parsing
  - Arguments/options
  - Subcommands and help messages

### 44. **Real-Time Collaborative Editor (CRDT Simplified)**

- Simulate a collaborative editor using basic CRDT (conflict-free replicated data type) logic
- Merge changes from multiple simulated clients

### 45. **Symbolic Math Expression Evaluator**

- Input: `"3x^2 + 2x - 1"`
- Output:

  - Evaluation at x = 2
  - Derivative
  - Simplified form

- Use recursive parsing and symbolic operations

### 46. **2D Physics Simulation Engine**

- Build a basic engine with:

  - Bodies, velocity, gravity
  - Collision detection
  - Step simulation and canvas rendering

### 47. **Virtual File System in Memory**

- Design an in-memory file system with:

  - Directories, files, paths
  - Read/write/rename/delete APIs
  - Tree representation and metadata support

### 48. **Regex Engine Simplified**

- Create a mini regex engine supporting:

  - Literal match, character classes, quantifiers (`a*`, `a+`)
  - Alternation (|) and grouping

- Compile to a finite state machine (FSM)

### 49. **Genetic Algorithm Simulation**

- Simulate evolution of a population to solve a problem (e.g., maximize a function)
- Includes:

  - Mutation and crossover
  - Fitness evaluation
  - Selection strategy

### 50. **JavaScript Unit Testing Framework with Assertion DSL**

- Build a test framework with:

  - `describe`, `it`, `expect` DSL
  - Async test support
  - Snapshot testing
  - Custom matchers

---

These final 30 exercises push you into the most advanced tiers of JavaScript development — architecture, performance, systems design, compilers, simulation, and tooling. Mastering them equips you to handle nearly any problem you may encounter as a senior JavaScript developer or technical lead.

Happy hacking! ⚙️🧠
