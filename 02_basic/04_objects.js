const tinderuser = {}

tinderuser.id = "1234abc    "
tinderuser.name = "sagar"
tinderuser.age = 30
tinderuser.isloggedin = true

// console.log(tinderuser)

const regularuser = {
    email: "regular@example.com",
    fullname: {
        userfullname: {
            firstname: "sagar",
            lastname: "kumar"
        }
    }
}
// console.log(regularuser)
// console.log(regularuser.fullname.userfullname.lastname) // Output: kumar

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3) // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj5 = Object.assign({}, obj1, obj2, obj4)        
// console.log(obj5) // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj6 = {...obj1, ...obj2, ...obj4}
// console.log(obj6) // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const user = [
    {
        id: 1,
        name: "sagar",
        age: 30,
        email: "sagar@example.com"
    },
    {
        id: 2,
        name: "john",
        age: 25,
        email: "john@example.com"
    }
]
// console.log(tinderuser)
// console.log (Object.keys(tinderuser)) // Output: [ 'id', 'name', 'age', 'isloggedin' ]
// console.log (Object.values(tinderuser)) // Output: [ '1234abc    ', 'sagar', 30, true ]
// console.log (Object.entries(tinderuser)) // Output: [ [ 'id', '1234abc    ' ], [ 'name', 'sagar' ], [ 'age', 30 ], [ 'isloggedin', true ] ]

// console.log (tinderuser.hasOwnProperty("name")) // Output: true
// console.log (tinderuser.hasOwnProperty("gender")) // Output: false


const course ={
    coutsename : "javascript",
    price : 999,
    courseInstructor : "sagar",
}

//course.courseInstructor 

const {courseInstructor} = course
console.log(courseInstructor)