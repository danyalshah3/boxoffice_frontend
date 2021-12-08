
function TransationsDisplay(props) {
  // console.log(props)

  return  <div className="movie-desc">
            <div className="container-img">
              <div  className="info_section">
                <div className="movie-header">
                  <div className="ui three column grid">
                    <div className="link">

                      <img className="locandina"  src={props.movie.poster_img} alt={props.movie.title}/> 
                      <h4>{props.movie.title}</h4>
                      <button className="glow-on-hover"><a href={props.movie.trailer}>Watch Here</a></button>
                      < button className="glow-on-hover" onClick={() => props.deleteTrans(props.id)}>Return Your Rental</button>
                
    
                    </div>     
                  </div>
                </div>
              </div>
            </div>
          </div>
}

export default TransationsDisplay;


  
    
    
    
    
    







