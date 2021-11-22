import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { getData } from '../Helpers/getData'
import { useParams } from 'react-router'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const { catId } = useParams()

    useEffect(() => {

        setLoading(true)
        getData()
            .then((resp) => {
                if (!catId) {
                    setProducts(resp)
                } else {
                    setProducts(resp.filter(prod => prod.catId === catId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

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
