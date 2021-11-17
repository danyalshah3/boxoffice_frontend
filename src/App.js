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
import Cart from './components/Cart'
 
import Logout from './components/Logout';


function App({user, autoLogin}) {
  
  useEffect(() => {
    localStorage.token && autoLogin()
    // return Logout
  }, [autoLogin])
  
  return (
    <>
    {user.username ?
      <Switch>
      <Route path="/movies/:id"><MovieShow/></Route>
      <Route path="/movies"><MovieIndex /></Route>
      <Route path="/home"><Home/></Route>
      <Route path="transations"><Cart/></Route>
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
