const name = "sagar";
const age = 22;

console.log( name + " is " + age + " years old.");
// it is old version of string concatenation

console.log(`hello my name is ${name} and I am ${age} years old.`);
// it is new version of string concatenation using template literals

const str = "hello world";
console.log(str[0]); // h
console.log(str._proto_); // undefined  

console.log(str.length); // 11
console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world
console.log(str.includes("hello")); // true
console.log(str.startsWith("hello")); // true
console.log(str.endsWith("world")); // true
console.log(str.indexOf("world")); // 6
console.log(str.slice(0, 5)); // hello
console.log(str.split(" ")); // ['hello', 'world']  
console.log(str.replace("world", "everyone")); // hello everyone
console.log(str.repeat(3)); // hello worldhello worldhello world
console.log(str.charAt(0)); // h
console.log(str.substring(0, 5)); // hello


