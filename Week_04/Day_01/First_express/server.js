const express = require("express"); //getting our express function
const cors = require("cors") //bringing our cors dependency
const app = express() //setting app to the invocation of express function

app.use(express.json()) // allows us to use JSON
app.use(cors()) // enables us to make calls to ourselfs

// app.get
// app.post
// app.put / patch 
// app.delete
// app.get(route, a_function_to_do_things)
const magic_set = [
    { id: 1, set_name: "KTK"},
    { id: 2, set_name: "2X2"},
    { id: 3, set_name: "RAV"},
]


app.get("/api/magic_set", (request, respond) => {
    respond.send(magic_set)
})

app.post("/api/magic_set", (request, response) => {
    magic_set.push(request.body)
    response.status(200).json({message: "ok"})
})
// { id: 1, set_name: "KTK"},
app.put("/api/magic_set/:set_id", (request, response)=> {
    console.log(request);
    const set = magic_set.find( (set_object) => set_object.id === parseInt(request.params.set_id))
    set.set_name = request.body.set_name
    response.status(200).json({message: "ok"})
})

app.delete("/api/magic_set/:set_id", (request, response) => {
    const set = magic_set.find( (set_object) => set_object.id === parseInt(request.params.set_id))
    magic_set.splice(request.params.set_id -1, 1)
    response.send("you did it")
})

app.listen( 8000, () => {
    console.log("we are live....");
})// puts our server live

