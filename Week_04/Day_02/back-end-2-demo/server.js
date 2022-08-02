const express = require("express"); //getting our express function
const cors = require("cors") //bringing our cors dependency
const app = express() //setting app to the invocation of express function


app.use(express.json()) // allows us to use JSON
app.use(cors()) // enables us to make calls to ourselfs

const PORT = 4004

app.listen( PORT, () => {
    console.log(`we are live....${PORT}`);
})// puts our server live

// IFFE, injecting the app into our routes
require("./server/routes/movies.routes")(app)