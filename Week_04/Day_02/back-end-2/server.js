const express = require("express"); //getting our express function
const cors = require("cors"); //bringing our cors dependency
const app = express() //setting app to the invocation of express function

app.use(express.json()); // allows us to use JSON
app.use(cors()); // enables us to make calls to ourselfs

const PORT = 4004;
let globalId = 4;

const { getAllHouses, updateHouse } = require("./server/controllers/houses.controllers");


app.get(`/api/houses`, getAllHouses);

app.delete(`/api/houses/:id`, (req, res) => {
    let index = houses.findIndex(elem => elem.id === +req.params.id)
    houses.splice(index, 1)
    res.status(200).send(houses)
});
app.post(`/api/houses`, (req, res) => {
    let { address, price, imageURL } = req.body
    let newHouse = {
        id: globalId,
        address, 
        price,
        imageURL
    }
    houses.push(newHouse)
    res.status(200).send(houses)
    globalId++
});
app.put(`/api/houses/:id`, updateHouse);

app.listen( PORT, () => {
    console.log(`we are live at ${PORT}`);
});// puts our server live