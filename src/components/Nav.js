import {NavLink} from 'react-router-dom'
import Logout from './Logout'


export const Nav = () => {
    return <nav className="seeall">
        <button> <NavLink to={`/movies`}>See All Movies</NavLink></button>
     </nav>
 }
 
 <br></br>

 export const Nav2 = () => {
 return <nav className="others">
 <button><NavLink to={"/Home"}><h3>Home</h3></NavLink></button>
 {/* <Logout/> */}
 <button><NavLink to={"/"}><h3>Logout</h3></NavLink></button>
 </nav>
 }
 
 
 
 // export default Nav
 
// function Nav() {
//    return <nav className="seeall">
//        <button><NavLink to={`/movies`}>See All Movies</NavLink></button>
//        <button><NavLink to={"/Home"}><h3>Home</h3></NavLink></button>
//     </nav>