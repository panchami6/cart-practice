import React from 'react'
import { NavBar } from '../Components/NavBar';
import "./cart.css"
import {useCart} from "../Context/cart-context";

export const Cart = () => {
    const {state, dispatch} = useCart();
    const {cart, saved} = state;

    function getAmount(acc, product){
        return acc + product.price * product.quantity
    }

    function removeFromCart(product){
        dispatch({type:"REMOVE_FROM_CART", payload: product})
    }

    function saveForSater(product){
        dispatch({type:"SAVE_FOR_LATER", payload: product})
    }

    function moveToCart(product){
        dispatch({type:"MOVE_TO_CART", payload:product})
    }

    function removeSaved(product){
        dispatch({type:"REMOVE_FROM_SAVED", payload:product}) 
    }

    function increaseQty(product){
        dispatch({type: "INCREASE_QUANTITY", payload:product})
    }

    function decreaseQty(product){
        dispatch({type: "DECREASE_QUANTITY", payload:product})
    }

    return (
        <div>
            <NavBar />
            <h2 style = {{marginTop:"5rem"}}>My Cart</h2> 
            <div className = "cart">
              <div className = "cart-listing">
                  {cart.length > 0 ? cart.map(product => {
                      console.log(cart.length)
                      return(
                        <div className = "product-card">
                            <img src={product.image} alt = "product" />
                            <div className = "product-details">
                                <div className = "product-brand">{product.brand}</div>
                                <div>{product.name}</div>
                                <div className = "product-price">₹ {product.price}</div>
                                <div>size: {product.size}</div>
                                <div className = "product-quantity">
                                    <button className = "quantity-btn" disabled = {product.quantity < 2} onClick = {() => decreaseQty(product)}>-</button>
                                    <span>{product.quantity}</span>
                                    <button className = "quantity-btn" onClick = {() => increaseQty(product)}>+</button>
                                </div>
                                <button className = "btn" onClick = {() => removeFromCart(product)}>Remove</button>
                                <button className = "btn" onClick = {() => saveForSater(product)}>Save for later</button>
                            </div>
                        </div>
                      )
                  }): <h3>No Items in cart</h3>}
              </div>
              <div className = "price-details">
                <h3>Price Details</h3>
                <div>Price({cart.length} Items): ₹{cart.reduce(getAmount, 0)}</div>
                <div>Delivery: Free</div>
                <div>Total Amount: ₹{cart.reduce(getAmount, 0)} </div>
              </div>
            </div>
            <div>
                <h2>Save for Later</h2>
                <div className = "product-listing">
                  {saved.length > 0 ? saved.map(product => {
                      return(
                        <div className = "product-card">
                            <img src={product.image} alt = "product" />
                            <div className = "product-details">
                                <div className = "product-brand">{product.brand}</div>
                                <div>{product.name}</div>
                                <div className = "product-price">₹ {product.price}</div>
                                <div>size: {product.size}</div>
                                <button className = "btn" onClick = {() => removeSaved(product)}>Remove</button>
                                <button className = "btn" onClick = {() => moveToCart(product)}>Move to Cart</button>
                            </div>
                        </div>
                      )
                  }): <h3>No Saved Items</h3>}
              </div>
            </div>
        </div>
        
    )
}

