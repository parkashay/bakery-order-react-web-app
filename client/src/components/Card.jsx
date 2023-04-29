import React, { useEffect, useRef, useState } from 'react'
import './card.css'

function Card({ name, description, price }) {

    const routeCreateOrder = process.env.REACT_APP_CREATE_ORDER;

    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [modal, setModal] = useState(false);

    const nameRef = useRef(null)
    const addressRef = useRef(null)
    const phoneRef = useRef(null)

    useEffect(() => {
        if (modal) {
            document.body.classList.add('no-scroll')
        }
        else {
            document.body.classList.remove('no-scroll')
        }
    }, [modal])

    const displayModal = () => {
        localStorage.rimhasLoggedIn?
        setModal(!modal):
        alert("Please login or signup first")
    }

    useEffect(() => {
        setTotalPrice(cartCount * price)
         
    }, [cartCount,price])


    const handleOrder = async (e) => {
        e.preventDefault();
        let customerName = nameRef.current.value;
        let customerAddress = addressRef.current.value;
        let customerPhone = phoneRef.current.value;

        if(customerName.length>0 && customerAddress.length>0 && customerPhone>0){
            const response = await fetch(routeCreateOrder, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    customerName,
                    customerAddress,
                    customerPhone,
                    name,
                    cartCount,
                    totalPrice
                })
            })
    
            const data = await response.json()
            if(data.success){
                alert("Order Placed. Please wait for response.")
                window.location.href = '/';
            }
            else{
                alert("some error occured.")
            }
        }
        else{
            alert("Details Cannot be empty !")
        }
    }

    const imgUrl = "https://source.unsplash.com/random"
    return (
        <div className="card">

            {/* Modal */}
            {modal ?
                <div className='modal-container'>
                    <div onClick={() => setModal(!modal)} className="close">×</div>
                    <div className="modal">

                        {/* Order Details */}
                        <div className="order-details">
                            <span>Your Order:</span>
                            <span>
                                Name : {name}
                            </span>
                            <span>
                                Quantity : {cartCount}
                            </span>
                            <span>
                                Total Price : Rs.{totalPrice}
                            </span>
                            <span className="payment-info">
                                The payment can be done during delivery.
                            </span>
                        </div>

                        <div className='modal-title'>
                            Enter your details to Confirm order:
                        </div>

                        {/* Order Form */}
                        <form className='order-form' onSubmit={handleOrder}>
                            <label className="fields">
                                <span>Full Name:</span>
                                <input ref={nameRef} type="text" className="txt-input"  required/>
                            </label>
                            <label className="fields">
                                <span>Address:</span>
                                <input ref={addressRef} type="text" className="txt-input" required/>
                            </label>
                            <label className="fields">
                                <span>Phone Number:</span>
                                <input ref={phoneRef} type="number" className="txt-input" required/>
                            </label>
                            <button type='submit' className='submit-button'>Submit</button>
                        </form>
                    </div>
                </div>
                : ""
            }


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
                    <button onClick={displayModal}
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