import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import { getMovie } from '../redux/actionCreators'
import {addTransation} from '../redux/actionCreators'
import {clearMovie} from '../redux/actionCreators'
import {useEffect} from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
import '../scss/movieshow.scss'


import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FormControlUnstyledContext } from '@mui/material'





function MovieShow({getMovie, title, released, genre, posterImg, imdbRating, runtime, director, writer, actor, plot, language, awards, boxOffice, clearMovie, id}) {

  
    const routeId = useParams().id
    useEffect(() => {
        getMovie(routeId)
        return clearMovie
    }, [getMovie, routeId, clearMovie])

    const spinner = () => <div className="loader"></div>
    const loadedPage = () =>
    <div className="showUs" >
  
      <Nav/>
    <img  className="cover" src={posterImg} alt={title}/><br></br>
    <h1 className="title1">{title}</h1><br></br>
    
     <div className="container">
    <p  className="title2">Date: &nbsp;{released}</p>
    <p  className="genre">Genre: &nbsp;{genre}</p>
    <Typography component="legend" className="title2"><h2>ImdbRating: &nbsp;{imdbRating}</h2></Typography>
    <Rating name="customized-10"  value={imdbRating} max={10} readOnly /><br></br>
    <br></br>
    <h3 className="time">Runtime: &nbsp;{runtime}</h3><br></br>
    <h3 className="director">Director: &nbsp;{director}</h3><br></br>
    <h3 className="writer">Writer: &nbsp;{writer}</h3><br></br>
    <h3  className="actor">Actors: &nbsp;{actor}</h3><br></br>
    <h3 className="plot">Plot: &nbsp;{plot}</h3><br></br>
    <h3 className="language">Language: &nbsp;{language}</h3><br></br>
    <h3  className="awards">Awards: &nbsp;{awards}</h3><br></br>
    <h3  className="">Collection: &nbsp;{boxOffice}</h3><br></br>
    </div>
    

   <br></br>
 
   <span className="arrows">
    <button className="glow-on-hover"><Link to={`/movies/${parseInt(routeId) - 1}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></Link><br></br></button>
    <button className="glow-on-hover"><Link to={`/movies/${parseInt(routeId) + 1}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
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