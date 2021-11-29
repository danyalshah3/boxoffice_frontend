const initialList = {
    title: "",
    released: "",
    genre: "",
    posterImg: "",
    imdbRating: null,
    runtime: "",
    director: "",
    writer: "",
    actor: "",
    plot: "",
    language: "",
    awards: "",
    boxOffice: "null",
    trailer: "",
    id: null,
    // transations: []
  
}

const initialUser= {
    username: "",
    transations: []

}

// const initialMovies = {
//     allMovies: [],
//     searchedMovie: []
// }



const initialState = {
    movies: [], 
    selectedMovie: initialList,
    user: initialUser,
   
}

// title, released, genre, posterImg, imdbRating, runtime, director, writer, actor, plot, language, awards, boxOffice, trailer
export default function reducer(state=initialState, action) {
    
    switch (action.type){
    case "GET_MOVIES":
        return {...state, movies: action.payload}

        case "GET_MOVIE":
            return {...state, selectedMovie: action.payload}

        case "CLEAR_MOVIE":
            return {...state, selectedMovie: initialList}
        case "SET_USER":
            return {...state, user: action.payload}
            case "LOGOUT":
                return {...state, user: initialUser}
        case "ADD_TRANSATION":
            return {...state, user: {...state.user, transations: [action.payload, ...state.user.transations]}}

        default: 
        return {...state}
     
    }
}