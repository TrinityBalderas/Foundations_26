const express = require("express"); //getting our express function
const cors = require("cors") //bringing our cors dependency
const app = express() //setting app to the invocation of express function

app.use(express.json()) // allows us to use JSON
app.use(cors()) // enables us to make calls to ourselfs

//get
//post
//put/patch
//delete

//app.get(endpoint, action)
const PORTFOLIO = [
    { id: 0, ticker: "BTC", amount: 22},
    { id: 1, ticker: "BAT", amount: 6000},
    { id: 2, ticker: "XMR", amount: 10},
];

app.get( "/api/portfolio" , (request, response) => {
    response.status(200).send(PORTFOLIO)
});

app.post( "/api/portfolio", (request, response) => {
    PORTFOLIO.push(request.body)
    response.status(200).send(PORTFOLIO)
});

app.put( "/api/portfolio/:id", (request, response) => {
    console.log(request.params);
    const portfolio_obj = PORTFOLIO.find((portfolio_obj) => portfolio_obj.id === parseInt(request.params.id))
    console.log(portfolio_obj);
    portfolio_obj.ticker = request.body.ticker
    response.status(200).send(PORTFOLIO)
});

app.delete( "/api/portfolio/:id", (request, response) => {
    console.log(request.params);
    PORTFOLIO.splice(request.params, 1)
    response.status(200).send(PORTFOLIO)
})

let PORT = 8000

app.listen( PORT, () => {
    console.log("we are live....");
})// puts our server live
