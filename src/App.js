import logo from './logo.svg';
import './App.css';
import MovieIndex from './containers/MovieIndex'
import MovieShow from './components/MovieShow'
import {Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux';

import {useEffect} from 'react'
import {autoLogin} from './redux/actionCreators'
import Home from './components/Home'
import Welcome from './components/Welcome'
import Transations from './containers/Transations'
import {useState} from 'react'




function App({user, autoLogin}) {


//  const [cartItems, setCartItems] = useState([])
  
  useEffect(() => {
    localStorage.token && autoLogin()
  }, [autoLogin])


 
  
  return (
  
    <>
    {user.username ?
      <Switch>
      <Route path="/movies/:id"><MovieShow/></Route>
      <Route path="/movies"><MovieIndex /></Route>
      <Route path="/home"><Home/></Route>
      {/* <Route path="/transations"><Cart/></Route> */}
      </Switch> :
      <Welcome/>
      
    }
    
    
     </>
    
     
    
  );
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps, {autoLogin})(App);
