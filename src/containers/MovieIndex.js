
import {useEffect} from 'react'
import {getMovies} from '../redux/actionCreators'
import {connect} from  'react-redux'
import MoviePage from '../components/Moviepage.js'
import Nav from '../components/Nav'
import  SearchForm  from '../components/SearchForm'
import {useState} from 'react'
import {addTransation} from '../redux/actionCreators'
import background from '../components/Images/78856742.png'




function MovieIndex({getMovies, movies, addTransation}) {

    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [transations, settransations] = useState([])


    const handleClick = (id) => {
        fetch(`http://localhost:3000/movies/${id}`)  
        .then(res => res.json())
        .then(response => {
            const userId1 = parseInt(localStorage.user_id) 
           settransations( addTransation(response.id, userId1))   
        })
    }
    

    const handleChange = (e) => {
      
        setSearchValue(e.target.value)
      };

      useEffect(() => {
        let a = Object.values(movies).map(m => m)
        const results = a.filter(n => n.title.toLowerCase().includes(searchValue)
        );
        getMovies()
        return setSearchResults(results) 
      },[getMovies, searchValue])
    
  
    
    
    return <div className="fullpage" style={{backgroundImage: `url(${background})`}}>
    <Nav/><br></br>
    <br></br>
    <SearchForm handleChange={handleChange}/><br></br>;
    {searchValue.length > 0 ? Object.values(searchResults).map(item => <MoviePage key={item.id} handleClick={handleClick} {...item}/>) : Object.values(movies).map(movie => <MoviePage {...movie} handleClick={handleClick} key={movie.id} />)}
         </div>
 
}

const mapStateToProps = (state) => {
    //  console.log(state)
    return {movies: state.movies}  
}
export default connect(mapStateToProps, {getMovies, addTransation})(MovieIndex);











// import {useEffect} from 'react'
// import {getMovies} from '../redux/actionCreators'
// import {connect} from  'react-redux'
// import MoviePage from '../components/Moviepage.js'
// import Nav from '../components/Nav'
// import  SearchForm  from '../components/SearchForm'
// import {useState} from 'react'
// import {addTransation} from '../redux/actionCreators'
// import background from '../components/Images/78856742.png'


// function MovieIndex({getMovies, movies, addTransation, id}) {

    
//     useEffect(() => getMovies(), [getMovies])

//     const [transations, settransations] = useState([])


//     const handleClick = (id) => {
//         const userId1 = parseInt(localStorage.user_id) 
//         settransations(addTransation(id, userId1))
//     }

    
    
//     return <div className="fullpage" style={{backgroundImage: `url(${background})`}}>
//     <Nav/><br></br>
//     <br></br>
//         <SearchForm movies={movies}/><br></br>
//         {movies.map(movie => <MoviePage {...movie}  key={movie.id} handleClick={handleClick} />)}


//         </div>
 
// }

// const mapStateToProps = (state) => {
//     return {movies: state.movies}  
// }
// export default connect(mapStateToProps, {getMovies, addTransation})(MovieIndex);