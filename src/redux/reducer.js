import { accordionActionsClasses } from "@mui/material"
// import { browserHistory } from 'react-router-dom'

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


const initialState = {
    movies: [],
    searchValue: "",
    searchResults: [],
    selectedMovie: initialList,
    user: initialUser,
   
}

// title, released, genre, posterImg, imdbRating, runtime, director, writer, actor, plot, language, awards, boxOffice, trailer
export default function reducer(state=initialState, action) {
    // console.log(state)
    switch (action.type){
        case "GET_MOVIES":
            return {...state, movies: action.payload, moviesCopy: action.payload}
           
            case "GET_MOVIE":
                return {...state, selectedMovie: action.payload}
                
                case "CLEAR_MOVIE":
                    return {...state, selectedMovie: initialList}
                    case "SET_USER":
                        return {...state, user: action.payload}
                        case "LOGOUT":
                            return {...state, user: initialUser}
                            case "ADD_TRANSATION":
            console.log(state)
            return {...state, user: {...state.user, transations: [action.payload, ...state.user.transations]}}
            case "DELETE_TRANSATION":
                console.log(state.user.transations)
                return {...state, transations: state.user.transations.filter(item => console.log(item))}
                // item.id !== action.payload.id
                // state.pop()
                // return [
                //     ...state
        default: 
        return {...state}
     
    }
}