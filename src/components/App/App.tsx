import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { acceptCookies } from '../../actions';
import { IAppState } from '../../reducers';
import { setCookie } from '../../utils';
import Home from '../Home/Home';
import { Navbar } from '../Navbar';
import SockDetail from '../SockDetail/SockDetail';
import { CookiesNotification } from './CookiesNotification';
import SockOffer from '../SockOffer';

interface IAppProps {
  cookies: boolean;
  onClick: () => void;
}

export const App = connect(
  (state: IAppState) => ({ cookies: state.user.analitics }),
  (dispatch) => ({
    onClick: () => {
      setCookie('analitics', 'true', 365);
      dispatch(acceptCookies());
    },
  }),
)((props: IAppProps) => {
  return (
    <Fragment>
      {!props.cookies && <CookiesNotification onAccpet={props.onClick} />}
      <Navbar />
      <main className='main'>
        <Route path='/' exact={true} component={Home} />
        <Route path='/socks/:category' exact={true} component={SockOffer} />
        <Route path='/sock/:slug' exact={true} component={SockDetail} />
      </main>
    </Fragment>
  );
});
