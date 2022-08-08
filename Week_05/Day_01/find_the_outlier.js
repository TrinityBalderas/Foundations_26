// Find the Outlier
// Difficulty
// Medium

// Concepts
// Math, Logic, Conditionals


// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

let array = [2, 4, 8, 8, 3, 6, 6]

let challengefunction = (array) => {

    let checkereven = 0
    let checkerodd = 0

    //only check 3 elements
    for (let i = 0; i < 3; i++) {
        if (array[i] % 2 == 0) {
            checkereven += 1
        }
        if (array[i] % 2 !== 0) {
            checkerodd += 1
        }
        if (checkereven >= 2) {
            let found = array.find(element => element % 2 != 0)
            return (found)
        }
        if (checkerodd >= 2) {
            let found = array.find(element => element % 2 == 0)
            return (found)
        }
    }
}
console.log(challengefunction([2, 4, 0, 100, 4, 11, 2602, 36]))


function findingOutlier(arr) {
    let evenArr = [];
    let oddArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr += arr[i]
        }
        else {
            oddArr += arr[i]
        }
    }
    if (evenArr.length > oddArr.length) {
        return oddArr
    } else {
        return evenArr
    }
}

const findTheOddBall = (array) => {
    const isEven = array[0] % 2  === 0;
    while (isEven && (array[index] % 2 === 0 || !isEven && array[index++] % 2 != 0))
    return array[index];
}