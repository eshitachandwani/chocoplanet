import React from 'react'
import './App.css'
import Home from './Home'
// import Eshit from './Eshit';
// import Header from './Header';
import Myheader from './Myheader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Myheader />
        <Switch>
          {/* <Route path="/+
          checkout" element={Checkout}></Route> */}
          {/* <Route path="/checkout" exact render={() => <Checkout />} /> */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* <Route path="/" exact render={() => <Home />} /> */}
          {/* <Route path="/" component={Home}></Route> */}
          <Route path="/login">
            <Login />
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
