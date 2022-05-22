import React from 'react';

const Button = ({ children, width }) => {
    return (
        <button class={`btn text-white tracking-widest border-0 
        bg-gradient-to-r from-cyan-500 to-blue-500 desktop:${width} laptop:${width} ease-in-out
        hover:from-blue-500 hover:to-cyan-500`} >{children}</button>
    );
};

export default Button;