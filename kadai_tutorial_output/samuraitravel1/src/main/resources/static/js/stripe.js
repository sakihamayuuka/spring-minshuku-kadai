 const stripe = Stripe('pk_test_51PTaDWCYnjPdRWDTSB804qpgD88mffvzc54QEYlOPcAJFrWg2FxPSOMC0ytQElBG1oG1mUTsfr8SYVprVIekmXz300vFM3HP0J');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });
