import React, { Component } from "react";
import styles from "./App.css";
import { TextField, Button } from "react-md";
import birds from "../../assets/birds.jpg";

import GetStarted from "./GetStarted/GetStarted";

export default class App extends Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    console.log(styles.getStartedImg);
    return (
      <div className={styles.front}>
        <div className={styles.getStartedContainer}>
          <div className={styles.account}>
            <div onClick={this.handleSignIn} className={styles.login}>
              Sign In
            </div>/
            <div onClick={this.handleRegister} className={styles.register}>
              REGISTER
            </div>
          </div>
          <div>
            <GetStarted />
          </div>

          <img src={birds} className={styles.getStartedImg} />
        </div>
        <div className={styles.aboutContainer}>About</div>
        <div className={styles.footer}>Footer</div>
      </div>
    );
  }

  handleSignIn = () => {
    console.log("SIgned in");
  };

  handleRegister = () => {
    console.log("registered");
  };
}
