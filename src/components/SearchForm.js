import {useState} from 'react'
import { useEffect } from 'react';
import MovieShow from './MovieShow';
// import {connect} from 'react-redux'
// import {getMovies} from '../redux/actionCreators'


 function SearchForm({movies}){
    //   console.log(movies)
     
     
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // const [searchResults, setSearchResults] = useState([]);

    // const handleChange = event => {
    //     setSearchTerm(event.target.value);
    //   };
 
    //     useEffect(() => {
    //         const results = Object.values(movies).filter(movie => {
    //             console.log(movie)
    //           movie.title.toLowerCase().includes(searchTerm)
    //     });
    //         setSearchResults(results);
    //     }, [searchTerm]);
    const handleChange = (e) => {
      
      setSearchValue(e.target.value)
    };

    useEffect(() => {
    let a = Object.values(movies).map(m => m)
       const results = a.filter(n => n.title.toLowerCase().includes(searchValue)
       );
      setSearchResults(results)
    console.log(results)
    //  movies.map(m => m.filter(n => console.log(n)))
    },[searchValue])

     
//      const onSubmit = (e) => {
//          e.preventDefault();
//         // console.log(e)
// //   settitle(props.movies.filter(movie=> movie.toLowerCase().includes(e.target.value.toLowerCase())))
// }

// const searchResultsMapped = searchResults.map(result => {
 
//    <div key={result.id}>
    
//       <div>{result.title}</div>
//       </div>
// })
      

return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search for a Movie"
        value={searchValue}
        onChange={handleChange}
      />
    {/* {Object.values(movies).map(m => m).filter(n => n.title.toLowerCase().includes(n.title.toLowerCase()))} */}
    <ul>
        {searchResults.map((item,index) => (
          <li key={index}>{item.title}</li>
 ))}
      </ul>
    </div>
  );

    // return <form onSubmit={onSubmit}>
    //     <label>
    //         Search by Title:
    //         <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Avengers etc"/>
    //     </label>
    //     <input type="submit" value="Search for a Movie" />
    //     </form>
}

export default (SearchForm)