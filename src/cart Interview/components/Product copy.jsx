import React from 'react'

function Product({ state, dispatch }) {
    const { products, cart } = state;
    // console.log(state)
    console.log(products)
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "80%",
        }}
        >
            {
                products.map((prod) => {
                    <div
                        key={prod.id}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 10,
                            border: '1px solid grey',
                            width: '30%',
                            marginTop: 10,
                            gap: 10,
                        }}
                    ><h1>All Products</h1>
                        <img
                            src={prod.thumbnail}
                            alt={prod.title}
                            style={{
                                height: 200, objectFit: 'cover'
                            }}
                        />

                    </div>
                })
            }
        </div>
    )
}

export default Product