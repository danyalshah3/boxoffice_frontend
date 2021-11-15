import {Link} from 'react-router-dom'
// import {movie} from './movie.scss'


export default function MoviePage({id, title, posterImg}){

    return <div className="container-fluid">
     {/* <Link to={`/movies/${id}`}><h2>{title}</h2></Link> */}
     {/* <div className="img"> */}
     <Link to={`/movies/${id}`}><img src={posterImg} alt={title}/></Link>
     </div>
    // </div>
}