import React from 'react';

import Control from '../Control';

const Controls = (props) => (
    <div>
        {Object.keys(props.properties).map(property => (
            <React.Fragment key={property}>
                <Control property={property} value={props.properties[property]} changeProperty={props.changeProperty}/>
            </React.Fragment>
        ))}
    </div>
)

export default Controls;