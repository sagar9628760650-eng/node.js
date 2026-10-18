// object literal

const mysym = Symbol("key1");


const person = {
    [mysym]: "value1",
  name: "sagar",
    age: 30,
    email: "sagar@example.com",
    address: {
        street: "123 Main St",
        city: "New York",}
    }

    console.log(person.name); // Output: sagar
    console.log(person["name"]); // Output: sagar
    console.log(person[mysym]); // Output: value1
   
person.age = 31; // Update age
console.log(person.age); // Output: 31
object.freeze(person); // Freeze the object to prevent further modifications
person.age = 32;
console.log(person.age); // Output: 31 (age remains unchanged due to freeze)

person.greeting = function() {
    console.log(`Hello, my name is ${this.name}`);
}

console.log(person.greeting()); // Output: Hello, my name is sagar

 