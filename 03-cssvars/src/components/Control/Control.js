import React from 'react';

const Control = (props) => (
    <React.Fragment>
        <label htmlFor={props.property}>{props.property}:</label>
        <input id={props.property} type={props.property === "baseColor" ? "color" : "range"} name={props.property} min="0" max="200" value={props.value} data-sizing="px" onChange={(e) => props.changeProperty(e)}/>
    </React.Fragment>
)

export default Control;