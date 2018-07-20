import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Button.css";

class Button extends Component {
  render() {
    const {
      // theme,
      secondary,
      // whiteFill,
      size,
      // disabled,
      // missing,
      onClick,
      children
    } = this.props;
    const classesPrimary = "button primary " + `size_${size}`;
    const classesSecondary = "button secondary " + `size_${size}`;
    const classes = !secondary ? classesPrimary : classesSecondary;

    return (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  // theme: PropTypes.object.isRequired,
  secondary: PropTypes.bool,
  // whiteFill: PropTypes.bool,
  // disabled: PropTypes.bool,
  // missing: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.oneOf(["normal", "compact"]).isRequired
};

// PlainButton.defaultProps = {
//   theme: {},
//   size: "normal"
// };

export default Button;
