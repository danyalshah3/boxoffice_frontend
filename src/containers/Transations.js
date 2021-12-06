
import TransationDisplay from "../components/TransationDisplay";
import Nav from '../components/Nav'
import { useState } from "react";
import {connect} from 'react-redux'
import {deleteTransation} from '../redux/actionCreators';
// import reportWebVitals from "../reportWebVitals";




function Transations({user, deleteTransation}){

    const [transations, setTransations] = useState([])

   
    const deleteTrans = (id) => {
        setTransations( deleteTransation(id))
    }
   
    return <div className="transations">
        <Nav/>
    {user.transations.map(transation => <TransationDisplay  deleteTrans={deleteTrans} {...transation} array={user.transations} key={transation.id}/>)}

    </div>
}

export default connect(null, {deleteTransation})(Transations);








