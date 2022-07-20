// Find Lucky Numbers
// Difficulty
// Easy

// Concepts
// Sets, Conditions


// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true

const hasUniqueCar = (word) => {
    word = word.split('');
    //["o","h","h"]
    let characters = []; // ["o", "h"]
    for (let i = 0; i < word.length; i++) {
        if (characters.includes(word[i]) === false) { // false === false ---> true
        characters.push(word[i])
        }        
    }
    //         3      2 ---> true
    return word.length === characters.length;
}

console.log(hasUniqueCar("Bob"))

const hasUniqueCharsAlt = (str) => {
    let set_of_chars = new Set(str)
    let string_length = str.length

    return set_of_chars.size === string_length
}

