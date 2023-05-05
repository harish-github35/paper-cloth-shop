import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentIntent } from "@stripe/stripe-js";
import { FormEvent, useState } from "react";
import { Form_container, Payment_form_container } from "./styles";
import { useAppSelector } from "../../redux/useRedux";
import { cartTotalSelector } from "../../utils/selector";
import { persistor } from "../../store";
import Button from "../button/Button";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);
  const currentUser = useAppSelector((s) => s.user.currentUser);
  const cartTotal = useAppSelector(cartTotalSelector);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const res: { paymentIntent: PaymentIntent } = await fetch(
      "/api/functions/create-payment-intent",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: cartTotal * 100 }), // 10rs x 100 for stripe
      }
    ).then((res) => res.json());

    const { client_secret } = res.paymentIntent;

    // console.log("client secret:", client_secret);

    if (client_secret) {
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: currentUser ? currentUser.displayName : "Guest",
          },
        },
      });

      setIsProcessing(false);

      if (paymentResult.error) {
        console.log(paymentResult);
        alert(paymentResult.error.message);
      }

      if (paymentResult.paymentIntent?.status === "succeeded") {
        persistor.purge();
        alert("paymemt success");
      }
    }
  };

  return (
    <Payment_form_container>
      <Form_container onSubmit={paymentHandler}>
        <h2>Credit card payment:</h2>
        <CardElement />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            marginTop: "30px",
          }}
        >
          <Button
            options={{ disabled: isProcessing || cartTotal < 1 }}
            buttonType="inverted"
          >
            pay now
          </Button>
        </div>
      </Form_container>
    </Payment_form_container>
  );
};

export default PaymentForm;
