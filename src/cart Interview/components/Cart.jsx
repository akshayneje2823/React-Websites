import React, { useState ,useEffect} from 'react'

function Cart({ state, dispatch }) {
  const [total, setTotal] = useState();

  const { cart } = state;
  console.log(cart)

  const changeQty = (id,qty) => {
    dispatch({
      type : "CHANGE_CART_QTY",
      payload : {
        id,
        qty,
      }
    })
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc,curr)=> acc + Number(curr.price)*curr.qty,0))
  }, [cart])
  

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
              <div style={{ display: 'flex', alignSelf: 'center', gap: 10 }}>
                <button
                  onClick={
                    () => changeQty(prod.id, prod.qty - 1)
                  }
                >
                  -
                </button>
                <span>{prod.qty}</span>
                <button
                  onClick={
                    () => changeQty(prod.id, prod.qty + 1)
                  }
                >
                  +
                </button>
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