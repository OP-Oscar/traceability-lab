//importing db data
const db = require('../db.json');

//make variables global in case future use
let id = db.length;

//exporting functions
module.exports = {
    getAllMovies : (req,res) => {
        let allMovies = db;
    res.status(200).send(allMovies)
    },
    createMovie : (req,res) => {
        id++
        let newMovie = {...req.body, id: id};
        db.push(newMovie);
        res.status(200).send(db);
    },
    deleteMovie : (req,res) => {
        // const id = req.params.movie_id; // =>one way to pull id that was sent
        const {movie_id} = req.params;

        for(i=0; i<db.length; i++){
            if(db[i].id === +movie_id){
                db.splice(i,1);
            }
        }
        res.status(200).send(db);
    },

    
    updateMovie : (req, res) => {
        const {movie_id} = req.params; // => getting ID that was sent
        console.log(req.body)
        const {type} = req.body; // => getting body
        

        console.log(movie_id);
        console.log(type);

        for(i=0; i<db.length; i++){
            if(db[i].id === +movie_id){
                if(type === 'plus'){
                    db[i].rating++
                }
                if(type === 'minus'){
                    db[i].rating--
                }
            }
        
        }
        res.status(200).send(db);
    }

//add more logic if additional tasks required
};

