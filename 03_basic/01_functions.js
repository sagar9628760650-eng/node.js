
function saymyname (){
    console.log("s");
    console.log("a");
    console.log("g");
    console.log("a");
    console.log("r");
}

saymyname() // Output: s a g a r

function addtwonumbers(num1, num2){
    console.log(num1 + num2);
}

// addtwonumbers(5, 10) // Output: 15
// addtwonumbers(20, null) // Output: 20
// addtwonumbers(20, undefined) // Output: NaN
// addtwonumbers(20, "10") // Output: 2010 beacause of string concatenation

const result = addtwonumbers(20, 10) // Output: 30
console.log(result) // Output: undefined because the function does not return anything

// -------to print the result of the function, we need to return the value from the function--------


function addnumbers(num1, num2) {
    return num1 + num2;
}

const solution = addnumbers(20, 10);

console.log("Result:", solution);



// function loginusermessage(username){
//     if(username== undefined){
//         console.log("please inter the user name ");
//     }
//     return ` ${username} just logedin  to our website`
// } 

// console.log(loginusermessage("sagar"))
// console.log(loginusermessage())

//----- one more  way-----

function loginusermessage(username){
    if(!username){
        console.log("please inter the user name ");
    }
    return ` ${username} just logedin  to our website`
} 
console.log(loginusermessage("sagar"))
console.log(loginusermessage())