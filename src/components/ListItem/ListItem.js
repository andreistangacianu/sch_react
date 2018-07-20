import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

class ListItem extends Component {
  render() {
    const { children, leftItem, rightItem } = this.props;
    const classes = "line__items";

    return (
      <div>
        <div className="list__item_left">{leftItem}</div>
        <div className="list__item_center">{children}</div>
        <div className="list__item_right">{rightItem}</div>
      </div>
    );
  }
}

export default ListItem;
