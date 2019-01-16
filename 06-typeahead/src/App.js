import React, { Component } from 'react';
import './App.css';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

class App extends Component {
    constructor() {
        super();

        this.state = {
            cities: [],
            city: 'Filter for a city',
            state: 'Or a state'
        };

        fetch(endpoint)
            .then(blob => blob.json())
            .then(data => this.setState(prevState => ({ ...prevState, cities: data })));
    }

    findCity = (value) => {
        const regex = new RegExp(value, 'gi');
        const city = this.state.cities.find(city => (city.city.match(regex) || city.state.match(regex)));
        
        if (value === '') return undefined;
        return city;
    }
    
    suggestCity = (city) => {
        city
        ? this.setState(prevState => ({ ...prevState, city: city.city, state: city.state }))
        : this.setState(prevState => ({ ...prevState, city: 'Filter for a city', state: 'Or a state' }))
    }
    
    autoComplete = (e) => this.suggestCity(this.findCity(e.target.value));

    render() {
        return (
            <form className="search-form">
                <input type="text" className="search" placeholder="City or State" onChange={(e) => this.autoComplete(e)} />
                <ul className="suggestions">
                    <li>{(this.state.city)}</li>
                    <li>{(this.state.state)}</li>
                </ul>
            </form>
        )   
    }
}

export default App;
