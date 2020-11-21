import React from 'react';

import './style.css'

export default function Card(props) {
    return (
        <div className="card">
            {props.text}
        </div>
    );
};

Card.defaultProps = {
    text: ''
};
