import React from 'react';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import { authenticatedApiClient } from '../../Services/AuthHttp';

const stripePromise = loadStripe(process.env.REACT_APP_Strip_Dev_Secret);

const Payment = () => {

    const { id } = useParams()
    const { isLoading, data: orderData } = useQuery('orderData',
        async () => {
            return authenticatedApiClient.get(`/order/${id}`).then(data => data.data.Data)
        }
    )

    if (isLoading) {
        return <Loading />
    }



    return (
        <div className='container max-w-[1700px] mx-auto h-[auto] pt-20 grid grid-cols-2 gap-5 mobile:grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-2'>
            <div class="">
                <div className="top pb-20">
                    <p className='text-3xl text-center font-bold'>Order Overview</p>
                </div>

                <div className="orderDetails p-[20px] ">
                    <div className="topWrapper flex justify-between items-center">
                        <div className="orderDetails">
                            <p className='text-2xl font-bold'>{orderData.name}</p>
                            <p className='text-lg opacity-[0.5]'>{`x${orderData.quantity} pc`}</p>
                            <p className="text-sm opacity-[0.5]">Order No: {id}</p>
                        </div>
                        <div className="price">
                            <p className="text-lg font-bold">{`$${orderData.totalPrice}`}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="middle py-10">
                        <div className="subtotal flex justify-between items-center">
                            <p>{`Subtotal x${orderData.quantity} `}</p>
                            <p>${orderData.totalPrice}</p>
                        </div>
                        <div className="shipping flex justify-between items-center">
                            <p>Shipping:</p>
                            <p>$0.0</p>
                        </div>
                        <div className="tax flex justify-between items-center">
                            <p>Tax:</p>
                            <p>$0.0</p>
                        </div>
                    </div>
                    <hr />

                    <div className="totalPrice py-10">
                        <div className="subtotal flex justify-between items-center">
                            <p className='text-xl font-bold'>{`Total`}</p>
                            <p className='text-xl font-bold'>${orderData.totalPrice}</p>
                        </div>
                    </div>
                </div>

            </div>


            <div class="h-full flex justify-center items-center font-bold">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={orderData} />
                    </Elements>
                </div>
            </div>



        </div>
    );
};

export default Payment;