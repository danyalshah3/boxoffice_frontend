import {Link} from 'react-router-dom'


export default function MoviePage({id, title, posterImg, imdbRating, runtime}){

    // console.log(id)

    return <div className="frontpage">
     <Link to={`/movies/${id}`}><h1>{title}</h1></Link>
     <Link to={`/movies/${id}`}><img src={posterImg} alt={title}/></Link>

    </div>
}