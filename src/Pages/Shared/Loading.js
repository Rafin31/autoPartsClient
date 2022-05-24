import React from 'react';
import spinner from '../../Assets/Loading/Dual Ring-1.4s-197px.gif'

const Loading = () => {
    return (
        <div className='container max-w-[1700px] h-[80vh] flex items-center'>
            <img className='block mx-auto' src={spinner} alt="" />
        </div>
    );
};

export default Loading;