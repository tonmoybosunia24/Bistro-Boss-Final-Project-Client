import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CheckoutForm = () => {

       const stripe = useStripe();
       const elements = useElements();
       const [clientSecret, setClientSecret] = useState('');
       const [transactionId, setTransactionId] = useState('');
       const [error, setError] = useState('');
       const axiosSecure = useAxiosSecure()
       const { user } = useAuth();
       const [cart, refetch] = useCart()
       const navigate = useNavigate()
       const totalPrice = parseFloat(cart.reduce((sum, item) => sum + item.price, 0).toFixed(2))

       useEffect(() => {
              if (totalPrice > 0) {
                     axiosSecure.post('/create-payment-intent', { price: totalPrice })
                            .then(res => {
                                   setClientSecret(res.data.clientSecret)
                            })
              }
       }, [axiosSecure, totalPrice])

       const handleSubmit = async (e) => {
              e.preventDefault();
              if (!stripe || !elements) {
                     return;
              }
              const card = elements.getElement(CardElement);

              if (card == null) {
                     return;
              }
              const { error, paymentMethod } = await stripe.createPaymentMethod({
                     type: 'card',
                     card,
              });
              if (error) {
                     console.log('Payment Error', error);
                     setError(error.message)
              } else {
                     console.log('Payment Method', paymentMethod);
                     setError('')
              }
              // Confirm Payment
              const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                     payment_method: {
                            card: card,
                            billing_details: {
                                   email: user?.email || 'Anonymous',
                                   name: user?.displayName || 'Anonymous',
                            }
                     }
              })
              if (confirmError) {
                     console.log('Confirm Error', confirmError.message)
              }
              else {
                     if (paymentIntent.status === 'succeeded') {
                            setTransactionId(paymentIntent.id)
                            // Now Save The Data In The Database
                            const payment = {
                                   email: user?.email,
                                   name: user?.displayName,
                                   transactionId: paymentIntent.id,
                                   price: totalPrice,
                                   date: new Date(), /* Utc Date Convert, Use Moment Js */
                                   cartIds: cart.map(item => item._id),
                                   menuItemIds: cart.map(item => item.menuId),
                                   status: 'Pending'
                            }
                            const res = await axiosSecure.post('/payments', payment)
                            refetch();
                            toast.success('Payment Successful')
                            navigate('/dashboard/paymentHistory')
                     }
              }
       }

       return (
              <form onSubmit={handleSubmit}>
                     <CardElement className="w-5/6 lg:w-4/6 mx-auto"
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
                     <button type="submit" className="text-center mx-auto block bg-blue-700 w-5/6 lg:w-4/6 py-2 mt-5" disabled={!stripe || !clientSecret}>
                            Pay
                     </button>
                     <p className="text-xs text-center text-red-600 mt-3">{error}</p>
                     {transactionId && <p className="text-sx text-green-400 text-center">Your Transaction Id: {transactionId}</p>}
              </form>
       );
};

export default CheckoutForm;