import React, { Component } from "react";
import PropTypes from "prop-types";
import "./List.css";

class List extends Component {
  render() {
    const { children } = this.props;
    const classes = "standard__list";

    return <div className={classes}>
        {children}
    </div>;
  }
}

export default List;
