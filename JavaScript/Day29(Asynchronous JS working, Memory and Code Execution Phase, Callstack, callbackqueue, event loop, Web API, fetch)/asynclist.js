// Below is a **complete, structured list of what is asynchronous in JavaScript**, grouped by **mechanism**, not buzzwords. This is the mental model you should carry.

// ---

// ## 1. Timers (classic async)

// Handled by the **environment**, not JS itself.

// ```js
// setTimeout(fn, delay)
// setInterval(fn, delay)
// setImmediate(fn)        // Node.js only
// requestAnimationFrame() // browser
// ```

// All callbacks go to the **task (macrotask) queue**.

// ---

// ## 2. Promises (microtasks – higher priority)

// ```js
// Promise.then()
// Promise.catch()
// Promise.finally()
// queueMicrotask()
// ```

// Key fact:

// * **Microtasks run before timers**
// * This is why promises “jump ahead” of `setTimeout`

// ---

// ## 3. `async / await`

// Syntactic sugar over **Promises**.

// ```js
// async function f() {
//   await fetchData();
// }
// ```

// Important:

// * `await` **does NOT block**
// * It pauses the function, not the thread
// * Rest of code continues

// ---

// ## 4. Network & I/O (environment async)

// ### Browser

// ```js
// fetch()
// XMLHttpRequest
// WebSocket
// EventSource
// ```

// ### Node.js

// ```js
// fs.readFile()
// fs.promises.readFile()
// http.request()
// dns.lookup()
// ```

// All are **non-blocking**, delegated to the runtime.

// ---

// ## 5. Events (async by nature)

// ```js
// button.addEventListener("click", fn);
// window.addEventListener("load", fn);
// document.addEventListener("keydown", fn);
// ```

// Events:

// * Are async
// * Triggered externally
// * Queued and executed later

// ---

// ## 6. DOM-related async APIs (browser)

// ```js
// MutationObserver
// IntersectionObserver
// ResizeObserver
// ```

// They notify **later**, not immediately.

// ---

// ## 7. Workers & concurrency primitives

// ### Browser

// ```js
// Web Workers
// Service Workers
// ```

// ### Node.js

// ```js
// Worker Threads
// child_process
// ```

// True parallelism exists here, but:

// * Main JS thread still stays single-threaded
// * Communication is async (messages)

// ---

// ## 8. Scheduling & rendering-related async

// ```js
// requestIdleCallback()
// requestAnimationFrame()
// ```

// Used for:

// * Rendering
// * Performance-sensitive scheduling

// ---

// ## 9. Storage & system APIs (async)

// ```js
// indexedDB
// localStorage (sync – exception)
// navigator.geolocation.getCurrentPosition()
// ```

// Most system access is async for safety.

// ---

// ## 10. Module loading (async)

// ```js
// import("module.js")
// ```

// Dynamic imports are always async.

// ---

// ## 11. What is **NOT** async (important contrast)

// ❌ These are synchronous:

// ```js
// Array.map
// for / while loops
// JSON.parse
// Math.random
// localStorage.getItem()
// ```

// Even if they *feel slow*, they block.

// ---

// ## 12. One-glance summary table

// | Category      | Async? |
// | ------------- | ------ |
// | Timers        | ✅      |
// | Promises      | ✅      |
// | async/await   | ✅      |
// | Fetch / I/O   | ✅      |
// | Events        | ✅      |
// | DOM observers | ✅      |
// | Workers       | ✅      |
// | Loops         | ❌      |
// | JSON.parse    | ❌      |
// | localStorage  | ❌      |

// ---

// ## Core mental model (this matters)

// * **JS executes sync code only**
// * Async work is done by **runtime**
// * Results are queued
// * **Event loop** decides when they run

// ---

// ### If you want next

// I can:

// * Rank these by **priority (microtask vs macrotask)**
// * Give **output-based trick questions**
// * Show **why some async code still blocks UI**

// Tell me which direction.



// Below is a **clean, complete map of what falls under Web APIs** in the browser environment. Think of this as *everything JavaScript can touch, but does not own*.

// ---

// ## Core Categories of **Web APIs**

// ### 1. **Timing APIs**

// Used for scheduling work.

// * `setTimeout`
// * `setInterval`
// * `requestAnimationFrame`
// * `requestIdleCallback`

// ---

// ### 2. **DOM APIs**

// Everything related to the document structure.

// * `document`, `window`
// * `querySelector`, `getElementById`
// * `createElement`, `appendChild`, `remove`
// * `innerHTML`, `textContent`
// * CSS manipulation (`style`, `classList`)

// ---

// ### 3. **Event APIs**

// User and system interactions.

// * `addEventListener`
// * Mouse events (`click`, `mousemove`)
// * Keyboard events (`keydown`, `keyup`)
// * Form events (`input`, `change`, `submit`)
// * Focus events (`focus`, `blur`)
// * Touch / Pointer events

// ---

// ### 4. **Networking APIs**

// For communication with servers.

// * `fetch`
// * `XMLHttpRequest` (older)
// * `WebSocket`
// * `EventSource` (Server-Sent Events)

// ---

// ### 5. **Storage APIs**

// Client-side persistence.

// * `localStorage`
// * `sessionStorage`
// * `IndexedDB`
// * `Cache API` (used by Service Workers)

// ---

// ### 6. **Browser & Window APIs**

// Control browser behavior.

// * `alert`, `confirm`, `prompt`
// * `location`, `history`
// * `navigator`
// * `screen`
// * Clipboard API

// ---

// ### 7. **Graphics & Media APIs**

// Rendering and media control.

// * Canvas API
// * WebGL
// * SVG APIs
// * Audio API
// * Video API
// * MediaDevices (camera, mic)
// * MediaRecorder

// ---

// ### 8. **Device & Hardware APIs**

// Access to physical capabilities (permission-based).

// * Geolocation API
// * Battery Status API
// * Vibration API
// * Device Orientation / Motion
// * Bluetooth / USB / Serial (modern browsers)

// ---

// ### 9. **Performance & Background APIs**

// Advanced runtime control.

// * Web Workers
// * Service Workers
// * Performance API
// * IntersectionObserver
// * MutationObserver

// ---

// ## How this fits together (big picture)

// ![Image](https://i.sstatic.net/lUF7N.png)

// ![Image](https://media.geeksforgeeks.org/wp-content/uploads/20250208123836185275/Event-Loop-in-JavaScript.jpg)

// ![Image](https://sookocheff.com/post/networking/how-does-web-rtc-work/assets/web-api.png)

// **Key insight**:

// * JavaScript = language + engine
// * Web APIs = browser superpowers
// * Event loop = coordinator

// ---

// ## Sharp takeaway (don’t miss this)

// * **Web APIs ≠ JavaScript**
// * Browsers *embed* JS engines and **inject APIs**
// * Same JS code behaves differently in:

//   * Browser (DOM, fetch, events)
//   * Node.js (fs, http, process — *not Web APIs*)

// If you want the next layer of clarity, the natural follow-up is:
// **“Which of these use task queue vs microtask queue, and why it matters.”**
