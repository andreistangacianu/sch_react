import React, { Component } from "react";
import styles from "./App.css";
import { TextField, Button } from "react-md";
import birds from "../../assets/birds.jpg";

import GetStarted from "./GetStarted/GetStarted";
import Header from "../Header";

const menuItems = [
  {
    name: "Home",
    onClick: () => {
      console.log("clicking SIGN IN");
    }
  },
  {
    name: "About",
    onClick: () => {
      console.log("clicking SIGN IN");
    }
  },
  {
    name: "Sign In",
    onClick: () => {
      console.log("clicking SIGN IN");
    },
    main: true
  },
  {
    name: "Register",
    onClick: () => {
      console.log("REGISTER");
    },
    main: true,
    marked: true
  }
];
export default class App extends Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    console.log(styles.getStartedImg);
    return (
      <div className={styles.front}>
        <Header loggedIn={false} items={menuItems} />
        <div className={styles.getStartedContainer}>
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
