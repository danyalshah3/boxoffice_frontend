import {useEffect} from 'react'
import CartDisplay from './Cartdisplay'
import {connect} from 'react-redux'
import { fillCart } from '../redux/actionCreators'


function Cart({props}) {

    useEffect(() => props.fillCart(), [fillCart])
      console.log(props.myCart)
    return  <div className="Cart">
 
   {props.myCart.map(item => <CartDisplay {...item} key={item.id}/>)}

  </div>


}

const mapStateToProps = (state) => {
  return {...state.myCart}
}

export default connect(mapStateToProps, {fillCart}) (Cart);