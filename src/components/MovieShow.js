import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMovie} from '../redux/actionCreators'
import {clearMovie} from '../redux/actionCreators'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Nav} from './Nav'
import {Nav2} from './Nav'
// import {Nav2} from './Nav'


function MovieShow({getMovie, title, released, genre, posterImg, imdbRating, runtime, director, writer, actor, plot, language, awards, boxOffice, trailer, clearMovie, id}) {

    const routeId = useParams().id
    // const  url = `http://localhost:3000/movies/${routeId}`
    // console.log(props)
    useEffect(() => {
        getMovie(routeId)
        return clearMovie
    }, [getMovie, routeId, clearMovie])

    const spinner = () => <div className="loader"></div>
    const loadedPage = () =>
    <div className="showUS">
    <Nav/>
    <Nav2/>
   
    <h1 className="title">{title}</h1>
    <p  className="date">Date: {released}</p>
    <p  className="genre">Genre: {genre}</p>
    <img  className="img" src={posterImg} alt={title}/>
    <p  className="rating">ImdbRating: {imdbRating}</p>
    <p  className="time">Runtime: {runtime}</p>
    <p className="director">Director: {director}</p>
    <p className="writer">Writer: {writer}</p>
    <p  className="actor">Actors: {actor}</p>
    <p  className="plot">Plot: {plot}</p>
    <p  className="language">Language: {language}</p>
    <p  className="awards">Awards: {awards}</p>
    <p  className="collection">Collection: {boxOffice}</p>
    {/* <iframe src={trailer} name="iframe_a" height="300px" width="100%" title="trailer">Watch trailer Here</iframe> */}
<p className="innerimg"><a href={trailer} target="blank">Watch trailer Here</a></p>

   



   <span className="arrows">
    <Link to={`/movies/${parseInt(routeId) - 1}`}>Previous🔙</Link><br></br>
    <Link to={`/movies/${parseInt(routeId) + 1}`}>Next Movie⏭</Link>

    </span>
    </div>
return id ? loadedPage() : spinner()
}

const mapStateToProps = (state) => {
    return {...state.selectedMovie}
}

export default connect(mapStateToProps, {getMovie, clearMovie})(MovieShow);