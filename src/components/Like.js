import { useState } from 'react'
import {connect} from 'react-redux'
// import {like} from '/redux/actionCreators'
// import {useParams} from 'react-router-dom'
function Like({likes, like}) {


  // const [like, setLike] = useState(false)
   const [dislike, setDislike] = useState(false)
 

    return <div>
      <h3>{likes} like</h3>
        <button onClick={dislike}>Dislike <span role="img" aria-label="thumbs down">👎</span></button>
       <button onClick={like}> Like<span role="img" aria-label="thumbs up">👍</span></button>
     </div>
    
}

const mapStateToProps = (state) => {
  return {likes: state.likes}
}



export default connect(mapStateToProps)(Like);

