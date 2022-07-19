//FUNCTIONS 2 ELECTRIC BOOGALOO EDITION

//functional programming is a programming paradigm where programs are constructed by 
//applying and composing functions. we can do this because functions return a value!

let add = (x, y) => {
    return x + y
}

let subtract = (x, y) => {
    return x - y
}

const numA = add(54, 627)
const numB = add(235, 8654)

const numC = subtract(numB, numA)
console.log(numC) // 8208

//neat lets cover
//CALLBACK FUNCTIONS 
// A callback is a function that you write and then pass to some other function. That other 
// function then invokes (“calls back”) your function when some condition is met or some 
// (asynchronous) event occurs

setTimeout(()=>console.log("that took a while"), 2000)

//why use callbacks?
// Callbacks make sure that a function is not going to run before a task is completed but 
// will run right after the task has completed. It helps us develop asynchronous JavaScript 
// code and keeps us safe from problems and errors

function find_a_plus_b_squared(a, b, square_root_function) {
    // lets pretend we dont know how long it would take to square
    // This function is asynchronous
    let value_to_root = a ** 2 + b ** 2
    //once the value is taken we pass it to the square_root_function
    return square_root_function(value_to_root);
}

function suare_root_this_num(a_plus_b_squared) {
    // Do what you need with the value
    return Math.sqrt(a_plus_b_squared)
}

console.log(find_a_plus_b_squared(2,2,suare_root_this_num));


// we can also write callback functions inline
// function hypotenuse(a, b, square_function) {
//     return Math.sqrt(square_function(a) + square_function(b));
// }
// console.log(hypotenuse(2, 2, (n) => n ** 2));


//HIGHER ORDER FUNCTION
