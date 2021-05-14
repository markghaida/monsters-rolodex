import React from 'react';
import '../card/card.styles.css'

export const Card = props => {
    return(
    <div>
        <h1 className='card-container'> {props.monster.name}</h1>
    </div>
    );
}