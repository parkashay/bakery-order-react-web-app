import React, { useEffect, useState } from 'react'
import './card.css'

function Card({ name, description, price }) {
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(cartCount * price)
    }, [cartCount])

    const imgUrl = "https://source.unsplash.com/random"
    return (
        <div className="card">
            {name === "loading..." ? "" :
                <section className="card-img">
                    <img src={imgUrl} alt="" className='img' />
                </section>
            }
            <section className="info">
                <div className="card-title">{name}</div>
                <div className="card-description">{description}</div>
                <div className="price">Price(Rs.) : {price}</div>
            </section>

            <section className='cart-add-remove'>
                {name === "loading..." ? "" :
                    <button onClick={() => {
                        setCartCount(cartCount + 1)
                    }}
                        style={{
                            "backgroundColor": "var(--colorSecondaryAccent)",
                            "color": "white"
                        }}>
                        Add 1 to cart
                    </button>
                }
                {cartCount > 0 ? <button onClick={() => { setCartCount(cartCount - 1) }}
                    style={
                        {
                            "backgroundColor": "transparent",
                            "border": "1px solid red",
                            "color": "red"
                        }
                    }>
                    Remove 1 from Cart
                </button>
                    : ""}
                <div className="in-cart">
                    <span>In Cart : {cartCount}</span>
                    <span>Total Price(Rs.) : {totalPrice}</span>
                </div>

                {cartCount > 0 ?
                    <button
                        style={{
                            "backgroundColor": "green",
                            "color": "white",
                            "border": "1px solid green"
                        }}>Place Order</button>
                    : ""}
            </section>
        </div>

    )
}

export default Card