import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeComponent from "./Components/Home";
import AboutComponent from "./Components/About";
import TeamComponent from "./Components/Team";
import HeaderComponent from "./Components/Header";
import NotFoundComponent from "./Components/NotFound";
import rotateAction from "./actions/rotateAction";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderComponent />
          <div className="img">
          <img
            src={logo}
            className={
              "App-logo" + (this.props.rotating ? "" : " App-logo-paused")
            }
            alt="logo"
            onClick={() => this.props.rotateAction(!this.props.rotating)}
          />
          </div>
          
          <div className="MainWrapper">
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/about" component={AboutComponent} />
              <Route exact path="/team" component={TeamComponent} />
              <Route component={NotFoundComponent} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  rotateAction: payload => dispatch(rotateAction(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
