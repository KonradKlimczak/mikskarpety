import './styles/index.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
