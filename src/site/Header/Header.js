import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styles from "./Header.css";
// import Button from "../../components/Button/Button";
import classNames from "classnames";

class Header extends Component {
  render() {
    const { items, children } = this.props;
    return (
      <header className={styles.header}>
        <div className={styles.sticky}>
          <nav className={styles.mainMenu}>
            <ul className={styles.menuNav}>{this.renderItems()}</ul>
          </nav>
        </div>
      </header>
    );
  }

  renderItems = () => {
    const { items } = this.props;

    return items.map(item => {
      const classes = classNames(styles.menuItem, {
        [styles.marked]: item.marked,
        [styles.main]: item.main
      });

      return (
        <li>
          <span onClick={item.onClick} className={classes}>
            {item.name}
          </span>
        </li>
      );
    });
  };
}

export default Header;
