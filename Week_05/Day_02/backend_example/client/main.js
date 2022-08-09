let listOne = document.getElementById('list-one')
let listTwo = document.getElementById('list-two')
let listBtn = document.getElementById('list-button')
let listCollection = document.getElementsByClassName('frontend-list')

const createList = data => {
    data.forEach(element => {
        let listElement = document.createElement('li')
        listElement.textContent = element
        listElement.addEventListener('click', deleteElementBackend)
        listTwo.appendChild(listElement)
    })
}

const getList = evt => {
    evt.preventDefault()
    axios.get('http://localhost:4000/api/list')
        .then(response => {
            listTwo.innerHTML = ''
            let { data } = response
            createList(data)
        })
        .catch(err => console.log(err))
}

const deleteElementBackend = evt => {
    evt.preventDefault()
    console.log(evt.target)
    let { target } = evt
    let listText = target.textContent
    console.log(listText)

    axios.delete(`http://localhost:4000/api/list/${listText}`)
        .then(response => {
            let { data } = response
            listTwo.innerHTML = ""
            createList(data)
        })
        .catch(err => console.log(err))
}

const deleteElementFrontend = evt => {
    evt.preventDefault()
    evt.target.remove()
}

console.log(listCollection)

listBtn.addEventListener('click', getList)
for(i = 0; i < listCollection.length; i++){
    listCollection[i].addEventListener('click', deleteElementFrontend)
}