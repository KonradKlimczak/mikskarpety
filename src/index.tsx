import './styles/index.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux'

import App from './components/App';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers)

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById("app"));
