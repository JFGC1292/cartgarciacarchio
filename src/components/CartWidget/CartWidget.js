import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from '../CartContext/CartContext';

export const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <div>
            <AiOutlineShoppingCart id="cartWidget" size={25} />
            <span>{totalQuantity()}</span>
        </div>
    )
}
