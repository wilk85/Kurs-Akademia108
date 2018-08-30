import React from 'react';

const Display = (props) => {
    return(
        <div className='display'>
            Licznik - <span className='value'>{props.currentVal}</span>
        </div>
    )
}

export default Display;