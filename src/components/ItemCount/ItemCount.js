import React from 'react'
import { Button } from 'reactstrap'
// import { AiFillMinusCircle } from "react-icons/ai"
// import { AiFillPlusCircle } from "react-icons/ai"
import './ItemCount.css'
import { btnConfig } from './btnConfig'

export const ItemCount = ({ maxStock, setQuantity, quantity, onAdd }) => {



    const handleSubtract = () => {
        quantity > 0 && setQuantity(quantity - 1)
    }

    const handleAdd = () => {
        quantity < maxStock && setQuantity(quantity + 1)
    }

    const config = btnConfig(quantity, maxStock, handleAdd, handleSubtract)

    return (
        <div className="my-3">
            <Button {...config.subtract}>
                -
            </Button>
            <span className="mx-2">{quantity}</span>
            <Button {...config.add}>
                +
            </Button>
            <button
                id="addToCartBtn"
                className="btn btn-success my-2"
                onClick={onAdd}
                disabled={quantity === 0}
            >
                Agregar al carrito
            </button>
        </div>
    )
}

// export const ItemCount = ({ stock, initial, onAdd }) => {

//     const [itemInitial, setItemInitial] = useState(initial)

//     const addItemHandler = () => {
//         if (itemInitial < stock) {
//             setItemInitial(prevState => (prevState + 1))
//         }
//     }

//     const removeItemHandler = () => {
//         if (itemInitial > initial) {
//             setItemInitial(prevState => (prevState - 1))
//         }
//     }

//     return (
//         <>
//             <div>
//                 <Button onClick={removeItemHandler}>
//                     <AiFillMinusCircle size={20} />
//                 </Button>
//                 <p id="itemCount">{itemInitial}</p>
//                 <Button onClick={addItemHandler}>
//                     <AiFillPlusCircle size={20} />
//                 </Button>
//             </div>
//             <Button disabled={itemInitial === 0 ? true : false} onClick={onAdd}>
//                 Agregar al carrito
//             </Button>

//         </>
//     )
// }
