import React from 'react';
import './Button.scss';


const Size = ['sm','md','lg'];
const Color = ['blue','red','green','yellow','ocyan']

const Button = ({
    size,
    color,
    children
}) => {

    const SIZE = Size.includes(size) ? size : Size[1];
    const COLOR = Color.includes(color) ? color : Color[1];

    return (
        <>
            <button className={`btn ${SIZE} ${COLOR}`}>{children}</button>
        </>
    );
};

export default Button;