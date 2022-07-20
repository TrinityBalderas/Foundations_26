// Find Lucky Numbers
// Difficulty
// Easy

// Concepts
// Loops, General


// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)
// // returns (3, 7)
// luckyNumbers(6)
// // returns (1, 7, 9, 6, 5, 2)


let lucky_numbers = (n) => {
  let return_array = []
  //                 0                 9
  let random_nums = [1,2,3,4,5,6,7,8,9,10]
  //get random from randon_nums array
  //we need n numbers from random_nums
  for (let i = 0; i < n; i++) {
    let random_index = Math.floor(Math.random() * random_nums.length) 
    return_array.push(random_nums[random_index])
    random_nums.splice(random_index,1)
  }

  return return_array;
}
console.log(lucky_numbers(10))







