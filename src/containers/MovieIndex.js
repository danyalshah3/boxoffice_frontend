import {useEffect} from 'react'
import {getMovies} from '../redux/actionCreators'
import {connect} from  'react-redux'
import MoviePage from '../components/Moviepage.js'
import Nav from '../components/Nav'



function MovieIndex({getMovies, movies}) {
    // console.log(useParams())

    useEffect(() => movies.length === 0 && getMovies(), [getMovies])
    // console.log(props.movies)

    return <div className="fullpage">
    <Nav/>
      
        {movies.map(movie => <MoviePage {...movie} key={movie.id} />)}
        
    </div>

    


}

const mapStateToProps = (state) => {
  return {movies: state.movies}  
}
export default connect(mapStateToProps, {getMovies})(MovieIndex);