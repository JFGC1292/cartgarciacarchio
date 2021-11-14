import React from 'react'
import { AddItem } from '../AddItem/AddItem'
import { RemoveItem } from '../RemoveItem/RemoveItem'
import { ItemCount } from '../ItemCount/ItemCount'

export const AddRemoveItem = () => {

    return (
        <>
            <RemoveItem />
            <ItemCount />
            <AddItem />
        </>
    )
}
