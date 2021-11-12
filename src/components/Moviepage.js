export default function MoviePage({title, poster_img, imdb_rating, runtime}){

    return <div className="frontpage">
     <h1>{title}</h1>
     <img src={poster_img} />
     <p>{imdb_rating}</p>
     <p>{runtime}</p>

    </div>
}