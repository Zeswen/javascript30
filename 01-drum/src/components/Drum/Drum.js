import React from 'react';
import PropTypes from 'prop-types';
import './Drum.css';

import SOUNDS from '../../assets/sounds';

export const playAudio = (audio) => {
    const audioObj = new Audio(SOUNDS[audio]);
    audioObj.play();
};

const Drum = (props) => (
    <React.Fragment>
        {props.sounds.map(sound => (
            SOUNDS[sound] && (
                <div key={sound} className='Drum-container'>
                    <p className='Drum-text'>{sound}</p>
                    <button className='Drum-button' onClick={() => playAudio(sound)}>Play</button>
                </div>
            )
        ))}
    </React.Fragment>
)

Drum.propTypes = {
    sounds: PropTypes.array.isRequired
}

export default Drum;