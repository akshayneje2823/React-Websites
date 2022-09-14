import React from 'react'
import Cart from './components/Cart'
import Product from './components/Product'

export default function App() {
  return (
    <div style={{display: "flex"}}>
        <Product/>
        <Cart/>
    </div>
  )
}
