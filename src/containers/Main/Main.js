import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Register from "../../containers/Register/Register";
import Login from "../../containers/Login/Login";
import Dashboard from "../../containers/Dashboard/Dashboard";
import About from "../../containers/About/About";
import Landing from "../../containers/Landing/Landing";
import Survey from "../../containers/Survey/Survey";

import "./Main.css";

const mapStateToProps = state => {
  return {
    session: state.session
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

class MainContainer extends Component {
  render() {
    const isLoggedIn = true;

    return (
      <div className="content__container">
        {isLoggedIn ? (
          <div className="side__content_menu">
            <div className="side__content_logo">
              <img
                src="http://localhost:3000/080f96ab0649b4f8de3c0531fc00e266.png"
                width="59"
                height="32"
              />
            </div>
            <nav className="side__content_Main_menu">
              <ul className="side__content_Main_menu_list">
                <li class="side__content_Main_menu_list_item">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li class="Menu__main-item___1z8BY">
                  <Link to="/surveys">My Surveys</Link>
                </li>
                <li class="Menu__main-item___1z8BY">
                  <Link to="/surveys">My Patients</Link>
                </li>
                <li class="Menu__main-item___1z8BY">
                  <Link to="/surveys">Results</Link>
                </li>
              </ul>
            </nav>
          </div>
        ) : null}
        <div className="not__logged_in_content">
          <Route path="/" exact component={Landing} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/about" exact component={About} />
        </div>
        <div className="logged__in_content">
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/surveys" exact component={Survey} />
          <Route path="/Results" exact component={About} />
        </div>
      </div>
    );
  }
}

const Main = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainContainer)
);
export default Main;
