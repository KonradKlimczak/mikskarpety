import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { acceptCookies } from '../actions';
import { IAppState } from '../reducers';
import { setCookie } from '../utils/cookies';
import { Severity } from '../utils/Severity';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Notification from './Notification/Notification';
import SockDetail from './SockDetail/SockDetail';
import SockOffer from './SockOffer/SockOffer';

interface IAppProps {
  cookies: boolean;
  onClick: any;
}

class App extends Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <Navbar />
        <main className='main'>
          <Route path='/' exact={true} component={Home} />
          <Route path='/socks/:category' exact={true} component={SockOffer} />
          <Route path='/sock/:slug' exact={true} component={SockDetail} />
        </main>
        {!this.props.cookies && (
          <Notification severity={Severity.Info}>
            Drogi Użytkowniku, Niniejsza strona korzysta z plików cookies dla celów statystycznych i marketingowych.
            “Dowiedz się więcej” lub kliknij “Akceptuję”, w celu zaakceptowania wszystkich rodzajów cookies.
            <button onClick={this.props.onClick}>Akceptuje</button>
          </Notification>
        )}
      </Fragment>
    );
  }
}

export default connect(
  (state: IAppState) => {
    return {
      cookies: state.user.analitics,
    };
  },
  (dispatch) => ({
    onClick: () => {
      setCookie('analitics', 'true', 365);
      dispatch(acceptCookies());
    },
  }),
)(App);
