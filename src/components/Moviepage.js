import {Link} from 'react-router-dom'



export default function MoviePage({id, title, posterImg}){

    return <div className="container-img">
     <Link to={`/movies/${id}`}><img src={posterImg} alt={title}/></Link>
     </div>
}