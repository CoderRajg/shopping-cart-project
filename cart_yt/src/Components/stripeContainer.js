import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./payments"

const PUBLIC_KEY = "pk_test_51Nvc4SSBTi6yZ5ucxva2YeRXHgIbaFtZRP5Jux1WxBdxeS7S2haubQz8cIq6Ovt5sHxhvYawAATn1lOPrIyUcJug00G40923iM"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}