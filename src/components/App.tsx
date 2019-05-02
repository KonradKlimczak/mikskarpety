import * as React from 'react';
import Navbar from './Navbar/Navbar';
import Notification from './Notification/Notification';
import { Severity } from './Severity';
import { connect } from 'react-redux';
import { acceptCookies } from '../actions';
import { AppState } from '../reducers';

interface AppProps {
  cookies: boolean;
  onClick: any;
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <React.Fragment>
        <Navbar />
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
      cookies: state.user.analitics.cookies
    };
  },
  dispatch => ({
    onClick: () => {
      dispatch(acceptCookies());
    }
  })
)(App);
