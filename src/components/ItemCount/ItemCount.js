import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { AiFillMinusCircle } from "react-icons/ai"
import { AiFillPlusCircle } from "react-icons/ai"
import './ItemCount.css'

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [itemInitial, setItemInitial] = useState(initial)

    const addItemHandler = () => {
        if (itemInitial < stock) {
            setItemInitial(prevState => (prevState + 1))
        }
    }

    const removeItemHandler = () => {
        if (itemInitial > initial) {
            setItemInitial(prevState => (prevState - 1))
        }
    }

    return (
        <>
            <div>
                <Button onClick={removeItemHandler}>
                    <AiFillMinusCircle size={20} />
                </Button>
                <p id="itemCount">{itemInitial}</p>
                <Button onClick={addItemHandler}>
                    <AiFillPlusCircle size={20} />
                </Button>
            </div>
            <Button disabled={itemInitial === 0 ? true : false} onClick={onAdd}>
                Agregar al carrito
            </Button>

        </>
    )
}
