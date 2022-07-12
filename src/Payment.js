import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link, useHistory } from 'react-router-dom'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'
import { db } from './firebase'
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()
  const history = useHistory()

  const stripe = useStripe()
  const elements = useElements()
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setclientSecret] = useState(true)

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      }) //for request//
      setclientSecret(response.data.clientSecret)
    }
    //generate special stripe secret which will allow us to charge customer
    getClientSecret()
  }, [basket])
  //whenever basketchanges we need new secret
  console.log('the secret is >>>>> ', clientSecret)
  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection('users')
          .doc(user.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          })
        setSucceeded(true)
        setError(null)
        setProcessing(false)

        dispatch({
          type: 'EMPTY_BASKET',
        })

        history.replace('/orders')
      })
  }
  const handleChange = (event) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>Checkout ({basket.length} items)</h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{!user ? 'Guest' : user.email}</p>
            <p>navjeenvan colony</p>
            <p>Amravati</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items</h3>
          </div>

          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Rs '}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
