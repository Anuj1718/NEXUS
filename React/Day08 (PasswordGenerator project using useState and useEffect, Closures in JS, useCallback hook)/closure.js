let b = 10;

function greet(){
    let a = 20;
    let b = 30;
    
    function meet(){
        console.log(a);
        console.log(b);
    }

    return meet;
}


const num = greet();
num(); 
//output:
//20
//30

//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.


// A closure is created when a function remembers and continues to access variables from its lexical scope, even after the outer function has finished executing.

// Core idea:
// Functions in JS carry a hidden reference to the scope in which they were created.

// That scope is preserved as long as the function is reachable.


function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }

  return inner;
}

const fn = outer();
fn(); // 1
fn(); // 2

// What’s happening:
// outer() finishes execution.
// count should be destroyed—but it isn’t.
// inner() retains access to count. That retained scope is the closure.

// Closures are not a feature bolted on for convenience; they are a consequence of:
// Lexical scoping
// First-class functions

// If JS didn’t have closures, callbacks, async code, and functional patterns would be far more complex or impossible.



// ## Where did `outer()` finish execution?

// **On the call stack.**

// ```js
// const fn = outer();
// ```

// Execution steps:

// 1. `outer()` is **pushed onto the call stack**
// 2. Its body runs:

//    * `count` is created
//    * `inner` function is created (with a reference to its lexical environment)
// 3. `outer()` hits `return inner`
// 4. `outer()` is **popped off the call stack**

// At this point:

// * `outer()` has **finished execution**
// * Its execution context is gone from the stack

// That answers **where**:
// 👉 on the **call stack**, and it ends when it is popped.

// ---

// ## Then why isn’t `count` destroyed?

// Because **`count` escaped the stack**.

// ### What actually happens internally

// When `inner` is created, the JS engine does this:

// * Creates a **Lexical Environment** for `outer`
// * Stores `count` inside that environment
// * `inner.[[Environment]]` → points to that lexical environment

// When `outer()` returns `inner`:

// * The stack frame is removed
// * BUT the lexical environment is **retained in the heap**
// * Because `inner` still references it

// So destruction does **not** depend on function completion.
// It depends on **reachability**.

// ---

// ## Timeline (important)

// ### Step 1 — Call

// ```
// Call Stack:
// ┌──────────┐
// │ outer()  │
// └──────────┘
// ```

// ### Step 2 — Create closure

// ```
// Heap:
// LexicalEnv {
//   count: 0
// }

// Function inner → [[Environment]] → LexicalEnv
// ```

// ### Step 3 — Return

// ```
// Call Stack:
// (empty)

// Heap:
// LexicalEnv { count: 0 }  ← still reachable
// inner → LexicalEnv
// ```

// Outer is gone.
// Its **scope is not**.

// ---

// ## When will `count` actually be destroyed?

// Only when **nothing references `inner` anymore**.

// ```js
// fn = null;
// ```

// Now:

// * `inner` is unreachable
// * Its lexical environment is unreachable
// * Garbage collector frees it

// That is the real lifetime rule.

// ---

// ## Critical correction to a common misconception

// > “Closures keep stack variables alive”

// ❌ Incorrect
// Stack memory **cannot** outlive a function call.

// ✔ Correct
// Closure variables are **moved to heap-backed lexical environments** when captured.

// ---

// ## One-sentence truth you should keep

// > `outer()` finishes execution when it returns and is popped from the call stack, but its lexical environment survives in the heap because a returned function still references it.

// ---

// ## Strategic insight

// If you understand this, you now understand:

// * Why React hooks “remember” state
// * Why memory leaks happen with event listeners
// * Why async callbacks see old variables