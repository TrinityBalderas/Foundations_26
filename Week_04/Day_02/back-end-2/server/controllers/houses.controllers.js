const HOUSES = require("../db.json")

module.exports = {
    getAllHouses: (req, res) => {
        console.log("hello");
        res.status(200).send(HOUSES)
    },
    updateHouse: (req, res) => {
        let { id } = req.params;
        let { type } = req.body;
        let index = HOUSES.findIndex(elem => +elem.id === +id)
    
        if (HOUSES[index].price <= 10000 && type === 'minus') {
            HOUSES[index].price = 0
            res.status(200).send(HOUSES);
        } else if (type === 'plus') {
            HOUSES[index].price += 10000;
            res.status(200).send(HOUSES);
        } else if (type === 'minus') {
            HOUSES[index].price -= 10000;
            res.status(200).send(HOUSES);
        } else {
            res.sendStatus(400);
        }
    }
}
