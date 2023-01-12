import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loadingSpinnerGif from '../../Assets/Loading/Dual Ring-1.4s-197px.gif'
import { authenticatedApiClient } from '../../Services/AuthHttp'

const CheckoutForm = ({ order }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://asif.tourparisiya.com/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice: order.totalPrice })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [order])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message);
            setSuccess('')
        }

        //confirm card payment
        setProcessing(true)
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order.name,
                        email: order.email
                    },
                },
            },
        );

        if (intentError) {
            setProcessing(false)
            setCardError(intentError?.message)

        } else {
            setCardError("")
            setTransactionId(paymentIntent.id)
            setProcessing(false)

            authenticatedApiClient.put(`/order/${order._id}`, { transactionID: paymentIntent.id })
                .then(data => {
                    setSuccess("Congrats! Your Payment is complete")
                    navigate('/dashboard')
                }
                )


        }

    }
    return (
        <div className='max-w-[1700px]'>

            <form onSubmit={(e) => handleSubmit(e)}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    processing ?
                        <img src={loadingSpinnerGif} className='mt-3 w-[50px] block mx-auto' alt="icon" srcSet="" />
                        :
                        <button className='btn btn-success btn-sm w-full mt-3'
                            type="submit"
                            disabled={!stripe || !clientSecret}>
                            Pay
                        </button>
                }


                {
                    cardError && <>
                        <p className="text-center text-sm bg-red-100 py-5 mt-10">{cardError}</p>
                    </>
                }
                {
                    success && <div className="text-center text-sm bg-green-100 py-5 mt-10">
                        <p>{success}</p>
                        <p >{`Transaction ID: ${transactionId}`}</p>

                    </div>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;