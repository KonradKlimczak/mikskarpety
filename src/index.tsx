import './styles/index.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import App from './components/App/App';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);

// Register a service worker

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  (window || ({} as any)).addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceWorker.js').then(
      (registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      },
      (err) => {
        console.log('ServiceWorker registration failed: ', err);
      },
    );
  });
}
