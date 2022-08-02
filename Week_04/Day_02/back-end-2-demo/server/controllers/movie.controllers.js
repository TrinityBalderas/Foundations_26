const MOVIES = require("../config/db.json")
let base_id = 11

module.exports = {
    getAll: (request, response) => {
        response.status(200).send(MOVIES)
    },
    createMovie: (request, response) => {
        let { title, rating, imageURL } = request.body
        let new_movie = {
            id: base_id,
            title,
            rating,
            imageURL
        }
        MOVIES.push(new_movie)
        base_id++
        console.log(MOVIES);
        response.status(200).send(MOVIES)
    },
    deleteMovie: (request, response) => {
        let index = MOVIES.findIndex( movie => movie.id === +request.params.id)
        MOVIES.splice(index, 1)
        response.status(200).send(MOVIES)
    },
    updateMovie: (request, response) => {
        let { id } = request.params
        let { type } = request.body
        let index = MOVIES.findIndex( movie => movie.id === +id)
        

        if (MOVIES[index].rating === 5 && type === "plus" || MOVIES[index].rating === 1 && type === "minus") {
            console.log("cant do that");
            response.status(405).send(MOVIES)
            return;
        }
        //a ? b : c
        type === "plus" ? MOVIES[index].rating++ : MOVIES[index].rating--

        response.status(200).send(MOVIES)
    }
}
