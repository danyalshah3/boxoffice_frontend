const initialState = {
    movies: [],
    selectedMovie: {
        title: "",
        released: "",
        genre: "",
        posterImg: "",
        imdbRating: 0,
        runtime: "",
        director: "",
        writer: "",
        actor: "",
        plot: "",
        language: "",
        awards: "",
        boxOffice: "0",
        trailer: ""
      
    }
}


export default function reducer(state=initialState, action) {
    
    switch (action.type){
    case "GET_MOVIES":
        return {...state, movies: action.payload}

        case "GET_MOVIE":
            return {...state, selectedMovie: action.payload}
        default: 
        return {...state}
     
    }
}