import React from 'react';
import './Features.css'
const Features = (props) => {
    const {description, value} = props.feature
    return (
        <div>
            <ul>
                <li>{description} {value}</li>
            </ul>
        </div>
    );
};

export default Features;