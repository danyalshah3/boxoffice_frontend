  import { useHistory } from "react-router";
// import { useImperativeHandle } from 'react';
// import {connect} from 'react-redux'
// import {clearUser} from '../redux/actionCreators'



function Logout () {

     const history =  useHistory()

     const handleClick = () => {
         localStorage.clear();
         history.push("/")
         
     }
    
    
    
    return <button onClick={handleClick()}>Log Out</button>
}




// logout() {
//     localStorage.clear();
// }
export default Logout