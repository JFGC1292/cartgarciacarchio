import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ id, title, catId, price, pictureUrl }) => {
    return (
        <article key={id} className="card m-3" style={{ width: "18rem" }}>
            <img src={pictureUrl} alt={title} />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Precio: USD {price}</p>
                <p className="card-text">Tipo: {catId}</p>
                <Link to={`/detail/${id}`} className="btn btn-primary">Ver</Link>
            </div>
        </article>
    )
}
