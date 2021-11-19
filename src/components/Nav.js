import {NavLink} from 'react-router-dom'
import {connect} from "react-redux"
import { Logout } from '../redux/actionCreators'

    function  Nav({Logout}){
        return <nav className="nav">
           <button className="button"><NavLink  to={`/movies`}><h3>See All Movies</h3></NavLink></button>
           <button className="button"><NavLink to={"/home"}><h3>Home</h3></NavLink></button>
           <button className="button"><NavLink to={"/transations"}><h3>Cart</h3></NavLink></button>
            <button className="button" onClick={Logout}><h3>Logout</h3></button>
            {/* <button><h2>Rent(HD)</h2></button> */}
        </nav>
    }
 
    export default connect(null, {Logout})(Nav)
 
 
       
  
 
 
 