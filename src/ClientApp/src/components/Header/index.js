import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import logo from '../../img/codebeez_logo.png';
export class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <header
          className="navbar navbar-default navbar-custom"
          id="nc4navTopMain"
          role="navigation"
        >
          <div className="navbar-header navbar-header-border navbar-main">
            <div className="navbar-brand">
              <Link to="/" role="button" aria-label="Kudos Shop">
                <img src={logo} alt="Logo" width="70px" className="logo" />
                Kudos Shop
              </Link>
            </div>
            <nav className="collapse navbar-collapse collapsed" aria-label="Menu" >
              <ul className="nav navbar-nav nav-tabs first-level" role="menubar">
                <li>
                  <Link
                    className="nav-item fl-menu-item"
                    to="/"
                    role="menuitem"
                    aria-selected="false"
                  >
                    Home
                  </Link>
                </li>
                <li className="second-level-children">
                  <Link
                    className="nav-item fl-menu-item has-children"
                    to="/shop"
                    role="menuitem"
                    aria-selected="true"
                  >
                    Shop
                  </Link>
                </li>
                <li className="second-level-children">
                  <Link
                    className="nav-item fl-menu-item has-children"
                    to="/adminlog"
                    role="menuitem"
                    aria-selected="true"
                  >
                    Admin's History Log
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
