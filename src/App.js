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
 import { clearUser } from './redux/actionCreators';
 
import Logout from './components/Logout';
//  import {Nav} from './components/Nav'
// import {Nav2} from './components/Nav'


function App({user, autoLogin, clearUser}) {
  
  useEffect(() => {
    localStorage.token && autoLogin()
    return clearUser
  }, [autoLogin, clearUser])
  
  // console.log(clearUser)

//    useEffect(() => {
//     getMovie(routeId)
//     return clearMovie
// }, [getMovie, routeId, clearMovie])
  // console.log(localStorage.token)
  return (
    <>
    {user.username ?
      <Switch>
      <Route path="/movies/:id"><MovieShow/></Route>
      <Route path="/movies"><MovieIndex /></Route>
      <Route path="/Home"><Home/></Route>
      <Route path="/"><Welcome/></Route>
      </Switch> :
      <Welcome/>
    }
    
     </>

     
    
  );
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps, {autoLogin, clearUser})(App);
