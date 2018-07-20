import React, { Component } from "react";
import PropTypes from "prop-types";

class Link extends Component {
  render() {
    const {
      url,
      type,
      required,
      transition,
      children,
      theme,
      ...others
    } = this.props;
    // const classes = classNames(theme.link, theme[type], {
    //   [theme.required]: required,
    //   [theme.transition]: transition
    // });

    return (
      <a href={url}>
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "bodyLink"]),
  required: PropTypes.bool,
  transition: PropTypes.bool,
  children: PropTypes.node.isRequired,
  theme: PropTypes.object
};

Link.defaultProps = {
  type: "primary",
  required: false,
  transition: false
};

export default Link;
