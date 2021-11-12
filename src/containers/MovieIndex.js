import {useEffect} from 'react'
import {getMovies} from '../redux/actionCreators'
import {connect} from  'react-redux'

// function MovieIndex({getMovies, movies}) {


//     useEffect(() => movies.length === 0 && getMovies(), [movies])
//     // console.log(props.movies)

//     return <h1> Movies go here </h1>

    


// }

const mapStateToProps = (state) => {
  return {movies: state.movies}  
}
export default connect(mapStateToProps, {getMovies})(MovieIndex);