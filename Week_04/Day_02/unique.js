// Make Unique String
// Difficulty
// Medium

// Concepts
// Loops, Conditionals, String Methods


// Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu

let unique = (enter) => {
    //putting the string into an array
    let enterArray = enter.split("")
    for(i=0; i<enterArray.length; i++){
        let first = enterArray[i];
        for(j=0; j<enterArray.length; j++){
            let second = enterArray[j];
            if(second === first && i !== j){
                enterArray.splice(j, 1);
            }
        }
    }
       let result = enterArray.join("");
       return result;
} 
//                  0
console.log(unique("hhelloworld"));
//                   1

const makeUnique = str => str.split('').filter((el,i,arr) => i === arr.indexOf(el)).join('')
console.log(makeUnique('helloworld'))