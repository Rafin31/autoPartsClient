import React from 'react';

const Button = ({ children, width, onclick }) => {

    return (
        <button onClick={onclick} className={`btn text-white tracking-widest border-0 
        bg-gradient-to-r from-cyan-500 to-blue-500 laptop:${width} 
        hover:from-blue-500 hover:to-cyan-500`} >{children}</button>
    );
};

export default Button;