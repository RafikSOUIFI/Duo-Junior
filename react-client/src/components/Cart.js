import React, { useState } from 'react';

const Cart = ({ cart, setCart, switchView }) => {
    let Total = 0

    const remove =(event)=>{
        let z = [...cart]
        z=z.filter((e)=> e.name !== event.target.id)
        setCart(z)
      }

      const checkout=()=>{
        setCart([])
        alert("thanks for bying from us")
        switchView ("Home")
        
      }

    return (

        <section id="cart">
            <h2>Shopping Cart</h2>
            <div class="cart-items">

                {cart.map((e, i) => {
                   Total+=e.price
                    return (

                        <div class="cart-item">
                            <img src={e.imgUrl} alt="Product 1" />
                            <div class="cart-item-info">
                                <h3>{e.name}</h3>
                                <p>Price: {e.price} DT</p>
                            </div>
                            <button id={e.name} class="remove-button" onClick={remove}>Remove</button>
                        </div>
                    )
                })
                }

            </div>
            <div class="cart-summary">
                <p>Total:  {Total} DT</p>
                <button class="checkout-button" onClick={checkout}>Checkout</button>
            </div>
        </section>

    )
}

export default Cart