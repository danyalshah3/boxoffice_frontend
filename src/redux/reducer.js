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
            return {...state, movies: action.payload, searchResults: action.payload}
           
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
                            case "DELETE_TRANSATION":
                               let newList = state.user.transations.filter(function (element, index) {
                                    return element.id !== action.payload
                                })
                                // .splice(item.index, 1)}
                                // return { todos: state.todos.filter((todo) => todo !== action.payload) }
                                // (transation => transation !== action.payload)]}
         default: 
        return {...state}
     
    }
}