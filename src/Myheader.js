import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Myheader() {
  const [{ basket, user }, dispatch] = useStateValue()

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="Header_logo" src="logof.png" alt="logo" />
      </Link>

      <div className="Header_search">
        <input className="Header_searchInput" type="text" />
        <SearchIcon className="Header_searchIcon" />
      </div>

      <div className="Header_nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="Header_Option">
            <span className="Header_OptionLineOne">
              Hello {!user ? 'Guest' : user.email}
            </span>
            <span className="Header_OptionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="Header_Option">
            <span className="Header_OptionLineOne">Returns</span>
            <span className="Header_OptionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* <div className='Header_Option'>
        <span className='Header_OptionLineOne'>Your</span>
          <span className='Header_OptionLineTwo'>Prime</span>
        </div> */}
        <NavLink to={(location) => ({ ...location, pathname: '/checkout' })}>
          <div className="Header_OptionBasket">
            <ShoppingCartIcon />
            <span className="Header_OptionLineTwo Header_BasketCount">
              {basket.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Myheader
