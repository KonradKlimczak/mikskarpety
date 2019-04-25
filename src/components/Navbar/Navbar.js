import React, { Component } from "react";

import Logo from "../../images/mik-logo.svg";
import SearchIcon from "../../images/icons/Search.svg";
import TextField from "../TextField/TextField.tsx";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-first">
          <div className="navbar-first-left">Contact</div>
          <img src={Logo} alt="MIK logo" />

          <div className="navbar-first-right">
            <TextField icon={SearchIcon} placeholder="Find love" />
          </div>
        </div>

        <ul>
          <li>
            <a href="default.asp">Mężczyzna</a>
          </li>
          <li>
            <a href="news.asp">Kobieta</a>
          </li>
          <li>
            <a href="about.asp">Nowości</a>
          </li>
          <li>
            <a href="contact.asp">Dzieci</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
