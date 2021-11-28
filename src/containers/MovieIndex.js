import {useEffect} from 'react'
import {getMovies} from '../redux/actionCreators'
import {connect} from  'react-redux'
import MoviePage from '../components/Moviepage.js'
import Nav from '../components/Nav'




function MovieIndex({getMovies, movies}) {
  

    useEffect(() => movies.length === 0 && getMovies(), [getMovies])
    


    return <div className="fullpage">
    <Nav/>
        {movies.map(movie => <MoviePage {...movie} key={movie.id} />)}
        </div>
 

    


}

const mapStateToProps = (state) => {
    // console.log(state)
  return {movies: state.movies}  
}
export default connect(mapStateToProps, {getMovies})(MovieIndex);