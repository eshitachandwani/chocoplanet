import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="Home">
      <div className="Home_Container">
        <div className="Home_Row">
          <Product title="hjfdgsjkdf" image="pr1.jpg" rating={4} price={29.9} />
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="Home_Row">
          <Product title="hjfdgsjkdf" image="pr1.jpg" rating={4} price={29.9} />
          <Product title="hjfdgsjkdf" image="pr1.jpg" rating={4} price={29.9} />
          <Product title="hjfdgsjkdf" image="pr1.jpg" rating={4} price={29.9} />
        </div>

        <div className="Home_Row">
          <Product title="hjfdgsjkdf" image="pr1.jpg" rating={4} price={29.9} />
        </div>
      </div>
    </div>
  )
}

export default Home
