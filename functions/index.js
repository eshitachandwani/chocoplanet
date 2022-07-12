const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51LGmTwSFO8t4gpYqrRVVlDO2viBOeo9TLJBvJ0cAq9WuVjcCg6z59KHZgkPOF2ixJuhKkAHc0GCzp1RJr22UD4aE00nMaAg7CY',
)

//API

//App config
const app = express()

//middleware
app.use(cors({ origin: true }))
app.use(express.json())

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
  const total = request.query.total
  console.log('Payment request recieved >>> ', total)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'inr',
  })
  //201-ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

//listen command
exports.api = functions.https.onRequest(app)
