import logo from './logo.svg';
import './App.css';
import MovieIndex from './containers/MovieIndex'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <>
 <h1>Movies</h1>
    <Switch>
      <Route path="/restaurants/:id"></Route>
    <Route path="/movies"><MovieIndex /></Route>
      </Switch>
     </>
  );
}

export default App;
