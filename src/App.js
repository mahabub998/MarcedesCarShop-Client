import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddEvents from "./Components/Shared/Pages/AddEvents/AddEvents";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navber"
import EventDetails from "./Components/Home/EventDetails/EventDetails";
function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
        <Route  path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
          <Route path="/AddEvents">
          <AddEvents />
          </Route>
         
          <Route path="/events/:productId">
          <EventDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
