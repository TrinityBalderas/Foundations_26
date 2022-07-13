// Conditional statements are used to perform different actions based 
// on different conditions.

// In JavaScript we have the following conditional statements

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false

// some logical operators we can use
// The most common logical operators are:

// > greater than

// >= greater than or equal to

// < less than

// <= less than or equal to

// === equal to

// !== not equal to

// If statement syntax
// if ( condition ) {     //note only truthy values trigger the statement
//     statement;
// }

let temperature = "100"
if (temperature > 90) {
    console.log("oh boy another day in Texas");
}

// Else statement syntax
// if ( condition ) {
//     statement
// } else {
//     statement       runs if the condition is false
// }

let temperature = 89
if (temperature > 90) {
    console.log("oh boy another day in Texas");
} else {
    console.log("omg am I in heaven");
}

// Else if statement
// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }

let time = 12;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

/*
loops
repeat code that we want to run more than once

while or for? how do you know
for loop is better when you know there is a set amount of
times you want to loop

-for ---> loops through a block of code a number of times
-for in --> loops through the properties of an object
-for of ---> loops throught the values of an iterable object
-while* ---> loops through a block of code while a specified condition is true
-do while ---> statement gets run at least once then check condition

---KEY WORDS IN LOOPS---
continue
continues on to the next step/iterator ignoring any code below it

break
exit the code

*/

// while (expression) {
//     statement
// }

// do {
//     statement
// } while (expression)

// for (initialize; test; how_increment;) {
//     statement
// }

// for (statement1; statement2; statement3;) {
//     statement 1 set the variable of where we want the loop to Start
//     statement 2 define the condition for when we want the loop to stop
//     statement 3 a stepping value
// }

// for (let i = 10; i >= 1; i--) {
//     if ( i === 8) {
//         break;
//     }
//     console.log(i);
// }

//strings act like arrays when you loop thru them
//          [h,e,l,l,o]
// //        0 1 2 3 4
let word = "hello"

// for ( let i = 0; i < word.length; i++ ) {
//     console.log(word[i]);
// }

//for of loops are for iterables data types strings, arrays, maps ....
for (const letter of word) {
    console.log(letter);
}

// l l l l l
// 0 1 2 3 4
//[h,e,l,l,o]

//for in loop is for objects
let not_map = {
    a: 1,
    b: 2
}

for (const key in not_map) {
    console.log(not_map[key]);
}

