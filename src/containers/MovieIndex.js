import {useEffect} from 'react'
import {getMovies} from '../redux/actionCreators'
import {connect} from  'react-redux'
import MoviePage from '../components/Moviepage.js'
import Nav from '../components/Nav'
// import Transations from './Transations'
// import {useState} from 'react'



function MovieIndex({getMovies, movies}) {
    // console.log(useParams())

    useEffect(() => movies.length === 0 && getMovies(), [getMovies])
    // const [transations, setTransations] = useState([])
    // console.log(props.movies)
	// const addTransations = (movie) => {
	// 	const newList = [...transations, movie];
	// 	setTransations(newList);
    // }

    return <div className="fullpage">
    <Nav/>
        {movies.map(movie => <MoviePage {...movie} key={movie.id} />)}
        </div>
 

    


}

const mapStateToProps = (state) => {
  return {movies: state.movies}  
}
export default connect(mapStateToProps, {getMovies})(MovieIndex);