
import TransationDisplay from "../components/TransationDisplay";
import Nav from '../components/Nav'





function Transations(props){
   
    
    return <div className="transations">
        <Nav/>
    {props.transations.transations.map(transation => <TransationDisplay  {...transation} key={transation.id}/>)}
    </div>

}



export default Transations;











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

