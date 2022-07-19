////////////////// PROBLEM 21 ////////////////////
let sampleArray = [0,1,2,3,4,5,6,8,9]
/*
  Write a function that takes in an array of numbers as an argument. In the body of the function, write logic to determine if the array is in ascending order. The function should return true, if it is sorted in ascending order, false if it is not. Create a variable, `arrayIsAscending` and set it equal to your function invoked. Use the sample array to test this function.
*/
const is_Ascending = (input_array) => {
    let number_to_compare = input_array[0]
    for (let i = 1; i < input_array.length; i++) {
        //compare current num to number to compare
        let current_number = input_array[i]
        if (current_number < number_to_compare) {
            return false
        } else {
            number_to_compare = current_number
        }
    }
    return true
}


let arrayIsAscending = is_Ascending(sampleArray)
console.log(arrayIsAscending);

//CODE HERE

////////////////// PROBLEM 22 ////////////////////

let duck = "not cute";

function bathroom() {

  let rubberDuck = "squeaky";

  function bathtub() {

    let sailorMoonDuck = "nautical";

  }

}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = [duck]

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["rubber duck", "duck"]

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["sailorMoonDuck", "rubber duck", "duck"]

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["realDuck", "duck"]