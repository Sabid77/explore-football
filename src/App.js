import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Components/Details/Details';



function App() {
  return (
    <>
      <div className="body">        
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details:teamId">
              <Details />
            </Route>
          </Switch>
        </Router>
      </div>

    </>
  );
}

export default App;