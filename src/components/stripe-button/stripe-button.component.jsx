import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_51JWdVFFoOsYZ41vW4gaUjt78Ryw1zVy9bl80MPEaEL73hI8Gfb1XD6IpLeZykf6Dib6QRSA0DOj5KlZaQMbjJHow00VxDVtyzO'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful'); 
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billing address
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={[publishableKey]}
        />
    );
};

export default StripeCheckoutButton;






