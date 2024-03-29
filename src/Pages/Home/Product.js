import React from 'react';

const Product = ({ product, handleOrderButton }) => {

    const { _id, name, description, Saller_name, available, minimum_order_qty, price, img } = product

    return (
        <div className='max-w-full'>
            <div className="card card-compact w-full bg-base-100 shadow-sm min-h-[700px] ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-lg font-light text-blue-600'>$ {price}</p>
                    <p className='text-sm text-light text-gray-400'>{Saller_name}</p>
                    <p>{description.slice(0, 200) + "... "}</p>
                    <p className='text-sm text-light text-gray-400 text-center py-5'>{available} pc are available right now</p>
                    <div className="">
                        <button className={`btn text-white tracking-widest border-0 
                           bg-gradient-to-r from-cyan-500 to-blue-500  w-full
                           hover:from-blue-500 hover:to-cyan-500`} onClick={() => handleOrderButton(_id)} >Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;