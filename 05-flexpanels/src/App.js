import React from 'react';
import './App.css';

import Panels from './components/Panels';

const PANELS = {
    panel1: {
        text: ['Hey', 'Let\'s', 'Dance'],
        background: 'https://source.unsplash.com/gYl-UtwNg_I/1500x1500'
    },
    panel2: {
        text: ['Give', 'Take', 'Receive'],
        background: 'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500'
    }, 
    panel3: {
        text: ['Experience', 'It', 'Today'],
        background: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d'
    }, 
    panel4: {
        text: ['Give', 'All', 'You Can'],
        background: 'https://source.unsplash.com/ITjiVXcwVng/1500x1500'
    }, 
    panel5: {
        text: ['Life', 'In', 'Motion'],
        background: 'https://source.unsplash.com/3MNzGlQM7qs/1500x1500'
    }
};

const App = () => (
    <div className="App">
        <Panels panels={PANELS}/>
    </div>
)

export default App;
