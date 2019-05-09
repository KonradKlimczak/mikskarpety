import * as React from 'react';

const Logo = require('../../images/mik-logo.svg');
const SearchIcon = require('../../images/icons/Search.svg');
import TextField from '../TextField/TextField';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';

class Navbar extends React.PureComponent {
  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-first'>
          <div className='navbar-first-left'>
            <div className='navbar-phone-number'>
              <a href='tel://+48-605-585-944'>
                <Icon icon='phone' />
                (+48) 605-585-944
              </a>
            </div>
            <div className='navbar-email'>
              <a>
                <Icon icon='email' />
                mik.skarpety@gmail.com
              </a>
            </div>
          </div>

          <Link to='/'>
            <img src={Logo} alt='MIK logo' />
          </Link>

          <div className='navbar-first-right'>
            <TextField
              icon={SearchIcon}
              placeholder='Find love'
              onChange={value => {
                console.log(value);
              }}
              debounce={1000}
            />
          </div>
        </div>

        <ul>
          <li>
            <Link to='/socks/men'>Mężczyzna</Link>
          </li>
          <li>
            <Link to='/socks/women'>Kobieta</Link>
          </li>
          <li>
            <Link to='/socks/new'>Nowości</Link>
          </li>
          <li>
            <Link to='/socks/kids'>Dzieci</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
