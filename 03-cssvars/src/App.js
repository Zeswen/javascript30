import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';

class App extends Component {

    state = {
        spacing: 0,
        blur: 0,
        baseColor: '#000000'
    }

    submitVariable = () => {
        const root = document.documentElement;
        Object.keys(this.state).forEach(property => root.style.setProperty(`--${property}`, property === 'baseColor' ? `${this.state[property]}` : `${this.state[property]}px`));
    };
    
    changeProperty = (e) => {
        const property = e.target.name;
        const value = e.target.value;

        this.setState(prevState => ({
            ...prevState,
            [property]: value
        }), () => this.submitVariable());
    };

    render() {
        return (
            <div className="App">
                <h2>Update CSS Variables with <span>JS</span></h2>
                <Controls properties={this.state} changeProperty={this.changeProperty}/>
                <img className="Picture" src="https://source.unsplash.com/7bwQXzbF6KE/800x500" alt="mountain"/>
            </div>
        );
    }
}

export default App;
