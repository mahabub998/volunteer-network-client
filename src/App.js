import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvents from "./Components/AddEvents/AddEvents";
import Home from './Components/Home/Home';



function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link  to="/">Home</Link>
          </li>
          <li>
            <Link  to="/add-events">AddEvent</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/add-events">
         <AddEvents />
        </Route>
        <Route path="/dashboard">
         
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
