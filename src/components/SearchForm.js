import {useState} from 'react'
import {connect} from 'react-redux'
import {getMovies} from '../redux/actionCreators'


 function SearchForm(props){
     
     
     const [title, settitle] = useState("")
     
     const onSubmit = (e) => {
         e.preventDefault();
        // console.log(e)
//   settitle(props.movies.filter(movie=> movie.toLowerCase().includes(e.target.value.toLowerCase())))
}

    return <form onSubmit={onSubmit}>
        <label>
            Search by Title:
            <input type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder="Avengers etc"/>
        </label>
        <input type="submit" value="Search for a Movie" />
        </form>
}

export default (SearchForm)