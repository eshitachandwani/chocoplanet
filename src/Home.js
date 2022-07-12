import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="Home">
      <div className="Home_Container">
        <div className="Home_Row">
          <Product
            id="1"
            title="KitKat Bouquet"
            image="1KitKatBouquet600.jpeg"
            rating={5}
            price={600}
          />
          <Product
            id="2"
            title="Golden Bouquet"
            price={650}
            rating={4}
            image="2GoldenBouquet650.jpeg"
          />
          <Product
            id="3"
            title="Red Golden Heart Bouquet"
            price={450}
            rating={4}
            image="3RedGoldenHeart450.jpeg"
          />
        </div>
        <div className="Home_Row">
          <Product
            id="4"
            title="Doll Bouquet"
            image="4dollBouquet800.jpeg"
            rating={3}
            price={800}
          />
          <Product
            id="5"
            title="Pink Oreo Bouquet"
            image="5pinkOreoBouquet600.jpeg"
            rating={4}
            price={600}
          />
          <Product
            id="6"
            title="Love Bouquet"
            image="6LoveBouquet400.jpeg"
            rating={4}
            price={400}
          />
        </div>

        <div className="Home_Row">
          <Product
            id="7"
            title="Granola"
            image="7Granola200.jpeg"
            rating={5}
            price={200}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
