import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Button from "../../components/Button/Button";

class Header extends Component {
  render() {
    return (
      <header className="navigation__container">
        <div className="logo">
          <Link to="/dashboard">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt=""
              height="20"
            />
            <span className="logo__name">Monica Tudorache App</span>
          </Link>
        </div>
        <div className="auth__links">
          <div className="auth_link simple__underline">
            <Link to="/about">About us</Link>
          </div>
          <div className="auth_link simple__underline">
            <Link to="/pricing">Pricing</Link>
          </div>
          <div className="auth_link">
            <Link to="/register">
              <Button secondary={true} size="normal">
                <span>Get Started</span>
              </Button>
            </Link>
          </div>

          <div className="auth_link">
            <Link to="/login">
              <Button secondary={true} size="normal">
                <span>Sign in</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
