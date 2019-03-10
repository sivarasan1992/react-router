import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeComponent from './Components/Home';
import AboutComponent from './Components/About';
import TeamComponent from './Components/Team';
import HeaderComponent from './Components/Header';
import NotFoundComponent from './Components/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <HeaderComponent />
        <Switch>
        <Route exact path='/' component={HomeComponent}/>
        <Route exact path='/about' component={AboutComponent}/>
        <Route exact path='/team' component={TeamComponent}/>
        <Route component={NotFoundComponent}/>
        </Switch>
        
        </div>
      </Router>
    );
  }
}

export default App;
