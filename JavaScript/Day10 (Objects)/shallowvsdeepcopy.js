

// ## 1. Shallow Copy

// ### Definition

// A **shallow copy** duplicates **only the top-level structure**.
// **Nested objects/arrays still share the same reference**.

// ### Example

// ```js
// const original = {
//   name: "Rohit",
//   address: { city: "Pune" }
// };

// const shallow = { ...original };

// shallow.name = "Anuj";
// shallow.address.city = "Mumbai";

// console.log(original);
// ```

// ### Output

// ```js
// {
//   name: "Rohit",
//   address: { city: "Mumbai" }
// }
// ```

// ### Why?

// * `name` → primitive → copied by value
// * `address` → object → copied by reference

// ---

// ### Common shallow copy methods

// ```js
// { ...obj }
// Object.assign({}, obj)
// Array.prototype.slice()
// Array.from(arr)
// ```

// ---

// ## 2. Deep Copy

// ### Definition

// A **deep copy** duplicates **all levels**, creating **independent memory**.

// ### Example

// ```js
// const original = {
//   name: "Rohit",
//   address: { city: "Pune" }
// };

// const deep = structuredClone(original);

// deep.address.city = "Mumbai";

// console.log(original);
// ```

// ### Output

// ```js
// {
//   name: "Rohit",
//   address: { city: "Pune" }
// }
// ```

// ---

// ### Deep copy methods

// #### 1️⃣ `structuredClone()` (BEST, modern)

// ```js
// const deep = structuredClone(obj);
// ```

// * Handles nested objects
// * Handles arrays, maps, sets
// * Preserves types
// * ❌ Cannot clone functions

// ---

// #### 2️⃣ JSON method (exam-friendly, but flawed)

// ```js
// const deep = JSON.parse(JSON.stringify(obj));
// ```

// Limitations:

// * Loses `undefined`
// * Loses functions
// * Loses `Date`, `Map`, `Set`
// * Breaks circular references

// ---

// #### 3️⃣ Manual recursion (conceptual)

// ```js
// function deepCopy(obj) {
//   if (obj === null || typeof obj !== "object") return obj;
//   const copy = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     copy[key] = deepCopy(obj[key]);
//   }
//   return copy;
// }
// ```

// ---

// ## 3. Key differences (exam table)

// | Aspect         | Shallow Copy      | Deep Copy           |
// | -------------- | ----------------- | ------------------- |
// | Levels copied  | Top-level only    | All levels          |
// | Nested objects | Shared reference  | New reference       |
// | Memory         | Less              | More                |
// | Speed          | Faster            | Slower              |
// | Data safety    | Risky             | Safe                |
// | Common methods | `...`, `assign()` | `structuredClone()` |

// ---

// ## 4. Interview traps (important)

// ```js
// const a = { x: { y: 1 } };
// const b = { ...a };

// b.x.y = 2;
// console.log(a.x.y); // 2
// ```

// Still **shallow copy**.

// ---

// ## 5. When to use what (real-world)

// * **Shallow copy**

//   * State updates in React (top-level)
//   * Immutable patterns with flat objects

// * **Deep copy**

//   * Config cloning
//   * Data isolation
//   * Avoiding side effects

// ---

// ## One-line exam definitions

// * **Shallow copy:** Copies only top-level properties; nested objects share memory.
// * **Deep copy:** Copies all nested properties recursively; no shared references.

// ---

// ## Strategic takeaway

// If nested data exists and **mutation is possible**, shallow copy is a **bug factory**.
// Default to **deep copy** unless performance forces otherwise.