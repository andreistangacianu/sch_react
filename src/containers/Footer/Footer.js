import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>This will be the footer</p>
        <p>
          Contact information:{" "}
          <a href="mailto:someone@example.com">someone@example.com</a>.
        </p>
      </footer>
    );
  }
}

export default Footer;
