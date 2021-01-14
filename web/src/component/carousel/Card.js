import React from 'react';
import './Card.scss';




const Card = ({
    src
}) => {
    return (
        <div className ='card'>
            <img src={src} />
        </div>
    );
};

export default Card;