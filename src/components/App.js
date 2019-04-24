import React, { Component } from 'react';

import TextField from './TextField/TextField';
import SearchIcon from '../images/icons/Search.svg'

class App extends Component {
    render() {
        return (
            <div style={{padding: 100}}>
                <h1> READSADAD</h1>
                <TextField icon={SearchIcon} placeholder="Find love" />
            </div>
        );
    }
}

export default App;
