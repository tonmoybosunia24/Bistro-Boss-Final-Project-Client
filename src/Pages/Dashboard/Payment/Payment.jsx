import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
       return (
              <div>
                     <SectionTitle heading='PLEASE PAYMENT' subHeading='----------WANT TO EAT---------'></SectionTitle>
                     <div>
                            <Elements stripe={stripePromise}>
                                   <CheckoutForm></CheckoutForm>
                            </Elements>
                     </div>
              </div>
       );
};

export default Payment;