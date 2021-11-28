import {useState} from 'react'
import '../scss/movie.scss'

function TransationsDisplay(props) {
     console.log(props)

    const [transations, settransations] = useState([])

const handleClick = (id) => {
    fetch(`http://localhost:3000/transations/${id}`, {
        method: 'DELETE',
    })
    // let updated = _.filter(id ==! props.movie.id)
    .then(settransations)
    


}


    return <div className="movie-desc">
           <div className="container-img">
           <div  className="info_section">
           <div className="movie-header">
           <div className="ui three column grid">
           <div className="link">

    <img className="locandina"  src={props.movie.poster_img} alt={props.movie.title}/> 
    <button className="glow-on-hover"><a href={props.movie.trailer}>Watch Here</a></button>
    <button className="glow-on-hover" onClick={() => handleClick(props.id)}>Return Your Rental</button>
            </div>     
         </div>
        </div>
      </div>
    </div>
  </div>


}

export default TransationsDisplay;