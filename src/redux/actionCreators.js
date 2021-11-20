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
  return dispatch => fetch("http://localhost:3000/users", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json())
//   .then(console.log)
  .then(response => {
      localStorage.token = response.token
      dispatch({type: "SET_USER", payload: response.user})
    })
}
//   .then(user =>  dispatch({type: "SET_USER", payload: user}))

export const login = (user) => {
    return dispatch => fetch("http://localhost:3000/sessions", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(response => {
          localStorage.token = response.token
          dispatch({type: "SET_USER", payload: response.user})
        })
      }

    

  export const autoLogin = () => {
    return dispatch => fetch("http://localhost:3000/me", {
      headers: {
        'Authorization': localStorage.token
      }
    })
    .then(res => res.json())
    .then(response => {
      localStorage.token = response.token
      dispatch({type: "SET_USER", payload: response.user})
    })
  }

  export const Logout = () => {
      return dispatch => {
          localStorage.clear()
          dispatch({type: "LOGOUT"})
      }
  }

//   export const addTransation = (transation, userId) => {
//     return dispatch => fetch(`http://localhost:3000/user/${userId}/transations`, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': localStorage.token
//       },
//       body: JSON.stringify(transation)
//     })
//     .then(res => {
//       if (res.ok) {
//         res.json().then(transation => dispatch({type: "RENT_IT", payload: transation))
//       } else {
//         res.json().then(res => alert(res.errors))
//       }
//     })
//   }