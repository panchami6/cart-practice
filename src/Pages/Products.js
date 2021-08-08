import React, {useEffect} from 'react';
import axios from "axios";
import {useCart} from "../Context/cart-context";
import "./products.css";
import { NavBar } from '../Components/NavBar';
import {Link} from "react-router-dom";

export const Products = () => {
    const  { state, dispatch } = useCart();
    const {data, cart} = state;

    function productExists(cart, id){
        return cart.find(product => product.id === id)
    } 

    useEffect(() => {
        (async function (){
            const response = await axios.get('data.json');
            dispatch({type: "GET_DATA", payload:response.data}
            )
        })()
    }, [dispatch])

    function onAddtocart(product){
        console.log(product)
        dispatch({type:"ADD_TO_CART", payload:product})
    }


    return (
        <div>
        <NavBar />
        <div className = "product-listing">
            {
                data && data.map(product => {
                    return(
                        <div className = "product-card">
                            <img src={product.image} alt = "product" />
                            <div className = "product-details">
                                <div className = "product-brand">{product.brand}</div>
                                <div>{product.name}</div>
                                <div className = "product-price">₹ {product.price}</div>
                                <div>size: {product.size}</div>
                                {productExists(cart, product.id) ? <Link to ="/cart"><button className = "btn">Go to Cart</button></Link>: <button onClick = { () => onAddtocart(product)} className = "btn">Add to Cart</button>}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

