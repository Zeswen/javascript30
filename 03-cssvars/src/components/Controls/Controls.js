import React from 'react';

import Control from '../Control';

const Controls = (props) => (
    <div>
        {Object.keys(props.properties).map(property => (
            <React.Fragment>
                <Control key={property} property={property} value={props.properties[property]} changeProperty={props.changeProperty}/>
            </React.Fragment>
        ))}
    </div>
)

export default Controls;