import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createSession } from "../../actions/app";
import "./Login.css";

const style = {
  submitButton: {
    color: "#049fd9"
  },
  submitBtnLabel: {
    fontFamily: "Lato",
    fontSize: "14px"
  },
  placeholder: {
    fontFamily: "Lato",
    fontSize: "16px"
  }
};

const mapStateToProps = state => {
  return { token: state.authToken };
};

const mapDispatchToProps = dispatch => {
  return {
    onSuccessfullRegister: token => {
      dispatch(createSession(token));
    }
  };
};

class LoginContainer extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div className="register__container">
        <div>Sign in to this awesome website</div>
        <TextField
          hintText="Username"
          floatingLabelText="Username"
          onChange={this.handleUsernameChange}
          style={style.placeholder}
          fullWidth={true}
        />
        <br />
        <br />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          onChange={this.handlePasswordChange}
          errorText={this.state.passError}
          style={style.placeholder}
          fullWidth={true}
        />
        <br />
        <br />
        <RaisedButton
          label="Sign In"
          style={style.submitButton}
          disableTouchRipple={true}
          onClick={this.handleClick}
          fullWidth={true}
          backgroundColor="#049fd9"
          labelColor="#ffffff"
          labelStyle={style.submitBtnLabel}
        />
      </div>
    );
  }

  handleClick = () => {
    // submit a request to the server to create the account
    const { username, password, passwordConfirm } = this.state;
    const { onSuccessfullRegister } = this.props;

    // TODO REPLACE THESE WITH THE UTILS METHOD
    fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        // If the user has been created - render the dashboard page and set cookies
        if (response && response.auth) {
          onSuccessfullRegister(response.token);

          // Redirect to dashboard
          this.props.history.push("/dashboard");
        }
        // else throw an error
      })
      .catch(function(err) {
        // Error :(
        console.log(err);
      });
  };

  handleUsernameChange = (event, value) => {
    this.setState({
      username: value
    });
  };

  handlePasswordChange = (event, value) => {
    this.setState({
      password: value
    });
  };
}
const Login = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
);

export default Login;
