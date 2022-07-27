// console.log(document.firstElementChild.lastElementChild)
// console.log(document.firstElementChild)

let className = ".title"

let title = document.querySelector(className)
console.log(title);

title.style.color = "blue"
//h1 . prop = 
title.innerHTML = "Morbius was actually bad movie, shame on jared leto"

let lists = document.querySelectorAll("li")
// [ li, li, li]
lists[2].style.color = "rebeccapurple"

document.querySelector("input").click()

// alert("THIS IS ANNOYING DONT DO THIS")

// confirm('Hey, user, is this ok?');

// prompt('Enter a string');

// function example(element) {
//     console.log(element);
// }

let button = document.querySelector("button")
let clicky_click = (event) => {
    console.log(event);
}
button.addEventListener( "click", clicky_click)
// button.addEventListener( "click", (event) => {
//     console.log(event.target);
// } )

let dice = document.querySelector("img")
console.log(dice);
function roll_the_dice() {
    let random_number = Math.floor(Math.random() * 6) + 1
    dice.src = `images/dice${random_number}.png`
    // dice.setAttribute("src", `images/dice${random_number}.png`)
}
dice.addEventListener( "click" , roll_the_dice )
//        div #container
document.querySelector("#container").addEventListener( "click", (event) => {
    console.log(event.target);
    event.target.parentNode.remove()
})

const article = document.querySelector('article')

const newPara = document.createElement('p')
console.log(newPara);

newPara.textContent = 'This is a new paragraph.'
console.log(newPara);

article.append(newPara)
let container = document.querySelector("#container")
container.insertBefore(newPara, container.firstChild)