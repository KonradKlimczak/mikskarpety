import React, { Component } from 'react';

import TextField from './TextField/TextField';
import SearchIcon from '../images/icons/Search.svg'

class App extends Component {
    render() {
        return (
            <div>
                <h1> READSADAD</h1>
                <TextField icon={SearchIcon} />
            </div>
        );
    }
}

export default App;
