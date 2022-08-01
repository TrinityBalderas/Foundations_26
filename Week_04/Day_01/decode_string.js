// Decode String
// Difficulty
// Medium

// Concepts
// Loops


// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

const caesar_cypher = (input_string) => {
    //                0    5  7
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let idx = 0;
    let new_char = "";
    let encoded_string = "";
    let num = parseInt(input_string[0]);
    for (let i = 1; i < input_string.length ;i++) {
        let character = input_string[i]; //
        // encoded_string = alphabet[character.indexOf + num]
        for (let j = 0; j < alphabet.length; j++) {
            let alphabet_letter = alphabet[i]
            if ( alphabet_letter === character ) {
                idx = j;
                console.log(idx);
                break;
            }     
        // encoded_string = alphabet[idx + num]
        }
        // let rotate_index = idx + num;
        // console.log(rotate_index);
        // new_char = alphabet[rotate_index]
    }
    return encoded_string;
}
console.log(caesar_cypher("2fcjjm"));

