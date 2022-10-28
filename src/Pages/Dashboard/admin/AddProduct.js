import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { authenticatedApiClient } from '../../../Services/AuthHttp';
import spinner from '../../../Assets/Loading/Dual Ring-1.4s-197px.gif'

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)

    const key = '9d6e3bde518bad1285ec1fad0ec08faa'

    const onSubmit = (data) => {
        setLoading(true)
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const product = {
                        name: data.productName,
                        description: data.description,
                        Saller_name: data.sellerName,
                        available: data.available,
                        minimum_order_qty: data.minimumQty,
                        price: data.price,
                        img: result.data.display_url,
                    }

                    authenticatedApiClient.post('/products', { product })
                        .then(data => {
                            setLoading(false)
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Product Added',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                }
            })
    }
    return (
        <div className='container max-w-[1700px] mx-auto px-10'>

            <div className="title mb-8">
                <p className="title-text text-3xl font-extrabold">Add a review</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="productNameInput mb-5">
                    <input type="text" name='name' placeholder='Product name' className={` input input-bordered w-full  ${errors?.name && "border-2 border-red-600"}`}

                        {...register("productName",
                            {
                                required: {
                                    value: true,
                                    message: "Product Name Required"
                                }
                            },
                        )} />


                    {errors.productName?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.productName.message}</span>}


                </div>

                <div className="descriptionInput mb-5">
                    <textarea type="text" name='description' placeholder='Description' className={` input input-bordered w-full  ${errors?.description && "border-2 border-red-600"}`}

                        {...register("description",
                            {
                                required: {
                                    value: true,
                                    message: "Description Required"
                                }
                            },
                        )} />


                    {errors.description?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.description.message}</span>}

                </div>


                <div className="sellerNameInput mb-5">
                    <input type="text" name='sellerName' placeholder='Seller Name' className={` input input-bordered w-full  ${errors?.sellerName && "border-2 border-red-600"}`}

                        {...register("sellerName",
                            {
                                required: {
                                    value: true,
                                    message: "Seller Name Required"
                                }
                            },
                        )} />


                    {errors.sellerName?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.sellerName.message}</span>}


                </div>

                <div className="availableInput mb-5">
                    <input type="text" name='available' placeholder='Available quantity' className={` input input-bordered w-full  ${errors?.available && "border-2 border-red-600"}`}

                        {...register("available",
                            {
                                required: {
                                    value: true,
                                    message: "Available quantity Required"
                                }
                            },
                        )} />


                    {errors.available?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.available.message}</span>}


                </div>

                <div className="minimumQtyInput mb-5">
                    <input type="text" name='sellerName' placeholder='Minimum order quantity' className={` input input-bordered w-full  ${errors?.minimumQty && "border-2 border-red-600"}`}

                        {...register("minimumQty",
                            {
                                required: {
                                    value: true,
                                    message: "Minimum order quantityRequired"
                                }
                            },
                        )} />


                    {errors.minimumQty?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.minimumQty.message}</span>}


                </div>

                <div className="priceInput mb-5">
                    <input type="number" name='price' placeholder='Price' className={` input input-bordered w-full  ${errors?.price && "border-2 border-red-600"}`}

                        {...register("price",
                            {
                                required: {
                                    value: true,
                                    message: "Price Required"
                                }
                            },
                        )} />


                    {errors.price?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.price.message}</span>}


                </div>

                <div className="imgNameInput mb-5">
                    <input type="file" name='sellerName' placeholder='Product Img' className={` input input-bordered w-full  ${errors?.img && "border-2 border-red-600"}`}

                        {...register("img",
                            {
                                required: {
                                    value: true,
                                    message: "Product Img"
                                }
                            },
                        )} />


                    {errors.img?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.img.message}</span>}


                </div>

                {
                    loading ?
                        <img className='block mx-auto w-[50px] h-[50px]' src={spinner} alt="" />
                        :
                        <button type='submit' htmlFor="my-modal-4" className="btn text-white tracking-widest border-0 
                           bg-gradient-to-r from-cyan-500 to-blue-500  w-full
                           hover:from-blue-500 hover:to-cyan-500">Add Product</button>
                }



            </form>

        </div>
    );
};

export default AddProduct;