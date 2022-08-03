const express = require("express"); //getting our express function
const cors = require("cors"); //bringing our cors dependency
const app = express() //setting app to the invocation of express function

app.use(express.json()); // allows us to use JSON
app.use(cors()); // enables us to make calls to ourselfs

const PORT = 4004;
let globalId = 4;

const { getAllHouses, updateHouse, deleteHouse, createHouse } = require("./server/controllers/houses.controllers");


app.get(`/api/houses`, getAllHouses);

app.delete(`/api/houses/:id`, deleteHouse);

app.post(`/api/houses`, createHouse);

app.put(`/api/houses/:id`, updateHouse);

app.listen( PORT, () => {
    console.log(`we are live at ${PORT}`);
});// puts our server live
