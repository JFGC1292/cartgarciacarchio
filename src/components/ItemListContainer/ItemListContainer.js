import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { getData } from '../Helpers/getData'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {

        setLoading(true)
        getData()
            .then((resp) => {
                setProducts(resp)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={products} />
            }
        </>
    )
}
