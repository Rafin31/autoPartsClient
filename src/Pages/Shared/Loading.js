import React from 'react';
import spinner from '../../Assets/Loading/Dual Ring-1.4s-197px.gif'

const Loading = () => {
    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <img className='block mx-auto w-[100px] h-[100px]' src={spinner} alt="" />
        </div>
    );
};

export default Loading;