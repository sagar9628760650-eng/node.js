
//Array


// const myArray = [1, 2, 3, 4, 5,"sagar", true, null, undefined, {name: "sagar", age: 25}, [1, 2, 3]];
// const myheros = ["superman", "batman", "spiderman", "ironman", "hulk"];
// console.log(myArray); 
// console.log(myheros);

//array methods

const myArr = [1, 2, 3, 4, 5];
myArr.push(33);
console.log(myArr); // it adds the element at the end of the array
myArr.pop()
console.log(myArr); // it removes the last element of the array
myArr.unshift(45)
console.log(myArr); // it adds the element at the beginning of the array
myArr.shift()
console.log(myArr); // it removes the first element of the array

console.log(myArr.indexOf(3)); // it gives the index of the element in the array
console.log(myArr.includes(9)); // it checks if the element is present in the array or not

const newarr =myArr.join("-") // it joins the elements of the array with the given separator
console.log(newarr);
console.log(myArr);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 4); // it returns a new array with the selected elements (start index, end index)
console.log( myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
// it removes the selected elements from the array and returns a new array with the removed elements (start index, number of elements to remove)
console.log(myn2);
console.log("C", myArr);