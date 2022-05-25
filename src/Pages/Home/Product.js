import React from 'react';

const Product = ({ product, handleOrderButton }) => {

    const { _id, name, description, Saller_name, minimum_order_qty, price, img } = product

    return (
        <div className='max-w-full'>
            <div class="card card-compact w-full bg-base-100 shadow-sm ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p className='text-lg font-light text-blue-600'>$ {price}</p>
                    <p className='text-sm text-light text-gray-400'>{Saller_name}</p>
                    <p>{description.slice(0, 200) + "... "}</p>

                    <p>{minimum_order_qty}</p>

                    <div class="">
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