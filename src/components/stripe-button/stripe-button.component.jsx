import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForSale = price * 100;
    const publishableKey = 'pk_test_g8z0UgPYeEAivl1AumTIQjbk00wk9n6KsQ';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
        label ='Pay Now'
        name = 'CROWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image= 'https://svgshare.com/i/CUz.svg'
        description = {`Your Total is ${ price}`}
        amount = {priceForSale}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    );

}

export default StripeCheckoutButton;