import { React, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { Button } from 'reactstrap'
import './ItemDetail.css'

export const ItemDetail = ({ id, title, pictureUrl, color, price, stock }) => {

    const navigate = useNavigate()

    const [quantity, setQuantity] = useState(0)
    const [added, setAdded] = useState(false)

    const handleReturn = () => {
        navigate(-1)
    }

    const handleReturnToHome = () => {
        navigate('/')
    }

    const handleAdd = () => {
        if (quantity > 0) {
            console.log('Item agregado:', {
                id,
                title,
                price,
                quantity
            })

            setAdded(true)
        }
    }

    return (
        <article key={id} className="card p-4 itemCard" style={{ width: "50vw" }}>
            <h2>{title}</h2>
            <img src={pictureUrl} alt={title} class="itemImg" />
            <p>Color: {color}</p>
            <p>Precio: ${price}</p>

            {
                !added
                    ? <ItemCount
                        maxStock={stock}
                        quantity={quantity}
                        setQuantity={setQuantity}
                        onAdd={handleAdd}
                    />
                    : <Link to="/cart" className="btn btn-success d-block">Finalizar mi compra</Link>
            }

            <div className="returnBtnContainer">
                <Button color="primary" onClick={handleReturn}>Volver</Button>
                <Button className="mx-3" color="secondary" onClick={handleReturnToHome}>Volver al inicio</Button>
            </div>

        </article>
    )
}

// export const ItemDetail = ({ title, color, price, pictureUrl }) => {

//     const navigate = useNavigate()

//     const handleVolver = () => {
//         navigate(-1)
//     }

//     const handleVolverInicio = () => {
//         navigate('/')
//     }

//     return (
//         <div>
//             <h2>{title}</h2>
//             <img src={pictureUrl} alt={title} classtitle="itemImg" />
//             <p>Color: {color}</p>
//             <p>Precio: ${price}</p>

//             <ItemCount />

//             <button classtitle="btn btn-primary" onClick={handleVolver}>Volver</button>
//             <button classtitle="btn btn-outline-primary mx-3" onClick={handleVolverInicio}>Volver al inicio</button>
//         </div>
//     )
// }
