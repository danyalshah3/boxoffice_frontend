import {useEffect} from 'react'
import {getMovies} from '../redux/actionCreators'
import {connect} from  'react-redux'
import MoviePage from '../components/Moviepage.js'
import {Nav2} from '../components/Nav'


// import {useParams} from 'react-router-dom'


function MovieIndex({getMovies, movies}) {

    // console.log(useParams())

    useEffect(() => movies.length === 0 && getMovies(), [getMovies])
    // console.log(props.movies)

    return <div className="fullpage">
        <Nav2/>
        {movies.map(movie => <MoviePage {...movie} key={movie.id} />)}
    </div>

    


}

const mapStateToProps = (state) => {
  return {movies: state.movies}  
}
export default connect(mapStateToProps, {getMovies})(MovieIndex);