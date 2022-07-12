import React, { useEffect } from 'react'
import './App.css'
import Home from './Home'
// import Eshit from './Eshit';
// import Header from './Header';
import Myheader from './Myheader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import Orders from './Orders'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51LGmTwSFO8t4gpYqSOxWA5knY6gvOkRtOumSmEXs96yuWYcM50cCoINBqRNpKSXS6prqK0Yhn9rSsNNXw0cPc2W800B1NsBODn',
)

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('THE user is >>>', authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Myheader />
        <Switch>
          {/* <Route path="/+
          checkout" element={Checkout}></Route> */}
          {/* <Route path="/checkout" exact render={() => <Checkout />} /> */}
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* <Route path="/" exact render={() => <Home />} /> */}
          {/* <Route path="/" component={Home}></Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
