const HOUSES = require("../db.json")

module.exports = {
    getAllHouses: (req, res) => {
        console.log("hello");
        res.status(200).send(HOUSES)
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: globalId,
            address, 
            price,
            imageURL
        }
        HOUSES.push(newHouse)
        res.status(200).send(HOUSES)
        globalId++
    },
    updateHouse: (req, res) => {
        let { id } = req.params;
        let { type } = req.body;
        let index = HOUSES.findIndex(elem => +elem.id === +id)
    
        if (HOUSES[index].price <= 10000 && type === 'minus') {
            HOUSES[index].price = 0
        } else if (type === 'plus') {
            HOUSES[index].price += 10000;
            res.status(200).send(HOUSES);
        } else if (type === 'minus') {
            HOUSES[index].price -= 10000;
            res.status(200).send(HOUSES);
        } else {
            res.sendStatus(400);
        }
    },
    deleteHouse: (req, res) => {
        let index = HOUSES.findIndex(elem => elem.id === +req.params.id)
        HOUSES.splice(index, 1)
        res.status(200).send(HOUSES)
    }, 

}
