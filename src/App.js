import logo from './logo.svg';
import './App.css';
import MovieIndex from './containers/MovieIndex'
import MovieShow from './components/MovieShow'
import {Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import Auth from './components/Auth'
import {useEffect} from 'react'
import {autoLogin} from './redux/actionCreators'
import Home from './components/Home'
// import Logout from './components/Logout';
// import Nav from './components/Nav'


function App({user}) {
  
  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  // console.log(localStorage.token)
  return (
    <>
    {user.username ?
      <Switch>
        <Logout/>
      <Route path="/movies/:id"><MovieShow/></Route>
      <Route path="/movies"><MovieIndex /></Route>
      <Route exact path="/"><Home/></Route>
      </Switch> :
      <Auth/>
    }
    
     </>
    
  );
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps, {autoLogin})(App);
