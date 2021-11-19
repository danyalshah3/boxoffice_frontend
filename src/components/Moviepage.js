import {Link} from 'react-router-dom'
import Like from './Like'



export default function MoviePage({id, title, posterImg}){

    return <div className="container-img">
     <Link to={`/movies/${id}`}><img src={posterImg} alt={title}/></Link><br></br>
     <Like/>

     </div>
}