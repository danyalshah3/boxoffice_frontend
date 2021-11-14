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

export const clearMovie = () =>  ({type: "CLEAR_MOVIE"})


export const signUp = (user) => {
  return dipatch => fetch("http://localhost:3000/signup", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(user => dispatch({type: "SET_USER", payload: user}))
}

export const Login = (user) => {
    return dipatch => fetch("http://localhost:3000/sessions", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(user => dispatch({type: "SET_USER", payload: user}))
  }
  
