// ---primitive data types---//

// 7 types of primitive data types in JavaScript
// 1. Number    // const score = 100;
// 2. String    // const name = "sagar";
// 3. Boolean   // const isTrue = true;
// 4. Null      // const emptyValue = null;
// 5. Undefined // const notDefined;
// 6. Symbol    // const uniqueId = Symbol('id');
// 7. BigInt    // const bigNumber = 123n;


//---refrence (non-primitive) data types--//

// 1. Object    // const person = { name: "sagar", age: 25 };
// 2. Array     // const numbers = [1, 2, 3, 4, 5];
// 3. Function  // function greet() { console.log("Hello!"); }
// 4. Date      // const today = new Date();
// 5. RegExp    // const pattern = /abc/;
  

// Return type of variables in JavaScript
// =======================
//  Primitive Datatypes
// ---------------------------------------------------
//        Number =>     number
//        String  =>        string
//        Boolean  =>    boolean
//        null  =>             object
//        undefined  =>  undefined
//        Symbol  =>      symbol
//        BigInt  =>         bigint
// ========================
//  Non-primitive Datatypes
// ---------------------------------------------
//        Arrays  =>       object
//        Function  =>  function
//        Object  =>       object


//++++++++++++++++++++ Memory+++++++++++++++++

//stack memory: stores primitive data types (fixed size)
//heap memory: stores non-primitive data types (dynamic size)

let num = 100; // stored in stack memory
let newnum = num // stored in stack memory
newnum = 200; // changing newnum will not affect num

console.log(num); // 100
console.log(newnum); // 200

let user1 ={
    name: "sagar",
    age: 25 
}
let user2 = user1; // stored in heap memory
user2.age = 30; // changing user2 will affect user1
//we can accesss any veriable from the heap memory by dot notation or bracket notation
console.log(user1.age); // 30
console.log(user2.age); // 30
console.log(user1); // { name: 'sagar', age: 30 }   
console.log(user2); // { name: 'sagar', age: 30 }
