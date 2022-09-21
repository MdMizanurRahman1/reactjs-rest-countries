import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, population, region } = props.country;
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <p>Area:{area}</p>
            <p>Population:{population}</p>
            <p>Region:{region}</p>

        </div>
    );
};

export default Country;