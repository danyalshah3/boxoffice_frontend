
 function SearchForm(props){
     
return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search for a Movie"
        value={props.searchValue}
        onChange={props.handleChange}
      />
    
     </div>
   
  );
}

export default (SearchForm)



