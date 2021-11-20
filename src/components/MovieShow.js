import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMovie} from '../redux/actionCreators'
import {clearMovie} from '../redux/actionCreators'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';




function MovieShow({getMovie, title, released, genre, posterImg, imdbRating, runtime, director, writer, actor, plot, language, awards, boxOffice, trailer, clearMovie, id}) {

  
    const routeId = useParams().id
    useEffect(() => {
        getMovie(routeId)
        return clearMovie
    }, [getMovie, routeId, clearMovie])

    const spinner = () => <div className="loader"></div>
    const loadedPage = () =>
    <div className="showUS">
    <Nav/>
  
   
    <h1 className="title">{title}</h1>
    <p  className="date">Date: {released}</p>
    <p  className="genre">Genre: {genre}</p>
    <img  className="img" src={posterImg} alt={title}/>
    <Typography component="legend">ImdbRating: {imdbRating}</Typography>
    <Rating name="customized-10"  value={imdbRating}  max={10} readOnly />
    <p  className="time">Runtime: {runtime}</p>
    <p className="director">Director: {director}</p>
    <p className="writer">Writer: {writer}</p>
    <p  className="actor">Actors: {actor}</p>
    <p  className="plot">Plot: {plot}</p>
    <p  className="language">Language: {language}</p>
    <p  className="awards">Awards: {awards}</p>
    <p  className="collection">Collection: {boxOffice}</p>
  <p><a href={trailer} target="blank">Watch trailer Here</a></p>
     
     

    {/* <Nav3/> */}
  {/* <Cart/> */}
   



   <span className="arrows">
    <button><Link to={`/movies/${parseInt(routeId) - 1}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></Link><br></br></button>
    <button><Link to={`/movies/${parseInt(routeId) + 1}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></Link></button>

    </span>
    </div>
return id ? loadedPage() : spinner()
}

const mapStateToProps = (state) => {
    return {...state.selectedMovie}
}

export default connect(mapStateToProps, {getMovie, clearMovie})(MovieShow);