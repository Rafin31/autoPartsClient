import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const clientSecret = process.env.REACT_APP_Strip_Client_Secret;
const stripePromise = loadStripe("pk_test_51L3kNxAupKlXOSh5379divOfMP9D0bq2nXphW4q29r8WKFm6WvrY1UBhVU1cIEon77wu1vm99XjyxTdeclsjUR3t00Iap3DknV");



const StripeElement = ({ children }) => {
    const [clientSecret, setClientSecret] = useState("sk_test_51L3kNxAupKlXOSh5seEDSSSb6Vw3ThrG1wExTbuZvj7JUVFI6TTzcEZhICP4eHqqG8Y1GhKXn39RQJFRq01tBKN400d0MT4qUp");
    const stringClientSecret = clientSecret.toString();
    const appearance = {
        theme: 'stripe',
    };
    const options = {
        stringClientSecret,
        appearance,
    };
    return (
        <>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise.toString()}>
                    {children}
                </Elements>
            )}
        </>
    );
};

export default StripeElement;