let dallas = document.querySelector(".dallas")
// console.log(dallas);

dallas.addEventListener( "click", () => {
    alert("Howdy partner :)")
})

let select_temperature = document.querySelector(".temperature-scale")

//convert temperatures
let C_to_F = (temp) => {
    return Math.round( 9/5 * temp + 32)
}

let F_to_C = (temp) => {
    return Math.round( 5/9 * (temp - 32))
}

select_temperature.addEventListener( "change", (event) => {
    console.log(event.target.value);
    for (let i = 1; i <= 8; i++) {
        let temp_span = document.querySelector(`#temp${i}`)
        let temp_val = parseInt(temp_span.innerHTML);
        if (event.target.value === "°C") {
            temp_span.innerHTML = F_to_C(temp_val)
        } else {
            temp_span.innerHTML = C_to_F(temp_val)
        }    
    }
})

//bonus clear up the cookie alert