
function TransationsDisplay(props) {

   
    return ( <div className="movie-desc">
          <div className="container-img">
          <div  className="info_section">
          <div className="movie-header">
          <div className="ui three column grid">
          <div className="link">

   <img className="locandina"  src={props.movie.poster_img} alt={props.movie.title}/> 
   <button className="glow-on-hover"><a href={props.movie.trailer}>Watch Here</a></button>
   < button className="glow-on-hover" onClick={() => props.deleteTrans(props.id)}>Return Your Rental</button>
    
           </div>     
        </div>
       </div>
     </div>
   </div>
 </div>
    )}

export default TransationsDisplay;

  
    
    
    
    
    








// console.log(props.id)
// console.log(props.t)
// console.log(transations)

// props.t.filter(ta => ta.id !== props.id)
// settransations(Object.values(props)
// p.filter(transation => {
//     console.log(transation)
    
// }))