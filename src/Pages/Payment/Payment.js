import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {

    const stripePromise = loadStripe('pk_test_51L3kNxAupKlXOSh5379divOfMP9D0bq2nXphW4q29r8WKFm6WvrY1UBhVU1cIEon77wu1vm99XjyxTdeclsjUR3t00Iap3DknV');

    const { id } = useParams()

    const { isLoading, data: orderData } = useQuery('orderData',
        async () => {
            return axios.get(`/order/${id}`).then(data => data.data.Data)
        }
    )

    if (isLoading) {
        return <Loading />
    }

    console.log(orderData);



    return (
        <div className='container max-w-[1700px] mx-auto h-[70vh] pt-20'>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Quantity </th>
                            <th>Total Price </th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className='text-xs'>{id}</td>
                            <td>{orderData.name}</td>
                            <td>{orderData.productName}</td>
                            <td>{orderData.quantity}</td>
                            <td>{orderData.totalPrice}</td>
                            <td>{orderData.address}</td>
                            <td>{orderData.phone}</td>
                        </tr>


                    </tbody>
                </table>
            </div>


            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mt-32 mx-auto">
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