import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./containers/Footer/Footer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    session: state.session
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

class AppContainer extends Component {
  render() {
    const isLoggedIn = true;

    return (
      <Router>
        <div className="main__container">
          {!isLoggedIn ? <Header /> : null}
          <Main />
          {!isLoggedIn ? <Footer /> : null}
        </div>
      </Router>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
export default App;
