import {Link} from 'react-router-dom'
import '../scss/movie.scss'
import * as React from 'react';




export default function MoviePage({id, posterImg, title}){

      
    return <div className="movie-desc">
     <div className="container-img">
    <div  className="info_section">
    <div className="movie-header">
    <div className="ui three column grid">
        <div className="link">
     <Link to={`/movies/${id}`}><img className="locandina" src={posterImg}  alt={title}/><br></br></Link>
     
    </div>
     </div>
     </div>
     </div>
     </div>
     </div>
    
   
}
