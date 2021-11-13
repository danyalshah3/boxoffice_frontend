import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMovie} from '../redux/actionCreators'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'

function MovieShow({getMovie, title, released, genre, posterImg, imdbRating, runtime, director, writer, actor, plot, language, awards, boxOffice, trailer}) {

    const routeId = useParams().id
    // const  url = `http://localhost:3000/movies/${routeId}`
    // console.log(props)
    useEffect(() => {
        getMovie(routeId)
    }, [getMovie, routeId])

return <div className="showUS">
    <h1>Show</h1>
    <Link to={`/movies`}>See All Movies</Link>
    <h1>{title}</h1>
    <p>Date: {released}</p>
    <p>Genre: {genre}</p>
    <img src={posterImg} alt={title}/>
    <p>ImdbRating: {imdbRating}</p>
    <p>Runtime: {runtime}</p>
    <p>Director: {director}</p>
    <p>Writer: {writer}</p>
    <p>Actors: {actor}</p>
    <p>Plot: {plot}</p>
    <p>Language: {language}</p>
    <p>Awards: {awards}</p>
    <p>Collection: {boxOffice}</p>
    <p>Trailer: {trailer}</p>

   <span className="arrows">
    <Link to={`/movies/${parseInt(routeId) - 1}`}>🔙</Link>
    <Link to={`/movies/${parseInt(routeId) + 1}`}>⏭</Link>

    </span>
    </div>


}

const mapStateToProps = (state) => {
    return {...state.selectedMovie}
}

export default connect(mapStateToProps, {getMovie})(MovieShow);