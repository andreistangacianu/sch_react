import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { createSession } from "../../actions/app";
import "./theme.css";

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

class RegisterContainer extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirm: ""
  };

  render() {
    return (
      <div className="register__container">
        <div>
          just some text here and there just some text here and there just some
          text here and there just some text here and there
        </div>
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
        <TextField
          hintText="Confirm Password"
          floatingLabelText="Confirm Password"
          type="password"
          onChange={this.handlePasswordConfirmChange}
          errorText={this.state.confirmPassError}
          style={style.placeholder}
          fullWidth={true}
        />
        <br />
        <br />
        <RaisedButton
          label="Create My Account"
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

    // Check if passwords match
    if (password !== passwordConfirm) {
      return this.setState({
        confirmPassError: "Passwords do not match",
        passError: "Passwords do not match"
      });
    }

    fetch("http://localhost:8080/api/v1/auth/register", {
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
        if (response && response.token) {
          onSuccessfullRegister(response.token);
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

  handlePasswordConfirmChange = (event, value) => {
    this.setState({
      passwordConfirm: value
    });
  };
}
const Register = connect(mapStateToProps, mapDispatchToProps)(
  RegisterContainer
);
export default Register;
