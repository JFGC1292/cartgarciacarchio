import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import './CartWidget.css';

export const CartWidget = () => {
    return (
        <div>
            <AiOutlineShoppingCart id="cartWidget" size={25} />
        </div>
    )
}
