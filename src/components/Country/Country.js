import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country: {props.name}</h2>
            <p>Population: {props.population}</p>
            <p>Area: {props.area}</p>
        </div>
    );
};

export default Country;