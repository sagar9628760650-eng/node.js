const heros = ['Batman', 'Superman', 'Wonder Woman'];
const villains = ['Joker', 'Lex Luthor', 'Cheetah'];

// heros.push(villains); // Add all villains to the heros array
// console.log(heros); // Output: ['Batman', 'Superman', 'Wonder Woman', 'Joker', 'Lex Luthor', 'Cheetah']

// const allHeros = heros.concat(villains); // Concatenate villains to heros array
// console.log(allHeros); // Output: ['Batman', 'Superman', 'Wonder Woman', 'Joker', 'Lex Luthor', 'Cheetah']

const allnewheros = [...heros, ...villains]; // Spread operator to combine arrays
console.log(allnewheros); // Output: ['Batman', 'Superman', 'Wonder Woman', 'Joker', 'Lex Luthor', 'Cheetah']

const array = [1, 2,[6,3] ,3, 4,[3,4,6,7,[8,9]], 5];
const array1 = array.flat(Infinity); // Flatten the array to a single level
console.log(array1); // Output: [1, 2, 6, 3, 3, 4, 3, 4, 6, 7, 8, 9, 5]

console.log(Array.isArray("sagar")); // Output: false
console.log(Array.from("sagar")); // Output: ['s', 'a', 'g', 'a', 'r']
console.log(Array.from({name: "sagar"})); // it was not an array so it will return an empty array ***its a important point to remember*** Output: []

let arr1 =100
let arr2 =200
let arr3 =300

console.log(Array.of(arr1, arr2, arr3)); // Output: [100, 200, 300] it will create an array from the given arguments