import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import { authenticatedApiClient } from '../../Services/AuthHttp';
import Loading from '../Shared/Loading';

const Order = () => {

    const { id } = useParams()
    const [modal, setModal] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [minimumQty, setQty] = useState(0)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const { isLoading, data: product } = useQuery('products',
        async () => {
            return axios.get(`/products/${id}`).then(data => data.data)
        }
    )


    if (isLoading) {
        return <Loading />
    }

    const { name, description, Saller_name, available, minimum_order_qty, price, img } = product.Data


    const onSubmit = data => {

        if (minimumQty >= minimum_order_qty && minimumQty < available) {
            const order = {
                name: data.name,
                email: data.email,
                productName: name,
                quantity: minimumQty,
                totalPrice: minimumQty * price,
                phone: data.phone,
                address: data.address,
                paymentStatus: "unpaid",

            }
            authenticatedApiClient.post('/order', { order })
                .then(data => {
                    if (data.status === 200) {
                        setModal(!modal)
                        setQty(0)
                        Swal.fire({
                            icon: 'success',
                            title: 'Order Has been placed',
                            text: `Your order has been placed. Thank you`,
                        })
                        navigate(`/payment/${data.data.Data.insertedId}`)
                        // console.log(data.data.Data.insertedId);

                    } else {
                        setModal(!modal)
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `Something Went Wrong Try Again`,
                        })

                    }
                })

        } else {
            if (minimumQty > available) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Product unavailable`,
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `You Have to order minimum ${minimum_order_qty} pc`,
                })
            }

        }

    };






    const handleQtyButton = (condition) => {
        if (condition === "+") {
            setQty(minimumQty + 1)
            setModal(false)

        } else {

            if (minimumQty > 0 && minimumQty > minimum_order_qty) {
                setQty(minimumQty - 1)
                setModal(false)

            } else {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `You Have to order minimum ${minimum_order_qty} pc`,
                })

            }
        }




    }

    return (
        <div className='max-w-[1700px] mx-auto grid laptop:grid-cols-2 mobile:grid-cols-1 laptop:px-20 mobile:px-8 gap-y-8 mobile:my-16' >
            <div className="productImage">
                <img src={img} alt="" />
            </div>
            <div className="productDetails">
                <p className='text-xl font-black'>{name}</p>
                <p className='text-lg font-bold text-blue-600'>$ {price}</p>
                <p className='text-sm font-bold '>Minimum Order quantity {minimum_order_qty} pc</p>
                <p className='text-sm font-light text-gray-400'>{Saller_name}</p>
                <p className='text-lg text-gray-400 font-light my-5'>{description}</p>
                <p className='text-sm text-light text-gray-400 pb-5'>{available} pc are available right now</p>
                <div className="qty grid grid-cols-2 gap-x-3 mobile:w-[100%] laptop:w-[50%] ">

                    <div className="form-control ">
                        <div className="input-group">
                            <button onClick={(e) => handleQtyButton('-')} className=" border-2 px-5 bg-white text-black hover:bg-gray-300">-</button>
                            <input type="number" value={minimumQty} className="input input-bordered w-[60%] " />
                            <button onClick={(e) => handleQtyButton('+')} className=" border-2 px-5 bg-white text-black hover:bg-gray-300">+</button>
                        </div>
                    </div>
                    <div className="orderButton">
                        <label htmlFor="my-modal-4" className="btn text-white tracking-widest border-0 
                           bg-gradient-to-r from-cyan-500 to-blue-500  w-full
                           hover:from-blue-500 hover:to-cyan-500">Order Now</label>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            {
                !modal && <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold ">place Your Order</h3>
                        <h3 className="text-sm font-bold my-5">{`Total Price ${minimumQty * price}`}</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="nameInput mb-5">
                                <input readOnly type="text" name='name' value={user.displayName ? user.displayName : user.email?.split("@")[0]} className={` input input-bordered w-full  ${errors?.name && "border-2 border-red-600"}`}

                                    {...register("name",
                                        {
                                            required: {
                                                value: true,
                                                message: "Name Required"
                                            }
                                        },
                                    )} />


                                {errors.name?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.name.message}</span>}


                            </div>


                            <div className="emailInput mb-5">
                                <input readOnly type="text" name='email' value={user?.email} className={` input input-bordered w-full  ${errors?.email && "border-2 border-red-600"}`}

                                    {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: "Email Required"
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Invalid Email'
                                            }
                                        },
                                    )} />


                                {errors.email?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.email.message}</span>}

                            </div>

                            <div className="PhoneInput mb-5">
                                <input type="number" name='phone' placeholder="Your Phone Number" className={` input input-bordered w-full  ${errors?.phone && "border-2 border-red-600"}`}

                                    {...register("phone",
                                        {
                                            required: {
                                                value: true,
                                                message: "Phone Required"
                                            }
                                        },
                                    )} />

                                {errors.phone?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.phone.message}</span>}
                            </div>



                            <div className="addressInput mb-5">
                                <input type="text" name='address' placeholder="Your address " className={` input input-bordered w-full  ${errors?.address && "border-2 border-red-600"}`}

                                    {...register("address",
                                        {
                                            required: {
                                                value: true,
                                                message: "Address Required"
                                            }
                                        },
                                    )} />


                                {errors.address?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.address.message}</span>}
                            </div>


                            <button type='submit' htmlFor="my-modal-4" className="btn text-white tracking-widest border-0 
                           bg-gradient-to-r from-cyan-500 to-blue-500  w-full
                           hover:from-blue-500 hover:to-cyan-500">Place Order</button>
                        </form>
                    </label>
                </label>
            }
        </div>


    );
};

export default Order;