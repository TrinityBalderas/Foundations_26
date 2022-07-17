/* In JavaSCript the type for representing text is the "string". A string is an immutable ordered sequence of the 16-bit values
Strings are "array like" and use 0 based indexing. */

// STRING LITERALS
// to create a string in JS we just enclose character of the string within "" or ''
"" //empty string
'look a string'
"3.14"
//what happens when we write a sentence like this --> 'you're late', she said

// ESCAPE SEQUENCES IN STRINGS
// The backlash character \ has a special purpose in JS strings.
// sequence     |    character represented
// ----------------------------------------
//  \n                  newline
//  \"                  double quote
//  \'                  single quote
//and many more but these are the most commonly used escape sequences

// WORKING WITH STRINGS
//string concatination, JS allows us to combine our string with the + operator
let string1 = "im unique", string2 = "i guess i am"
console.log(string1 + string2);
//string length, we can access the length (number of characters in the string)
string1.length
//SOME AWESOME METHODS FOR STRINGS
let practice_with_some_strings = "Hello, world"
//obtaining portions of a string
//substring and return "ell" ----->  
//slice and return "worl" -----> 
//split and return an array of both words -----> 
//Bonus: what method can take an array of words and put them back together

//searching a string
//indexOf "H" ---->
//lastIndexOf "l" ----> 

//boolean searching funtions
//startsWith "Hello" gives us?---> 
//endsWith "!" ---> 

//creating modified version of a string
//replace "llo" with "ya" ---> "Heya, world"
//toLowerCaset ---> take a guess lol
//toUpperCase ---> take another guess

//inspecting individual characters of a string
//charAt 0 ---> 
//charCodeAt 0 --->
//Bonus: find the range of lower and uppercase letters

//space trim funtctions
//bonus mess with these methods
let test = "   test "
//trim test --->
//Bonus: mess with the other trims
//trimStart and trimEnd

// STRING INTERPOLATION
let first_name = "kelvin"
let last_name = "arauz"
//use backticks and ${} to inject variables
//everything inside ${} is interpreted as a JS expression. everything outside the braces are normal string literal text
console.log(`my full name is ${firs_name} ${last_name}`);

//PATTERN MATCHING
//JavaScript defines a datatype known as `regular expressions` for pattern matching in strings
//text between a pair of forward slashes makes a regular expression literal. more on regex reading here
//https://regexone.com/ a good site to learn regex fundamentals
//https://regexr.com/ for when you become comfortable with the basics of regex

/[1-9][0-9]*/ //match a nonzero digit, followed by any number of digits
//                0     6  10 13
let regex_text = "blast off in 3, 2, 1"
let pattern = /\d+/g
console.log(pattern.test(regex_text))
console.log(regex_text.search(pattern));
