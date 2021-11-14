import {NavLink} from 'react-router-dom'


function Nav() {
   return <nav className="seeall">
       <button> <NavLink to={`/movies`}>See All Movies</NavLink></button>
    </nav>
}

export default Nav