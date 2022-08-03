/* Balanced Parenthesis
Difficulty
Medium

Concepts
Loops, Conditionals

Given a string, return true or false depending on whether that string has balanced parentheses.

For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

For example:
>>> has_balanced_parens("(){}[]<>")
// true
>>> has_balanced_parens("(Oh Noes!)(")
// false
>>> has_balanced_parens("((There's a bonus open paren here.)")
// false
>>> has_balanced_parens(")")
// false
>>> has_balanced_parens("(")
// false
>>> has_balanced_parens("(This has (too many closes.) ) )")
// false
You may consider a string with no parentheses balanced:
>>> has_balanced_parens("Hey...there are no parens here!")
// true */

// function balancedParentheses (string) {
//     //counting when we see a paren
//     let counter = 0
//     for (let i = 0; i < string.length; i++) {
//         //if we see an open count it
//         if (string[i] === "(") {
//             counter += 1
//         //if we see a closing count that
//         } 
//         if (string[i] === ")") {
//             counter -= 1
//         }
//         if (counter < 0) {
//             return false
//         }
//     }
//     return counter === 0
// }
// console.log(balancedParentheses(") ()("));
function balancedPars(str) {
    let pars = '()'
    let arr = []

    for(char of str) {
        let parInd = pars.indexOf(char)
        if(parInd === -1) continue

        if(parInd % 2 === 0){
            arr.push(parInd + 1)
        } else {
          if (arr.pop() !== parInd) return false
        }
    }

    return arr.length === 0
}

console.log(balancedPars("(Oh Noes!)("))
console.log(balancedPars("Hi"))