class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name; //this.name refers to the variable name of class and =name is the parameter passed to constructor, coud be different names as well like n1
        this.age = age;
    }
//to access variables and methods inside class we use constructor and this keyword
//this keyword refers to current object
    greet():void{
        console.log(`hi ${this.name}`);
    } //no need to write function keyword inside class
}

// class is blueprint of an object


const obj1 = new Person("Rohit",20);
const obj2 = new Person("Nitin",11);
console.log(obj1);
console.log(obj2);


console.log(obj1.name);
obj1.greet();

// public private protected
//js doesnt have private and protected access modifiers
// public: accessible everywhere
// private: accessible only inside the class (has but implemetation is different)
// protected: accessible inside the class and its derived classes
//ts has these access modifiers


class Customer{
    public name:string;
    private age:number;
    protected balance:number;

    constructor(name:string,age:number,balance:number){
        this.name = name;
        this.age = age;
        this.balance = balance
    }

    meet():number{
       this.age = this.age+10;
       return this.age;
    }
}

const P1 = new Customer("Deepak",20,420);
console.log(P1.name); //as public
// console.log(P1.age); // error as private
// console.log(P1.balance); // error as protected
//access private and protected members outside the class is not allowed
//do it via methods inside the class
// u can make methods public to access private and protected members
//methods can have access modifiers as well
//methods are public by default

console.log(P1.meet());

// inheritance
// used to inherit properties and methods from one class to another class
//just like interface extend keyword
class Employee extends Customer {
    salary:number;

    constructor(salary:number,name:string,age:number,balance:number){
        super(name,age,balance);
        this.salary = salary;
    }

    greet():void{
        console.log(this.balance);
    }

    meet():number{
        console.log("Hello Coder armu");
        return 10;
    }
}

//constructor of derived class must call super() which calls constructor of base class else error

const E1 = new Employee(420,"Rohit", 20,320);
console.log(E1.meet()); //overridden method, calls derived class method, if not present calls base class method
E1.greet(); //calls derived class method
console.log(E1.salary); //accessible as public
console.log(E1.name); //accessible as public
// console.log(E1.balance); //error as protected member not accessible outside class and derived class
// console.log(E1.age); //error as private member not accessible outside class
//friend functions not present in ts
// no concept of static members in ts
//static members are shared among all objects of class
// they belong to class not to object


// Generic Template : 
// to create reusable components
// to work with any data type
// to create a component that can work with different data types
// to create a function or class that can work with any data type

// // without generics

// function value(a:(number|string|number[]|boolean)):(number|string|number[]|boolean){
//    return a;
// }

//with generics
function value<T>(a:T):T{
    return a;
}
//can use any valid variable name inplace of T like U,V,X etc but T is mostly used

console.log(value<number>(10)); 
// or just console.log(value(10)); ts infers type automatically
console.log(value<string>("Rohit"));
console.log(value([10,11,12,13,14]));
console.log(value(true));
console.log(value(["MOhan","Rohan"]))


//can have multiple generics as well
//can use generics in interfaces as well
interface Admin<T,U> {
    name:string,
    age:number,
    addhar:T,
    salary:U
}


const obj10: Admin<number,number> = {
    name:"Rohit",
    age:20,
    addhar:123,
    salary:23213
}

const obj11: Admin<string,number>={
    name:"Rohit",
    age:20,
    addhar:"32112",
    salary:13
}


//how generics differ from rest parameters
// generics are used to create reusable components that can work with any data type
// rest parameters are used to represent an indefinite number of arguments as an array
// generics are used to create a function or class that can work with any data type
// rest parameters are used to create a function that can take multiple arguments

//how generics differ from union types
// generics are used to create reusable components that can work with any data type
// union types are used to represent a value that can be one of several types
// generics are used to create a function or class that can work with any data type
// union types are used to create a variable that can hold multiple types

// generics provide type safety at compile time
// union types provide type safety at runtime