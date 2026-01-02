// Here’s the cleanest, high-signal way to understand it:

// **Core distinction**

// | Method                                 | Mutates original array? | What it returns                         | Typical use                      |
// | -------------------------------------- | ----------------------- | --------------------------------------- | -------------------------------- |
// | `slice(start, end)`                    | No                      | A new array (copy of selected elements) | Non-destructive extraction       |
// | `splice(start, deleteCount, ...items)` | Yes                     | An array of removed elements            | Insert, delete, replace in-place |

// ---

// ### `slice()`

// **Purpose:** Copy a portion of an array **without modifying** the original.

// **Syntax:**

// ```js
// arr.slice(start, end);
// ```

// * `start` = index to begin (inclusive)
// * `end` = index to stop (exclusive)
// * Returns a **new** array.

// **Example:**

// ```js
// const nums = [10, 20, 30, 40, 50];
// const part = nums.slice(1, 4); 
// // part = [20, 30, 40]
// // nums stays unchanged
// ```

// ---

// ### `splice()`

// **Purpose:** Add/remove/replace elements **by modifying the original array**.

// **Syntax:**

// ```js
// arr.splice(start, deleteCount, item1, item2, ...);
// ```

// * Changes the original array
// * Returns the **removed** elements

// **Examples:**

// **Remove:**

// ```js
// const nums = [10, 20, 30, 40, 50];
// const removed = nums.splice(1, 2);
// // removed = [20, 30]
// // nums = [10, 40, 50]
// ```

// **Insert:**

// ```js
// const arr = [1, 2, 5];
// arr.splice(2, 0, 3, 4);
// // arr = [1, 2, 3, 4, 5]
// ```

// **Replace:**

// ```js
// const arr = [1, 2, 3];
// arr.splice(1, 1, 99);
// // arr = [1, 99, 3]
// ```

// ---

// ### Strategic summary (the actionable takeaway)

// * Use **slice** when you want **a clean copy** and you don’t want side effects.
// * Use **splice** when you want to **edit an array in-place** (CRUD operations: remove/insert/replace).
// * If your logic depends on immutability (React, Redux, functional patterns), **never use splice**, always slice or spread.
