import {useEffect} from 'react'
import {getMovies} from '../redux/actionCreators'
import {connect} from  'react-redux'
import MoviePage from '../components/Moviepage.js'
import Nav from '../components/Nav'
import  SearchForm  from '../components/SearchForm'




function MovieIndex({getMovies, movies}) {
    console.log(movies)
    
    
    useEffect(() => movies.length === 0 && getMovies(), [getMovies])
    
    
    
    return <div className="fullpage">
    <SearchForm movies={movies}/>
    <Nav/>
        {movies.map(movie => <MoviePage {...movie} key={movie.id} />)}
        </div>
 
 
 
 
 
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {movies: state.movies}  
}
export default connect(mapStateToProps, {getMovies})(MovieIndex);