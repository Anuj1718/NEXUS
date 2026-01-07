<!-- Age example: 30 == Thirty -->
<!-- Number calculation result -->
<!-- Accessing property of an object -->


<!-- First we need to install Typescript compiler -->
1: npm install -g typescript
2: tsc --version

<!-- How to run TS file -->
tsc file_name
tsc yourfile.ts --target es2016

<!-- Intialize config file -->
tsc --init

<!-- run tsc -->

<!-- Every JS file will be valid TS -->
<!-- If there is an error in TS, still it will compile it and convert it into JS file -->
<!-- It will be on the user how to tackle it -->


<!-- watch mode -->
tsc --watch

<!-- How to quit it -->
ctrl+C


<!-- How to deal with number -->
let age:number = 30;

<!-- How to deal with string -->
let name: string = "Alice";

<!-- How to deal with bigint -->
let largeNumber: bigint = 123456789012345678901234567890n;

<!-- How to deal with boolean -->
let isActive: boolean = true;

<!-- How to deal with undefined -->
let value: undefined;

<!-- How to deal with null -->
let value: null = null;

<!-- Day 2 -->
<!-- Type Inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine the type of a variable based on the value assigned to it. This means that even if you don't explicitly specify a type, TypeScript can infer the most appropriate type and apply it. -->

let age = 25;  // TypeScript infers that age is of type 'number'
let name = "Alice";  // TypeScript infers that name is of type 'string'


<!--  Explicit Type Annotations -->
when we assigned type by our own

<!-- Limitations of Type Inference -->
any: if we don't initialize the value initially

<!-- any -->
let value: any = 42;
Represents any type of value. When a variable has the any type, it can be assigned any value, and no type checking is done.


<!-- unknown -->
The any and unknown types in TypeScript are both used to represent values of any type.

The unknown type is safer than any because you cannot perform operations on an unknown value without first narrowing its type through type checks.


<!-- Non Primitive Data type -->

<!-- 1: Array -->
let numbers: number[] = [2,3,4,6];
let numbers:(string | number)[] = [2,3,4,5,6,"Mohit"];

<!-- 2: Tuples -->
Tuples are arrays with a fixed number of elements of specific types.

let tuple: [string, number] = ["Rohit",10];




<!--  Compile-time refers to the phase when the source code is translated into machine code or an intermediate format (e.g., bytecode). This is done by a compiler. -->
<!-- eg C++, java -->

Errors detected at this phase are called compile-time errors.
Examples of compile-time errors include:
Syntax errors (e.g., missing semicolons).
Type mismatches (e.g., assigning a string to a variable declared as a number in TypeScript).
Variable declarations without initialization (if required by the language).


CPP, Java, TypeScript are compiled languages.

Javascript,python,php are interpreted languages.
meaning it is executed directly without a separate compilation step.
it wont compile, it will execute directly line by line.

hence, js is slower than cpp, java, ts.
java is slower than cpp as it compiles to bytecode first then runs on JVM.
bytecode is slower than machine code.


<!-- Runtime refers to the phase when the program is executed after it has been compiled (or interpreted). -->

<!-- Errors detected during this phase are called runtime errors.
Examples of runtime errors include:
Dividing by zero.
Accessing undefined variables or null references.
Running out of memory. // infinite loops ie stack becomes too deep due to while(True) -->

Examples of Runtime Activities:

Executing code instructions.
Handling user inputs.
Interacting with APIs or databases -->

Just in Time (JIT) Compilation:
Some languages, like Java and JavaScript (in modern engines), use Just in Time (JIT) compilation. This means that parts of the code are compiled into machine code at runtime, just before execution, to improve performance.   

JavaScript JIT compilation — when it became real

JavaScript was interpreted from the start (1995), but JIT (Just-In-Time) compilation entered mainstream JS engines in the mid-2000s.

Key milestones:

2008: Mozilla shipped TraceMonkey (a tracing JIT) in Mozilla Firefox 3.5.

2009–2011: Method-based JITs replaced tracing JITs:

Mozilla → JägerMonkey → IonMonkey

Apple → Nitro (JavaScriptCore)

Google → TurboFan (later)

Bottom line: JavaScript effectively became a JIT-compiled language between 2008 and 2010, depending on engine.

V8 engine — origin and release

Created: 2008 by Google

First released: September 2008

Shipped with: Google Chrome

Major design choice: JIT compilation from day one

Extended beyond browsers: Node.js (2009) used V8 to bring JS to servers


**Short answer:** **Mozilla introduced JIT to JavaScript first. Chrome (Google) industrialized and popularized it.**

**Clear timeline**

* **Mozilla** — **first to ship JIT for JavaScript**

  * **2008**: **TraceMonkey** landed in **Mozilla Firefox 3.5**
  * This was the **first mainstream JS JIT** (tracing-based).
* **Google / Chrome** — **made JIT the default performance model**

  * **2008**: **V8** launched with **Google Chrome**
  * Used **method-based + optimizing JIT from day one**, simpler and more predictable than tracing JIT.

**Why people credit Chrome anyway**

* TraceMonkey was clever but complex and brittle.
* V8’s design scaled better, won benchmarks, and **forced every engine to follow**.
* With **Node.js**, V8 pushed JIT beyond browsers into servers.

**Bottom line**

* **Invention credit:** **Mozilla**
* **Dominance + standardization:** **Google / Chrome**

If you want the sharper distinction:
**Mozilla proved JIT was possible; Chrome proved it was the future.**

<!-- platform dependent vs platform independent languages -->
machine code is platform dependent
bytecode is platform independent (java bytecode, jus need jvm to run on any platform)
js is platform independent (runs on any browser or js engine on any platform)

TypeScript is a superset of JavaScript that adds static typing and other features to the language. It is designed to be compiled down to plain JavaScript, which means that TypeScript code is ultimately executed as JavaScript in the runtime environment.

<!--  Objects -->

let person: { name: string; age: number; isStudent: boolean };

person = {
    name: "rohit",
    age:23,
    isStudent: true
}


<!-- Inline -->
let account: {name:string, balance:number, age?:number} = {
    name:"Rohit",
    balance:420
};

<!-- Using Type Alises -->

type student = {
   names: string,
   age: number
};

let College_student: student = {
    names:"Rohit",
    age: 20
};


<!-- using interface -->


interface customer {
    name : string,
    account_number: number,
    balance: number,
    age: number 
}

let per: customer = {
    name: "Rohit",
    account_number:230921,
    balance:420,
    age: 12
}

<!-- extend with interface -->

<!-- type uses intersections (&) to combine multiple types. -->

type animal = gen & {

}


<!--  Declaration Merging -->
interface person {
    name: string
}

interface person {
    age: number
}

<!-- Above syntax is allowed -->

But with type it is not allowed

<!-- ? optional keyword
 -->


<!-- Nested Objects -->


<!-- Utility Types for Objects -->
1: Partial<Person>
2: Required<Person>
3: Readonly<Person>

<!-- Array of Objects -->


<!-- Function in JS -->


function greet(name: string): string {
    return `Hello, ${name}!`;
}

<!-- Optional Parameters ?-->
function meet(name?:string):void{
    console.log(`Hello ${name||"Guest"}`);
}

<!-- Default parameter -->





