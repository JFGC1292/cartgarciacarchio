import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { getData } from '../Helpers/getData'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const { param } = useParams()
    console.log(useParams())

    useEffect(() => {

        setLoading(true)
        getData()
            .then((resp) => {

                if (!param) {
                    setProducts(resp)
                } else {
                    setProducts(resp.filter(prod => prod.catId === param))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [param])

    return (
        <>
            {
                loading
                    ? <Loader />
                    : <ItemList items={products} />
            }
        </>
    )
}
