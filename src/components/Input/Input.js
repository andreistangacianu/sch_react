import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class PlainTextInput extends Component {
  state = {
    focus: false
  };

  render() {
    const { theme, value, status, limit, type, ...props } = this.props;
    const remainingChars = limit && limit - value.length;
    const charLimitReached = remainingChars <= 0;
    const counterText = !charLimitReached ? remainingChars : 0;

    const fieldClasses = classNames(theme.field, theme[status], {
      [theme.withCounter]: limit,
      [theme.focus]: this.state.focus,
      [theme.disabled]: props.disabled,
      [theme.readOnly]: props.readOnly
    });
    const counterClasses = classNames(theme.counter, {
      [theme.zero]: charLimitReached
    });

    return (
      <div className={fieldClasses}>
        <input
          {...props}
          type={type}
          value={limit ? value.substring(0, limit) : value}
          className={theme.input}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {limit && <span className={counterClasses}>{counterText}</span>}
      </div>
    );
  }

  handleChange = event => {
    const { onChange, limit } = this.props;
    const eventValue = event.target.value;
    let changeValue = eventValue;

    if (limit && !this.checkLimit(eventValue, limit)) {
      event.preventDefault();
      changeValue = eventValue.substring(0, limit);
    }

    if (onChange && typeof onChange === "function") {
      onChange(changeValue, event);
    }
  };

  handleFocus = event => {
    this.setState({ focus: true });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ focus: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  checkLimit = (value, max) => {
    return value.length <= max;
  };
}

PlainTextInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  limit: PropTypes.number,
  status: PropTypes.oneOf(["normal", "error", "missing"]),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  theme: PropTypes.object.isRequired
};

PlainTextInput.defaultProps = {
  value: "",
  required: false,
  disabled: false,
  readOnly: false,
  status: "normal",
  theme: {}
};

export default PlainTextInput;
