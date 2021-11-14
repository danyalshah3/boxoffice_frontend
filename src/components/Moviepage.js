import {Link} from 'react-router-dom'


export default function MoviePage({id, title, posterImg}){

    // console.log(id)

    return <div className="frontpage">
        <h1>Movies</h1>

     <Link to={`/movies/${id}`}><h1>{title}</h1></Link>
     <Link to={`/movies/${id}`}><img src={posterImg} alt={title}/></Link>

    </div>
}