const Movie = require("../models/Movie.model");

const getMovies = async (req,res)  => {
    try{
        console.log("prueba2");
        const movies = await Movie.find()
        console.log("prueba");
        res.render("movies",{movies})
       
    }catch(err){
        res.send(err)
    }
}

module.exports = {
    getMovies
}