import React from 'react'
import { Button } from "reactstrap"
import { AiFillMinusCircle } from "react-icons/ai";

export const RemoveItem = () => {

    const itemCount = document.getElementById("itemCount")

    const removeItem = () => {
        const itemCount = document.getElementById("itemCount")
        parseInt(itemCount.innerHTML)
        itemCount.innerHTML--
    }

    return (
        <Button id="removeItem" onClick={removeItem}>
            <AiFillMinusCircle size={20} />
        </Button>
    )
}
