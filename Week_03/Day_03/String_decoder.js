// String Decoder

// Concepts
// Loops


// Instructions
// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

// Start by creating a function called decoder that has a single parameter called code.

// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

// Here are a few more examples:

// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
//  0 1 2 3 4
// '2 b n a 0 p1mp2osl0e' => 'apple'


// '0y4akjfe0s' => 'yes'
//strings are array-like
function decoder (scrammbled) {
    // find a word and store it in the array
    let hiddenword = ""
    // looping thry the word
    for (let i = 0; i < scrammbled.length; i++) {
        // am i looking at a number
        if(Number(scrammbled[i]) >= 0 ) {
            
            i += Number(scrammbled[i]) + 1
            hiddenword += scrammbled[i]
        }
    }
    return hiddenword
}

console.log(decoder('2bna0p1mp2osl0e'))

// let i = 1
// i++
// i += 1
// i = i + 1 + number