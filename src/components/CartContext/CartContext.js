import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const totalBuy = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            emptyCart,
            totalQuantity,
            totalBuy,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
