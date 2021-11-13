import {NavLink} from 'react-router-dom'


function Nav() {
   return <nav className="seeall">
        <NavLink to={`/movies`}>See All Movies</NavLink>
    </nav>
}

export default Nav