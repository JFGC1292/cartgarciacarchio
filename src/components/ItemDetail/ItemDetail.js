import React from 'react'
import { useNavigate } from 'react-router'
import './ItemDetail.css'

export const ItemDetail = ({ id, title, catId, price, pictureUrl }) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    return (
        <div>
            <h2>{title}</h2>
            <img src={pictureUrl} alt={title} className="itemImg" />
            <p>{catId}</p>
            <p>Precio: ${price}</p>

            {/* contador con opcion de agregar */}

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            <button className="btn btn-outline-primary" onClick={handleVolverInicio}>Volver al inicio</button>
        </div>
    )
}
