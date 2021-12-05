
import TransationDisplay from "../components/TransationDisplay";
import Nav from '../components/Nav'
import { useState } from "react";
import {connect} from 'react-redux'
import { addTransation } from "../redux/actionCreators";
// import {useEffect} from 'react'
 import {deleteTransation} from '../redux/actionCreators';
import reportWebVitals from "../reportWebVitals";
// import deleteTransation from 




function Transations({user}){
    //  console.log(user)

    const [transations, settransations] = useState(user.transations)
//    console.log(transations)
    // const [transactions]
    // const arr = [];
    // user.transations.map(t => arr.push(t.id));

    // const handleClick = (id) => {
    //     fetch(`http://localhost:3000/movies/${id}`)  
    //     .then(res => res.json())
    //     .then(response => {
    //         console.log(response)
    //         console.log(transations)
    //         const userId1 = parseInt(localStorage.user_id)
             
    //         settransations([...transations, addTransation(response.id, userId1)])
    //     })
        
    // }
   
    const deleteTrans = (id) => {
    //    fetch(`http://localhost:3000/transations/${id}`, {
    //         method: 'DELETE',
    //     }).then(() => {
            //console.log(id)
            
            //console.log(transations)
            //settransations(Object.values((transations)).filter(n => n.id !== id))
        // })
        console.log(transations)
        settransations(deleteTransation(id))
        // settransations(Object.values((transations)).filter(n => n.id !== id))
        console.log(transations)
}

        
        // console.log(transations)
        // settransations(transations.filter(transation =>   transation.id !== transation.movie.id))
    

        // const deleteTrans = (e) => {
        //     props.actions.deleteTrans(state.tran)
        // }

    //    e.preventDefault();
    //    settransations(...transations, deleteTransation)
    //    const movie = e.target.getAttribute("transation")
    //    console.log(transations)
    //    console.log(transations)
        //    transation.id !== transation))
     
    // console.log(transations)
    //     console.log(res)
        // console.log(id)
        // console.log(arr)
        // console.log(user.transations)
        // console.log()

        // settransations(arr.filter(trans => trans !== id))
        // settransations(arr.filter(t => t !== id))
        // settransations(arr.filter(transation => transation !== id))
        // console.log(user.transations.filter(trans => trans.id !== id)
        // settransations(user.transations.filter(trans => trans.id !== id))

    

    // settransations([...transations, props.array.filter(transation => transation.id !== transation.movie.id)])

   
    // const handleClick = () => {
        
    //     fetch(`http://localhost:3000/movies/${id}`)  
    //     .then(res => res.json())
    //     .then(response => {
    //         //   console.log(response)
    //         const userId1 = parseInt(localStorage.user_id)
    //         console.log(transations)
    //         settransations([...transations, addTransation(response.id, userId1)])
            
    //     })

    
    return <div className="transations">
        <Nav/>
    {user.transations.map(transation => <TransationDisplay  deleteTrans={deleteTrans} {...transation} array={user.transations} key={transation.id}/>)}
   
    </div>
    

}


// deleteTrans={deleteTrans}

export default connect(null, {deleteTransation})(Transations);











// import React, { Component } from 'react';
// import TransationsDisplay from '../components/TransationDisplay';


// export default class Transations extends Component {

//     state = {
//         moviesThatTheUserHas: []
//     }

//     componentWillMount(){
//         // console.log("hello")
//         fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//         .then(r => r.json())
//         .then(res => {
//             console.log(res)
//             // this.setState({
//             //     moviesThatTheUserHas: res.transactions
//             // })
//       })
//     }
    

//     render() {
//         const moviesThatTheUserHas = this.state.moviesThatTheUserHas.map(item => <TransationsDisplay item={item} key={item.id}/>)
//         console.log(this.state)
//         return (
//             <div>
//                 {moviesThatTheUserHas}
//                 </div>
//         )}        
// } 

