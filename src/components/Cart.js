// import {useEffect} from 'react'
// import CartDisplay from './Cartdisplay'

// import { fillCart } from '../redux/actionCreators'


// function Cart({props}) {

//     useEffect(() => props.fillCart(), [fillCart])
//       console.log(props.fillCart())
//     return  <div className="Cart">
 
//    {props.myCart.map(item => <CartDisplay {...item} key={item.id}/>)}
//    <button onClick={}></button>

//   </div>


// }

// const mapStateToProps = (state) => {
//   return {...state.myCart}
// }

// export default connect(mapStateToProps, {fillCart}) (Cart);
import React, { Component } from 'react';
import { connect } from 'react-redux';


 class Cart extends Component {

    state = {
        myCart: []
    }

  
    handleClick = (props) => {
    // e.preventDefault();
     console.log(props)
}


render () {
    // console.log(props)
    return (

<button onClick={() => this.handleClick()}></button>
        
        
    )

}


}

const mapStateToProps = (state) => {
  return {myCart: state.myCart}  
}

export default connect(mapStateToProps)(Cart)