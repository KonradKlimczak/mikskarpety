import * as React from "react";

const Logo = require("../../images/mik-logo.svg");
const SearchIcon = require("../../images/icons/Search.svg");
const PhoneIcon = require("../../images/icons/Phone.svg");
const EmailIcon = require("../../images/icons/Email.svg");
import TextField from "../TextField/TextField";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-first">
          <div className="navbar-first-left">
            <div className="navbar-phone-number">
              <a href="tel://+48-605-585-944">
                <img src={PhoneIcon} />
                (+48) 605-585-944
              </a>
            </div>
            <div className="navbar-email">
              <a>
                <img src={EmailIcon} />
                mik.skarpety@gmail.com
              </a>
            </div>
          </div>
          <img src={Logo} alt="MIK logo" />

          <div className="navbar-first-right">
            <TextField icon={SearchIcon} placeholder="Find love" onChange={console.log} />
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
