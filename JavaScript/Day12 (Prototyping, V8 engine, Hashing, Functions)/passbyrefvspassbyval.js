// You’re mixing two layers: **how JavaScript *conceptually* behaves (pass-by-value)** vs **how *references* make objects feel like pass-by-reference**. Let’s pin this down cleanly so you stop carrying the typical half-wrong explanation.

// ---

// # **1. JavaScript has only one calling mechanism: pass-by-value.**

// Always. No exceptions.

// But:

// * **Primitive values** → the value itself is copied.
// * **Objects/Arrays/Functions** → the *reference* is copied.

// Because a reference is copied **by value**, it *feels* like pass-by-reference, but it’s not.

// ---

// # **2. What happens when you pass your object**

// ```js
// function love(obj1) {
//     console.log(obj1);
// }
// love(obj);
// ```

// Memory view:

// ```
// obj variable  --->  [Ref#123] ----> { name:"Rohit", age:30, amount:420 }
// obj1 variable --->  [Ref#123] ----> same heap object
// ```

// Both variables hold **independent copies of the reference value**, but both point to **the same heap object**.

// So:

// * Changing the **object’s properties** → visible everywhere (same object)
// * Reassigning the **parameter** → does not affect the original

// Example:

// ```js
// function test(o) {
//     o.name = "Changed";   // affects original
//     o = { name: "New" };  // does NOT affect original
// }
// ```

// ---

// # **3. What is passed by value vs reference in JS?**

// ### **Passed by value (copy of actual value):**

// * number
// * string
// * boolean
// * null
// * undefined
// * symbol
// * bigint

// These **live directly in the stack** (conceptually).

// Example:

// ```js
// let x = 10;
// function f(y) {
//     y = 20;   // does NOT change x
// }
// f(x);
// ```

// ---

// ### **Passed-by-value-but-the-value-is-a-reference (objects):**

// * object literals `{}`
// * arrays `[]`
// * functions `function(){}`
// * dates
// * regex
// * maps
// * sets
// * typed arrays
// * anything allocated in the heap

// All these store only a **reference in the variable**, and **that reference is passed by value**.

// Example:

// ```js
// let arr = [1,2,3];
// function f(a) {
//     a.push(4);    // modifies original array
// }
// f(arr);
// ```

// ---

// # **4. Destructuring does not change the mechanism**

// When you destructure:

// ```js
// function fun({name, amount}) { }
// fun(obj);
// ```

// JS creates **new variables** (name, amount) with **copied values**, so primitives are copied and object subfields would copy references.

// ---

// # **5. The strategic takeaway**

// The mistake is thinking:

// > “Objects are passed by reference.”

// The correct model:

// > **Objects live in the heap, and functions receive a copy of the reference value pointing to them.**

// This gives you the right intuition for mutability, reassignment, and side effects.

// ---

// If you want, I can walk you through a memory diagram comparing:

// 1. passing primitive
// 2. passing object (mutating)
// 3. passing object (reassigning)

// So you can lock this in fully.
