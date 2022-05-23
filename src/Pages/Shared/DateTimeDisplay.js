import React from 'react';

const DateTimeDisplay = ({ value, type }) => {

    return (
        <div>
            <p className='text-red-500 font-bold'>{value}</p>
            <span className='text-xs '>{type}</span>
        </div>
    );
};

export default DateTimeDisplay;