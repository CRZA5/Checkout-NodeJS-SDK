const PayPal: any = {};

declare module "@paypal/checkout-server-sdk" {
  export default PayPal;
}
