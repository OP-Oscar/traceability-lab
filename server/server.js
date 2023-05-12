//import
const express = require('express')
const cors = require('cors');

//invoking
const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(express.static(`${__dirname}/public`)); //=>dirname brings working directory file index.html

const userController = require('./controllers/userController');
const {getAllMovies, createMovie, deleteMovie, updateMovie} = userController;
// const {createMovie} = userController; // => you can do it seperate

//routes 
app.get(`/`,(req,res)=>{res.sendFile(path.join(__dirname, `./public/index.html`))
})
// app.get('/', (req, res) => res.send('Hello...new route worked?  '));

// app.get(`/api/movies`, getAllMovies);
app.post(`/api/movies`, createMovie);
app.delete(`/api/movies/:movie_id`, deleteMovie)
app.put(`/api/movies/:movie_id`, updateMovie )



//confirmation
app.listen(4000, () => console.log('server running on 4000'))

