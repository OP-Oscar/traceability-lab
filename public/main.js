// query selectors
const btn = document.querySelector('button')
const moviesContainer = document.querySelector('#movies-container')
const form = document.querySelector('form')

// const baseURL = `http://localhost:4000/api/movies` // => alternate way if specifying host.
const baseURL = `../api/movies` //=>dynamic

//callbacks
const clickHandler = () => alert('The cat name is: Rascal')
const moviesCallback = ({ data: movies }) => displayMovies(movies)
const errCallback = err => console.log(err.response.data)

//axios requests
const getAllMovies = () => axios.get(baseURL).then(moviesCallback).catch(errCallback)
const createMovie = body => axios.post(baseURL, body).then(moviesCallback).catch(errCallback)
const deleteMovie = id => axios.delete(`${baseURL}/${id}`).then(moviesCallback).catch(errCallback)
const updateMovie = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(moviesCallback).catch(errCallback)

// function to handle new movies submitted
function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        rating: rating.value, 
        imageURL: imageURL.value
    }

    createMovie(bodyObj)

    title.value = ''
    rating.checked = false
    imageURL.value = ''
}

// create visuals function
function createMovieCard(movie) {
    const movieCard = document.createElement('div')
    movieCard.classList.add('movie-card')

    movieCard.innerHTML = `<img alt='movie cover' src=${movie.imageURL} class="movie-cover"/>
    <p class="movie-title">${movie.title}</p>
    <div class="btns-container">
        <button onclick="updateMovie(${movie.id}, 'minus')">-</button>
        <p class="movie-rating">${movie.rating} stars</p>
        <button onclick="updateMovie(${movie.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteMovie(${movie.id})">delete</button>
    `


    moviesContainer.appendChild(movieCard)
}
// iterate through movies in db to create visual for each
function displayMovies(arr) {
    moviesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMovieCard(arr[i])
    }
}


// event listeners
btn.addEventListener('click', clickHandler)
form.addEventListener('submit', submitHandler)

//invoking
getAllMovies()