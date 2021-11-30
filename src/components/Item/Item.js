import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/Item.css'

export const Item = ({ id, title, color, price, pictureUrl }) => {
    return (
        <article key={id} className="card m-3" style={{ width: "18rem" }}>
            <img src={pictureUrl} alt={title} />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Precio: USD {price}</p>
                <p className="card-text">Color: {color}</p>
                <Link to={`/detail/${id}`} className="btn btn-primary itemBtn">Ver</Link>
            </div>
        </article>
    )
}
