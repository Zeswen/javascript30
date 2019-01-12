import React, { Component } from 'react';
import './App.css';

import Clock from './components/Clock';

const DEGREE_TO_LAPSE = {
    hourDeg: 360000,
    minuteDeg: 60000,
    secondDeg: 1000
}

class App extends Component {

    state = {
        hourDeg: 90,
        minuteDeg: 90,
        secondDeg: 90
    };

    rotateHand = (name, deg) => {
        this.setState(prevState => ({ ...prevState, [name]: name === 'hourDeg' ? deg + 30 : deg + 6 }));
    };

    componentDidMount() {
        Object.keys(DEGREE_TO_LAPSE).forEach(degName => {
            setInterval(() => this.rotateHand(degName, this.state[degName]), DEGREE_TO_LAPSE[degName]);
        });
    }

    render() {
        return (
            <div className="App">
                <Clock hourDeg={this.state.hourDeg} minuteDeg={this.state.minuteDeg} secondDeg={this.state.secondDeg}/>
            </div>
        );
    }
}

export default App;
