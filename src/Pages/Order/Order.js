import React from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {

    const { id } = useParams()


    return (
        <div>
            {id}
        </div>
    );
};

export default Order;