import {useState} from 'react'
import { useEffect } from 'react';
// import {connect} from 'react-redux'
// import {getMovies} from '../redux/actionCreators'


 function SearchForm({movies}){
    //   console.log(movies)
     
     
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
      
      setSearchValue(e.target.value)
    };

//     return (
//           <div className="Search">
//             <input
//               type="text"
//               placeholder="Search for a Movie"
//               value={searchValue}
//               onChange={handleChange}
//               />
            


//             {Object.values(movies).filter((movies) => {
              
              
//             })
//     )
//  </div>
    
    

    useEffect(() => {
    let a = Object.values(movies).map(m => m)
    const results = a.filter(n => n.title.toLowerCase().includes(searchValue)
    );
    setSearchResults(results)
  },[searchValue])

     


return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search for a Movie"
        value={searchValue}
        onChange={handleChange}
      />
    <ul>
       {Object.values(searchResults).map(item => (
        // console.log(item)
        <li key={item.id}> {item.title} </li>
      
       ))
      }
        
        
        </ul>
     </div>
   
  );
}




export default (SearchForm)