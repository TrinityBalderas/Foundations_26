const API_URL = "https://swapi.dev/api";
const STATE = {
    select_value: "people",
    id_value: 1,
};

let select = document.querySelector("select");
let id_input = document.querySelector(".id");
let button_submit = document.querySelector("button");
let swapi_content = document.querySelector(".swapi-content")

select.addEventListener( "change", (event) => {
    STATE.select_value = event.target.value
});

id_input.addEventListener( "change", (event) => {
    STATE.id_value = event.target.value
    console.log(STATE);
});

button_submit.addEventListener( "click", (event) => {
    event.preventDefault()
    call_api(STATE.select_value, STATE.id_value)
});

function call_api(category, id) {
    axios.get( `${API_URL}/${category}/${id}`)
        .then( starwars_res => {
            console.log(starwars_res.data);
            render_our_fetched_data(starwars_res.data)
            
        })
        .catch( err => console.log(err))
}

function render_our_fetched_data(person_obj) {
    swapi_content.innerHTML = ""
    let swapi_div = document.createElement("div");
    swapi_div.innerHTML = 
    `
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Fullname</b>: ${person_obj.name}</li>
        <li class="list-group-item"><b>Height</b>: ${person_obj.height}</li>
        <li class="list-group-item"><b>Mass</b>: ${person_obj.mass}</li>
        <li class="list-group-item"><b>Hair Color</b>: ${person_obj.hair_color}</li>
        <li class="list-group-item"><b>Skin Color</b>: ${person_obj.skin_color}</li>
        <li class="list-group-item"><b>Eye Color</b>: ${person_obj.eye_color}</li>
        <li class="list-group-item"><b>Birth Year</b>: ${person_obj.birth_year}</li>
        <li class="list-group-item"><b>Gender</b>: ${person_obj.gender}</li>
    </ul>
    `
    swapi_content.appendChild(swapi_div)
}

