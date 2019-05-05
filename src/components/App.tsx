import * as React from 'react';
import Navbar from './Navbar/Navbar';
import Notification from './Notification/Notification';
import { Severity } from '../utils/Severity';
import { connect } from 'react-redux';
import { acceptCookies } from '../actions';
import { AppState } from '../reducers';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import { setCookie } from '../utils/cookies';

interface AppProps {
  cookies: boolean;
  onClick: any;
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className='main'>
          <Route path='/' exact component={Home} />
        </main>
        {!this.props.cookies && (
          <Notification severity={Severity.Info}>
            Drogi Użytkowniku, Niniejsza strona korzysta z plików cookies dla celów statystycznych i marketingowych.
            “Dowiedz się więcej” lub kliknij “Akceptuję”, w celu zaakceptowania wszystkich rodzajów cookies.
            <button onClick={this.props.onClick}>Akceptuje</button>
          </Notification>
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  (state: AppState) => {
    return {
      cookies: state.user.analitics
    };
  },
  dispatch => ({
    onClick: () => {
      setCookie('analitics', 'true', 365);
      dispatch(acceptCookies());
    }
  })
)(App);
