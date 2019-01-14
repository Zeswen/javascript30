import React from 'react';
import './Panels.css';

import Panel from '../Panel';

const Panels = (props) => (
    <div className='panels'>
        {Object.keys(props.panels).map((panel, i) => (
            <Panel key={i} panelName={panel} panel={props.panels[panel]}/>
        ))}
    </div>
);

export default Panels;