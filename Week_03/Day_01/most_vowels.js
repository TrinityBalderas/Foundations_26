// Has More Vowels

// Concepts
// Loops, Conditionals


// Instructions
// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
// // true
// If it’s half vowels (or less), it’s false:

// hasMoreVowels('mice')
// // false

// hasMoreVowels('graph')
// // false
// Don’t consider “y” as a vowel:

// hasMoreVowels('yay')
// // false
// Uppercase vowels are still vowels:

// hasMoreVowels('Aal')
// // true

// function hasMoreVowels(word) {
//     // refrence to what is a vowel
//     let vowels = ["a", "e", "i", "o", "u"]
//     //keep track of vowel count
//     let vowel_count = 0
//     let lowercase_word = word.toLowerCase()

//     for (let i = 0; i < lowercase_word.length; i++) {
//         if ( vowels.includes(lowercase_word[i]) ) {
//             vowel_count++
//         }
//     }
//     return (vowel_count > word.length/2)
// }

// console.log(hasMoreVowels("Aal")) 


// function hasMoreVowels(word) {
//     // refrence to what is a vowel
//     let vowelsArr = ['a', 'e', 'i', 'o', 'u']
//     //  
//     let vowelsOnly = Array.from(word.toLowerCase()).filter((letter) => vowelsArr.includes(letter))

//     return vowelsOnly.length > (word.length / 2)
// }

let hasMoreVowels = (word) => {
    // const count = word.match(/[aeiou]/gi).length
    // const count2 = word.match(/[qwrtypsdfghjklzxcvbnm]/gi).length
        // if (count > count2){
        //     return console.log("true")
        // } else {
        //     return console.log("false")
        // }
    return word.match(/[aeiou]/gi).length > word.match(/[qwrtypsdfghjklzxcvbnm]/gi).length
}
