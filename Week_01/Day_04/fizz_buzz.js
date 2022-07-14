// Fizz Buzz
// Difficulty
// Easy

// Concepts
// Loops, Conditionals

// Write a program that counts from 1 to 50 in fizzbuzz fashion.

// To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’. If the number is evenly divisible by 5, say ‘buzz’. If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number.

//   iterator   condition step
for ( let i = 1; i <= 50 ; i++ ) {
    //check if divisible by 3
    if (i % 15 === 0) {     //if (!(i % 3) ) || (! i % 3) {
        console.log("fizzbuzz");
    }
    else if (i % 5 === 0) {
        console.log("buzz");
    }
    else if (i % 3 === 0) {
        console.log("fizz");
    }
    else {
        console.log(i);
    }
}
// For example:


// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// 16
// 17
// fizz
// 19
// buzz