
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString()); // it gives the current date and time in string format
console.log(myDate.toDateString()); // it gives the current date in string format
console.log(myDate.toTimeString()); // it gives the current time in string format
console.log(myDate.toLocaleString());   // it gives the current date and time in local string format
console.log(myDate.getFullYear()); // it gives the current year
console.log(typeof myDate); // it gives the type of the date object


let myDate1 = new Date("2023-06-23")
console.log(myDate1);
console.log(myDate1.toLocaleString());

let myDate2 = new Date("2023-06-23T10:30:00")
console.log(myDate2);
console.log(myDate2.toLocaleString());

let mytimestamp = Date.now(); // it gives the current timestamp in milliseconds
console.log(mytimestamp);
console.log(myDate2.getTime()); // it gives the timestamp of the date object in milliseconds
console.log(Date.now()/1000); // it gives the current timestamp in seconds
console.log(Math.floor(Date.now()/1000)); // it gives the current timestamp in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // it gives the current month (0-11)
console.log(newDate.getDate()); // it gives the current date (1-31)
console.log(newDate.getFullYear()); // it gives the current year
console.log(newDate.getDay()); // it gives the current day (0-6) 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday
console.log(newDate.getHours()); // it gives the current hour (0-23)

