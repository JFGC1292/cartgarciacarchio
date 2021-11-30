import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../CartContext/CartContext'

export const CartItem = ({ title, price, quantity, id }) => {

    const { removeFromCart } = useContext(CartContext)

    return (
        <div>
            <h3>{title}</h3>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <button
                className="btn btn-danger"
                onClick={() => { removeFromCart(id) }}
            >
                <BsFillTrashFill />
            </button>
        </div>
    )
}