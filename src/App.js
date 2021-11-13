import logo from './logo.svg';
import './App.css';
import MovieIndex from './containers/MovieIndex'
import MovieShow from './components/MovieShow'
import {Switch, Route} from 'react-router-dom'
// import Nav from './components/Nav'


function App() {
  return (
    <>
 <h1>Movies</h1>

    <Switch>
      <Route path="/movies/:id"><MovieShow/></Route>
    <Route path="/movies"><MovieIndex /></Route>
      </Switch>
     </>
  );
}

export default App;
