// Is Palindrome
// Difficulty
// Easy

// Concepts
// Loops, General

// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true

// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// isPalindrom("Racecar")
// // returns false

// isPalindrom("racecar")
// // returns true

let isPalindrom = (str_input) => {
    for (let i = 0; i < (str_input.length/2) ;i++) {
        if ( str_input[i] !== str_input[str_input.length - 1 - i] ) {
            return false
        }
    }
    return true
}


console.log(isPalindrom("Nn"));

