import React from 'react'
import { Navigate, useRoutes } from 'react-router'
import { CartView } from '../components/CartView/CartView'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { Checkout } from '../components/Checkout/Checkout'

export const AppRouter = () => {

    const routes = useRoutes([
        { path: "/", element: <ItemListContainer /> },
        { path: "/productos/:param", element: <ItemListContainer /> },
        { path: "/detail/:itemId", element: <ItemDetailContainer /> },
        { path: "/cart", element: <CartView /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "*", element: <Navigate to="/" /> }
    ])

    return routes
}