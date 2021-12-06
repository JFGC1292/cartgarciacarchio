import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getData } from '../Helpers/getData'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        getData()
            .then(resp => {
                setItem(resp.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className="container my-3">
            {
                loading
                    ? <Loader />
                    : <ItemDetail {...item} />
            }


        </div>
    )
}