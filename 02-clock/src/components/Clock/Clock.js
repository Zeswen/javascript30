import React from 'react'
import './Clock.css';

const Clock = (props) => (
    <div className='clock'>
        <div className='clock-face'>
            <div className='hour-hand' style={{transform: `rotate(${props.hourDeg}deg)`}}/>
            <div className='minute-hand' style={{transform: `rotate(${props.minuteDeg}deg)`}}/>
            <div className='second-hand' style={{transform: `rotate(${props.secondDeg}deg)`}}/>
        </div>
    </div>
);

export default Clock;
