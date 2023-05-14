//import
const express = require('express')
const cors = require('cors');
const userController = require('./controllers/userController');

//invoking
const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(express.static(`public`)); //=>dirname brings working directory file index.html


// destructuring functions from userController
const {getAllMovies, createMovie, deleteMovie, updateMovie} = userController;
// const {createMovie} = userController; // => alternate way to write if wanting to seperate for some reason

//routes 
app.get(`/api/movies`,getAllMovies);
app.post(`/api/movies`, createMovie);
app.delete(`/api/movies/:movie_id`, deleteMovie)
app.put(`/api/movies/:movie_id`, updateMovie )


//confirmation, running on port 4000
app.listen(4000, () => console.log('server running on 4000'))

