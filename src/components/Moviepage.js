import {Link} from 'react-router-dom'
import '../scss/movie.scss'
import * as React from 'react';
import { useState } from 'react';
import background from './Images/78856742.png'
// import { addTransation } from '../redux/actionCreators';
// import { connect } from 'react-redux';





function MoviePage({id, posterImg, title, handleClick}){

      
    return <div className="movie-desc" >
     <div className="container-img" >
    <div  className="info_section">
    <div className="movie-header" >
    <div className="ui three column grid"  >
        <div className="link" >
     <Link to={`/movies/${id}`}><img className="locandina" src={posterImg}  alt={title}/><br></br></Link>
     <button className="glow-on-hover"  onClick={() => handleClick(id)}>Rent(HD)</button>
     <h4>{title}</h4>





     
    </div>
     </div>
     </div>
     </div>
     </div>
     </div>
    
   
}

export default (MoviePage)

