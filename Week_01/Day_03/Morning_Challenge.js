// Find The Range

// Concepts
// Loops, General


// Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.
// For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.

//syntax
// for (where to start (initialize iterator); when to stop (condition); how move (step);) {
//  statement
// }

//Pseudocode - "tell me the steps in english"
//tool to use - is assuming
//if the first number is greater than the rest than it has to be the biggest 


//           0   1    2    3  4  5   6
let array = [28, 43, -12, 30, 4, 0, -36];
//     smallest =  28
let smallest = array[0];
//              28
let largest = array[0];

for (let i=0; i<array.length; i++){
    //  28       <   28
    let number_im_looking_at = array[i]
    if (number_im_looking_at < smallest){
//reasign smallest number
        smallest = number_im_looking_at;
    } else if ( number_im_looking_at > largest ) {
        largest = number_im_looking_at
    }  
}
console.log(smallest, largest);
















