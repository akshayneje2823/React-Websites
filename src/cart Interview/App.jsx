import React, { useEffect, useReducer } from 'react';
import Axios from 'axios'
import Cart from './components/Cart'
import Product from './components/Product';
import { cardReducer } from './reducers/cartReducer';


export default function App() {
  const [state, dispatch] = useReducer(cardReducer, {
    products: [],
    cart: []
  });

  // console.log(state)
  const loadProduct = async () => {
    let { data } = await Axios.get("https://dummyjson.com/products");
    // console.log(data.products)

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products
    })
  }

  useEffect(() => {
    loadProduct()
  }, [])

  return (
    <div style={{ display: "flex" }}>
      <Product state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  )
}







































































