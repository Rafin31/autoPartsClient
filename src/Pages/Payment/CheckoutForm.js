import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = ({ _id, name, email, productName, quantity, totalPrice, address, phone }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

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
        } else {
            console.log(paymentMethod);
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
                <button className='btn btn-success btn-sm mt-4'
                    type="submit"
                    disabled={!stripe}>
                    Pay
                </button>
                {
                    cardError && <>
                        <p className="text-center text-sm bg-red-300 py-5 mt-10">{cardError}</p>
                    </>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;





// setCardError(error?.message || '')
//         setSuccess('');
//         setProcessing(true);
//         // confirm card payment
//         const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
//             clientSecret,
//             {
//                 payment_method: {
//                     card: card,
//                     billing_details: {
//                         name: name,
//                         email: email
//                     },
//                 },
//             },
//         );

//         if (intentError) {
//             setCardError(intentError?.message);
//             setProcessing(false);
//         }
//         else {
//             setCardError('');
//             setTransactionId(paymentIntent.id);
//             setSuccess('Congrats! Your payment is completed.')

//             //store payment on database
//             const payment = {
//                 appointment: _id,
//                 transactionId: paymentIntent.id
//             }
//             fetch(`/booking/${_id}`, {
//                 method: 'PATCH',
//                 headers: {
//                     'content-type': 'application/json',
//                     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//                 },
//                 body: JSON.stringify(payment)
//             }).then(res => res.json())
//                 .then(data => {
//                     setProcessing(false);
//                     console.log(data);
//                 })

//         }