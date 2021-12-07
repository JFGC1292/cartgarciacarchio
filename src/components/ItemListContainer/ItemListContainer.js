import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
// import { getData } from '../Helpers/getData'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const { param } = useParams()

    useEffect(() => {

        setLoading(true)

        const productsRef = collection(db, 'products')

        const q = param ? query(productsRef, where('catId', '==', param)) : productsRef

        getDocs(q)
            .then((collection) => {
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(items)
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
