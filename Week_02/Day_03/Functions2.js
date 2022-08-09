//FUNCTIONS 2 ELECTRIC BOOGALOO EDITION

//functional programming is a programming paradigm where programs are constructed by 
//applying and composing functions. we can do this because functions return a value!

let add = (x, y) => {
    //return undefined
    return x + y
}

let subtract = (x, y) => {
    return x - y
}

const numA = add(54, 627)
const numB = add(235, 8654)
//                         8889 - 681
const numC = subtract(add(235, 8654), add(54, 627))
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

function square_root_this_num(a_plus_b_squared) {
    // Do what you need with the value
    return Math.sqrt(a_plus_b_squared)
}

//console.log(find_a_plus_b_squared(2,2,square_root_this_num));
//                       string  f()
const greetingMachine = (name,greeting) => {
    return greeting(name)
}

const hello = name => {
    console.log(`Hello, ${name}!`)
}
const sup = name => {
    console.log(`'Sup, ${name}?`)
}
const yo = name => {
    console.log(`Yo, ${name}!`)
}
const goodmorning = name => {
    console.log(`Good morning, ${name}!`)
}
greetingMachine("Colin",yo);

const addTen = num => {
    console.log(num + 10) 
}

greetingMachine(26, addTen)

// we can also write callback functions inline
// function hypotenuse(a, b, square_function) {
//     return Math.sqrt(square_function(a) + square_function(b));
// }
// let square = (n) => n ** 2
// // console.log(hypotenuse(2, 2, (n) => n ** 2));
// console.log(hypotenuse(2, 2, square ));


//HIGHER ORDER FUNCTION
// A function that takes 1+ function(s) as an argument and/or returns a function
// They have similar benefits to callbacks: flexibility and reusability
// You’ve already seen them: they’re the outer functions in the callback examples

function B(){
    console.log("Inside the method B. called from B")
} 
// first method that return second method
function A(){
    console.log("Inside the method B. called from A")
    // return second method
    return B
}
// form a object of first method
// i.e; second method
//    B()
let returned_function = A()

// call second method by first method
returned_function()

// Higher Order Array Methods
// Functions built into JavaScript that accept callbacks as arguments
// We will cover forEach, map, filter, and reduce
// Note: not all higher order functions have to work with arrays, there are others (setTimeout, addEventListener, etc.)

let names = ["Alejandro", "Alex", "Trinity", "Kiara", "Sarah", "Daniel"]
//DRY DONT REPEAT YOURSELF
let each_name_loop = []
for (let i = 0; i < names.length; i++) {
    each_name_loop.push(names[i])    
}
console.log(each_name_loop);

let hello_names = []
for (let i = 0; i < names.length; i++) {
    hello_names.push(`hello ${names[i]}`)
}
console.log(hello_names);

let each_name_index = []
for (let i = 0; i < names.length; i++) {
    each_name_index.push(`${names[i]} ${i}`)
}
console.log(each_name_index);

//we are not executing DRY we are repeating core logic a lot with these three examples
//the core logic is making a new array and then just pushing into it every iteration
//this is what makes higher order functions powerful

let each_name = names.map((one_name) =>  one_name )
let hello_each_name = names.map((one_name) => "hello " + one_name)
let each_name_and_index = names.map((one_name,idx) =>  one_name + " " + idx)


////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/
let names_array = ["josh","colin"]
// CODE HERE 
const first = (array_input, callback) => {
    //doing stuff here
    callback(array_input[0])
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER
let call_first_name = first_name => {
    console.log('The first name in names is ' + first_name)
}

first(names_array, call_first_name)

let originalArray= [1,2,3,4]
function addTwo(num, i, arr){
    return num + 2;
}
function map(array,callback){
    let newArray=[];
    for (let i=0; i<array.length; i++){
        newArray.push(callback(array[i], i, array))
    };
    return newArray
}
console.log(map(originalArray, addTwo));
