import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ListSubHeader.css";

class ListSubHeader extends Component {
  render() {
    const { children } = this.props;

    return <div className="list__subHeader">{children}</div>;
  }
}

export default ListSubHeader;
