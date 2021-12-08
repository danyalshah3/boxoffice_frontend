import {useEffect} from 'react'
import {getMovies} from '../redux/actionCreators'
import {connect} from  'react-redux'
import MoviePage from '../components/Moviepage.js'
import Nav from '../components/Nav'
import  SearchForm  from '../components/SearchForm'
import {useState} from 'react'
import {addTransation} from '../redux/actionCreators'
import background from '../components/Images/78856742.png'


function MovieIndex({getMovies, movies, addTransation, id}) {

    
    useEffect(() => movies.length === 0 && getMovies(), [getMovies])

    const [transations, settransations] = useState([])


    const handleClick = (id) => {
        const userId1 = parseInt(localStorage.user_id) 
        settransations(addTransation(id, userId1))
    }

    
    
    return <div className="fullpage" style={{backgroundImage: `url(${background})`}}>
    <Nav/><br></br>
    <br></br>
        <SearchForm movies={movies}/><br></br>
        {movies.map(movie => <MoviePage {...movie}  key={movie.id} handleClick={handleClick} />)}


        </div>
 
}

const mapStateToProps = (state) => {
    return {movies: state.movies}  
}
export default connect(mapStateToProps, {getMovies, addTransation})(MovieIndex);