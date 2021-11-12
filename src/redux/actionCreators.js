export const getMovies = () => {
  
    return dispatch => fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(movies => dispatch({type: 'GET_MOVIES', payload: movies}))
}


export const getMovie = (id) => {
  
    return dispatch => fetch(`http://localhost:3000/movies/${id}`)
    .then(res => res.json())
    .then(movie => dispatch({type: 'GET_MOVIE', payload: movie}))
}