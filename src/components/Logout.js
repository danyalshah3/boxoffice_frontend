import { useHistory } from "react-router";
import {connect} from 'react-redux'

function Logout() {

const history = useHistory()
   const logout = () => {
    localStorage.removeItem({});
     history.push("sessions")

   }


   return <button onClick={logout}>Log Out</button>
}

export default connect(null, )(Logout)