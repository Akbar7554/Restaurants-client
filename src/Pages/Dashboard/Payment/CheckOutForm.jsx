import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import useCart from "../../../hooks/useCart"
import useAuth from "../../../hooks/useAuth"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
const CheckOutForm = () => {
  const [error, setError] = useState("")
  const [clientSecret, setClientSecret] = useState("")
  const [transactionId, setTransactionId] = useState("")
  const stripe = useStripe()
  const { user } = useAuth()
  const elements = useElements()
  const AxiosSecure = useAxiosSecure()
  const navigate = useNavigate()
    const [cart, refetch] = useCart()
    console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  useEffect(() => {
    if (totalPrice > 0) {
      AxiosSecure.post("/create-payment-intent", { price: totalPrice }).then(
        (res) => {
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        }
      )
    }
  }, [AxiosSecure, totalPrice])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)

    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    })
    if (error) {
      console.log("payment error", error)
      setError(error)
    } else {
      console.log("payment method", paymentMethod)
      setError("")
    }
    //   confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      })
    if (confirmError) {
      console.log("confirm error", confirmError)
    } else {
      console.log("payment intent", paymentIntent)
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id)
        setTransactionId(paymentIntent.id)

        //   now save the payment into the database
        const payment = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        }
        const res = await AxiosSecure.post("/payments", payment)
        console.log("payment saved", res.data)
        refetch()
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successfully!",
            showConfirmButton: false,
            timer: 1500,
          })
            navigate('/dashboard/paymentHistory')
        }
      }
    }
  }
  return (
    <form className="px-5" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-accent"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600">Your Transaction Id : {transactionId}</p>
      )}
    </form>
  )
}

export default CheckOutForm
