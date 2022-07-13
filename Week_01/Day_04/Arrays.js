// a fundamental datatype in JavaScript and in most other programming languages. 
// An array is an ordered collection of values

// Each value is called an element, and each element has a numeric position in 
// the array, known as its index

//                 0       1     2         3           4      5
let first_array = [12, "Jetmir", 12, "Saskatchewan", [1,2], {a: 3}];


//CREATING ARRAYS
// array literal, simply a comma separated list of array elemenits in [ ]

let array = [];

// values in an array dont need to be constants they can be expressions

let base = 2;
let expressions = [ base + 3, base - 0]
console.log(expressions);

//if we have empty elements the array is sparse. querying the index === undefined

//             0  1  2  3
let sparse = [ 0,  ,  ,2]
console.log(`sparse array empty elements === ${sparse[1]}`);

//READING AND WRITING ARRAY ELEMENTS
// we use the [] operator to read and write array elements

//                     0
let kelvins_list = ["Django"];
let dogs_awesome_name = kelvins_list[0]
// console.log(dogs_awesome_name);
kelvins_list[1] = 3.14;
// console.log(kelvins_list);
kelvins_list[0] = "Pita"
// console.log(kelvins_list);
let i = 2;
kelvins_list[i] = 5;
kelvins_list[i + 1] = "will this work";
//    0       1   2        3           4       5
//[ 'Pita', 3.14, 5, 'will this work',     ,  "pita"]
// kelvins_list[2] (-->5) = "pita"
// kelvins_list[5] = "pita"
kelvins_list[kelvins_list[i]] = kelvins_list[0]
console.log(kelvins_list);

// let big_empty_array = []
// big_empty_array[1400430240] = 2;
// console.log(big_empty_array);


//ARRAY LENGTH
// Every array has a length property he length property specifies the number of 
// elements in the array Its value is one more than the highest index in the array

console.log(`the length of this array is ---> ${[].length}`);
//                                               0 1 2 3
console.log(`the length of this array is ---> ${[1,2,3,4].length}`);
console.log(`the length of this array is ---> ${[1,2,["fsdf",1,2],3,4].length}`);

// The second special behavior that arrays implement in order to maintain the 
// length constant is that, if you set the length property smaller you delete

//                    0           6
let cut_off_length = [1,2,3,4,5,6,7];
cut_off_length.length = 3;
console.log(cut_off_length);
cut_off_length.length = 0;
cut_off_length.length = 1000


//ADDING AND DELETING ARRAY ELEMENTS
//we can use [index] to add or delete and .length to cut off arrays
//the push() method allows us to add one or more values to the end of an array

let add_to_my_array = [];
add_to_my_array.push(1, "push", [1,2])


//if you want to add elements at the front use the unshift() method

let len_of_list = add_to_my_array.unshift("adding to front",12,[0,32])


//to remove elements from the back use the pop() method
//shift() method removes from the front

let smaller_array = add_to_my_array.pop();

add_to_my_array.shift();
console.log(add_to_my_array);




//ITERATING ARRAYS
// -for and while loops
// - for of loops

let iterate_me = ["F","u","l","l","s","t","a","c","k"];
let fsa = "";
//    iterator;   condition;            step;
for (let i = 0; i < iterate_me.length; i++) {
    fsa = fsa + iterate_me[i];
}
console.log(fsa);
//for of are for iterables
// for (const char of iterate_me) {
//     fsa += char
// }
// console.log(fsa);

//ARRAY SEARCHING
// Arrays implement indexOf(), lastIndexOf(), and includes() methods that 
// are similar to the same-named methods of strings

//                  0 1 2 3 4 5
let try_and_find = [1,2,3,4,2,1];
console.log(try_and_find.indexOf(1,2));
console.log(try_and_find.lastIndexOf(1,-2));
console.log(try_and_find.includes(1));

// indexOf() and lastIndexOf() search an array for an element with a specified 
// value and return the index of the first such element found, or -1 
// if none is found



// includes() method takes a single argument and returns true if the array 
// contains that value or false otherwise



//SUBARRAYS WITH SLICE EM AND SPLICE EM
// The slice() method returns a slice, or subarray, of the specified array
//returns you a new array!

//                 0 1 2 3 4
let slice_em_up = [1,2,3,4,5]
console.log(slice_em_up.slice(0,3));
console.log(slice_em_up.slice(3));
console.log(slice_em_up.slice(1,-1));
console.log(slice_em_up.slice(-2,-1));



//splice() modifies the array on which it is invoked. Note that splice() 
//and slice() have very similar names but perform substantially 
//different operations

//                  0 1 2 3 4
let splice_em_up = [1,2,3,4,5]
// splice_em_up.splice(3,2, [1,2])
splice_em_up.splice(2,1)
console.log(splice_em_up);

// splice() can delete elements from an array, insert new elements into an array, 
// or perform both operations at the same time
//mutates the array

