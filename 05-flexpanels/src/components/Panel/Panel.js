import React from 'react';
import './Panel.css';


const toggleOpen = (e) => {
    e.target.parentNode.classList.toggle('open');
}

const Panel = (props) => (
    <div className={`panel ${props.panelName}`} style={{backgroundImage: `url(${props.panel.background})`}}>
        {props.panel.text.map((p, i) => (
            <p onClick={(e) => i === 1 && toggleOpen(e)} key={i}>{p}</p>
        ))}
    </div>
)

export default Panel;