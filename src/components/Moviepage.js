export default function MoviePage({title, posterImg, imdbRating, runtime}){

    return <div className="frontpage">
     <h1>{title}</h1>
     <img src={posterImg} alt={title}/>
     <p>{imdbRating}</p>
     <p>{runtime}</p>

    </div>
}