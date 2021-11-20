import {Link} from 'react-router-dom'
// import Like from './Like'



export default function MoviePage({id, posterImg, title}){
      
    return <div className="container-img" >
     <Link to={`/movies/${id}`}><img src={posterImg}  alt={title}/></Link><button>Rent(HD)</button><br></br>
     

     </div>
}
