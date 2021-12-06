import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom'
import './CartWidget.css'

export const CartWidget = () => {

    const { totalQuantity, cart } = useContext(CartContext)

    return (
        <div className={cart.length === 0 ? 'hidden widget' : 'widget'}>
            <Link to="/cart">
                <AiOutlineShoppingCart className="cartWidget" />
                <span>{totalQuantity()}</span>
            </Link>
        </div>
    )
}
