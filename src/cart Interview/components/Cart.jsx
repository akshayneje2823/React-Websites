import React, { useState } from 'react'

function Cart({ state, dispatch }) {

  const { cart } = state;
  console.log(cart)
  const [total, setTotal] = useState()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        padding: 10,
        width: "20%"
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <b style={{ alignSelf: "center" }}>Subtotal : ${total}</b>
      {
        cart.length > 0 ? (
          cart.map((prod) => (
            <div
              key={prod.title}
              style={{
                display: 'flex',
                padding: 10,
                border: 5,
                margin: 5,
                justifyContent: 'space-between'
              }}
            >
              <div style={{
                display: 'flex',
                gap: 10
              }}>
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  style={{
                    height: 70, objectFit: 'cover'
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly'
                  }}
                >
                  <span>{prod.title}</span>
                  <b>$ {prod.price}</b>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span style={{ padding: 20, alignSelf: "center" }}></span>
        )
      }
    </div>
  )
}

export default Cart