import React from 'react'
import { Button } from "reactstrap"
import { AiFillPlusCircle } from "react-icons/ai"

export const AddItem = () => {

    const addItem = () => {
        const itemCount = document.getElementById("itemCount")
        parseInt(itemCount.innerHTML)
        itemCount.innerHTML++
    }

    return (
        <Button id="addItem" onClick={addItem}>
            <AiFillPlusCircle size={20} />
        </Button>
    )
}
