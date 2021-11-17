import {NavLink} from 'react-router-dom'

    export const Nav = () => {
        return <nav className="nav">
           <button className="button"><NavLink  to={`/movies`}><h3>See All Movies</h3></NavLink></button>
        </nav>
    }
 
 <br></br>

    export const Nav2 = () => {
        return <nav className="nav2">
           <button className="button"><NavLink to={"/home"}><h3>Home</h3></NavLink></button>
           <button className="button"><NavLink to={"/transations"}><h3>Cart</h3></NavLink></button>
        </nav>
       
       {/* <button className="button"><NavLink to={"/"}><h3>Logout</h3></NavLink></button> */}
    }
 

    export const Nav3 = () => {

        return <nav>
             <button><NavLink to="/transations"><h2>Rent(HD)</h2></NavLink></button>
        </nav>
    }
 
 
 