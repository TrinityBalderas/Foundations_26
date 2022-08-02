//const MOVIE_CONTROLLER = require("../controllers/movie.controllers")
const { getAll, createMovie, deleteMovie, updateMovie } = require("../controllers/movie.controllers")

module.exports = (app) => {
    app.route("/api/movies").get(getAll).post(createMovie)
    app.route("/api/movies/:id").put(updateMovie).delete(deleteMovie)
    // app.get("/api/movies", getAll);
    // app.post("/api/movies", createMovie);
    // app.delete("/api/movies/:id", deleteMovie);
    // app.put("/api/movies/:id", updateMovie)
}


// ((value) => {
//     console.log("stuff ", value)
// })(2)