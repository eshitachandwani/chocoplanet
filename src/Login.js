import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      // const auth = getAuth()
      // signInWithEmailAndPassword(auth, email, password)
      //   .then((userCredential) => {
      //     // Signed in
      //     const user = userCredential.user
      //     // ...
      //   })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push('/')
        }
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="logof.png" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Chocoplanet's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create new Account
        </button>
      </div>
    </div>
  )
}

export default Login
