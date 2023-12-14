import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js"
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)
const Payment = () => {
    return (
        <div className="px-5">
            <SectionTitle heading="Payment" subHeading="Please pay first"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;