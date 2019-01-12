import React, { Component } from 'react';
import './App.css';

import Drum from './components/Drum';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Drum sounds={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']}/>
                </header>
            </div>
        );
    }
}

export default App;
