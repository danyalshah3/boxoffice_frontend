import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


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
  .then(res => {
    if (res.ok) {
        res.json()
       .then(response => {
       localStorage.token = response.token
     //   console.log(response)
       dispatch({type: "SET_USER", payload: response.user})
       })
     } else {
         res.json()
         .then(res => alert(res.errors))
       }
     })
   }

  

export const login = (user) => {
    return dispatch => fetch("http://localhost:3000/sessions", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res => {
        // console.log(res)
        if (res.ok) {
           res.json()
          .then(response => {
          localStorage.token = response.token
        //   console.log(response)
          dispatch({type: "SET_USER", payload: response.user})

          })
        } else {
            res.json()
            .then(res => alert(res.errors))
          }
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
        // console.log(response.user.id)
        localStorage.user_id = response.user.id
      localStorage.token = response.token
      dispatch({type: "SET_USER", payload: response.user})
    })
  }

   toast.configure()
  export const Logout = () => {
      return dispatch => {
          localStorage.clear()
          dispatch({type: "LOGOUT"})
          toast.success('LOGGED OUT Successfully', {position: toast.POSITION.TOP_CENTER})
      }
  }

  export const addTransation = (transation, userId) => {
      const userId1 = parseInt(userId)
      console.log(transation)
      return dispatch => fetch(`http://localhost:3000/transations`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.token
            },
            body: JSON.stringify({
                movie_id: transation,
                user_id: userId1
            })
    })
    .then(res => {
        //  console.log(res)
      if (res.ok) {
        res.json().then(transation => dispatch({type: "ADD_TRANSATION", payload: transation}))
      } else {
        res.json().then(res => alert(res.errors))
      }
    })
  }


  export const handleUserTransation = (userId) => {
    const userId1 = parseInt(userId)
    fetch(`http://localhost:3000//users/${userId1}`)
    .then(res => {
        console.log(res)
    })
}