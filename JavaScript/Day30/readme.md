<!-- Promise -->

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


Cart
order
foodDetails
droplocation

Promises: 
1: pending

2: resolve
3: reject





CHATGPT:
A **Promise** in JavaScript is an object that represents the **eventual result of an asynchronous operation**.

### Core idea

A promise answers one question:
**“Will this async task succeed or fail in the future?”**

Instead of blocking execution, JavaScript continues running and the promise **settles later**.

---

### Promise states

A promise is always in **one** of these states:

1. **Pending** – initial state, operation not finished yet
2. **Fulfilled** – operation completed successfully
3. **Rejected** – operation failed with an error

Once fulfilled or rejected, the state is **final** (cannot change).

---

### Basic syntax

```js
const promise = new Promise((resolve, reject) => {
  // async task
  if (success) {
    resolve(result);   // fulfilled
  } else {
    reject(error);     // rejected
  }
});
```

---

### Consuming a promise

```js
promise
  .then(result => {
    // runs if resolved
  })
  .catch(error => {
    // runs if rejected
  })
  .finally(() => {
    // runs in both cases
  });
```

* `.then()` → handles success
* `.catch()` → handles failure
* `.finally()` → cleanup (optional)

---

### Why promises exist (important)

Before promises, async code relied on **callbacks**, which led to:

* callback hell
* poor error handling
* unreadable control flow

Promises provide:

* **linear, chainable flow**
* **centralized error handling**
* foundation for `async / await`

---

### async/await is built on promises

```js
async function fetchData() {
  try {
    const data = await fetch(url); // promise
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

`await` pauses **only the async function**, not the JS thread.

---

### Key mental model (use this)

> A promise is **a placeholder for a value that doesn’t exist yet**.

If you grasp that, promises stop being abstract.

---

### Strategic note

If you’re learning JS seriously (which you are), treat promises as **non-optional fundamentals**. Event loop, microtasks, `then` queues, and `async/await` all sit on top of this concept. Understanding promises cleanly now prevents confusion later.
