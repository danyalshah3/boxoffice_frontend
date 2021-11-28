import {useState} from 'react'


function TransationsDisplay(props) {
     console.log(props)

    const [transations, settransations] = useState([])

const handleClick = (id) => {
    fetch(`http://localhost:3000/transations/${id}`, {
        method: 'DELETE',
    })
    // let updated = _.filter(id ==! props.movie.id)
    .then(settransations)
    


}


    return <div className="cart-display">
    <img src={props.movie.poster_img} alt={props.movie.title}/> 
   {/* <a src={props.movie.trailer}></a> */}
  {/* <button onClick={() => handleClick()}>Watch Here</button>   */}
    <div>
     <button>Click here</button>
    </div>
    <button onClick={() => handleClick(props.id)}>DELETE</button>
    </div>
    // <video src={props.movie.trailer}></video> : <p>Nothing</p>}

}

export default TransationsDisplay;