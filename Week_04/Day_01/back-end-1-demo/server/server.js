const express = require("express"); //getting our express function
const cors = require("cors") //bringing our cors dependency
const app = express() //setting app to the invocation of express function
const PORT = 5050


app.use(express.json()) // allows us to use JSON
app.use(cors()) // enables us to make calls to ourselfs
const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get('/api/inventory', (req, res) => {
    // console.log(req);
    if (req.query.item) {
        const filtered_inventory = inventory.filter( item => item.includes(req.query.item))
        res.status(200).send(filtered_inventory )
    } else {
        res.status(200).send(inventory)
    }

})

app.get("/api/inventory/:index", (req, res) => {
    console.log(req);
    const inventory_item = inventory[parseInt(req.params.index)]
    res.status(200).send(inventory_item)
})


app.listen( PORT, () => {
    console.log(`we are live....at port ${PORT}`);
})// puts our server live